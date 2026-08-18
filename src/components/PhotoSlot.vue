<script setup>
import { config } from "../config/invitation";

defineProps({
  src: { type: String, default: "" },
  alt: { type: String, default: "" },
  placeholder: { type: String, default: () => config.text.photo.defaultPlaceholder }
});
</script>

<template>
  <img v-if="src" :src="src" :alt="alt || placeholder" class="slot-img" />
  <div v-else class="slot-empty">
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(191,161,95,.55)" stroke-width="1.1">
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3.6 16l4.6-4.6 4 4 3-2.8 5.2 5" />
      <circle cx="9" cy="9" r="1.4" />
    </svg>
    <span>{{ placeholder }}</span>
  </div>
</template>

<style scoped>
.slot-img { width:100%; height:100%; object-fit:cover; }
.slot-empty {
  width:100%; height:100%;
  display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px;
  padding:14px; text-align:center;
  background:linear-gradient(160deg, rgba(11,61,50,.5), rgba(5,8,7,.7));
  font-size:9px; letter-spacing:.22em; text-transform:uppercase;
  color:rgba(216,196,140,.55);
}
</style>
