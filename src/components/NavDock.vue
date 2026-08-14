<script setup>
defineProps({
  active: { type: String, default: "" },
  visible: { type: Boolean, default: false }
});
const emit = defineEmits(["go"]);

const items = [
  { id: "sec-hero", label: "Awal" },
  { id: "sec-couple", label: "Mempelai" },
  { id: "sec-acara", label: "Acara" },
  { id: "sec-galeri", label: "Galeri" },
  { id: "sec-rsvp", label: "RSVP" }
];
</script>

<template>
  <nav class="dock" :style="{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }">
    <button
      v-for="n in items" :key="n.id"
      type="button" :title="n.label" class="btn" :class="{ on: active === n.id }"
      @click="emit('go', n.id)"
    >
      <svg v-if="n.id === 'sec-hero'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M4 11l8-7 8 7" /><path d="M6.5 9.6V20h11V9.6" /></svg>
      <svg v-else-if="n.id === 'sec-couple'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M12 20.5C6 16.5 3 13.4 3 9.8A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 21 9.8c0 3.6-3 6.7-9 10.7z" /></svg>
      <svg v-else-if="n.id === 'sec-acara'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M3.5 10h17M8 3v3.4M16 3v3.4" /></svg>
      <svg v-else-if="n.id === 'sec-galeri'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><rect x="3" y="4.5" width="18" height="15" rx="2" /><path d="M3.6 16l4.6-4.6 4 4 3-2.8 5.2 5" /><circle cx="9" cy="9" r="1.4" /></svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M4 6h16v13H4z" /><path d="M4 7l8 6 8-6" /></svg>
    </button>
  </nav>
</template>

<style scoped>
.dock {
  position:fixed; left:50%; bottom:20px; transform:translateX(-50%); z-index:71;
  display:flex; align-items:center; gap:2px;
  padding:7px 9px;
  border:1px solid rgba(191,161,95,.4); border-radius:999px;
  background:linear-gradient(180deg, rgba(11,61,50,.86), rgba(5,8,7,.92));
  backdrop-filter:blur(10px);
  box-shadow:0 18px 44px rgba(0,0,0,.6), 0 0 30px rgba(15,107,80,.2);
  transition:opacity 1.2s ease 1.4s;
}
.btn {
  position:relative; display:grid; place-items:center;
  width:46px; height:46px; cursor:pointer;
  border:none; border-radius:50%; background:transparent;
  color:rgba(216,196,140,.62);
  transition:background .5s ease, color .5s ease;
}
.btn.on {
  background:linear-gradient(180deg, rgba(15,107,80,.75), rgba(6,40,32,.8));
  color:#F2F1EA;
}
svg { width:20px; height:20px; }
</style>
