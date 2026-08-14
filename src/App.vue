<script setup>
import { ref, watch, onMounted, onUnmounted, computed } from "vue";
import { config } from "./config/invitation";
import { useCountdown } from "./composables/useCountdown";
import { useScrollSpy } from "./composables/useScrollSpy";
import { useSfx } from "./composables/useSfx";

import ThePreloader from "./components/ThePreloader.vue";
import SealRitual from "./components/SealRitual.vue";
import OpeningScreen from "./components/OpeningScreen.vue";
import HeroSection from "./components/HeroSection.vue";
import QuoteSection from "./components/QuoteSection.vue";
import CoupleSection from "./components/CoupleSection.vue";
import StorySection from "./components/StorySection.vue";
import EventSection from "./components/EventSection.vue";
import GallerySection from "./components/GallerySection.vue";
import RsvpSection from "./components/RsvpSection.vue";
import GiftSection from "./components/GiftSection.vue";
import ClosingSection from "./components/ClosingSection.vue";
import NavDock from "./components/NavDock.vue";
import MusicButton from "./components/MusicButton.vue";

const booting = ref(true);
const ritualDone = ref(false);
const opened = ref(false);
const playing = ref(false);
const guest = ref("");
const audio = ref(null);

const { countdown, unlockCd, locked, unlockNote } = useCountdown(config.weddingDate, config.unlockDays);
const { progress, active, goTo } = useScrollSpy([
  "sec-hero", "sec-couple", "sec-acara", "sec-galeri", "sec-rsvp"
]);
const { play, buzz } = useSfx();

const hasMusic = computed(() => !!config.music);

onMounted(() => {
  const q = new URLSearchParams(location.search).get("to");
  if (q) guest.value = decodeURIComponent(q.replace(/\+/g, " "));
  document.body.style.overflow = "hidden";
});

onUnmounted(() => { document.body.style.overflow = ""; });

function openInvitation() {
  if (locked.value) return;
  play(config.sfx.seal, 0.5);
  buzz([20, 38, 14]);
  opened.value = true;
  playing.value = true;
  document.body.style.overflow = "";
  window.scrollTo(0, 0);
}

watch([playing, opened], () => {
  const a = audio.value;
  if (!a) return;
  a.volume = 0.5;
  if (playing.value && opened.value) {
    const p = a.play();
    if (p && p.catch) p.catch(() => {});
  } else {
    a.pause();
  }
});
</script>

<template>
  <div class="app">
    <ThePreloader v-if="booting" @done="booting = false" />

    <!-- Progress scroll -->
    <div class="progress" :style="{ opacity: opened ? 1 : 0 }">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>

    <!-- Undangan -->
    <template v-if="opened">
      <HeroSection :countdown="countdown" />
      <QuoteSection />
      <CoupleSection />
      <StorySection />
      <EventSection />
      <GallerySection />
      <RsvpSection />
      <GiftSection />
      <ClosingSection />
    </template>

    <!-- Layar pembuka -->
    <div v-else class="cover">
      <SealRitual v-if="!ritualDone" @done="ritualDone = true" />
      <OpeningScreen
        v-else
        :guest="guest"
        :locked="locked"
        :unlock-cd="unlockCd"
        :unlock-note="unlockNote()"
        @open="openInvitation"
      />
    </div>

    <audio v-if="hasMusic" ref="audio" :src="config.music" loop preload="auto"></audio>

    <NavDock :active="active" :visible="opened" @go="goTo" />
    <MusicButton :playing="playing" :visible="opened" @toggle="playing = !playing" />
  </div>
</template>

<style scoped>
.app { position:relative; width:100%; min-height:100vh; background:#050807; overflow:hidden; }
.cover {
  position:relative; z-index:5;
  min-height:100vh; display:flex;
  background:linear-gradient(180deg, #050807 0%, #062820 55%, #050807 100%);
}
.progress {
  position:fixed; top:0; left:0; right:0; height:2px; z-index:72;
  pointer-events:none; transition:opacity 1.2s ease 1.2s;
}
.progress-bar {
  height:100%;
  background:linear-gradient(90deg, rgba(15,107,80,.9), #BFA15F, #D8C48C);
  box-shadow:0 0 14px rgba(191,161,95,.6);
}
</style>
