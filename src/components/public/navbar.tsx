"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Plans", href: "#plans" },
  { label: "Trainers", href: "#trainers" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#09090b]/95 shadow-xl shadow-black/40 backdrop-blur-md"
          : "border-b border-white/5 bg-[#09090b]/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Name */}
        <Link
          href="#home"
          className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-lg"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 overflow-hidden rounded-full border border-red-500/30 bg-black/60 p-1 transition-transform group-hover:scale-105">
            <Image
              src="/lifetimefitnessgym.png"
              alt="LifeTime Fitness Gym logo"
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-white uppercase group-hover:text-red-500 transition-colors">
              LifeTime Fitness
            </span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">
              Gym • Pune
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 xl:gap-2 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3.5 py-2 text-xs xl:text-sm font-semibold tracking-wider text-zinc-300 uppercase transition hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-white/10">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-lg bg-[#e21b23] px-5 py-2.5 text-xs xl:text-sm font-bold tracking-wider uppercase text-white shadow-lg shadow-red-900/30 transition hover:bg-[#ff2831] hover:shadow-red-800/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98]"
            >
              Login
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href="/login"
            className="rounded-lg bg-[#e21b23] px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-red-950/40 hover:bg-[#ff2831]"
          >
            Login
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-zinc-200 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="border-b border-white/10 bg-[#0c0c0e]/98 px-4 py-6 shadow-2xl backdrop-blur-xl lg:hidden animate-in slide-in-from-top-2 duration-200"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-md flex-col gap-1.5"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-bold uppercase tracking-wider text-zinc-200 hover:bg-white/10 hover:text-white transition"
              >
                <span>{link.label}</span>
                <span className="text-xs text-red-500 font-mono">→</span>
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#e21b23] py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/50 hover:bg-[#ff2831]"
              >
                Staff / Owner Login
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
