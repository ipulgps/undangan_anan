<script setup>
import { config } from "../config/invitation";
import PhotoSlot from "./PhotoSlot.vue";
import GoldName from "./GoldName.vue";

defineProps({ countdown: { type: Array, default: () => [] } });
</script>

<template>
  <section id="sec-hero" data-screen-label="Hero" class="hero">
    <div class="bg">
      <div class="bg-inner">
        <PhotoSlot :src="config.heroPhoto" placeholder="Foto utama pasangan" />
      </div>
    </div>
    <div class="veil-a"></div>
    <div class="veil-b"></div>
    <div class="vignette"></div>

    <div class="content">
      <p class="eyebrow">The Celebration of Love</p>
      <GoldName mode="intro" uid="hero" />
      <div class="rule"></div>
      <p class="date">{{ config.dateLabel }}</p>

      <div class="cd">
        <div v-for="u in countdown" :key="u.label" class="cd-cell">
          <div class="cd-val">{{ u.value }}</div>
          <div class="cd-lab">{{ u.label }}</div>
        </div>
      </div>
    </div>

    <div class="cue">
      <span style="font-size:9px; letter-spacing:.4em; color:rgba(242,241,234,.5);">SCROLL</span>
      <div style="width:1px; height:36px; background:linear-gradient(180deg, #BFA15F, transparent);"></div>
    </div>
  </section>
</template>

<style scoped>
.hero { position:relative; min-height:100vh; display:grid; place-items:center; overflow:hidden; }
.bg { position:fixed; inset:0; z-index:0; overflow:hidden; }
.bg-inner { position:absolute; inset:0; animation:wf-zoom 18s cubic-bezier(.15,.7,.18,1) both; }
.veil-a, .veil-b, .vignette { position:absolute; inset:0; pointer-events:none; }
.veil-a { background:linear-gradient(180deg, rgba(5,8,7,.86) 0%, rgba(6,40,32,.55) 42%, rgba(5,8,7,.94) 100%); }
.veil-b { background:radial-gradient(120% 80% at 50% 40%, rgba(25,169,116,.16), transparent 60%), radial-gradient(140% 100% at 50% 100%, rgba(5,8,7,.9), transparent 55%); }
.vignette { box-shadow:inset 0 0 220px 60px rgba(0,0,0,.85); }
.content { position:relative; z-index:2; text-align:center; padding:0 24px; max-width:900px; }
.eyebrow {
  margin:0 0 22px; font-size:11px; letter-spacing:.62em; text-indent:.62em;
  color:#BFA15F; text-transform:uppercase;
  animation:wf-up 2.2s cubic-bezier(.16,.86,.24,1) .35s both;
}
.rule {
  width:110px; height:1px; margin:30px auto;
  background:linear-gradient(90deg, transparent, #BFA15F, transparent);
  animation:wf-up 2s cubic-bezier(.16,.86,.24,1) .95s both;
}
.date {
  margin:0 0 40px;
  font-family:'Cormorant Garamond',serif; font-size:clamp(17px,2.4vw,22px);
  letter-spacing:.22em; color:rgba(242,241,234,.82);
  animation:wf-up 2.2s cubic-bezier(.16,.86,.24,1) 1.15s both;
}
.cd {
  display:grid; grid-template-columns:repeat(4, minmax(64px,110px)); gap:10px; justify-content:center;
  animation:wf-up 2.2s cubic-bezier(.16,.86,.24,1) 1.5s both;
}
.cd-cell {
  padding:16px 6px 13px;
  border:1px solid rgba(191,161,95,.34); border-radius:4px;
  background:linear-gradient(180deg, rgba(11,61,50,.42), rgba(5,8,7,.55));
  backdrop-filter:blur(8px);
}
.cd-val { font-family:Cinzel,serif; font-size:clamp(22px,4.4vw,34px); color:#F2F1EA; line-height:1; }
.cd-lab { margin-top:9px; font-size:9px; letter-spacing:.32em; color:#BFA15F; }
.cue {
  position:absolute; bottom:34px; left:50%; transform:translateX(-50%); z-index:2;
  display:flex; flex-direction:column; align-items:center; gap:9px;
  animation:wf-cue 2.6s ease-in-out infinite;
}
</style>
