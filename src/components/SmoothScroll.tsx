"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.15,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const stopLenis = () => lenis.stop();
    const startLenis = () => lenis.start();

    window.addEventListener("lenis:stop", stopLenis);
    window.addEventListener("lenis:start", startLenis);

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("lenis:stop", stopLenis);
      window.removeEventListener("lenis:start", startLenis);
      lenis.destroy();
    };
  }, []);

  return null;
}
