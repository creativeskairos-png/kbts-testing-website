"use client";

import { useState } from "react";
import { form } from "@/content/site";
import { useLang } from "@/lib/lang";
import { T } from "./T";

type Status = "idle" | "error" | "done";

// Call-back request. No backend yet, so it validates and says so honestly.
export function SignupForm() {
  const lang = useLang();
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const v = value.trim();
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    const isPhone = v.replace(/[\s()+-]/g, "").length >= 9 && /^[\d\s()+-]+$/.test(v);
    setStatus(isEmail || isPhone ? "done" : "error");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mx-auto mt-8 w-full max-w-md">
      <div className="flex items-center gap-2 rounded-full bg-white/10 p-1.5 ring-1 ring-white/15 focus-within:ring-white/40">
        <label htmlFor="cta-contact" className="sr-only">
          <T t={form.label} />
        </label>
        <input
          id="cta-contact"
          type="text"
          inputMode="email"
          autoComplete="email"
          placeholder={form.label[lang]}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          aria-invalid={status === "error"}
          aria-describedby="cta-contact-msg"
          className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/55 focus:outline-none"
        />
        <button
          type="submit"
          className="press min-h-11 shrink-0 rounded-full bg-blaze px-5 text-sm font-semibold text-mirage shadow-[var(--shadow-cta)] hover:bg-blaze-600"
        >
          <T t={form.submit} />
        </button>
      </div>
      <p id="cta-contact-msg" role="status" className="mt-3 min-h-5 text-xs text-white/75">
        {status === "error" && <T t={form.error} />}
        {status === "done" && <T t={form.done} />}
      </p>
    </form>
  );
}
