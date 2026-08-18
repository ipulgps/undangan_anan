<script setup>
import { config } from "../config/invitation";
import PhotoSlot from "./PhotoSlot.vue";

const t = config.text.couple;

const people = [
  { ...config.groom, role: t.groomRole, parentLabel: t.groomParentLabel, placeholder: t.groomPhotoPlaceholder },
  { ...config.bride, role: t.brideRole, parentLabel: t.brideParentLabel, placeholder: t.bridePhotoPlaceholder }
];
</script>

<template>
  <section id="sec-couple" data-screen-label="Couple" class="couple">
    <div class="drift"></div>

    <div class="inner">
      <div class="head reveal">
        <p class="bismillah">{{ t.bismillah }}</p>
        <p class="lede">{{ t.lede }}</p>
      </div>

      <div class="row">
        <template v-for="(p, i) in people" :key="p.name">
          <div v-if="i === 1" class="heart reveal-soft">
            <span class="v-rule top"></span>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#BFA15F" stroke-width="0.9">
              <path d="M12 20.5 C6 16.5 3 13.4 3 9.8 A4.3 4.3 0 0 1 12 7.4 A4.3 4.3 0 0 1 21 9.8 C21 13.4 18 16.5 12 20.5 Z" />
            </svg>
            <span class="v-rule bottom"></span>
          </div>

          <div class="person reveal" :class="{ 'reveal-late': i === 1 }">
            <div class="frame">
              <div class="crop hv-zoom">
                <PhotoSlot :src="p.photo" :placeholder="p.placeholder" />
              </div>
              <div class="grade"></div>
            </div>

            <p class="role">{{ p.role }}</p>
            <h3 class="pname">{{ p.name }}</h3>
            <p class="plabel">{{ p.parentLabel }}</p>
            <p class="parents">
              {{ p.father }}<br /><span style="color:#BFA15F;">&amp;</span><br />{{ p.mother }}
            </p>
            <a class="ig hv-pill" :href="'https://instagram.com/' + p.instagram" target="_blank" rel="noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
                <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" />
              </svg>
              <span>@{{ p.instagram }}</span>
            </a>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.couple {
  position:relative; z-index:1;
  padding:clamp(80px,13vh,150px) 22px clamp(96px,15vh,170px);
  background:linear-gradient(180deg, #050807 0%, #071d18 30%, #062820 60%, #050807 100%);
  overflow:hidden;
}
.drift {
  position:absolute; inset:0; pointer-events:none;
  background-image:radial-gradient(closest-side, rgba(15,107,80,.32), transparent 72%);
  background-repeat:no-repeat; background-size:160% 140%;
  animation:wf-drift2 38s ease-in-out infinite;
}
.inner { position:relative; z-index:2; max-width:1120px; margin:0 auto; }
.head { text-align:center; margin-bottom:clamp(48px,7vh,78px); }
.bismillah {
  margin:0 0 18px;
  font-family:'Cormorant Garamond',serif; font-style:italic;
  font-size:clamp(19px,2.6vw,26px); color:#BFA15F;
}
.lede {
  margin:0 auto; max-width:620px;
  font-size:clamp(13px,1.5vw,15px); line-height:1.9; letter-spacing:.04em;
  text-wrap:pretty; color:rgba(242,241,234,.62);
}
.row { display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:clamp(26px,4vw,58px); }
.person { flex:1 1 320px; max-width:420px; text-align:center; }
.frame {
  position:relative; padding:9px;
  border:1px solid rgba(191,161,95,.4); border-radius:3px;
  background:linear-gradient(160deg, rgba(191,161,95,.13), rgba(5,8,7,0) 55%);
  box-shadow:0 26px 70px rgba(0,0,0,.6), 0 0 60px rgba(15,107,80,.22);
}
.crop { position:relative; aspect-ratio:3/4; overflow:hidden; }
.grade {
  position:absolute; inset:9px; pointer-events:none;
  background:linear-gradient(180deg, rgba(5,8,7,.12) 0%, rgba(6,40,32,.28) 55%, rgba(5,8,7,.82) 100%);
}
.role { margin:30px 0 12px; font-size:10px; letter-spacing:.5em; text-indent:.5em; color:#BFA15F; text-transform:uppercase; }
.pname { margin:0 0 18px; font-family:Cinzel,serif; font-weight:500; font-size:clamp(24px,3.4vw,34px); letter-spacing:.1em; color:#F2F1EA; }
.plabel { margin:0 0 6px; font-size:11px; letter-spacing:.2em; color:rgba(242,241,234,.42); text-transform:uppercase; }
.parents { margin:0; font-family:'Cormorant Garamond',serif; font-size:clamp(17px,2.2vw,21px); line-height:1.75; color:rgba(242,241,234,.85); }
.ig {
  display:inline-flex; align-items:center; gap:9px;
  margin-top:22px; padding:9px 18px;
  border:1px solid rgba(191,161,95,.35); border-radius:999px;
  font-size:11px; letter-spacing:.14em; color:#D8C48C;
}
.heart { flex:0 0 auto; display:flex; flex-direction:column; align-items:center; gap:16px; padding:8px 0; }
.v-rule { width:1px; height:clamp(26px,6vw,64px); }
.top { background:linear-gradient(180deg, transparent, rgba(191,161,95,.6)); }
.bottom { background:linear-gradient(180deg, rgba(191,161,95,.6), transparent); }
</style>
