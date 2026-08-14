<script setup>
import { config } from "../config/invitation";
import PhotoSlot from "./PhotoSlot.vue";
import SectionHeading from "./SectionHeading.vue";
</script>

<template>
  <section id="sec-galeri" data-screen-label="Galeri" class="galeri">
    <div class="drift"></div>

    <div class="inner">
      <SectionHeading eyebrow="Moments" title="GALERI" ornament />

      <div class="grid reveal-soft">
        <div
          v-for="(g, i) in config.gallery" :key="i"
          class="cell" :style="{ gridColumn: 'span ' + g.span }"
        >
          <div class="crop hv-zoom hv-zoom-lg" :style="{ aspectRatio: g.ratio }">
            <PhotoSlot :src="g.photo" :placeholder="g.placeholder" />
          </div>
          <div class="grade"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.galeri {
  position:relative; z-index:1;
  padding:clamp(84px,13vh,150px) 22px clamp(96px,15vh,170px);
  background:linear-gradient(180deg, #050807 0%, #071d18 40%, #050807 100%);
  overflow:hidden;
}
.drift {
  position:absolute; inset:0; pointer-events:none;
  background-image:radial-gradient(closest-side, rgba(15,107,80,.24), transparent 74%);
  background-repeat:no-repeat; background-size:150% 130%;
  animation:wf-drift 32s ease-in-out infinite;
}
.inner { position:relative; z-index:2; max-width:1060px; margin:0 auto; }
.grid { display:grid; grid-template-columns:repeat(6, 1fr); gap:clamp(10px,1.6vw,18px); }
.cell {
  position:relative; padding:6px;
  border:1px solid rgba(191,161,95,.3); border-radius:3px;
  background:linear-gradient(160deg, rgba(191,161,95,.1), rgba(5,8,7,0) 60%);
  box-shadow:0 20px 52px rgba(0,0,0,.55);
}
.crop { position:relative; overflow:hidden; }
.grade {
  position:absolute; inset:6px; pointer-events:none;
  background:linear-gradient(180deg, rgba(5,8,7,.06), rgba(6,40,32,.42));
}
</style>
