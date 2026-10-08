"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Marks its element data-open while it is on screen (and data-ready once JS
// has mounted), so CSS can run entrance animations without hiding content
// when JS is unavailable. Resets after leaving the screen so it replays.
export function InView({ className, children, threshold = 0.25 }: { className?: string; children: ReactNode; threshold?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setReady(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= threshold) setOpen(true);
        else if (!entry.isIntersecting) setOpen(false);
      },
      { threshold: [0, threshold] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div ref={ref} className={className} data-ready={ready ? "" : undefined} data-open={open ? "" : undefined}>
      {children}
    </div>
  );
}
