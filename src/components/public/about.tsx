import { MapPin, Clock, Phone, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Quality Equipment",
    description: "Maintained machines, free weights, and gear for targeted muscle development and safety.",
  },
  {
    title: "Motivating Environment",
    description: "An energetic, focused gym floor that keeps you consistent and driven during every session.",
  },
  {
    title: "Experienced Guidance",
    description: "Hands-on guidance to help refine form, prevent injury, and maximize workout efficiency.",
  },
  {
    title: "Flexible Memberships",
    description: "Straightforward monthly and multi-month options designed to match your schedule.",
  },
  {
    title: "Fitness-Focused Community",
    description: "A welcoming atmosphere where beginners and seasoned lifters push toward their goals together.",
  },
  {
    title: "Convenient Pune Location",
    description: "Centrally positioned in Guruwar Peth near Rashtrabhushan Chowk for easy daily access.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 relative bg-[#0d0d10] py-20 sm:py-28 text-white border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            About LifeTime Fitness
          </div>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
            A Stronger Routine Starts With The Right Space
          </h2>
        </div>

        {/* Story & Key Facts */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Main Description */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base sm:text-lg">
            <p className="border-l-2 border-red-500 pl-4 font-medium text-white text-lg sm:text-xl">
              LifeTime Fitness Gym is a dedicated fitness destination in the heart of Pune, designed to help you become stronger, healthier, and more confident.
            </p>
            <p>
              With quality equipment, a motivating training environment, and a focus on consistent progress, we welcome beginners and experienced fitness enthusiasts alike. Whether your goal is to build muscle, improve strength, lose weight, or simply live a healthier lifestyle, LifeTime Fitness Gym is here to support your journey.
            </p>

            {/* Key Information Cards */}
            <div className="grid gap-4 sm:grid-cols-2 pt-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3 text-red-500">
                  <MapPin className="size-5 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Location</span>
                </div>
                <p className="mt-2 text-base font-bold text-white">Guruwar Peth, Pune</p>
                <p className="mt-1 text-xs text-zinc-400">Near Rashtrabhushan Chowk</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3 text-red-500">
                  <Clock className="size-5 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Gym Timings</span>
                </div>
                <div className="mt-2 space-y-1 text-sm font-semibold text-white">
                  <p>Morning: 6:00 AM – 10:00 AM</p>
                  <p>Evening: 4:00 PM – 10:00 PM</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:col-span-2">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-red-500">
                      <Phone className="size-5 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Direct Inquiries</span>
                    </div>
                    <p className="mt-1 text-xl font-black text-white">8446648527</p>
                  </div>
                  <a
                    href="tel:8446648527"
                    className="inline-flex items-center gap-2 rounded-xl bg-red-600/20 border border-red-500/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-red-400 transition hover:bg-red-600 hover:text-white"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Highlight Card: Why Choose Us */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/15 bg-gradient-to-b from-[#141418] to-[#0a0a0d] p-6 sm:p-8 shadow-xl">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <h3 className="text-base font-black uppercase tracking-wider text-white">
                  Why Choose Us
                </h3>
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">
                  6 Core Standards
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {reasons.map((item) => (
                  <div key={item.title} className="flex items-start gap-3.5">
                    <CheckCircle2 className="size-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-950/20 p-4 text-center">
              <p className="text-xs font-semibold text-zinc-300">
                Start your journey with focused fitness right in Guruwar Peth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
