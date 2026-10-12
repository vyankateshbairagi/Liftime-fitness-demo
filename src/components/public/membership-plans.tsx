import Link from "next/link";
import { Check, ArrowRight, Phone, MessageSquare, Sparkles } from "lucide-react";

export interface PublicMembershipPlan {
  id: string;
  name: string;
  price: string;
  durationInDays: number;
  description: string | null;
}

function formatDuration(days: number): string {
  if (days === 30 || days === 31) return "1 Month";
  if (days === 60) return "2 Months";
  if (days === 90) return "3 Months";
  if (days === 180) return "6 Months";
  if (days === 365) return "1 Year";
  if (days % 30 === 0) {
    const months = days / 30;
    return `${months} ${months === 1 ? "Month" : "Months"}`;
  }
  return `${days} Days`;
}

function formatPrice(priceStr: string): string {
  const num = Number(priceStr);
  if (isNaN(num)) return priceStr;
  return num.toLocaleString("en-IN");
}

export function MembershipPlans({ plans }: { plans: PublicMembershipPlan[] }) {
  const hasPlans = plans && plans.length > 0;

  return (
    <section
      id="plans"
      className="scroll-mt-20 relative bg-[#0d0d10] py-20 sm:py-28 text-white border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Membership Plans
          </div>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Choose Your Training Routine
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Straightforward pricing with full gym access and supportive coaching.
          </p>
        </div>

        {/* Dynamic Plans Display */}
        {hasPlans ? (
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {plans.map((plan, index) => {
              const isFeatured = index === 1 || plans.length === 1;
              const formattedDuration = formatDuration(plan.durationInDays);
              const formattedPrice = formatPrice(plan.price);
              const waText = encodeURIComponent(
                `Hi, I would like to inquire about the ${plan.name} (₹${formattedPrice}) at LifeTime Fitness Gym.`
              );

              return (
                <article
                  key={plan.id}
                  className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                    isFeatured
                      ? "border-2 border-red-500 bg-gradient-to-b from-[#1a1215] via-[#121215] to-[#0a0a0d] shadow-2xl shadow-red-950/40 lg:-translate-y-2"
                      : "border border-white/10 bg-gradient-to-b from-[#141418] to-[#0a0a0d] hover:border-white/20"
                  }`}
                >
                  {isFeatured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-[#e21b23] px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-white shadow-md">
                      <Sparkles className="size-3" />
                      Most Popular
                    </div>
                  )}

                  <div>
                    {/* Plan Name & Duration */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-black uppercase tracking-wide text-white">
                        {plan.name}
                      </h3>
                      <span className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-semibold text-zinc-300">
                        {formattedDuration}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                        ₹{formattedPrice}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                        / {formattedDuration.toLowerCase()}
                      </span>
                    </div>

                    {/* Optional Plan Description */}
                    {plan.description && (
                      <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                        {plan.description}
                      </p>
                    )}

                    {/* Features list based on gym facility */}
                    <ul className="mt-8 space-y-3.5 border-t border-white/10 pt-6 text-sm text-zinc-300">
                      <li className="flex items-center gap-3">
                        <Check className="size-4 text-red-500 shrink-0" />
                        <span>Full gym floor and equipment access</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="size-4 text-red-500 shrink-0" />
                        <span>Morning &amp; Evening training batches</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="size-4 text-red-500 shrink-0" />
                        <span>Initial gym routine and form guidance</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Check className="size-4 text-red-500 shrink-0" />
                        <span>Locker and clean facility amenities</span>
                      </li>
                    </ul>
                  </div>

                  {/* Join Now CTA */}
                  <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                    <a
                      href={`https://wa.me/918446648527?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold uppercase tracking-wider transition ${
                        isFeatured
                          ? "bg-[#e21b23] text-white shadow-lg shadow-red-950/40 hover:bg-[#ff2831]"
                          : "border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30"
                      }`}
                    >
                      Join Now
                      <ArrowRight className="size-4" />
                    </a>
                    <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-400">
                      <Link
                        href="#contact"
                        className="hover:text-red-400 transition"
                      >
                        Visit in Guruwar Peth
                      </Link>
                      <span>•</span>
                      <a
                        href="tel:8446648527"
                        className="hover:text-red-400 transition"
                      >
                        Call: 8446648527
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Graceful Empty / Updating State */
          <div className="mt-12 mx-auto max-w-xl rounded-3xl border border-dashed border-white/20 bg-white/[0.02] p-8 sm:p-12 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-red-500/30 bg-red-950/30 text-red-500">
              <Sparkles className="size-7" />
            </div>
            <h3 className="mt-6 text-xl font-bold uppercase text-white">
              Membership Plans Being Updated
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Membership plans are currently being updated. Contact us to learn more about current packages and offers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:8446648527"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#e21b23] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg hover:bg-[#ff2831] transition"
              >
                <Phone className="size-4" />
                Call Us: 8446648527
              </a>
              <a
                href="https://wa.me/918446648527?text=Hi%2C%20I%20would%20like%20to%20know%20about%20membership%20plans%20at%20LifeTime%20Fitness%20Gym."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-zinc-200 hover:bg-white/10 transition"
              >
                <MessageSquare className="size-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
