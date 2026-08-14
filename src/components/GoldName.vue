<script setup>
/** Nama pasangan sebagai kaligrafi tinta emas: stroke draw-on → isi → kilau foil. */
import { config } from "../config/invitation";

defineProps({
  /** "intro" = jalan sekali saat mount; "scroll" = digerakkan oleh scroll */
  mode: { type: String, default: "intro" },
  uid: { type: String, default: "a" }
});
</script>

<template>
  <div class="wrap" :class="mode === 'scroll' ? 'on-scroll' : 'on-intro'">
    <svg viewBox="0 0 880 128" :aria-label="config.groom.short + ' dan ' + config.bride.short">
      <defs>
        <linearGradient :id="'gold-' + uid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#FBF7EC" />
          <stop offset="46%" stop-color="#F2F1EA" />
          <stop offset="100%" stop-color="#D8C48C" />
        </linearGradient>
        <clipPath :id="'clip-' + uid">
          <text x="440" y="94" text-anchor="middle" font-family="Cinzel, serif" font-weight="500" font-size="86" letter-spacing="11">
            {{ config.groom.short }} <tspan font-family="'Cormorant Garamond', serif" font-style="italic" letter-spacing="0">&amp;</tspan> {{ config.bride.short }}
          </text>
        </clipPath>
      </defs>

      <text class="ink" x="440" y="94" text-anchor="middle" font-family="Cinzel, serif" font-weight="500" font-size="86" letter-spacing="11" fill="none" stroke="#BFA15F" stroke-width="1.1" stroke-linejoin="round">
        {{ config.groom.short }} <tspan font-family="'Cormorant Garamond', serif" font-style="italic" letter-spacing="0">&amp;</tspan> {{ config.bride.short }}
      </text>

      <text class="fill" x="440" y="94" text-anchor="middle" font-family="Cinzel, serif" font-weight="500" font-size="86" letter-spacing="11" :fill="'url(#gold-' + uid + ')'">
        {{ config.groom.short }} <tspan font-family="'Cormorant Garamond', serif" font-style="italic" fill="#BFA15F" letter-spacing="0">&amp;</tspan> {{ config.bride.short }}
      </text>

      <g :clip-path="'url(#clip-' + uid + ')'">
        <rect class="foil" x="-260" y="0" width="240" height="128" fill="#FFF6DC" opacity=".82" transform="skewX(-16)" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.wrap { width:100%; max-width:880px; margin-inline:auto; filter:drop-shadow(0 0 60px rgba(25,169,116,.3)); }
svg { display:block; width:100%; height:auto; overflow:visible; }

.ink { stroke-dasharray:1300; animation-name:wf-ink; animation-timing-function:cubic-bezier(.32,.72,.2,1); animation-fill-mode:both; }
.fill { animation-name:wf-fillin; animation-timing-function:ease-out; animation-fill-mode:both; }
.foil { animation-name:wf-foil; animation-timing-function:cubic-bezier(.4,0,.5,1); animation-fill-mode:both; }

.on-intro .ink  { animation-duration:3.4s; animation-delay:.5s; }
.on-intro .fill { animation-duration:2.4s; animation-delay:2.5s; }
.on-intro .foil { animation-duration:2.6s; animation-delay:3.9s; animation-iteration-count:2; }

.on-scroll .ink  { animation-duration:3.2s; }
.on-scroll .fill { animation-duration:2s; }
.on-scroll .foil { animation-duration:2.4s; }

@supports (animation-timeline: view()) {
  .on-scroll .ink  { animation-timeline:view(); animation-range:entry 4% cover 42%; }
  .on-scroll .fill { animation-timeline:view(); animation-range:entry 26% cover 52%; }
  .on-scroll .foil { animation-timeline:view(); animation-range:entry 34% cover 66%; }
}
</style>
