"use client";

import { useEffect, useRef, useState } from "react";
import { nav, ui } from "@/content/site";
import { useLang } from "@/lib/lang";
import { T } from "./T";

// Menu for screens below lg, where the header nav is hidden.
// Closes on link tap, Escape, or tapping outside.
export function MobileMenu() {
  const lang = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? (lang === "sw" ? "Funga menyu" : "Close menu") : lang === "sw" ? "Fungua menyu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="press grid size-11 place-items-center rounded-full text-mirage ring-1 ring-line hover:bg-sand-50 active:bg-sand"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden>
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-white shadow-[var(--shadow-float)]"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-[1200px] px-4 py-3 sm:px-6">
          <ul className="grid">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-mirage hover:bg-sand-50 active:bg-sand"
                >
                  <T t={item.label} />
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="press flex min-h-12 items-center justify-center rounded-full bg-blaze text-sm font-semibold text-mirage hover:bg-blaze-600"
              >
                <T t={ui.getQuote} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
