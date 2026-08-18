import { ref } from "vue";
import { config } from "../config/invitation";

const KEY = "wf-wishes";

/**
 * Daftar ucapan: localStorage tampil dulu (agar tidak pernah kosong),
 * lalu diam-diam diganti dengan daftar bersama dari rsvpEndpoint bila ada,
 * sehingga semua tamu melihat ucapan yang sama.
 */
export function useRsvp() {
  const stored = (() => {
    try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { return null; }
  })();

  const wishes = ref(Array.isArray(stored) && stored.length ? stored : [...config.seedWishes]);
  const sending = ref(false);

  const persist = () => {
    try { localStorage.setItem(KEY, JSON.stringify(wishes.value)); } catch (e) {}
  };

  const refresh = async () => {
    if (!config.rsvpEndpoint) return;
    try {
      const res = await fetch(config.rsvpEndpoint);
      const data = await res.json();
      if (Array.isArray(data) && data.length) {
        wishes.value = data.slice().reverse();
        persist();
      }
    } catch (e) {
      console.warn("Gagal memuat ucapan dari server, menampilkan cadangan lokal.", e);
    }
  };

  const submit = async entry => {
    wishes.value = [entry, ...wishes.value];
    persist();
    if (!config.rsvpEndpoint) return;
    sending.value = true;
    try {
      await fetch(config.rsvpEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(entry)
      });
    } catch (e) {
      console.warn("RSVP gagal terkirim ke server, tersimpan lokal.", e);
    } finally {
      sending.value = false;
    }
  };

  refresh();

  return { wishes, sending, submit };
}
