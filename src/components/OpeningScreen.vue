<script setup>
import { computed } from "vue";
import { config } from "../config/invitation";

const props = defineProps({
  guest: { type: String, default: "" },
  locked: { type: Boolean, default: false },
  unlockCd: { type: Array, default: () => [] },
  unlockNote: { type: String, default: "" }
});
defineEmits(["open"]);

const letters = name =>
  name.split("").map((ch, i) => ({ c: ch === " " ? "\u00A0" : ch, d: (0.5 + i * 0.09).toFixed(2) }));

const groomLetters = computed(() => letters(config.groom.short));
const brideLetters = computed(() => letters(config.bride.short));
const t = config.text.opening;
const guestLabel = computed(() => props.guest || t.guestFallback);
</script>

<template>
  <div class="opening">
    <div class="orn">
      <span class="rule-l"></span>
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#BFA15F" stroke-width="0.9">
        <path d="M12 2 L14.4 9.6 L22 12 L14.4 14.4 L12 22 L9.6 14.4 L2 12 L9.6 9.6 Z" />
      </svg>
      <span class="rule-r"></span>
    </div>

    <p class="eyebrow">{{ t.eyebrow }}</p>

    <h1 class="name">
      <span
        v-for="(l, i) in groomLetters" :key="'g' + i"
        class="letter" :style="{ animationDelay: l.d + 's' }"
      >{{ l.c }}</span>
    </h1>

    <div class="amp">&amp;</div>

    <h1 class="name">
      <span
        v-for="(l, i) in brideLetters" :key="'b' + i"
        class="letter" :style="{ animationDelay: l.d + 's' }"
      >{{ l.c }}</span>
    </h1>

    <div class="divider"></div>

    <div class="guest">
      <p style="margin:0 0 6px; font-size:11px; letter-spacing:.3em; color:rgba(242,241,234,.5);">{{ t.guestTo }}</p>
      <p style="margin:0 0 18px; font-size:11px; letter-spacing:.16em; color:rgba(242,241,234,.42);">{{ t.guestHonorific }}</p>
      <p class="guest-name">{{ guestLabel }}</p>
    </div>

    <div v-if="locked" class="lock">
      <p style="margin:0 0 16px; font-size:9px; letter-spacing:.4em; text-indent:.4em; color:#BFA15F; text-transform:uppercase;">{{ t.lockTitle }}</p>
      <div class="lock-grid">
        <div v-for="u in unlockCd" :key="u.label" class="lock-cell">
          <div style="font-family:Cinzel,serif; font-size:clamp(17px,3.4vw,24px); color:#F2F1EA; line-height:1;">{{ u.value }}</div>
          <div style="margin-top:7px; font-size:8px; letter-spacing:.28em; color:#BFA15F;">{{ u.label }}</div>
        </div>
      </div>
      <p style="margin:18px 0 0; font-family:'Cormorant Garamond',serif; font-style:italic; font-size:15px; color:rgba(242,241,234,.5);">{{ unlockNote }}</p>
    </div>

    <div class="cta-wrap">
      <button
        type="button" class="cta hv-cta"
        :disabled="locked"
        :style="{ opacity: locked ? .45 : 1, cursor: locked ? 'not-allowed' : 'pointer' }"
        @click="$emit('open')"
      >
        <svg v-if="locked" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#BFA15F" stroke-width="1.3" stroke-linecap="round">
          <rect x="4.5" y="10.5" width="15" height="10" rx="2" /><path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
        </svg>
        <svg v-else width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#BFA15F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16v13H4z" /><path d="M4 7l8 6 8-6" />
        </svg>
        <span>{{ locked ? t.lockedButton : t.openButton }}</span>
        <span class="sweep"></span>
      </button>
    </div>

    <p v-if="config.music" class="note">{{ t.musicNote }}</p>
  </div>
</template>

<style scoped>
.opening {
  position:relative; z-index:3;
  margin:auto; width:100%; max-width:640px;
  padding:clamp(24px,5vh,56px) 26px;
  text-align:center;
  animation:wf-push 18s cubic-bezier(.12,.7,.18,1) both;
}
.orn {
  display:flex; align-items:center; justify-content:center; gap:14px;
  margin-bottom:clamp(18px,3.5vh,34px);
  animation:wf-orn 2.6s cubic-bezier(.16,.86,.24,1) .1s both;
}
.rule-l, .rule-r { width:54px; height:1px; }
.rule-l { background:linear-gradient(90deg, transparent, rgba(191,161,95,.8)); }
.rule-r { background:linear-gradient(90deg, rgba(191,161,95,.8), transparent); }
.eyebrow {
  margin:0 0 clamp(16px,3vh,30px);
  font-size:10px; letter-spacing:.66em; text-indent:.66em;
  color:#BFA15F; text-transform:uppercase;
  animation:wf-track 2.8s cubic-bezier(.16,.86,.24,1) .3s both;
}
.name {
  margin:0;
  font-family:Cinzel, serif; font-weight:500;
  font-size:clamp(50px,15vw,104px); line-height:.98;
  letter-spacing:.16em; text-indent:.16em;
  color:#F2F1EA;
  text-shadow:0 0 70px rgba(25,169,116,.35), 0 0 24px rgba(0,0,0,.9);
  perspective:900px; white-space:nowrap;
}
.letter {
  display:inline-block; transform-origin:50% 100%;
  animation:wf-letter 2.6s cubic-bezier(.16,.86,.24,1) both;
}
.amp {
  margin:14px 0;
  font-family:'Cormorant Garamond',serif; font-style:italic;
  font-size:clamp(28px,7vw,46px); color:#BFA15F;
  animation:wf-in 2.4s ease 1.35s both;
}
.divider {
  width:100%; height:1px;
  margin:clamp(22px,4.5vh,44px) 0 clamp(20px,4vh,40px);
  transform-origin:center;
  background:linear-gradient(90deg, transparent, rgba(191,161,95,.55), transparent);
  animation:wf-line 2.8s cubic-bezier(.16,.86,.24,1) 2.6s both;
}
.guest { animation:wf-up 2.2s cubic-bezier(.16,.86,.24,1) 2.95s both; }
.guest-name {
  margin:0;
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(24px,5.5vw,34px); color:#D8C48C;
  animation:wf-settle 3s cubic-bezier(.16,.86,.24,1) 3.35s both;
}
.lock { margin-top:clamp(26px,5vh,52px); animation:wf-up 2.2s cubic-bezier(.16,.86,.24,1) 3.7s both; }
.lock-grid { display:grid; grid-template-columns:repeat(4, minmax(54px,84px)); gap:8px; justify-content:center; }
.lock-cell {
  padding:12px 4px 10px;
  border:1px solid rgba(191,161,95,.26); border-radius:3px;
  background:linear-gradient(180deg, rgba(11,61,50,.34), rgba(5,8,7,.5));
}
.cta-wrap { margin-top:clamp(26px,5vh,52px); animation:wf-up 2.2s cubic-bezier(.16,.86,.24,1) 3.9s both; }
.cta {
  position:relative; overflow:hidden;
  display:inline-flex; align-items:center; gap:14px;
  padding:18px 40px;
  border:1px solid rgba(191,161,95,.65); border-radius:2px;
  background:linear-gradient(180deg, rgba(11,61,50,.35), rgba(5,8,7,.5));
  backdrop-filter:blur(6px);
  color:#F2F1EA;
  font-size:11px; letter-spacing:.42em; text-indent:.42em; text-transform:uppercase;
  animation:wf-ctaglow 5.5s ease-in-out 5.5s infinite;
}
.sweep {
  position:absolute; top:0; left:0; width:34%; height:100%;
  background:linear-gradient(90deg, transparent, rgba(216,196,140,.28), transparent);
  animation:wf-sweep 6.5s cubic-bezier(.4,0,.2,1) 5s infinite;
  pointer-events:none;
}
.note {
  margin:30px 0 0; font-size:9px; letter-spacing:.3em;
  color:rgba(242,241,234,.28);
  animation:wf-in 2.4s ease 4.6s both;
}
</style>
