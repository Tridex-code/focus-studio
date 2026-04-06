"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const services = [
  { name: "Passport Size Photos", category: "Photo", price: "₹120 / 8 copies", turnaround: "15 min" },
  { name: "PVC ID Card Print", category: "Card", price: "₹180 / card", turnaround: "30 min" },
  { name: "Canvas Print (12x18)", category: "Canvas", price: "₹950", turnaround: "24 hr" },
  { name: "A4 Color Xerox", category: "Xerox", price: "₹20 / page", turnaround: "Instant" },
  { name: "Document Lamination", category: "Lamination", price: "₹80 / sheet", turnaround: "10 min" },
  { name: "Photo Restoration", category: "Editing", price: "₹450+", turnaround: "1-2 days" },
];

export function PrintingServices() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return services;

    return services.filter((service) =>
      [service.name, service.category, service.price].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <section id="printing" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[2200px] rounded-3xl border border-teal-100 bg-white/75 p-6 shadow-xl backdrop-blur-xl sm:p-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Print Menu</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Pricing & Service Catalog</h3>
          </div>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search passport, lamination, xerox..."
            className="w-full rounded-xl border border-teal-200 bg-white px-4 py-3 text-sm outline-none ring-teal-400 transition focus:ring sm:max-w-sm"
          />
        </div>

        <div className="hidden overflow-hidden rounded-2xl border border-slate-200 lg:block">
          <table className="w-full border-collapse">
            <thead className="bg-slate-900 text-left text-sm text-white">
              <tr>
                <th className="px-4 py-3">Service</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Turnaround</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((service, index) => (
                <tr key={service.name} className={index % 2 ? "bg-slate-50" : "bg-white"}>
                  <td className="px-4 py-3 font-semibold text-slate-800">{service.name}</td>
                  <td className="px-4 py-3 text-slate-600">{service.category}</td>
                  <td className="px-4 py-3 text-teal-700">{service.price}</td>
                  <td className="px-4 py-3 text-slate-600">{service.turnaround}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-3 lg:hidden">
          {filtered.map((service) => (
            <motion.article
              key={service.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-2xl border border-slate-200 bg-white p-4"
            >
              <p className="text-base font-semibold text-slate-900">{service.name}</p>
              <p className="mt-1 text-sm text-slate-600">{service.category}</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="font-semibold text-teal-700">{service.price}</span>
                <span className="text-slate-600">{service.turnaround}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
