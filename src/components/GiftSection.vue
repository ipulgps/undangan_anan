<script setup>
import { ref } from "vue";
import { config } from "../config/invitation";
import SectionHeading from "./SectionHeading.vue";

const t = config.text.gift;
const copied = ref("");
let copyTimer;

function copy(key, text) {
  const done = () => {
    copied.value = key;
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => (copied.value = ""), 2600);
  };
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, done);
  else done();
}
</script>

<template>
  <section class="gift">
    <div class="drift"></div>

    <div class="inner">
      <SectionHeading
        :eyebrow="t.eyebrow"
        :title="t.title"
        :lede="t.lede"
      />

      <div class="cards">
        <div v-for="(b, i) in config.banks" :key="b.bank" class="card reveal" :class="{ 'reveal-late': i === 1 }">
          <div class="top">
            <p class="bank">{{ b.bank }}</p>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BFA15F" stroke-width="1.2" stroke-linecap="round">
              <rect x="2.5" y="6" width="19" height="13" rx="2" /><path d="M2.5 10.5h19" />
            </svg>
          </div>
          <p class="lab">{{ t.accountLabel }}</p>
          <p class="num">{{ b.number }}</p>
          <p class="holder">{{ b.holder }}</p>
          <button type="button" class="copy hv-pill" @click="copy(b.bank, b.number)">
            {{ copied === b.bank ? t.copiedButton : t.copyButton }}
          </button>
        </div>
      </div>

      <div class="addr reveal-soft">
        <p class="addr-lab">{{ t.addressLabel }}</p>
        <p class="addr-line">
          {{ config.giftAddress.line }}<br />
          <span class="addr-sub">{{ config.giftAddress.recipient }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gift {
  position:relative; z-index:1;
  padding:clamp(84px,13vh,150px) 22px clamp(84px,13vh,150px);
  background:linear-gradient(180deg, #050807 0%, #071d18 46%, #050807 100%);
  overflow:hidden;
}
.drift {
  position:absolute; inset:0; pointer-events:none;
  background-image:radial-gradient(closest-side, rgba(15,107,80,.24), transparent 74%);
  background-repeat:no-repeat; background-size:150% 130%;
  animation:wf-drift 36s ease-in-out infinite;
}
.inner { position:relative; z-index:2; max-width:860px; margin:0 auto; }
.cards { display:flex; flex-wrap:wrap; justify-content:center; gap:clamp(20px,3vw,30px); }
.card {
  flex:1 1 300px; max-width:400px;
  padding:clamp(26px,4vw,36px) clamp(22px,3.4vw,30px);
  border:1px solid rgba(191,161,95,.32); border-radius:3px;
  background:linear-gradient(170deg, rgba(11,61,50,.42), rgba(5,8,7,.62));
  backdrop-filter:blur(8px);
  box-shadow:0 24px 64px rgba(0,0,0,.6), 0 0 56px rgba(15,107,80,.16);
}
.top { display:flex; align-items:center; justify-content:space-between; gap:14px; margin-bottom:22px; }
.bank { margin:0; font-family:Cinzel,serif; font-size:16px; letter-spacing:.16em; color:#F2F1EA; }
.lab { margin:0 0 8px; font-size:9px; letter-spacing:.34em; text-indent:.34em; color:#BFA15F; text-transform:uppercase; }
.num { margin:0 0 18px; font-family:Cinzel,serif; font-size:clamp(19px,2.6vw,24px); letter-spacing:.14em; color:#D8C48C; }
.holder { margin:0 0 24px; font-family:'Cormorant Garamond',serif; font-size:18px; color:rgba(242,241,234,.82); }
.copy {
  width:100%; cursor:pointer; padding:13px 18px;
  border:1px solid rgba(191,161,95,.4); border-radius:2px;
  background:rgba(5,8,7,.5); color:#D8C48C;
  font-size:10px; letter-spacing:.28em; text-indent:.28em; text-transform:uppercase;
}
.addr {
  margin-top:clamp(34px,5vh,54px); padding:26px 24px; text-align:center;
  border-top:1px solid rgba(191,161,95,.2); border-bottom:1px solid rgba(191,161,95,.2);
}
.addr-lab { margin:0 0 10px; font-size:9px; letter-spacing:.36em; text-indent:.36em; color:#BFA15F; text-transform:uppercase; }
.addr-line { margin:0; font-family:'Cormorant Garamond',serif; font-size:clamp(17px,2.1vw,20px); line-height:1.75; color:rgba(242,241,234,.8); }
.addr-sub { font-family:Manrope,sans-serif; font-size:12px; letter-spacing:.06em; color:rgba(242,241,234,.5); }
</style>
