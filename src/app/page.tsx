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
