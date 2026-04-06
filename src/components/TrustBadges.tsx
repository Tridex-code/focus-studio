"use client";

import { motion } from "framer-motion";

const badges = [
  { label: "Couples Served", value: "500+" },
  { label: "Years Shooting", value: "10+" },
  { label: "Client Rating", value: "4.9/5" },
  { label: "Fast Delivery", value: "Same-Day" },
];

export function TrustBadges() {
  return (
    <section aria-label="Trust indicators" className="px-4 pb-6 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-[2200px] grid-cols-2 gap-3 rounded-2xl border border-white/35 bg-white/40 p-4 shadow-lg backdrop-blur-xl sm:grid-cols-4 sm:p-5">
        {badges.map((badge, index) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-xl border border-slate-200 bg-white/80 px-3 py-3 text-center"
          >
            <p className="text-lg font-extrabold text-teal-700">{badge.value}</p>
            <p className="text-xs text-slate-600">{badge.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
