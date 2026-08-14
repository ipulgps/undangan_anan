<script setup>
import { config } from "../config/invitation";
import SectionHeading from "./SectionHeading.vue";
</script>

<template>
  <section id="sec-acara" data-screen-label="Acara" class="acara">
    <div class="drift"></div>
    <div class="noise"></div>

    <div class="inner">
      <SectionHeading
        eyebrow="Save The Date"
        title="DETAIL ACARA"
        lede="Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa dan restu."
      />

      <div class="cards">
        <div v-for="(e, i) in config.events" :key="e.title" class="card reveal" :class="{ 'reveal-late': i === 1 }">
          <div class="icon">
            <svg v-if="e.icon === 'mosque'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#BFA15F" stroke-width="1.1" stroke-linecap="round">
              <path d="M12 21s-7-4.6-7-9.6A4.6 4.6 0 0 1 12 8.2 4.6 4.6 0 0 1 19 11.4c0 5-7 9.6-7 9.6z" /><path d="M12 3v2.4" />
            </svg>
            <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#BFA15F" stroke-width="1.1" stroke-linecap="round">
              <path d="M5 21V9l7-5 7 5v12" /><path d="M9.5 21v-6h5v6" />
            </svg>
          </div>

          <h3 class="title">{{ e.title }}</h3>
          <div class="rule"></div>
          <p class="date">{{ e.date }}</p>
          <p class="time">{{ e.time }}</p>
          <p class="lokasi">Lokasi</p>
          <p class="venue">{{ e.venue }}<br /><span class="addr">{{ e.address }}</span></p>

          <a class="pill hv-pill" :href="e.maps" target="_blank" rel="noreferrer">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 21s-7-4.6-7-9.6A7 7 0 0 1 19 11.4c0 5-7 9.6-7 9.6z" /><circle cx="12" cy="11" r="2.4" />
            </svg>
            <span>Lihat Lokasi</span>
          </a>
        </div>
      </div>

      <div class="cal reveal-soft">
        <a class="cal-btn hv-cta" :href="config.calendarUrl" target="_blank" rel="noreferrer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#BFA15F" stroke-width="1.3" stroke-linecap="round">
            <rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M3.5 10h17M8 3v3.4M16 3v3.4" />
          </svg>
          <span>Simpan ke Kalender</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.acara {
  position:relative; z-index:1;
  padding:clamp(84px,13vh,150px) 22px clamp(96px,15vh,170px);
  background:linear-gradient(180deg, #050807 0%, #062820 46%, #050807 100%);
  overflow:hidden;
}
.drift {
  position:absolute; inset:0; pointer-events:none;
  background-image:radial-gradient(closest-side, rgba(15,107,80,.3), transparent 72%);
  background-repeat:no-repeat; background-size:160% 140%;
  animation:wf-drift2 36s ease-in-out infinite;
}
.noise {
  position:absolute; inset:0; pointer-events:none; opacity:.3; mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='e'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23e)' opacity='0.5'/%3E%3C/svg%3E");
}
.inner { position:relative; z-index:2; max-width:1000px; margin:0 auto; }
.cards { display:flex; flex-wrap:wrap; justify-content:center; gap:clamp(24px,3.5vw,40px); }
.card {
  flex:1 1 320px; max-width:440px; position:relative; text-align:center;
  padding:clamp(30px,4.5vw,46px) clamp(22px,3.5vw,36px);
  border:1px solid rgba(191,161,95,.34); border-radius:3px;
  background:linear-gradient(170deg, rgba(11,61,50,.42), rgba(5,8,7,.62));
  backdrop-filter:blur(8px);
  box-shadow:0 26px 70px rgba(0,0,0,.6), 0 0 60px rgba(15,107,80,.18);
}
.icon {
  display:grid; place-items:center; width:52px; height:52px; margin:0 auto 22px;
  border-radius:50%; border:1px solid rgba(191,161,95,.45);
}
.title { margin:0 0 20px; font-family:Cinzel,serif; font-weight:500; font-size:clamp(21px,3vw,28px); letter-spacing:.14em; color:#F2F1EA; }
.rule { width:70px; height:1px; margin:0 auto 24px; background:linear-gradient(90deg, transparent, rgba(191,161,95,.7), transparent); }
.date { margin:0 0 6px; font-family:'Cormorant Garamond',serif; font-size:clamp(19px,2.6vw,24px); letter-spacing:.1em; color:#D8C48C; }
.time { margin:0 0 26px; font-size:12px; letter-spacing:.28em; color:rgba(242,241,234,.72); }
.lokasi { margin:0 0 6px; font-size:10px; letter-spacing:.4em; text-indent:.4em; color:#BFA15F; text-transform:uppercase; }
.venue { margin:0; font-family:'Cormorant Garamond',serif; font-size:clamp(17px,2.1vw,20px); line-height:1.75; color:rgba(242,241,234,.86); }
.addr { font-family:Manrope,sans-serif; font-size:12px; letter-spacing:.05em; color:rgba(242,241,234,.55); }
.pill {
  display:inline-flex; align-items:center; gap:9px;
  margin-top:26px; padding:11px 22px;
  border:1px solid rgba(191,161,95,.4); border-radius:999px;
  font-size:10px; letter-spacing:.28em; text-indent:.28em; text-transform:uppercase; color:#D8C48C;
}
.cal { margin-top:clamp(44px,7vh,72px); text-align:center; }
.cal-btn {
  display:inline-flex; align-items:center; gap:12px;
  padding:16px 34px;
  border:1px solid rgba(191,161,95,.6); border-radius:2px;
  background:linear-gradient(180deg, rgba(11,61,50,.35), rgba(5,8,7,.5));
  font-size:10px; letter-spacing:.36em; text-indent:.36em; text-transform:uppercase; color:#F2F1EA;
}
</style>
