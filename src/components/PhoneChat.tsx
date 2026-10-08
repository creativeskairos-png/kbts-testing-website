"use client";

import { useEffect, useRef, useState } from "react";
import { how } from "@/content/site";
import { ArrowRight } from "./Icons";
import { T } from "./T";

const { messages } = how.phone;

// Bubbles pop up in sequence (React Bits FolderFloat timing: spring rise with
// overshoot, staggered) when the phone scrolls into view, and reset once it
// has fully left the screen so the sequence replays on the way back.
export function PhoneChat() {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setReady(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.35) setOpen(true);
        else if (!entry.isIntersecting) setOpen(false);
      },
      { threshold: [0, 0.35] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="chat-pop flex flex-1 flex-col gap-3 px-3 py-4 text-[12px] leading-snug"
      data-ready={ready ? "" : undefined}
      data-open={open ? "" : undefined}
    >
      {messages.map((m, i) => (
        <p
          key={i}
          className={`chat-pop__item max-w-[85%] rounded-2xl px-3 py-2 ${
            m.from === "client"
              ? "ml-auto rounded-br-sm bg-sea text-white [--origin:100%_100%] [--tilt:6deg]"
              : "rounded-bl-sm bg-white shadow-[var(--shadow-raised)] [--origin:0%_100%] [--tilt:-6deg]"
          }`}
          style={{ "--i": i } as React.CSSProperties}
        >
          <T t={m.text} />
        </p>
      ))}
      <div
        className="chat-pop__item mt-auto flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[11px] text-muted ring-1 ring-line [--origin:50%_100%] [--tilt:0deg]"
        style={{ "--i": messages.length } as React.CSSProperties}
      >
        <T t={how.phone.input} />
        <span className="ml-auto grid size-6 place-items-center rounded-full bg-blaze text-mirage">
          <ArrowRight className="size-3" />
        </span>
      </div>
    </div>
  );
}
