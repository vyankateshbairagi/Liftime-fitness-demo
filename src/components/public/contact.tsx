import { MapPin, Phone, MessageSquare, Clock, Navigation, ExternalLink } from "lucide-react";

export function Contact() {
  const googleMapsUrl = "https://maps.app.goo.gl/LJAx4xiLBMJK3TFS8";
  const phone = "8446648527";
  const whatsappUrl = `https://wa.me/918446648527?text=${encodeURIComponent(
    "Hi, I would like to inquire about joining LifeTime Fitness Gym in Guruwar Peth, Pune."
  )}`;

  return (
    <section
      id="contact"
      className="scroll-mt-20 relative bg-[#09090b] py-20 sm:py-28 text-white border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Get In Touch
          </div>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Visit LifeTime Fitness Gym
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            Stop by for a tour of our training floor or connect with our team directly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Contact Cards & Quick CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Address Card */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#141418] to-[#0a0a0d] p-7 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-red-500/30 bg-red-950/40 text-red-500">
                  <MapPin className="size-6" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-red-500">
                    Gym Location
                  </h3>
                  <p className="mt-2 text-lg sm:text-xl font-bold text-white leading-snug">
                    732, Chhatrapati Shivaji Maharaj Rd,
                    <br />
                    near Rashtrabhushan Chowk,
                    <br />
                    Guruwar Peth, Pune, Maharashtra 411042
                  </p>
                  <p className="mt-3 text-xs text-zinc-400">
                    Landmark: Near Rashtrabhushan Chowk, easily accessible from Swargate &amp; Shukrawar Peth.
                  </p>
                </div>
              </div>

              {/* Direct Directions CTA */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#e21b23] px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/40 hover:bg-[#ff2831] transition"
                >
                  <Navigation className="size-4" />
                  Get Directions on Maps
                  <ExternalLink className="size-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Direct Connect: Phone & WhatsApp */}
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Call Card */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#141418] to-[#0a0a0d] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-red-500">
                    <Phone className="size-5" />
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Phone</span>
                  </div>
                  <p className="mt-3 text-2xl font-black text-white">{phone}</p>
                  <p className="mt-1 text-xs text-zinc-400">Available during gym training hours</p>
                </div>
                <a
                  href={`tel:${phone}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition"
                >
                  Call Now
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#141418] to-[#0a0a0d] p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <MessageSquare className="size-5" />
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">WhatsApp</span>
                  </div>
                  <p className="mt-3 text-2xl font-black text-white">{phone}</p>
                  <p className="mt-1 text-xs text-zinc-400">Fast message inquiry on WhatsApp</p>
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 py-3 text-xs font-bold uppercase tracking-wider text-emerald-400 hover:bg-emerald-600 hover:text-white transition"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Opening Hours & Map Destination Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Opening Hours Card */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#16161a] to-[#0c0c0e] p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl border border-red-500/30 bg-red-950/40 text-red-500">
                  <Clock className="size-5" />
                </div>
                <h3 className="text-base font-black uppercase tracking-wider text-white">
                  Opening Hours
                </h3>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                      Morning Batch
                    </span>
                    <p className="text-lg font-black text-white mt-0.5">
                      6:00 AM – 10:00 AM
                    </p>
                  </div>
                  <span className="rounded-md border border-white/10 px-2 py-1 text-[11px] font-semibold text-zinc-300">
                    Mon – Sat
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-500">
                      Evening Batch
                    </span>
                    <p className="text-lg font-black text-white mt-0.5">
                      4:00 PM – 10:00 PM
                    </p>
                  </div>
                  <span className="rounded-md border border-white/10 px-2 py-1 text-[11px] font-semibold text-zinc-300">
                    Mon – Sat
                  </span>
                </div>
              </div>

              <p className="mt-4 text-xs text-zinc-400 leading-relaxed text-center">
                Dedicated training hours optimized for morning and evening routines.
              </p>
            </div>

            {/* Google Maps Visual Card */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#141418] to-[#0a0a0d] p-6 text-center">
              <div className="flex justify-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-red-600/20 text-red-500">
                  <MapPin className="size-6" />
                </div>
              </div>
              <h4 className="mt-4 text-lg font-bold uppercase text-white">
                Find Us in Guruwar Peth
              </h4>
              <p className="mt-1 text-xs text-zinc-400 max-w-xs mx-auto">
                Open directly in Google Maps on your phone or browser for turn-by-turn directions.
              </p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:bg-white/10 hover:text-white transition"
              >
                Open Google Maps Location
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
