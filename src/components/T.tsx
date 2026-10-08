import type { L } from "@/content/site";

// Renders both languages; CSS shows the one matching <html data-lang>.
// Works in server and client components, with no flash on load.
export function T({ t }: { t: L }) {
  return (
    <>
      <span lang="en" data-l="en">
        {t.en}
      </span>
      <span lang="sw" data-l="sw">
        {t.sw}
      </span>
    </>
  );
}
