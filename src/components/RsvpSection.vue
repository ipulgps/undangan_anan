<script setup>
import { ref, computed } from "vue";
import SectionHeading from "./SectionHeading.vue";
import { config } from "../config/invitation";
import { useRsvp } from "../composables/useRsvp";

const t = config.text.rsvp;
const { wishes, submit } = useRsvp();

const name = ref("");
const msg = ref("");
const attend = ref("");
const thanks = ref(false);
let thanksT;

const options = t.attendOptions;
const countLabel = computed(() => wishes.value.length + " " + t.countSuffix);

async function send() {
  const n = name.value.trim(), m = msg.value.trim();
  if (!n || !m) return;
  await submit({ name: n, msg: m, attend: attend.value || t.attendDefault, at: new Date().toISOString() });
  name.value = ""; msg.value = ""; attend.value = "";
  thanks.value = true;
  clearTimeout(thanksT);
  thanksT = setTimeout(() => (thanks.value = false), 5000);
}
</script>

<template>
  <section id="sec-rsvp" data-screen-label="RSVP" class="rsvp">
    <div class="drift"></div>

    <div class="inner">
      <SectionHeading
        :eyebrow="t.eyebrow"
        :title="t.title"
        :lede="t.lede"
      />

      <div class="card reveal">
        <div class="stack">
          <div class="field">
            <label>{{ t.nameLabel }}</label>
            <input v-model="name" type="text" :placeholder="t.namePlaceholder" class="wf-field input" />
          </div>

          <div class="field">
            <label>{{ t.attendLabel }}</label>
            <div class="opts">
              <button
                v-for="o in options" :key="o"
                type="button" class="opt" :class="{ on: attend === o }"
                @click="attend = o"
              >{{ o }}</button>
            </div>
          </div>

          <div class="field">
            <label>{{ t.messageLabel }}</label>
            <textarea v-model="msg" rows="4" :placeholder="t.messagePlaceholder" class="wf-field area"></textarea>
          </div>

          <button type="button" class="send hv-cta" @click="send">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#BFA15F" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 4L3 11l7 2.6L13 21z" /><path d="M21 4L10 13.6" />
            </svg>
            <span>{{ t.submitButton }}</span>
          </button>

          <p class="thanks" :style="{ opacity: thanks ? 1 : 0 }">{{ t.thanks }}</p>
        </div>
      </div>

      <div class="list-wrap">
        <div class="list-head">
          <p class="count">{{ countLabel }}</p>
          <span class="line"></span>
        </div>

        <div class="list wf-scroll">
          <div v-for="(w, i) in wishes" :key="i" class="wish">
            <div class="wish-top">
              <p class="wish-name">{{ w.name }}</p>
              <p class="wish-att" :style="{ color: w.attend === options[0] ? config.theme.jade : 'rgba(191,161,95,.8)' }">{{ w.attend }}</p>
            </div>
            <p class="wish-msg">{{ w.msg }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.rsvp {
  position:relative; z-index:1;
  padding:clamp(84px,13vh,150px) 22px clamp(96px,15vh,170px);
  background:linear-gradient(180deg, #050807 0%, #062820 48%, #050807 100%);
  overflow:hidden;
}
.drift {
  position:absolute; inset:0; pointer-events:none;
  background-image:radial-gradient(closest-side, rgba(15,107,80,.28), transparent 72%);
  background-repeat:no-repeat; background-size:160% 140%;
  animation:wf-drift2 34s ease-in-out infinite;
}
.inner { position:relative; z-index:2; max-width:720px; margin:0 auto; }
.card {
  position:relative;
  padding:clamp(26px,4.5vw,42px) clamp(20px,3.5vw,36px);
  border:1px solid rgba(191,161,95,.3); border-radius:3px;
  background:linear-gradient(170deg, rgba(11,61,50,.4), rgba(5,8,7,.62));
  backdrop-filter:blur(8px);
  box-shadow:0 26px 70px rgba(0,0,0,.6), 0 0 60px rgba(15,107,80,.16);
}
.stack { display:flex; flex-direction:column; gap:22px; }
.field { display:flex; flex-direction:column; gap:10px; }
label { font-size:10px; letter-spacing:.36em; text-indent:.36em; color:#BFA15F; text-transform:uppercase; }
.input, .area {
  width:100%; padding:14px 16px;
  border:1px solid rgba(191,161,95,.28); border-radius:2px;
  background:rgba(5,8,7,.55); color:#F2F1EA;
  font-family:'Cormorant Garamond',serif; letter-spacing:.04em;
}
.input { font-size:18px; }
.area { font-size:17px; line-height:1.7; resize:vertical; }
.opts { display:flex; flex-wrap:wrap; gap:10px; }
.opt {
  flex:1 1 120px; cursor:pointer; padding:13px 14px;
  border:1px solid rgba(191,161,95,.28); border-radius:2px;
  background:rgba(5,8,7,.5); color:rgba(242,241,234,.6);
  font-size:10px; letter-spacing:.24em; text-indent:.24em; text-transform:uppercase;
  transition:border-color .5s ease, box-shadow .5s ease, background .5s ease, color .5s ease;
}
.opt.on {
  border-color:rgba(25,169,116,.85);
  background:linear-gradient(180deg, rgba(15,107,80,.55), rgba(6,40,32,.6));
  color:#F2F1EA; box-shadow:0 0 26px rgba(25,169,116,.3);
}
.send {
  align-self:center; margin-top:6px; cursor:pointer;
  display:inline-flex; align-items:center; gap:12px;
  padding:16px 36px;
  border:1px solid rgba(191,161,95,.6); border-radius:2px;
  background:linear-gradient(180deg, rgba(11,61,50,.4), rgba(5,8,7,.55));
  color:#F2F1EA; font-size:10px; letter-spacing:.36em; text-indent:.36em; text-transform:uppercase;
}
.thanks {
  margin:0; min-height:22px; text-align:center;
  font-family:'Cormorant Garamond',serif; font-style:italic; font-size:16px;
  color:#19A974; transition:opacity .8s ease;
}
.list-wrap { margin-top:clamp(44px,7vh,72px); }
.list-head { display:flex; align-items:center; gap:14px; margin-bottom:26px; }
.count { margin:0; font-size:10px; letter-spacing:.4em; text-indent:.4em; color:#BFA15F; text-transform:uppercase; white-space:nowrap; }
.line { flex:1; height:1px; background:linear-gradient(90deg, rgba(191,161,95,.45), transparent); }
.list { display:flex; flex-direction:column; gap:14px; max-height:420px; overflow-y:auto; padding-right:4px; }
.wish {
  padding:20px 22px;
  border:1px solid rgba(191,161,95,.18); border-left:1px solid rgba(191,161,95,.6); border-radius:2px;
  background:linear-gradient(140deg, rgba(11,61,50,.3), rgba(5,8,7,.5));
}
.wish-top { display:flex; flex-wrap:wrap; align-items:baseline; justify-content:space-between; gap:10px; margin-bottom:10px; }
.wish-name { margin:0; font-family:Cinzel,serif; font-size:14px; letter-spacing:.1em; color:#F2F1EA; }
.wish-att { margin:0; font-size:9px; letter-spacing:.24em; text-transform:uppercase; }
.wish-msg { margin:0; font-family:'Cormorant Garamond',serif; font-size:17px; line-height:1.75; text-wrap:pretty; color:rgba(242,241,234,.76); }
</style>
