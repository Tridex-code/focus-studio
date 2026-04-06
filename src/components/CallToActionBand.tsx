import { siteConfig } from "@/lib/siteConfig";

export function CallToActionBand() {
  return (
    <section id="availability" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[2200px] rounded-3xl border border-slate-900 bg-slate-900 px-6 py-8 text-white shadow-2xl sm:px-8">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">Availability CTA</p>
            <h3 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">Check your date and get a fast quote</h3>
            <p className="mt-3 max-w-2xl text-slate-300">
              Chat with us to check your date availability, discuss coverage, and choose the package that fits your wedding.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <a href={siteConfig.contact.whatsappUrl} className="inline-flex justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Check Availability
            </a>
            <a href="#packages" className="inline-flex justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              View Packages
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
