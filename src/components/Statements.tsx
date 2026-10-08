"use client";

import { useState } from "react";
import { statements } from "@/content/site";
import { useLang } from "@/lib/lang";
import { ArrowLeft, ArrowRight } from "./Icons";
import { T } from "./T";

export function Statements() {
  const lang = useLang();
  const [i, setI] = useState(0);
  const current = statements[i];
  const go = (step: number) => setI((n) => (n + step + statements.length) % statements.length);

  return (
    <figure>
      <span className="block font-display text-7xl leading-none font-bold text-sea-100" aria-hidden>
        &ldquo;
      </span>
      <blockquote aria-live="polite" className="mt-2 min-h-[8.5em] font-display text-[clamp(1.375rem,2.4vw,1.875rem)] leading-[1.35] font-semibold tracking-[-0.02em] sm:min-h-[6em]">
        <T t={current.text} />
      </blockquote>
      <div className="mt-10 flex items-end justify-between gap-6">
        <figcaption>
          <p className="font-semibold">
            <T t={current.label} />
          </p>
          <p className="text-xs text-muted">
            {i + 1} {lang === "sw" ? "kati ya" : "of"} {statements.length}
          </p>
        </figcaption>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label={lang === "sw" ? "Iliyotangulia" : "Previous statement"}
            onClick={() => go(-1)}
            className="press grid size-11 place-items-center rounded-full text-mirage ring-1 ring-line hover:bg-sand-50 active:bg-sand"
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            aria-label={lang === "sw" ? "Inayofuata" : "Next statement"}
            onClick={() => go(1)}
            className="press grid size-11 place-items-center rounded-full bg-sea text-white hover:bg-sea-600"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </figure>
  );
}
