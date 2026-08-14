<script setup>
import { ref, computed } from "vue";
import { config } from "../config/invitation";
import GoldName from "./GoldName.vue";

const shareName = ref("");
const copied = ref(false);
let t;

const link = computed(() => {
  const base = location.origin + location.pathname;
  const n = shareName.value.trim();
  return n ? base + "?to=" + encodeURIComponent(n) : base;
});

const waHref = computed(() =>
  "https://wa.me/?text=" + encodeURIComponent(
    "Assalamualaikum, dengan penuh rasa syukur kami mengundang Anda ke pernikahan " +
    config.groom.short + " & " + config.bride.short + ", 12 Desember 2026. Undangan lengkap: " + link.value
  )
);

function copyLink() {
  const done = () => {
    copied.value = true;
    clearTimeout(t);
    t = setTimeout(() => (copied.value = false), 2600);
  };
  if (navigator.clipboard) navigator.clipboard.writeText(link.value).then(done, done);
  else done();
}
</script>

<template>
  <section class="closing">
    <div class="drift"></div>
    <div class="vignette"></div>

    <div class="inner">
      <div class="orn reveal-soft">
        <span class="rule-l"></span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#BFA15F" stroke-width="0.9">
          <path d="M12 20.5 C6 16.5 3 13.4 3 9.8 A4.3 4.3 0 0 1 12 7.4 A4.3 4.3 0 0 1 21 9.8 C21 13.4 18 16.5 12 20.5 Z" />
        </svg>
        <span class="rule-r"></span>
      </div>

      <p class="body reveal">{{ config.closing.body }}</p>
      <p class="lab reveal-soft">Kami yang berbahagia</p>

      <div class="name-wrap"><GoldName mode="scroll" uid="closing" /></div>

      <p class="family reveal-soft">{{ config.closing.family }}</p>
      <p class="tag reveal-soft">{{ config.hashtag }}</p>

      <div class="share reveal">
        <p class="share-lab">Bagikan Undangan</p>
        <p class="share-sub">Tulis nama tamu untuk membuat tautan undangan personal.</p>
        <div class="share-row">
          <input v-model="shareName" type="text" placeholder="Nama tamu" class="wf-field share-input" />
          <button type="button" class="share-btn hv-pill" @click="copyLink">
            {{ copied ? "✓ Tersalin" : "Salin Tautan" }}
          </button>
          <a class="wa hv-pill" :href="waHref" target="_blank" rel="noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D8C48C" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.3A8.5 8.5 0 1 1 20.5 11.6z" />
              <path d="M8.8 9.2c0 3.2 2.8 6 6 6 1.2 0 1.4-.9 1.4-1.6l-1.9-.8-1 1a5.6 5.6 0 0 1-2.6-2.6l1-1-.8-1.9c-.7 0-1.6.2-1.6 1.4z" />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <div class="tail"></div>
      <p class="credit">DIBUAT DENGAN SEPENUH HATI &middot; 2026</p>
    </div>
  </section>
</template>

<style scoped>
.closing {
  position:relative; z-index:1; min-height:100vh;
  display:grid; place-items:center;
  padding:clamp(90px,14vh,160px) 22px clamp(70px,10vh,110px);
  background:linear-gradient(180deg, #050807 0%, #062820 52%, #050807 100%);
  overflow:hidden;
}
.drift {
  position:absolute; inset:0; pointer-events:none;
  background-image:radial-gradient(closest-side, rgba(25,169,116,.2), transparent 70%);
  background-repeat:no-repeat; background-size:170% 150%;
  animation:wf-drift2 40s ease-in-out infinite;
}
.vignette { position:absolute; inset:0; pointer-events:none; box-shadow:inset 0 0 220px 70px rgba(0,0,0,.8); }
.inner { position:relative; z-index:2; max-width:720px; text-align:center; }
.orn { display:flex; align-items:center; justify-content:center; gap:16px; margin-bottom:38px; }
.rule-l { width:70px; height:1px; background:linear-gradient(90deg, transparent, rgba(191,161,95,.75)); }
.rule-r { width:70px; height:1px; background:linear-gradient(90deg, rgba(191,161,95,.75), transparent); }
.body {
  margin:0 0 40px;
  font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:300;
  font-size:clamp(19px,2.7vw,26px); line-height:1.75; text-wrap:pretty;
  color:rgba(242,241,234,.85);
}
.lab { margin:0 0 18px; font-size:10px; letter-spacing:.5em; text-indent:.5em; color:#BFA15F; text-transform:uppercase; }
.name-wrap { margin:0 auto 34px; width:100%; max-width:600px; }
.family { margin:0 0 46px; font-family:'Cormorant Garamond',serif; font-size:clamp(16px,2vw,19px); line-height:1.8; color:rgba(242,241,234,.62); }
.tag {
  margin:0; display:inline-block; padding:11px 24px;
  border:1px solid rgba(191,161,95,.35); border-radius:999px;
  font-size:11px; letter-spacing:.24em; color:#D8C48C;
}
.share {
  margin-top:clamp(52px,8vh,80px);
  padding:clamp(24px,4vw,34px) clamp(20px,3.4vw,30px);
  border:1px solid rgba(191,161,95,.26); border-radius:3px;
  background:linear-gradient(170deg, rgba(11,61,50,.34), rgba(5,8,7,.55));
  backdrop-filter:blur(6px);
  text-align:left;
}
.share-lab { margin:0 0 8px; font-size:9px; letter-spacing:.36em; text-indent:.36em; color:#BFA15F; text-transform:uppercase; }
.share-sub { margin:0 0 20px; font-family:'Cormorant Garamond',serif; font-size:16px; line-height:1.7; color:rgba(242,241,234,.6); }
.share-row { display:flex; flex-wrap:wrap; gap:10px; }
.share-input {
  flex:1 1 200px; min-width:0; padding:13px 16px;
  border:1px solid rgba(191,161,95,.28); border-radius:2px;
  background:rgba(5,8,7,.55); color:#F2F1EA;
  font-family:'Cormorant Garamond',serif; font-size:17px;
}
.share-btn {
  flex:0 1 auto; cursor:pointer; padding:13px 22px;
  border:1px solid rgba(191,161,95,.45); border-radius:2px;
  background:rgba(5,8,7,.5); color:#D8C48C;
  font-size:10px; letter-spacing:.26em; text-indent:.26em; text-transform:uppercase;
}
.wa {
  flex:0 1 auto; display:inline-flex; align-items:center; gap:9px;
  padding:13px 22px;
  border:1px solid rgba(25,169,116,.5); border-radius:2px;
  background:linear-gradient(180deg, rgba(15,107,80,.45), rgba(6,40,32,.55));
  font-size:10px; letter-spacing:.26em; text-indent:.26em; text-transform:uppercase; color:#F2F1EA;
}
.tail {
  width:min(300px,70%); height:1px; margin:56px auto 24px;
  background:linear-gradient(90deg, transparent, rgba(191,161,95,.5), transparent);
}
.credit { margin:0; font-size:9px; letter-spacing:.3em; color:rgba(242,241,234,.3); }
</style>
