"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Creative Direction",
    text: "Our team blends cinematic storytelling, editorial composition, and modern color science to produce timeless visuals.",
  },
  {
    title: "End-to-End Studio",
    text: "From engagement shoots to wedding albums and premium print finishing, every service is managed under one roof.",
  },
  {
    title: "Client Experience",
    text: "Personalized planning, transparent communication, and fast delivery keep every project smooth and stress-free.",
  },
];

export function StudioDetails() {
  return (
    <section id="studio" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[2200px] rounded-3xl border border-white/30 bg-white/35 p-6 shadow-xl backdrop-blur-xl sm:p-8">
        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">About Studio</p>
            <h3 className="mt-2 font-serif text-3xl leading-tight text-slate-900 sm:text-4xl">
              Crafted Memories, Precise Production
            </h3>
            <p className="mt-4 text-slate-700">
              Focus Studio is a modern creative destination for wedding photography, events, portraits,
              high-quality prints, and digital finishing. We combine artistic vision with reliable technology to
              deliver work that looks premium on screen and in print.
            </p>

            <div className="mt-6 rounded-2xl border border-teal-100 bg-teal-50/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">Location</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">Mailavu, Kozhikode</p>
              <p className="text-sm text-slate-600">Serving nearby areas for shoots, bookings, and print pickup.</p>
            </div>
          </motion.div>

          <div className="grid gap-4 lg:col-span-3">
            {highlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white/80 p-5"
              >
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-slate-700">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
