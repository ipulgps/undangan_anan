<script setup>
import { ref } from "vue";
import { config } from "../config/invitation";
import { useSfx } from "../composables/useSfx";

const emit = defineEmits(["done"]);
const { play, buzz } = useSfx();

/** sealed → cracked → flap → card → fade → done */
const phase = ref("sealed");

const at = (...names) => names.includes(phase.value);

function breakSeal() {
  if (phase.value !== "sealed") return;
  phase.value = "cracked";
  play(config.sfx.seal, 0.62);
  buzz([24, 42, 16]);

  setTimeout(() => (phase.value = "flap"), 820);
  setTimeout(() => {
    phase.value = "card";
    play(config.sfx.paper, 0.42);
    buzz(12);
  }, 1650);
  setTimeout(() => (phase.value = "fade"), 3450);
  setTimeout(() => emit("done"), 4350);
}
</script>

<template>
  <div
    class="stage"
    :style="{ opacity: at('fade') ? 0 : 1, transform: 'scale(' + (at('fade') ? 1.08 : 1) + ')' }"
  >
    <div class="frame">
      <div class="envelope">
        <!-- badan amplop -->
        <div class="body"></div>

        <!-- kartu di dalam, dipotong agar tak terlihat sebelum naik -->
        <div class="clip" :style="{ top: at('card','fade') ? '-108%' : '64%' }">
          <div class="card" :style="{ transform: 'translateY(' + (at('card','fade') ? '-88%' : '0%') + ')' }">
            <div class="card-face">
              <p style="margin:0; font-size:8px; letter-spacing:.5em; text-indent:.5em; color:#8a7233; text-transform:uppercase;">{{ config.text.seal.cardEyebrow }}</p>
              <p style="margin:0; font-family:Cinzel,serif; font-size:clamp(19px,5vw,26px); letter-spacing:.14em; color:#0b3d32; line-height:1.3;">
                {{ config.groom.short }}
                <span style="font-family:'Cormorant Garamond',serif; font-style:italic; color:#BFA15F;">&amp;</span>
                {{ config.bride.short }}
              </p>
              <span style="width:64px; height:1px; background:linear-gradient(90deg, transparent, #BFA15F, transparent);"></span>
              <p style="margin:0; font-family:'Cormorant Garamond',serif; font-size:13px; letter-spacing:.2em; color:#5b6b60;">{{ config.dateShort }}</p>
            </div>
          </div>
        </div>

        <!-- kantong depan -->
        <div class="pocket">
          <div class="pocket-a"></div>
          <div class="pocket-b"></div>
        </div>

        <!-- flap -->
        <div
          class="flap"
          :style="{ zIndex: at('sealed','cracked') ? 5 : 1, transform: 'rotateX(' + (at('sealed','cracked') ? '0deg' : '-176deg') + ')' }"
        >
          <div class="flap-a"></div>
          <div class="flap-b"></div>
        </div>

        <!-- segel lilin -->
        <button
          type="button"
          :title="config.text.seal.buttonTitle"
          @click="breakSeal"
          class="seal"
          :style="{ cursor: at('sealed') ? 'pointer' : 'default', opacity: at('sealed','cracked') ? 1 : 0 }"
        >
          <span
            class="half left"
            :style="{ transform: at('sealed') ? 'none' : 'translate(-38px, 26px) rotate(-42deg)', opacity: at('sealed') ? 1 : 0 }"
          ><span class="wax">{{ config.monogram }}</span></span>
          <span
            class="half right"
            :style="{ transform: at('sealed') ? 'none' : 'translate(38px, 30px) rotate(46deg)', opacity: at('sealed') ? 1 : 0 }"
          ><span class="wax">{{ config.monogram }}</span></span>
          <span class="ring" :style="{ opacity: at('sealed') ? 1 : 0 }"></span>
        </button>
      </div>
    </div>

    <p class="hint" :style="{ opacity: at('fade') ? 0 : 1 }">
      {{ at('sealed') ? config.text.seal.hintSealed : config.text.seal.hintOpening }}
    </p>
  </div>
</template>

<style scoped>
.stage {
  position:relative; z-index:4;
  margin:auto; width:100%; max-width:640px;
  padding:clamp(24px,5vh,56px) 26px;
  text-align:center;
  transition:opacity 1.1s ease, transform 1.4s cubic-bezier(.16,.84,.24,1);
}
.frame {
  position:relative;
  width:min(380px,86vw);
  height:calc(min(380px,86vw) * 1.12);
  margin:0 auto;
  animation:wf-in 2.2s ease .2s both;
}
.envelope {
  position:absolute; left:0; bottom:0;
  width:100%; height:calc(min(380px,86vw) * .68);
  perspective:1500px;
}
.body {
  position:absolute; inset:0;
  border:1px solid rgba(191,161,95,.42); border-radius:4px;
  background:linear-gradient(165deg, #0b3d32, #050807 70%);
  box-shadow:0 34px 80px rgba(0,0,0,.7), 0 0 70px rgba(15,107,80,.22);
}
.clip {
  position:absolute; left:0; right:0; bottom:0; z-index:2;
  overflow:hidden;
  transition:top 1.5s cubic-bezier(.16,.84,.24,1);
}
.card {
  position:absolute; left:6%;
  bottom:calc(min(380px,86vw) * .03);
  width:88%; height:calc(min(380px,86vw) * .44);
  transition:transform 1.5s cubic-bezier(.16,.84,.24,1);
}
.card-face {
  position:absolute; inset:0;
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px;
  padding:22px 18px;
  border:1px solid rgba(191,161,95,.45); border-radius:3px;
  background:linear-gradient(170deg, #F2F1EA 0%, #E7E3D3 100%);
  box-shadow:0 22px 50px rgba(0,0,0,.55);
}
.pocket { position:absolute; inset:0; z-index:3; pointer-events:none; border-radius:4px; overflow:hidden; }
.pocket-a, .pocket-b {
  position:absolute; inset:0;
  clip-path:polygon(0 100%, 0 0, 50% 62%, 100% 0, 100% 100%);
}
.pocket-a { background:linear-gradient(200deg, #0f6b50, #062820 65%); box-shadow:inset 0 0 40px rgba(0,0,0,.5); }
.pocket-b { background:linear-gradient(180deg, rgba(191,161,95,.14), transparent 60%); }
.flap {
  position:absolute; top:0; left:0; width:100%; height:62%;
  transform-origin:50% 0%;
  transition:transform 1.35s cubic-bezier(.5,0,.2,1);
  backface-visibility:hidden;
}
.flap-a, .flap-b { position:absolute; inset:0; clip-path:polygon(0 0, 100% 0, 50% 100%); }
.flap-a { background:linear-gradient(175deg, #0f6b50, #0b3d32 78%); box-shadow:0 12px 30px rgba(0,0,0,.4); }
.flap-b { background:linear-gradient(160deg, rgba(216,196,140,.2), transparent 55%); }
.seal {
  position:absolute; left:50%; top:56%; z-index:6;
  width:74px; height:74px; margin:-37px 0 0 -37px;
  padding:0; border:none; background:transparent;
  transition:opacity .8s ease;
}
.half {
  position:absolute; inset:0; display:block; overflow:hidden;
  transition:transform 1.1s cubic-bezier(.3,.9,.2,1), opacity 1.1s ease;
}
.left { clip-path:inset(0 50% 0 0); }
.right { clip-path:inset(0 0 0 50%); }
.wax {
  position:absolute; inset:0; display:grid; place-items:center; border-radius:50%;
  background:radial-gradient(circle at 34% 30%, #E4CE93, #BFA15F 55%, #8a7233 100%);
  box-shadow:0 8px 22px rgba(0,0,0,.55), inset 0 0 14px rgba(255,255,255,.22);
  font-family:Cinzel,serif; font-size:17px; letter-spacing:.06em; color:#062820;
}
.ring {
  position:absolute; inset:-8px; border-radius:50%;
  border:1px solid rgba(216,196,140,.45);
  animation:wf-breathe 3s ease-in-out infinite;
}
.hint {
  margin:clamp(16px,2.6vh,28px) 0 0;
  font-size:10px; letter-spacing:.44em; text-indent:.44em;
  color:rgba(216,196,140,.7); text-transform:uppercase;
  transition:opacity .7s ease;
  animation:wf-in 2.4s ease 1.4s both;
}
</style>
