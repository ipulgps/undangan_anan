import { ref, onMounted, onUnmounted } from "vue";

/** Progress bar + section aktif + smooth scroll manual. */
export function useScrollSpy(ids) {
  const progress = ref(0);
  const active = ref(ids[0]);
  let raf, tween;

  const top = () =>
    document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;

  const loop = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.value = max > 0 ? Math.min(100, Math.max(0, (top() / max) * 100)) : 0;
    let a = ids[0];
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= innerHeight * 0.42) a = id;
    }
    active.value = a;
    raf = requestAnimationFrame(loop);
  };

  const goTo = id => {
    const el = document.getElementById(id);
    if (!el) return;
    const from = top();
    const to = Math.max(0, el.getBoundingClientRect().top + from);
    const dur = Math.min(1100, Math.max(420, Math.abs(to - from) * 0.42));
    const t0 = performance.now();
    cancelAnimationFrame(tween);
    const step = now => {
      const k = Math.min(1, (now - t0) / dur);
      const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      const y = from + (to - from) * e;
      document.documentElement.scrollTop = y;
      document.body.scrollTop = y;
      if (k < 1) tween = requestAnimationFrame(step);
    };
    tween = requestAnimationFrame(step);
  };

  onMounted(() => loop());
  onUnmounted(() => { cancelAnimationFrame(raf); cancelAnimationFrame(tween); });

  return { progress, active, goTo };
}
