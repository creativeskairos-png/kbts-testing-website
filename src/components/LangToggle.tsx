"use client";

import type { Lang } from "@/content/site";
import { setLang, useLang } from "@/lib/lang";

const options: { id: Lang; label: string; name: string }[] = [
  { id: "en", label: "EN", name: "English" },
  { id: "sw", label: "SW", name: "Kiswahili" },
];

export function LangToggle() {
  const lang = useLang();
  return (
    <div
      role="group"
      aria-label={lang === "sw" ? "Badilisha lugha" : "Change language"}
      className="flex items-center rounded-full bg-sand-50 p-1 text-xs font-semibold ring-1 ring-line"
    >
      {options.map((o) => {
        const active = lang === o.id;
        return (
          <button
            key={o.id}
            type="button"
            lang={o.id}
            aria-pressed={active}
            aria-label={o.name}
            onClick={() => setLang(o.id)}
            className={`press grid h-8 min-w-10 place-items-center rounded-full px-2.5 ${
              active ? "bg-mirage text-white" : "text-mirage/70 hover:text-sea"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
