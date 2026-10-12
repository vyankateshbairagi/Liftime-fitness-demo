import type { Metadata } from "next";
import { db } from "@/lib/db";
import { Navbar } from "@/components/public/navbar";
import { Hero } from "@/components/public/hero";
import { About } from "@/components/public/about";
import { Services } from "@/components/public/services";
import {
  MembershipPlans,
  type PublicMembershipPlan,
} from "@/components/public/membership-plans";
import { Trainers } from "@/components/public/trainers";
import { Gallery } from "@/components/public/gallery";
import { Contact } from "@/components/public/contact";
import { Footer } from "@/components/public/footer";
import { GymStructuredData } from "@/components/public/structured-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "LifeTime Fitness Gym | Build Strength. Build Confidence. Become Your Best.",
  description:
    "LifeTime Fitness Gym in Guruwar Peth, Pune. Build strength, develop confidence, and become your best with quality equipment, coaching guidance, and flexible membership plans.",
  keywords: [
    "LifeTime Fitness Gym",
    "Gym in Pune",
    "Gym in Guruwar Peth",
    "Fitness center Pune",
    "Weight training Pune",
    "Personal training Guruwar Peth",
  ],
  openGraph: {
    title: "LifeTime Fitness Gym | Build Strength. Build Confidence. Become Your Best.",
    description:
      "LifeTime Fitness Gym in Guruwar Peth, Pune. Quality equipment, morning & evening training batches, and motivating fitness community.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "LifeTime Fitness Gym | Pune",
    description: "Build Strength. Build Confidence. Become Your Best.",
  },
};

async function getPublicPlans(): Promise<PublicMembershipPlan[]> {
  const slug = process.env.PUBLIC_ORGANIZATION_SLUG?.trim();
  if (!slug) {
    // Multi-tenant safety: without an explicit organization slug configured,
    // do not make unverified database queries.
    return [];
  }

  try {
    const org = await db.organization.findFirst({
      where: { slug, isActive: true },
      select: {
        plans: {
          where: { isActive: true },
          orderBy: { durationInDays: "asc" },
          select: {
            id: true,
            name: true,
            price: true,
            durationInDays: true,
            description: true,
          },
        },
      },
    });

    if (!org?.plans) return [];

    return org.plans.map((plan) => ({
      id: plan.id,
      name: plan.name,
      price: plan.price.toString(),
      durationInDays: plan.durationInDays,
      description: plan.description,
    }));
  } catch {
    // Graceful fallback: protect public website availability if DB is unreachable
    return [];
  }
}

export default async function HomePage() {
  const plans = await getPublicPlans();

  return (
    <div className="public-site min-h-screen bg-[#09090b] text-white selection:bg-red-600 selection:text-white">
      <GymStructuredData />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <MembershipPlans plans={plans} />
        <Trainers />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
