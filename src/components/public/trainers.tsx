import { ShieldCheck, Dumbbell, UserCheck, Plus } from "lucide-react";

interface TrainerInfo {
  name: string;
  role: string;
  specialties?: string[];
  bioPlaceholder?: string;
}

const trainers: TrainerInfo[] = [
  {
    name: "Dhirendra Pande",
    role: "Trainer",
    bioPlaceholder: "Experienced floor guidance, routine structuring, and member workout support.",
  },
];

export function Trainers() {
  return (
    <section
      id="trainers"
      className="scroll-mt-20 relative bg-[#09090b] py-20 sm:py-28 text-white border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Coaching &amp; Support
          </div>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Meet Our Trainers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Dedicated training assistance to help you build confidence on the gym floor.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <article
              key={trainer.name}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#141418] to-[#0a0a0d] p-7 transition-all duration-300 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-950/20"
            >
              <div>
                {/* Professional Trainer Avatar Placeholder */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1c1c22] via-[#121216] to-[#09090b] flex flex-col items-center justify-center p-6 text-center">
                  {/* Subtle red background glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,27,35,0.12),transparent_70%)]" />

                  <div className="relative z-10 flex size-20 items-center justify-center rounded-full border-2 border-red-500/40 bg-red-950/40 text-white shadow-xl shadow-red-950/40">
                    <span className="text-2xl font-black tracking-wider text-red-400 font-mono">
                      DP
                    </span>
                  </div>

                  <div className="relative z-10 mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-zinc-300">
                    <ShieldCheck className="size-3.5 text-red-500" />
                    LifeTime Fitness Coaching
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                    {trainer.role}
                  </span>
                  <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">
                    {trainer.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    {trainer.bioPlaceholder}
                  </p>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
                <span className="inline-flex items-center gap-1.5">
                  <UserCheck className="size-3.5 text-red-500" />
                  Floor Trainer
                </span>
                <span className="font-semibold text-zinc-300">Pune Center</span>
              </div>
            </article>
          ))}

          {/* Extensible Future Trainer Placeholder Card */}
          <div className="flex flex-col justify-center items-center rounded-3xl border border-dashed border-white/15 bg-white/[0.01] p-8 text-center">
            <div className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400">
              <Plus className="size-6 text-red-500" />
            </div>
            <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-white">
              Expanding Our Team
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400 max-w-xs">
              Additional certified trainers and conditioning specialists will be featured here as our coaching roster grows.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-500">
              <Dumbbell className="size-3.5" />
              Guruwar Peth, Pune
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
