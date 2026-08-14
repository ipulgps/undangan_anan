<script setup>
import { config } from "../config/invitation";
</script>

<template>
  <section class="quote">
    <div class="drift"></div>
    <div class="noise"></div>

    <div class="inner">
      <div class="orn reveal">
        <span class="rule-l"></span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#BFA15F" stroke-width="0.9">
          <path d="M12 3 L13.9 10.1 L21 12 L13.9 13.9 L12 21 L10.1 13.9 L3 12 L10.1 10.1 Z" />
        </svg>
        <span class="rule-r"></span>
      </div>

      <p class="text reveal">&ldquo;{{ config.quote.text }}&rdquo;</p>
      <p class="src reveal">{{ config.quote.source }}</p>
      <div class="tail reveal"></div>
    </div>
  </section>
</template>

<style scoped>
.quote {
  position:relative; z-index:1;
  padding:clamp(96px,16vh,180px) 24px;
  background:linear-gradient(180deg, #050807 0%, #062820 45%, #050807 100%);
  overflow:hidden;
}
.drift {
  position:absolute; inset:0; pointer-events:none;
  background-image:radial-gradient(closest-side, rgba(15,107,80,.4), transparent 70%);
  background-repeat:no-repeat; background-size:150% 130%;
  animation:wf-drift 30s ease-in-out infinite;
}
.noise {
  position:absolute; inset:0; pointer-events:none; opacity:.35; mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='q'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23q)' opacity='0.5'/%3E%3C/svg%3E");
}
.inner { position:relative; z-index:2; max-width:880px; margin:0 auto; text-align:center; }
.orn { display:flex; align-items:center; justify-content:center; gap:16px; margin-bottom:44px; }
.rule-l { width:70px; height:1px; background:linear-gradient(90deg, transparent, rgba(191,161,95,.75)); }
.rule-r { width:70px; height:1px; background:linear-gradient(90deg, rgba(191,161,95,.75), transparent); }
.text {
  margin:0 0 34px;
  font-family:'Cormorant Garamond',serif; font-style:italic; font-weight:300;
  font-size:clamp(22px,3.4vw,38px); line-height:1.62; text-wrap:pretty;
  color:rgba(242,241,234,.94); text-shadow:0 0 60px rgba(25,169,116,.18);
  animation-delay:.25s;
}
.src {
  margin:0; font-size:11px; letter-spacing:.44em; text-indent:.44em;
  color:#BFA15F; text-transform:uppercase; animation-delay:.6s;
}
.tail {
  width:min(320px,70%); height:1px; margin:52px auto 0;
  background:linear-gradient(90deg, transparent, rgba(191,161,95,.5), transparent);
  animation-delay:.85s;
}
</style>
