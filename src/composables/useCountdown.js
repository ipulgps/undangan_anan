import { ref, onMounted, onUnmounted } from "vue";

const pad = n => String(n).padStart(2, "0");

/** Countdown ke tanggal acara + status lock H-n. */
export function useCountdown(dateStr, unlockDays = 0) {
  const target = new Date(dateStr).getTime();
  const unlockAt = target - unlockDays * 864e5;

  const countdown = ref([
    { value: "—", label: "HARI" }, { value: "—", label: "JAM" },
    { value: "—", label: "MENIT" }, { value: "—", label: "DETIK" }
  ]);
  const unlockCd = ref([]);
  const locked = ref(unlockDays > 0 && unlockAt > Date.now());

  const split = gap => [
    { value: String(Math.max(0, Math.floor(gap / 864e5))), label: "HARI" },
    { value: pad(Math.max(0, Math.floor(gap / 36e5) % 24)), label: "JAM" },
    { value: pad(Math.max(0, Math.floor(gap / 6e4) % 60)), label: "MENIT" },
    { value: pad(Math.max(0, Math.floor(gap / 1e3) % 60)), label: "DETIK" }
  ];

  const tick = () => {
    countdown.value = split(Math.max(0, target - Date.now()));
    const gap = unlockDays > 0 ? unlockAt - Date.now() : 0;
    locked.value = gap > 0;
    unlockCd.value = split(Math.max(0, gap));
  };

  let id;
  onMounted(() => { tick(); id = setInterval(tick, 1000); });
  onUnmounted(() => clearInterval(id));

  const unlockNote = () => "Dapat dibuka mulai " +
    new Date(unlockAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  return { countdown, unlockCd, locked, unlockNote };
}
