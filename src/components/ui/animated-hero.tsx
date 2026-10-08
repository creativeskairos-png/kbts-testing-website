"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { T } from "@/components/T";
import { company, contact, hero, ui } from "@/content/site";
import { useLang } from "@/lib/lang";

// Adapted from the shadcn "animated hero". Motion is plain CSS (see .hero-rise
// and .hero-word in globals.css) instead of framer-motion, so the hero ships
// far less JavaScript and starts animating before hydration finishes.

const delay = (i: number) => ({ "--d": `${100 + i * 90}ms` }) as CSSProperties;

function Hero({ media, children }: { media?: ReactNode; children?: ReactNode }) {
  const lang = useLang();
  const titles = hero.words[lang];
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setTitleNumber((n) => (n + 1) % titles.length), 2400);
    return () => clearTimeout(id);
  }, [titleNumber, titles.length]);

  const callHref = contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, "")}` : "#contact";

  return (
    <section className="mx-auto grid w-full max-w-[1200px] items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-10 lg:py-20">
      <div className="flex flex-col items-start gap-8">
        <div className="hero-rise" style={delay(0)}>
          <Button asChild variant="secondary" size="sm">
            <a href="#services">
              <T t={ui.exploreServices} /> <MoveRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="hero-rise text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] font-extrabold tracking-[-0.035em]" style={delay(1)}>
            <span className="block">
              <T t={company.headline} />
            </span>
            <span className="block">
              <T t={hero.lead} />
            </span>
            {/* Screen readers get the first ending once; the rotation is visual only */}
            <span className="sr-only">{titles[0]}</span>
            <span className="relative flex h-[1.15em] w-full overflow-hidden" aria-hidden>
              {titles.map((title, index) => (
                <span
                  key={`${lang}-${title}`}
                  className="hero-word absolute left-0 whitespace-nowrap text-sea"
                  data-state={index === titleNumber ? "current" : index < titleNumber ? "past" : "next"}
                >
                  {title}
                </span>
              ))}
            </span>
          </h1>

          <p className="hero-rise max-w-md text-base text-muted-foreground" style={delay(2)}>
            <T t={company.summary} />
          </p>
        </div>

        <div className="hero-rise flex flex-wrap gap-3" style={delay(3)}>
          <Button asChild size="lg">
            <a href="#contact">
              <T t={ui.getQuote} /> <MoveRight className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={callHref}>
              <T t={contact.phone ? ui.callKbts : ui.callBack} /> <PhoneCall className="size-4" />
            </a>
          </Button>
        </div>

        {children && (
          <div className="hero-rise" style={delay(4)}>
            {children}
          </div>
        )}
      </div>

      {media && (
        <div className="hero-media" style={{ "--d": "350ms" } as CSSProperties}>
          {media}
        </div>
      )}
    </section>
  );
}

export { Hero };
