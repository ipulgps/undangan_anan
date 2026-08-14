<script setup>
defineProps({
  playing: { type: Boolean, default: false },
  visible: { type: Boolean, default: false }
});
defineEmits(["toggle"]);
</script>

<template>
  <button
    type="button" class="music hv-music"
    :style="{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }"
    :title="playing ? 'Matikan musik' : 'Nyalakan musik'"
    @click="$emit('toggle')"
  >
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#D8C48C" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" :style="{ opacity: playing ? 1 : .4 }">
      <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
    </svg>
    <span class="ring" :style="{ animation: playing ? 'wf-spin 4.5s linear infinite' : 'none' }"></span>
  </button>
</template>

<style scoped>
.music {
  position:fixed; right:20px; bottom:84px; z-index:70;
  width:54px; height:54px;
  display:grid; place-items:center; cursor:pointer;
  border-radius:50%; border:1px solid rgba(191,161,95,.6);
  background:linear-gradient(180deg, rgba(11,61,50,.85), rgba(5,8,7,.9));
  backdrop-filter:blur(8px);
  box-shadow:0 0 26px rgba(25,169,116,.22);
}
.ring {
  position:absolute; inset:-5px; border-radius:50%;
  border:1px solid rgba(25,169,116,.45);
  border-top-color:transparent; border-left-color:transparent;
}
</style>
