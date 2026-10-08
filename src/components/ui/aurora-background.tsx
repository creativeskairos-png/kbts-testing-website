"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
  /** Softness of the aurora in px. Higher = smoother, lower contrast. */
  blur?: number;
}

// Adapted for KBTS: renders a <div> (the page already has <main>), aurora
// colours come from the brand palette, no dark-mode switch (the site is light
// only), adjustable blur, and the drift stops for people who prefer reduced motion.
export const AuroraBackground = ({ className, children, showRadialGradient = true, blur = 10, ...props }: AuroraBackgroundProps) => {
  return (
    <div
      className={cn("relative flex h-[100vh] flex-col items-center justify-center bg-white text-ink", className)}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--color-sea)_10%,var(--color-sea-100)_15%,var(--color-sea-600)_20%,var(--color-sand)_25%,var(--color-sea)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            after:absolute after:inset-0 after:content-[""]
            after:[background-image:var(--white-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            motion-reduce:after:animate-none
            pointer-events-none
            absolute opacity-50 will-change-transform`,
            showRadialGradient && `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
          )}
          // Overscan by twice the blur so the soft edges never show
          style={{ filter: `blur(${blur}px) invert(1)`, inset: `-${blur * 2}px` }}
        />
      </div>
      {children}
    </div>
  );
};
