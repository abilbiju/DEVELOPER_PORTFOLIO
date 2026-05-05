import { useEffect, useRef } from "react";

type CharState = {
  pos: number;
  vel: number;
};

export default function WeightWaveText() {
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // Split text into spans
  const split = (el: HTMLElement): HTMLElement[] => {
    const raw = el.textContent || "";
    el.textContent = "";

    return raw.split("").map((ch) => {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = ch;
      el.appendChild(span);
      return span;
    });
  };

  // Spring function
  const spring = (
    s: CharState,
    target: number,
    k = 0.08,
    d = 0.72
  ): boolean => {
    s.vel += (target - s.pos) * k;
    s.vel *= d;
    s.pos += s.vel;
    return Math.abs(s.vel) + Math.abs(target - s.pos) < 0.05;
  };

  // Animation loop
  const startAnimation = () => {
    const el = textRef.current;
    if (!el) return;

    const chars = split(el);
    const states: CharState[] = chars.map(() => ({
      pos: 400,
      vel: 0,
    }));

    let t = 0;

    const tick = () => {
      t++;

      chars.forEach((ch, i) => {
        const target =
          400 + Math.sin(t * 0.055 - i * 0.5) * 290;

        spring(states[i], target, 0.05, 0.82);

        ch.style.fontVariationSettings = `'wght' ${states[i].pos}`;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  // Start on mount
  useEffect(() => {
    startAnimation();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="text-center p-5">
      <h1
        ref={textRef}
        className="text-3xl md:text-6xl font-bold text-black dark:text-white flex flex-wrap justify-center"
      >
        Always cooking something...
      </h1>

    </div>
  );
}