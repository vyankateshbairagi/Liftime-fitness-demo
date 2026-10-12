import { Dumbbell, Activity, Users, PersonStanding, Target, HeartPulse } from "lucide-react";

const services = [
  {
    title: "Weight Training",
    description: "Build strength, develop muscle, and improve overall physical performance.",
    icon: Dumbbell,
    tag: "Strength",
  },
  {
    title: "Cardio Training",
    description: "Improve endurance, cardiovascular fitness, and overall stamina.",
    icon: Activity,
    tag: "Endurance",
  },
  {
    title: "Personal Training",
    description: "Get focused guidance and training support based on your individual goals.",
    icon: Users,
    tag: "Coaching",
  },
  {
    title: "Functional Training",
    description: "Improve mobility, balance, strength, and everyday movement.",
    icon: PersonStanding,
    tag: "Mobility",
  },
  {
    title: "Strength & Conditioning",
    description: "Develop functional strength and improve your overall fitness performance.",
    icon: Target,
    tag: "Performance",
  },
  {
    title: "Fitness & Nutrition Guidance",
    description: "Support your training with practical guidance for healthier lifestyle choices.",
    icon: HeartPulse,
    tag: "Wellness",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 relative bg-[#09090b] py-20 sm:py-28 text-white border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Training Programs
          </div>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Comprehensive gym training designed to help you build real, sustainable fitness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#141418] to-[#0c0c0e] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-950/20"
              >
                {/* Background red hover glow */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-red-600/0 blur-2xl transition-all duration-300 group-hover:bg-red-600/15" />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-950/30 text-red-500 transition-colors group-hover:bg-red-600 group-hover:text-white">
                      <Icon className="size-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold uppercase tracking-wide text-white group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-red-500">
                    {service.tag}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
