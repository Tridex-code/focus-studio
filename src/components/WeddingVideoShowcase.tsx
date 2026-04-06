"use client";

import { motion } from "framer-motion";

const beats = [
  "Bride and groom preparation moments",
  "Ceremony vows and family reactions",
  "Golden-hour couple portrait sequence",
  "Reception highlights and final send-off",
];

export function WeddingVideoShowcase() {
  return (
    <section id="wedding-film" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-[2200px] gap-6 rounded-3xl border border-white/35 bg-white/35 p-6 shadow-xl backdrop-blur-xl lg:grid-cols-5 lg:p-8">
        <motion.div
          initial={{ opacity: 0, x: -14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="lg:col-span-2"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Wedding Film</p>
          <h3 className="mt-2 font-serif text-3xl leading-tight text-slate-900 sm:text-4xl">Play a Cinematic Wedding Reel</h3>
          <p className="mt-3 text-slate-700">
            A polished highlight film that blends intimate moments, sound design, and color-graded storytelling.
          </p>

          <ul className="mt-5 grid gap-2">
            {beats.map((beat) => (
              <li key={beat} className="rounded-xl border border-slate-200 bg-white/85 px-3 py-2 text-sm text-slate-700">
                {beat}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden rounded-2xl border border-slate-200 bg-black shadow-2xl lg:col-span-3"
        >
          <video
            controls
            playsInline
            preload="metadata"
            poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80"
            className="aspect-video w-full object-cover"
          >
            <source src="/wedding-highlight.mp4" type="video/mp4" />
            <source
              src="https://player.vimeo.com/external/368763302.sd.mp4?s=f2e9f0ffebf8f6f8dd6d2dcf6ebf2040f349f2ef&profile_id=164"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
