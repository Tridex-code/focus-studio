"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const packages = [
  {
    name: "Basic",
    price: "Starts at ₹12,000",
    idealFor: "Small weddings or pre-wedding shoots",
    items: ["1-day coverage", "Candid + posed shots", "Online delivery", "1 revision"],
    cta: "Get Quote",
    featured: false,
  },
  {
    name: "Premium",
    price: "Starts at ₹22,000",
    idealFor: "Most couples who want strong coverage and polished edits",
    items: ["Full-day coverage", "2 photographers", "Highlight film", "Album guidance"],
    cta: "View Packages",
    featured: true,
  },
  {
    name: "Elite",
    price: "Starts at ₹35,000",
    idealFor: "Large weddings and premium storytelling",
    items: ["Multi-day coverage", "Priority editing", "Premium album", "Extra creative direction"],
    cta: "Check Availability",
    featured: false,
  },
];

export function PricingPackages() {
  return (
    <section id="packages" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[2200px]">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Pricing</p>
            <h3 className="mt-2 font-serif text-3xl text-slate-900 sm:text-4xl">Simple Wedding Packages</h3>
            <p className="mt-3 max-w-2xl text-slate-700">
              Clear package names, starting prices, and a fast way to book the right fit.
            </p>
          </div>
          <a href={siteConfig.contact.whatsappUrl} className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
            Get Quote on WhatsApp
          </a>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={`rounded-3xl border p-6 shadow-xl sm:p-7 ${pkg.featured ? "border-slate-900 bg-slate-900 text-white" : "border-white/40 bg-white/75 text-slate-900"}`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.3em] ${pkg.featured ? "text-teal-300" : "text-teal-700"}`}>{pkg.name}</p>
              <h4 className="mt-2 text-3xl font-bold">{pkg.price}</h4>
              <p className={`mt-2 text-sm ${pkg.featured ? "text-slate-300" : "text-slate-600"}`}>{pkg.idealFor}</p>

              <ul className="mt-5 grid gap-2 text-sm">
                {pkg.items.map((item) => (
                  <li key={item} className={`rounded-xl px-3 py-2 ${pkg.featured ? "bg-white/10 text-white" : "bg-slate-50 text-slate-700"}`}>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={siteConfig.contact.whatsappUrl}
                className={`mt-6 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${pkg.featured ? "bg-white text-slate-900 hover:bg-slate-100" : "bg-slate-900 text-white hover:bg-slate-700"}`}
              >
                {pkg.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
