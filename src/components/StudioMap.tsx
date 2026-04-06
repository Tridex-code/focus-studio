import { siteConfig } from "@/lib/siteConfig";

export function StudioMap() {
  return (
    <section id="contact" className="px-4 py-16 pb-28 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto grid w-full max-w-[2200px] gap-6 rounded-3xl border border-white/30 bg-white/35 p-6 shadow-xl backdrop-blur-xl lg:grid-cols-3 lg:p-8">
        <div className="lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Visit Our Studio</p>
          <h3 className="mt-2 font-serif text-3xl leading-tight text-slate-900 sm:text-4xl">Find Us on the Map</h3>
          <p className="mt-3 text-slate-700">
            Walk in for wedding consultations, shoot planning, print orders, and pickup support.
          </p>

          <div className="mt-6 rounded-2xl border border-teal-100 bg-white/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">Location</p>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              {siteConfig.location.street}, {siteConfig.location.city}
            </p>
            <p className="mt-1 text-sm text-slate-600">{siteConfig.hours.display}</p>

            <div className="mt-4 grid gap-2 text-sm text-slate-700">
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                Call: {siteConfig.contact.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                Email: {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg lg:col-span-2">
          <iframe
            title="Focus Studio Location Map"
            src="https://maps.google.com/maps?q=Mailavu%20Kozhikode&t=k&z=17&ie=UTF8&iwloc=&output=embed"
            className="h-[340px] w-full sm:h-[420px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
