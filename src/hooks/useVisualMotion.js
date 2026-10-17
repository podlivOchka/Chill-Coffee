import { useEffect, useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";
const subscribe = (callback) => {
  const preference = window.matchMedia(query);
  preference.addEventListener("change", callback);
  return () => preference.removeEventListener("change", callback);
};
const snapshot = () => window.matchMedia(query).matches;
const serverSnapshot = () => false;
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, snapshot, serverSnapshot);
}

export default function useVisualMotion(disabled) {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.motion = disabled ? "paused" : "active";
    const hero = document.querySelector(".hero");
    const parallax = [...document.querySelectorAll("[data-parallax]")];
    const depth = [...document.querySelectorAll("[data-interactive-visual]")];
    let frame = 0;

    function update() {
      frame = 0;
      const height = Math.max(1, window.innerHeight);
      const scrollRange = root.scrollHeight - height;
      root.style.setProperty(
        "--page-progress",
        scrollRange > 0 ? clamp(window.scrollY / scrollRange, 0, 1) : 0,
      );
      root.dataset.scrolled = window.scrollY > 30 ? "true" : "false";
      if (disabled) return;
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const progress = clamp(-rect.top / Math.max(1, rect.height), 0, 1);
        hero.style.setProperty("--hero-shift", `${progress * 100}px`);
        hero.style.setProperty("--hero-roll", `${progress * -7}deg`);
      }
      parallax.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -100 || rect.top > height + 100) return;
        const strength = Number(element.dataset.parallax) || 30;
        const progress = (height / 2 - rect.top - rect.height / 2) / height;
        element.style.setProperty(
          "--parallax-y",
          `${clamp(progress * strength, -45, 45)}px`,
        );
        element.style.setProperty(
          "--scene-turn",
          `${clamp(progress * 7, -6, 6)}deg`,
        );
      });
    }

    function requestUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const pointerBindings = [];
    if (!disabled && finePointer) {
      depth.forEach((element) => {
        const move = (event) => {
          const rect = element.getBoundingClientRect();
          if (!rect.width || !rect.height) return;
          const x = clamp(
            (event.clientX - rect.left) / rect.width - 0.5,
            -0.5,
            0.5,
          );
          const y = clamp(
            (event.clientY - rect.top) / rect.height - 0.5,
            -0.5,
            0.5,
          );
          element.style.setProperty("--pointer-x", `${x * 20}px`);
          element.style.setProperty("--pointer-y", `${y * 16}px`);
          element.style.setProperty("--tilt-x", `${-y * 5}deg`);
          element.style.setProperty("--tilt-y", `${x * 5}deg`);
        };
        const leave = () =>
          ["--pointer-x", "--pointer-y", "--tilt-x", "--tilt-y"].forEach(
            (name) => element.style.removeProperty(name),
          );
        element.addEventListener("pointermove", move);
        element.addEventListener("pointerleave", leave);
        pointerBindings.push(() => {
          element.removeEventListener("pointermove", move);
          element.removeEventListener("pointerleave", leave);
          leave();
        });
      });
    }
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    update();
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      pointerBindings.forEach((remove) => remove());
      parallax.forEach((element) => {
        element.style.removeProperty("--parallax-y");
        element.style.removeProperty("--scene-turn");
      });
      hero?.style.removeProperty("--hero-shift");
      hero?.style.removeProperty("--hero-roll");
    };
  }, [disabled]);
}
