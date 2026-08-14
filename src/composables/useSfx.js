/** Efek suara + getaran haptic. Gagal dengan tenang bila tidak didukung. */
export function useSfx() {
  const play = (src, volume = 0.5) => {
    try {
      const a = new Audio(src);
      a.volume = volume;
      const p = a.play();
      if (p && p.catch) p.catch(() => {});
    } catch (e) { /* diabaikan */ }
  };

  const buzz = pattern => {
    if (navigator.vibrate) { try { navigator.vibrate(pattern); } catch (e) {} }
  };

  return { play, buzz };
}
