import { ClientTestimonials } from "@/components/ClientTestimonials";
import { FAQSection } from "@/components/FAQSection";
import { HeroSplit } from "@/components/HeroSplit";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { CallToActionBand } from "@/components/CallToActionBand";
import { PricingPackages } from "@/components/PricingPackages";
import { ServiceFocus } from "@/components/ServiceFocus";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { StudioDetails } from "@/components/StudioDetails";
import { StudioMap } from "@/components/StudioMap";
import { StudioNavbar } from "@/components/StudioNavbar";
import { TrustBadges } from "@/components/TrustBadges";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { StoryScrollGallery } from "@/components/StoryScrollGallery";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip pb-20 font-sans">
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-red-500/18 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[12%] top-[34%] h-44 w-44 rounded-full bg-red-400/14 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-[42%] h-80 w-80 rounded-full bg-rose-500/14 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute right-[8%] top-[12%] h-52 w-52 rounded-full bg-red-300/12 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute left-[35%] bottom-24 h-64 w-64 rounded-full bg-rose-400/12 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-16 bottom-[18%] h-60 w-60 rounded-full bg-red-500/10 blur-3xl" aria-hidden="true" />

      <StudioNavbar />

      <main className="flex-1">
        <HeroSplit />
        <PortfolioGallery />
        <StoryScrollGallery />
        <ServiceFocus />
        <PricingPackages />
        <ClientTestimonials />
        <CallToActionBand />
        <FAQSection />
        <StudioDetails />
        <StudioMap />
      </main>

      <TrustBadges />

      <footer className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-[2200px] flex-col items-start justify-between gap-2 rounded-2xl border border-white/30 bg-white/20 px-5 py-4 text-sm text-slate-700 backdrop-blur-xl sm:flex-row sm:items-center">
          <p>Focus Studio</p>
          <p>Photography, Weddings, Printing, and Tech Services</p>
        </div>
      </footer>

      <WhatsAppFloat />
      <MobileStickyCta />
    </div>
  );
}
