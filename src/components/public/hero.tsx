import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall, Flame, Compass, Dumbbell } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#09090b] text-white pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32"
    >
      {/* Background Lighting & Mesh Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Subtle radial red glows matching the brand */}
        <div className="absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-red-600/15 blur-[120px]" />
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-red-900/10 blur-[140px]" />
        {/* Sleek subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-red-400 mb-6 sm:mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
              LIFETIME FITNESS GYM
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl font-black uppercase tracking-tight text-white sm:text-6xl xl:text-7xl leading-[1.05]">
              BUILD STRENGTH.
              <br />
              BUILD CONFIDENCE.
              <br />
              <span className="text-[#e21b23] drop-shadow-sm">
                BECOME YOUR BEST.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-zinc-300">
              Your journey to a stronger, healthier, and more confident you starts here.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row">
              <Link
                href="#plans"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#e21b23] px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-white shadow-xl shadow-red-950/50 transition-all hover:bg-[#ff262f] hover:shadow-red-800/60 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                JOIN NOW
                <ArrowRight className="size-5" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-zinc-200 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white hover:border-white/30 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                CONTACT US
              </Link>
            </div>

            {/* Quick Location & Schedule Banner */}
            <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Compass className="size-4 text-red-500 shrink-0" />
                <span className="font-semibold text-zinc-300">Guruwar Peth, Pune</span>
              </div>
              <div className="h-3 w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Flame className="size-4 text-red-500 shrink-0" />
                <span className="font-semibold text-zinc-300">Mon–Sat: 6am–10am & 4pm–10pm</span>
              </div>
              <div className="h-3 w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <PhoneCall className="size-4 text-red-500 shrink-0" />
                <a
                  href="tel:8446648527"
                  className="font-semibold text-zinc-300 hover:text-red-400 transition"
                >
                  8446648527
                </a>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#18181c] via-[#121215] to-[#0a0a0c] p-6 sm:p-8 shadow-2xl shadow-black/80">
                {/* Red ambient highlight */}
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-red-600/20 blur-3xl" />
                <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />

                {/* Gym Visual Presentation */}
                <div className="relative aspect-square w-full rounded-2xl border border-white/10 bg-black/60 p-8 sm:p-12 flex flex-col items-center justify-center overflow-hidden">
                  {/* Subtle radial concentric rings representing gym weights / barbell plates */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <div className="size-80 rounded-full border border-dashed border-red-500" />
                    <div className="absolute size-64 rounded-full border border-white/20" />
                    <div className="absolute size-48 rounded-full border border-red-500/40" />
                  </div>

                  {/* Logo Display */}
                  <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] aspect-[16/10]">
                    <Image
                      src="/lifetimefitnessgym.png"
                      alt="LifeTime Fitness Gym Emblem"
                      fill
                      priority
                      sizes="(max-width: 768px) 280px, 340px"
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Dynamic Gym Badge */}
                  <div className="relative z-10 mt-6 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/60 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    <Dumbbell className="size-3.5 text-red-500" />
                    PUNE TRAINING CENTER
                  </div>
                </div>

                {/* Metric highlights inside card */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <span className="block text-2xl font-black text-white">6 AM – 10 AM</span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      Morning Slot
                    </span>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                    <span className="block text-2xl font-black text-white">4 PM – 10 PM</span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                      Evening Slot
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Pillar Highlights Band */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 border-t border-white/10 pt-8 sm:pt-12">
          {[
            { num: "01", title: "Focused Training", desc: "Structured workout environment" },
            { num: "02", title: "Flexible Plans", desc: "Plans adapted to your routine" },
            { num: "03", title: "Pune Location", desc: "Guruwar Peth accessibility" },
            { num: "04", title: "Supportive Community", desc: "Train with motivated peers" },
          ].map((item) => (
            <div
              key={item.num}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 sm:p-5 transition hover:border-red-500/30 hover:bg-white/[0.04]"
            >
              <span className="font-mono text-xl sm:text-2xl font-black text-red-500">
                {item.num}
              </span>
              <h3 className="mt-2 text-sm sm:text-base font-bold text-white uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
