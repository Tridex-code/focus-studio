"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const badges = [
  { label: "Couples Served", value: "500+" },
  { label: "Years Shooting", value: "10+" },
  { label: "Client Rating", value: "4.9/5" },
  { label: "Fast Delivery", value: "Same-Day" },
];

export function TrustBadges() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });
  const [targetCount] = useState(() => 480 + Math.floor(Math.random() * 90));
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const durationMs = 2200;
    const stepMs = 16;
    const steps = Math.max(1, Math.floor(durationMs / stepMs));
    const increment = targetCount / steps;

    let current = 0;
    const timer = window.setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCustomerCount(targetCount);
        window.clearInterval(timer);
        return;
      }
      setCustomerCount(Math.floor(current));
    }, stepMs);

    return () => window.clearInterval(timer);
  }, [isInView, targetCount]);

  return (
    <section ref={sectionRef} aria-label="Trust indicators" className="px-4 pb-6 sm:px-6 lg:px-8">
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
            <p className="text-lg font-extrabold text-teal-700">{index === 0 ? `${customerCount}+` : badge.value}</p>
            <p className="text-xs text-slate-600">{badge.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
