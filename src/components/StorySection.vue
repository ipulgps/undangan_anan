<script setup>
import { config } from "../config/invitation";
import PhotoSlot from "./PhotoSlot.vue";
import SectionHeading from "./SectionHeading.vue";
</script>

<template>
  <section id="sec-story" data-screen-label="Love Story" class="story">
    <div class="drift"></div>

    <div class="inner">
      <SectionHeading eyebrow="Our Journey" title="LOVE STORY" ornament />

      <div class="timeline">
        <div class="rail"></div>

        <div v-for="item in config.story" :key="item.year" class="item reveal">
          <div class="dot-col">
            <span class="dot" :class="{ on: item.highlight }"></span>
          </div>

          <div class="body">
            <div class="frame">
              <div class="crop">
                <PhotoSlot :src="item.photo" :placeholder="item.placeholder" />
                <div class="grade"></div>
              </div>
            </div>
            <div class="text">
              <p class="year">{{ item.year }}</p>
              <h3 class="title">{{ item.title }}</h3>
              <p class="para">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <p class="closing reveal-soft">{{ config.storyClosing }}</p>
    </div>
  </section>
</template>

<style scoped>
.story {
  position:relative; z-index:1;
  padding:clamp(84px,13vh,150px) 22px clamp(96px,15vh,170px);
  background:linear-gradient(180deg, #050807 0%, #071d18 42%, #050807 100%);
  overflow:hidden;
}
.drift {
  position:absolute; inset:0; pointer-events:none;
  background-image:radial-gradient(closest-side, rgba(15,107,80,.26), transparent 72%);
  background-repeat:no-repeat; background-size:150% 130%;
  animation:wf-drift 34s ease-in-out infinite;
}
.inner { position:relative; z-index:2; max-width:880px; margin:0 auto; }
.timeline { position:relative; display:flex; flex-direction:column; gap:clamp(40px,7vh,68px); }
.rail {
  position:absolute; top:8px; bottom:8px; left:13px; width:1px;
  background:linear-gradient(180deg, transparent, rgba(191,161,95,.45) 8%, rgba(191,161,95,.45) 92%, transparent);
}
.item { position:relative; display:grid; grid-template-columns:28px minmax(0,1fr); gap:clamp(18px,3vw,32px); }
.dot-col { position:relative; padding-top:6px; }
.dot {
  display:block; width:11px; height:11px; margin-left:8px; border-radius:50%;
  border:1px solid rgba(191,161,95,.85); background:#050807;
  box-shadow:0 0 18px rgba(191,161,95,.5);
}
.dot.on { border-color:rgba(216,196,140,.95); background:#BFA15F; box-shadow:0 0 24px rgba(191,161,95,.85); }
.body { display:flex; flex-wrap:wrap; gap:clamp(20px,3vw,30px); }
.frame {
  flex:0 0 clamp(104px,26vw,148px); padding:6px;
  border:1px solid rgba(191,161,95,.32); border-radius:3px;
  background:linear-gradient(160deg, rgba(191,161,95,.1), rgba(5,8,7,0) 60%);
  box-shadow:0 18px 46px rgba(0,0,0,.55);
}
.crop { position:relative; aspect-ratio:4/5; overflow:hidden; }
.grade { position:absolute; inset:0; pointer-events:none; background:linear-gradient(180deg, rgba(5,8,7,.1), rgba(6,40,32,.5)); }
.text { flex:1 1 220px; min-width:0; }
.year { margin:0 0 10px; font-size:10px; letter-spacing:.42em; text-indent:.42em; color:#BFA15F; text-transform:uppercase; }
.title { margin:0 0 14px; font-family:Cinzel,serif; font-weight:500; font-size:clamp(19px,2.7vw,26px); letter-spacing:.09em; color:#F2F1EA; }
.para { margin:0; font-family:'Cormorant Garamond',serif; font-size:clamp(16px,2vw,19px); line-height:1.8; text-wrap:pretty; color:rgba(242,241,234,.72); }
.closing {
  margin:clamp(52px,8vh,80px) 0 0; text-align:center;
  font-family:'Cormorant Garamond',serif; font-style:italic;
  font-size:clamp(17px,2.3vw,22px); line-height:1.7; color:#D8C48C;
}
</style>
