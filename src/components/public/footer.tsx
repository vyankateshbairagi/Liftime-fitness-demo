import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Plans", href: "#plans" },
  { label: "Trainers", href: "#trainers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

// Social links configuration: only links with valid URLs are displayed
const configuredSocials: { name: string; url?: string }[] = [
  // Instagram URL is not yet provided by client — left unconfigured to avoid fake links
  // { name: "Instagram", url: "https://instagram.com/..." },
];

export function Footer() {
  return (
    <footer className="relative bg-[#070709] text-white border-t border-white/10 overflow-hidden">
      {/* Decorative top red accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#e21b23] to-transparent opacity-80" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Info & Tagline */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="#home" className="inline-flex items-center gap-3.5 group">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-red-500/30 bg-black/60 p-1">
                <Image
                  src="/lifetimefitnessgym.png"
                  alt="LifeTime Fitness Gym logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white uppercase group-hover:text-red-500 transition-colors">
                  LifeTime Fitness Gym
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
                  Pune • Maharashtra
                </span>
              </div>
            </Link>

            <p className="text-xl font-black uppercase tracking-tight text-white leading-tight">
              BUILD STRENGTH.
              <br />
              BUILD CONFIDENCE.
              <br />
              <span className="text-red-500">BECOME YOUR BEST.</span>
            </p>

            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              Your dedicated fitness destination in Guruwar Peth, Pune. Focus on consistency, progressive strength, and sustainable health.
            </p>

            {/* Social Links (only renders if valid URLs configured) */}
            {configuredSocials.length > 0 && (
              <div className="flex items-center gap-3 pt-2">
                {configuredSocials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white hover:border-red-500 transition"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-wider text-zinc-400 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Staff Portal */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">
              Contact &amp; Hours
            </h3>

            <div className="space-y-4 text-sm text-zinc-300">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-red-500 shrink-0 mt-1" />
                <p className="leading-snug">
                  732, Chhatrapati Shivaji Maharaj Rd,
                  <br />
                  near Rashtrabhushan Chowk,
                  <br />
                  Guruwar Peth, Pune 411042
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="size-4 text-red-500 shrink-0" />
                <a
                  href="tel:8446648527"
                  className="font-bold text-white hover:text-red-400 transition"
                >
                  8446648527
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="size-4 text-red-500 shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Morning: 6:00 AM – 10:00 AM</p>
                  <p className="font-semibold text-white">Evening: 4:00 PM – 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Existing GymFlow Login Integration */}
            <div className="pt-2">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 hover:border-red-500 transition"
              >
                GymFlow Staff / Owner Login
                <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 LifeTime Fitness Gym. All rights reserved.</p>
          <p className="uppercase tracking-widest text-zinc-400 font-semibold">
            Train hard. Stay consistent.
          </p>
        </div>
      </div>
    </footer>
  );
}
