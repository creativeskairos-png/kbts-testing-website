"use client";

import { useSyncExternalStore } from "react";
import type { L, Lang } from "@/content/site";

export const LANG_KEY = "kbts-lang";

// Current language lives on <html data-lang>, set before paint by the inline
// script in layout.tsx and changed by <LangToggle>. Components that need the
// language in JS (attributes, rotating words) subscribe here; plain text uses <T>.
function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-lang"] });
  return () => mo.disconnect();
}

const getLang = (): Lang => (document.documentElement.dataset.lang === "sw" ? "sw" : "en");

export function useLang(): Lang {
  return useSyncExternalStore(subscribe, getLang, () => "en");
}

export function setLang(lang: Lang) {
  const html = document.documentElement;
  html.dataset.lang = lang;
  html.lang = lang;
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    // Storage blocked: the choice just won't persist.
  }
}

export const pick = (t: L, lang: Lang) => t[lang];
