import { Dumbbell, Activity, Flame, Shield, Target, Sparkles, Camera } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Gym" | "Equipment" | "Training" | "Fitness";
  subtitle: string;
  icon: typeof Dumbbell;
}

const galleryItems: GalleryItem[] = [
  {
    id: "free-weights",
    title: "Free Weights & Dumbbells",
    category: "Equipment",
    subtitle: "Dumbbells, barbells, and benches for progressive strength work.",
    icon: Dumbbell,
  },
  {
    id: "cardio-deck",
    title: "Cardio Conditioning Deck",
    category: "Fitness",
    subtitle: "Treadmills and cycle trainers for endurance and warmups.",
    icon: Activity,
  },
  {
    id: "strength-machines",
    title: "Pin & Plate-Loaded Machines",
    category: "Equipment",
    subtitle: "Targeted resistance gear for safe, controlled hypertrophy.",
    icon: Target,
  },
  {
    id: "functional-zone",
    title: "Functional & Mobility Turf",
    category: "Training",
    subtitle: "Open space for dynamic mobility, core, and bodyweight drills.",
    icon: Flame,
  },
  {
    id: "power-cages",
    title: "Squat & Power Stations",
    category: "Training",
    subtitle: "Solid lifting stations for foundational compound lifts.",
    icon: Shield,
  },
  {
    id: "gym-floor",
    title: "Main Training Arena",
    category: "Gym",
    subtitle: "High-energy training environment in central Guruwar Peth.",
    icon: Sparkles,
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-20 relative bg-[#0d0d10] py-20 sm:py-28 text-white border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
              Facility Showcase
            </div>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              The Training Space
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300">
              A motivating environment built for daily discipline, progressive overload, and real results.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-400">
            <Camera className="size-4 text-red-500" />
            Facility Highlights
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#16161a] via-[#111114] to-[#09090b] transition-all duration-300 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-950/30"
              >
                {/* Visual Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c0c0e] flex flex-col items-center justify-center p-6 text-center">
                  {/* Subtle red mesh gradient */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,27,35,0.15),transparent_60%)] transition-opacity duration-300 group-hover:opacity-100 opacity-60" />

                  {/* Concentric subtle circles */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <div className="size-44 rounded-full border border-white" />
                  </div>

                  <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-red-500 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-950/40">
                    <Icon className="size-7" />
                  </div>

                  <span className="relative z-10 mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                    Zone 0{index + 1}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-red-500">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      Pune
                    </span>
                  </div>

                  <h3 className="mt-2 text-lg font-bold uppercase tracking-wide text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
