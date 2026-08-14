<script setup>
import { ref, onMounted } from "vue";

const emit = defineEmits(["done"]);
const pct = ref(6);
const fade = ref(false);

onMounted(() => {
  const started = Date.now();
  let settled = false;

  const finish = () => {
    if (settled) return;
    settled = true;
    setTimeout(() => {
      pct.value = 100;
      setTimeout(() => (fade.value = true), 320);
      setTimeout(() => emit("done"), 1250);
    }, Math.max(0, 900 - (Date.now() - started)));
  };

  const imgs = Array.from(document.images || []);
  const total = imgs.length + 1;
  let loaded = 0;
  const bump = () => {
    loaded++;
    pct.value = Math.min(94, Math.round((loaded / total) * 94));
    if (loaded >= total) finish();
  };

  (document.fonts ? document.fonts.ready : Promise.resolve()).then(bump, bump);
  imgs.forEach(im => {
    if (im.complete) bump();
    else {
      im.addEventListener("load", bump, { once: true });
      im.addEventListener("error", bump, { once: true });
    }
  });
  setTimeout(finish, 6000);
});
</script>

<template>
  <div class="boot" :style="{ opacity: fade ? 0 : 1, pointerEvents: fade ? 'none' : 'auto' }">
    <div style="text-align:center;">
      <div style="position:relative; width:64px; height:64px; margin:0 auto 26px;">
        <span style="position:absolute; inset:0; border-radius:50%; border:1px solid rgba(191,161,95,.22);"></span>
        <span style="position:absolute; inset:0; border-radius:50%; border:1px solid transparent; border-top-color:#BFA15F; animation:wf-spin 1.5s linear infinite;"></span>
        <span style="position:absolute; inset:0; display:grid; place-items:center; font-family:Cinzel,serif; font-size:13px; letter-spacing:.06em; color:#D8C48C;">A&amp;S</span>
      </div>
      <p style="margin:0 0 14px; font-size:9px; letter-spacing:.44em; text-indent:.44em; color:rgba(216,196,140,.62); text-transform:uppercase;">Menyiapkan Undangan</p>
      <div style="width:180px; height:1px; margin:0 auto; background:rgba(191,161,95,.18); overflow:hidden;">
        <div :style="{ height:'100%', width: pct + '%', background:'linear-gradient(90deg, rgba(15,107,80,.9), #D8C48C)', transition:'width .5s ease' }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.boot {
  position:fixed; inset:0; z-index:90;
  display:grid; place-items:center;
  background:#050807;
  transition:opacity .9s ease;
}
</style>
