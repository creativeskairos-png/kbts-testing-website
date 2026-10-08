import Image from "next/image";
import {
  company,
  contact,
  ctaSection,
  faqSection,
  footer,
  hero,
  how,
  intro,
  nav,
  pillars,
  plans,
  plansSection,
  services,
  servicesSection,
  strip,
  ui,
  whatsappLink,
  why,
  type ServiceId,
} from "@/content/site";
import { InView } from "@/components/InView";
import { LangToggle } from "@/components/LangToggle";
import { PhoneChat } from "@/components/PhoneChat";
import { SignupForm } from "@/components/SignupForm";
import { Statements } from "@/components/Statements";
import { T } from "@/components/T";
import { Hero as AnimatedHero } from "@/components/ui/animated-hero";
import { MobileMenu } from "@/components/MobileMenu";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
  ArrowRight,
  Bolt,
  Bulb,
  Camera,
  Check,
  ChevronDown,
  Clipboard,
  House,
  People,
  Pin,
  Search,
  Star,
  Wrench,
} from "@/components/Icons";

const container = "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10";
const btnPrimary =
  "press inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blaze px-6 text-sm font-semibold text-mirage shadow-[var(--shadow-cta)] hover:bg-blaze-600 active:bg-blaze-600";
const h2 = "text-[clamp(1.875rem,3.4vw,2.5rem)] leading-[1.15] font-bold tracking-[-0.03em]";

const serviceIcons: Record<ServiceId, typeof Camera> = {
  cctv: Camera,
  electrical: Bolt,
  automation: House,
  lighting: Bulb,
  maintenance: Wrench,
  inspection: Search,
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <div className="pb-14">
          <ServiceStrip />
          <Pillars />
        </div>
        <Intro />
        <Services />
        <Why />
        <HowWeWork />
        <Plans />
        <Mission />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}

function Wordmark({ className = "h-12" }: { className?: string }) {
  return (
    <a href="#top" className="shrink-0" aria-label={`${company.name} home`}>
      <Image src="/brand/kbts-logo.png" alt={`${company.name}: ${company.tagline}`} width={782} height={596} priority className={`w-auto ${className}`} />
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white">
      <div className={`${container} flex h-[72px] items-center justify-between gap-4`}>
        <Wordmark />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-mirage/80">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex items-center gap-1 py-2 hover:text-sea">
                  <T t={item.label} />
                  {item.href === "#services" && <ChevronDown />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LangToggle />
          <a href="#contact" className={`${btnPrimary} !min-h-10 !px-5 hidden sm:inline-flex`}>
            <T t={ui.getQuote} />
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <AnimatedHero media={<HeroBento />}>
      <ul className="flex flex-wrap gap-x-8 gap-y-4">
        {hero.perks.map((perk, i) => (
          <li key={perk.en} className="flex max-w-[210px] items-center gap-3 text-xs leading-snug font-medium">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-sea-100 text-sea">{i === 0 ? <Wrench /> : <Clipboard />}</span>
            <T t={perk} />
          </li>
        ))}
      </ul>
    </AnimatedHero>
  );
}

// [NEEDS APPROVAL] confirm licence/consent for all hero photos before launch
function HeroBento() {
  const overlay = (
    <>
      <div className="pointer-events-none absolute inset-0 bg-sea opacity-15 mix-blend-multiply" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent to-50%" aria-hidden />
    </>
  );
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-4">
        <figure className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/cctv-camera-install.jpg"
            alt="Hands fitting a white bullet CCTV camera under a roof overhang"
            width={720}
            height={480}
            priority
            sizes="(min-width: 1024px) 270px, 45vw"
            className="aspect-[4/3] w-full object-cover object-[60%_50%]"
          />
          {overlay}
          <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[var(--shadow-raised)]">
            <span className="grid size-6 place-items-center rounded-full bg-sea-100 text-sea">
              <Pin className="size-3.5" />
            </span>
            <span className="text-[11px] leading-tight">
              <span className="block text-muted">
                <T t={hero.chips.basedIn} />
              </span>
              <span className="font-semibold">
                {company.city}, {company.country}
              </span>
            </span>
          </div>
        </figure>
        <figure className="relative overflow-hidden rounded-2xl">
          <Image
            src="/images/technician-ac-service.jpg"
            alt="Technician servicing a wall-mounted air conditioning unit"
            width={736}
            height={1104}
            sizes="(min-width: 1024px) 270px, 45vw"
            className="aspect-[4/3] w-full object-cover object-[50%_8%]"
          />
          {overlay}
        </figure>
      </div>
      <figure className="relative flex flex-col overflow-hidden rounded-2xl bg-sea-100">
        <div className="relative min-h-[280px] flex-1">
          <Image
            src="/images/technician-portrait.jpg"
            alt="Smiling technician in a white hard hat and orange safety vest"
            fill
            priority
            sizes="(min-width: 1024px) 270px, 45vw"
            className="object-cover object-[50%_15%]"
          />
          {overlay}
        </div>
        <div className="absolute right-3 bottom-[4.5rem] left-3 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[var(--shadow-float)]">
          <span className="grid size-7 shrink-0 place-items-center rounded-full bg-sea text-white">
            <Check className="size-3.5" />
          </span>
          <span className="flex-1 text-[11px] leading-tight">
            <span className="block font-semibold">
              <T t={hero.chips.tested} />
            </span>
            <span className="text-muted">
              <T t={hero.chips.handover} />
            </span>
          </span>
        </div>
        <figcaption className="bg-sea-100 px-4 py-3 font-display text-xs leading-snug font-bold text-sea">
          Smart solutions.
          <br />
          Reliable service.
        </figcaption>
      </figure>
    </div>
  );
}

function ServiceStrip() {
  return (
    <section aria-label="Services" className="border-y border-line/70 bg-sand-50">
      <div className={`${container} flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between`}>
        <p className="shrink-0 text-sm font-semibold">
          <T t={strip.label} />
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-mirage/80">
          {services.map((s) => {
            const Icon = serviceIcons[s.id];
            return (
              <li key={s.id}>
                <a href="#services" className="flex items-center gap-2 font-display text-[15px] font-bold tracking-[-0.01em] hover:text-sea">
                  <Icon className="size-5 text-sea" />
                  <T t={s.short} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section aria-label="What KBTS does" className={`${container} pt-12`}>
      <div className="bevel-banner relative overflow-hidden bg-sea text-white">
        <svg className="pointer-events-none absolute -bottom-24 -left-16 size-64 text-white/15" viewBox="0 0 200 200" fill="none" stroke="currentColor" aria-hidden>
          {[30, 50, 70, 90].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} />
          ))}
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-1 bg-blaze" aria-hidden />
        <dl className="relative grid gap-6 px-6 py-8 sm:grid-cols-3 sm:px-10">
          {pillars.map((p) => (
            <div key={p.value.en} className="text-center">
              <dt className="sr-only">
                <T t={p.label} />
              </dt>
              <dd className="font-display text-[clamp(2rem,3.8vw,3rem)] leading-none font-extrabold tracking-[-0.03em]">
                <T t={p.value} />
              </dd>
              <dd className="mt-2 text-xs text-white/80">
                <T t={p.label} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Intro() {
  const icons = [Wrench, People, Pin];
  return (
    <section id="about" className={`${container} grid scroll-mt-20 gap-10 pt-20 lg:grid-cols-[1fr_1.4fr] lg:gap-16`}>
      <div>
        <h2 className={h2}>
          <T t={intro.heading} />
        </h2>
        <p className="mt-5 max-w-md text-base text-muted">
          <T t={intro.body} />
        </p>
      </div>
      <InView className="pop-group">
      <dl className="grid gap-4 sm:grid-cols-3">
        {intro.facts.map((f, i) => {
          const Icon = icons[i];
          return (
            <div
              key={f.title.en}
              style={{ "--i": i, "--tilt": i === 1 ? "0deg" : i === 0 ? "-2deg" : "2deg", "--card-stagger": "120ms" } as React.CSSProperties}
              className="pop-card group rounded-2xl bg-sand-50 p-5 ring-1 ring-line"
            >
              <span className="icon-spring grid size-10 place-items-center rounded-xl bg-sea text-white">
                <Icon />
              </span>
              <dt className="mt-4 font-display text-base font-bold">
                <T t={f.title} />
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted">
                <T t={f.text} />
              </dd>
            </div>
          );
        })}
      </dl>
      </InView>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className={`${container} scroll-mt-20 pt-24`}>
      <div className="max-w-xl">
        <h2 className={h2}>
          <T t={servicesSection.heading} />
        </h2>
        <p className="mt-4 text-base text-muted">
          <T t={servicesSection.body} />
        </p>
      </div>
      <InView className="pop-group mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.id];
          return (
            <article
              key={s.id}
              style={{ "--i": i, "--tilt": "0deg", "--card-stagger": "90ms" } as React.CSSProperties}
              className="pop-card flex flex-col rounded-3xl bg-white p-6 shadow-[var(--shadow-raised)] ring-1 ring-line"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-sea-100 text-sea">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-[-0.01em]">
                <T t={s.name} />
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                <T t={s.text} />
              </p>
              <a href="#contact" className="nudge mt-5 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold text-sea hover:underline">
                <T t={servicesSection.ask} /> <ArrowRight className="size-3.5" />
              </a>
            </article>
          );
        })}
      </InView>
    </section>
  );
}

function Why() {
  return (
    <section id="why" className="mt-24 scroll-mt-20 bg-sand-50 py-20">
      <div className={container}>
        <h2 className={`${h2} text-center`}>
          <T t={why.heading} />
        </h2>
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {why.items.map((item) => (
            <li key={item.title.en} className="flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-blaze text-mirage">
                <Check />
              </span>
              <span>
                <span className="block font-display text-base font-bold">
                  <T t={item.title} />
                </span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">
                  <T t={item.text} />
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section id="how" className="scroll-mt-20 overflow-hidden pt-24">
      <div className={container}>
        <h2 className={`${h2} text-center`}>
          <T t={how.heading} />
        </h2>

        <div className="mt-14 grid items-start gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-6">
          {/* Left: quote request summary */}
          <div className="flex flex-col gap-10 md:pt-6">
            <div className="relative z-20 rounded-2xl bg-white p-5 shadow-[var(--shadow-float)] ring-1 ring-line md:-mr-8">
              <p className="text-xs text-muted">
                <T t={how.quote.label} />
              </p>
              <p className="text-sm font-semibold">
                <T t={how.quote.title} />
              </p>
              <dl className="mt-4 grid gap-2.5 text-xs">
                {how.quote.rows.map(([k, v]) => (
                  <div key={k.en} className="flex justify-between gap-4 border-b border-line pb-2.5 last:border-0 last:pb-0">
                    <dt className="text-muted">
                      <T t={k} />
                    </dt>
                    <dd className="text-right font-semibold">
                      <T t={v} />
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-[10px] text-muted">
                <T t={how.quote.example} />
              </p>
            </div>
            <div className="flex flex-col items-end gap-3 text-right">
              <span className="grid size-9 place-items-center rounded-lg bg-sea text-white">
                <Clipboard />
              </span>
              <h3 className="text-lg leading-tight font-bold">
                <T t={how.quote.caption[0]} />
                <br />
                <T t={how.quote.caption[1]} />
              </h3>
            </div>
          </div>

          {/* Center: phone showing a WhatsApp-style enquiry */}
          <div className="relative z-10 mx-auto h-[520px] w-[270px] overflow-hidden" aria-label="Example WhatsApp enquiry to KBTS" role="img">
            <div className="h-[600px] rounded-[44px] bg-mirage p-3 shadow-[var(--shadow-float)]">
              <div className="flex h-full flex-col overflow-hidden rounded-[34px] bg-sand-50">
                <div className="flex justify-between bg-white px-4 pt-3 text-[11px] font-semibold">
                  <span>9:41</span>
                  <span className="h-5 w-20 rounded-full bg-mirage" aria-hidden />
                  <span>100%</span>
                </div>
                <div className="flex items-center gap-3 border-b border-line bg-white px-4 py-3">
                  <span className="grid size-9 place-items-center overflow-hidden rounded-full bg-white ring-1 ring-line">
                    <Image src="/brand/kbts-logo.png" alt="" width={782} height={596} className="w-7" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-sm font-semibold">KBTS</span>
                    <span className="text-[10px] text-muted">
                      <T t={how.phone.subtitle} />
                    </span>
                  </span>
                </div>
                <PhoneChat />
              </div>
            </div>
          </div>

          {/* Right: label + maintenance report */}
          <div className="flex flex-col gap-8 md:pt-10">
            <div className="flex flex-col gap-3">
              <span className="grid size-9 place-items-center rounded-lg bg-sea text-white">
                <Wrench />
              </span>
              <h3 className="text-lg leading-tight font-bold">
                <T t={how.report.caption[0]} />
                <br />
                <T t={how.report.caption[1]} />
              </h3>
            </div>
            <div className="relative z-20 rounded-2xl bg-white p-5 shadow-[var(--shadow-float)] ring-1 ring-line md:-ml-8">
              <div className="flex items-start justify-between">
                <p className="text-xs text-muted">
                  <T t={how.report.label} />
                </p>
                <span className="rounded-full bg-sea-100 px-2 py-0.5 text-[10px] font-semibold text-sea">
                  <T t={how.report.done} />
                </span>
              </div>
              <p className="mt-1 font-display text-xl font-bold tracking-[-0.02em]">
                <T t={how.report.title} />
              </p>
              <ul className="mt-4 grid gap-2 text-xs">
                {how.report.items.map((t) => (
                  <li key={t.en} className="flex items-center gap-2">
                    <Check className="size-3.5 shrink-0 text-sea" />
                    <T t={t} />
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[10px] text-muted">
                <T t={how.report.example} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Plans() {
  return (
    <section id="plans" className="relative z-0 -mt-24 bg-sand pt-40 pb-24">
      <InView className={`${container} pop-group grid gap-10 lg:grid-cols-[1fr_1.1fr_1.1fr] lg:gap-6`}>
        <div className="flex flex-col justify-between gap-8">
          <div>
            <h2 className={h2}>
              <T t={plansSection.heading} />
            </h2>
            <a href="#contact" className={`${btnPrimary} mt-6`}>
              <T t={ui.getQuote} />
            </a>
          </div>
          <p className="text-sm text-muted">
            <T t={plansSection.notSure} />
            <br />
            <a href="#contact" className="nudge inline-flex items-center gap-1 font-semibold text-sea underline-offset-4 hover:underline">
              <T t={plansSection.askAdvice} /> <ArrowRight className="size-3.5" />
            </a>
          </p>
        </div>

        {plans.map((plan, i) => (
          <article
            key={plan.name.en}
            style={{ "--i": i, "--tilt": i % 2 ? "3deg" : "-3deg" } as React.CSSProperties}
            className={`pop-card rounded-3xl p-7 ${
              plan.featured
                ? "bg-[radial-gradient(120%_80%_at_50%_0%,var(--color-mirage-700),var(--color-mirage))] text-white shadow-[var(--shadow-float)]"
                : "bg-white shadow-[var(--shadow-raised)] ring-1 ring-line"
            }`}
          >
            <div className="text-center">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold ${
                  plan.featured ? "bg-white/10 text-white" : "bg-sea-100 text-sea"
                }`}
              >
                {plan.featured && <Star className="size-3 text-blaze" />}
                <T t={plan.name} />
              </span>
              <p className="mt-5 font-display text-5xl font-extrabold tracking-[-0.03em]">
                <T t={plan.headline} />
              </p>
              <p className={`mt-1 text-xs ${plan.featured ? "text-white/65" : "text-muted"}`}>
                <T t={plan.note} />
              </p>
              {/* Same style as the hero "Get a quote" button */}
              <Button asChild size="lg" className="nudge mt-6 w-full">
                <a href="#contact">
                  <T t={plan.cta} /> <MoveRight className="size-4" />
                </a>
              </Button>
            </div>
            <ul className={`mt-7 grid gap-3 border-t pt-6 text-sm ${plan.featured ? "border-white/10 text-white/85" : "border-line text-mirage/80"}`}>
              {plan.features.map((f, j) => (
                <li key={f.en} style={{ "--j": j } as React.CSSProperties} className="pop-line flex items-start gap-3 leading-snug">
                  <Check className={`mt-0.5 size-4 shrink-0 ${plan.featured ? "text-blaze" : "text-sea"}`} />
                  <T t={f} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </InView>
    </section>
  );
}

function Mission() {
  return (
    <section aria-label="KBTS mission and vision" className={`${container} grid items-center gap-12 py-24 md:grid-cols-[1.2fr_1fr]`}>
      <Statements />
      {/* [NEEDS APPROVAL] confirm licence/consent for this photo before launch */}
      <figure className="relative overflow-hidden rounded-3xl">
        <Image
          src="/images/technician-on-site.jpg"
          alt="Technician in blue overalls fixing pipes under a kitchen sink"
          width={640}
          height={427}
          sizes="(min-width: 768px) 480px, 100vw"
          className="aspect-[16/13] w-full object-cover object-[60%_50%]"
        />
        <div className="pointer-events-none absolute inset-0 bg-sea opacity-15 mix-blend-multiply" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent to-50%" aria-hidden />
      </figure>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className={`${container} grid scroll-mt-20 gap-10 pb-24 lg:grid-cols-[1fr_1.6fr] lg:gap-16`}>
      <h2 className={h2}>
        <T t={faqSection.heading} />
      </h2>
      <div className="divide-y divide-line border-y border-line">
        {faqSection.items.map((item) => (
          <details key={item.q.en} className="group">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 font-display text-base font-bold hover:text-sea [&::-webkit-details-marker]:hidden">
              <T t={item.q} />
              <ChevronDown className="size-4 shrink-0 text-sea transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
            </summary>
            <p className="max-w-prose pb-5 text-sm leading-relaxed text-muted">
              <T t={item.a} />
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Cta() {
  const wa = whatsappLink();
  return (
    <section id="contact" className="bevel-top relative scroll-mt-16 overflow-hidden bg-mirage py-24 text-center text-white">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-full bg-[radial-gradient(50%_60%_at_50%_100%,rgb(7_80_86/0.7),transparent_70%),radial-gradient(30%_40%_at_80%_100%,rgb(255_91_4/0.18),transparent)]"
        aria-hidden
      />
      <div className={`${container} relative`}>
        <h2 className="mx-auto max-w-xl text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.1] font-extrabold tracking-[-0.035em]">
          <T t={ctaSection.heading} />
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm text-white/70">
          <T t={ctaSection.body} />
        </p>
        <SignupForm />
        {wa && (
          <a href={wa} target="_blank" rel="noopener noreferrer" className="nudge mt-2 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white hover:text-blaze">
            <T t={ui.whatsapp} /> <ArrowRight />
          </a>
        )}
      </div>
    </section>
  );
}

function Footer() {
  const details = [
    { label: footer.details.phone, value: contact.phone },
    { label: footer.details.email, value: contact.email },
    { label: footer.details.address, value: contact.address ?? `${company.city}, ${company.country}` },
    { label: footer.details.hours, value: contact.hours },
  ];
  return (
    <footer className="bg-white">
      <div className={`${container} grid gap-10 py-16 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]`}>
        <div>
          <Wordmark className="h-16" />
          <p className="mt-4 max-w-[280px] text-sm text-muted">
            <T t={company.footerSummary} />
          </p>
        </div>
        {footer.columns.map((col) => (
          <nav key={col.title.en} aria-label={col.title.en}>
            <h3 className="text-sm font-bold">
              <T t={col.title} />
            </h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted">
              {col.links.map((link) => (
                <li key={link.label.en}>
                  <a href={link.href} className="hover:text-sea">
                    <T t={link.label} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div>
          <h3 className="text-sm font-bold">
            <T t={footer.contactTitle} />
          </h3>
          <dl className="mt-4 grid gap-2 text-sm">
            {details.map((d) => (
              <div key={d.label.en}>
                <dt className="sr-only">
                  <T t={d.label} />
                </dt>
                <dd className={d.value ? "text-muted" : "text-muted/70 italic"}>
                  {d.value ?? (
                    <>
                      [PLACEHOLDER] <T t={d.label} />
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className={`${container} flex flex-col items-center justify-between gap-2 border-t border-line py-6 text-xs text-muted sm:flex-row`}>
        <p>
          © {new Date().getFullYear()} {company.name}. <T t={ui.rights} />
        </p>
        <p>{company.tagline}</p>
      </div>
    </footer>
  );
}
