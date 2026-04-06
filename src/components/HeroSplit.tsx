"use client";

import { motion } from "framer-motion";

export function HeroSplit() {
  return (
    <section id="photography" className="relative overflow-hidden px-4 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-[2200px] grid-cols-1 overflow-hidden rounded-3xl border border-white/25 bg-white/10 shadow-2xl backdrop-blur-xl lg:grid-cols-2">
        <div className="relative min-h-[70vh] lg:min-h-[78vh]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80"
          >
            <source
              src="https://player.vimeo.com/external/368763302.sd.mp4?s=f2e9f0ffebf8f6f8dd6d2dcf6ebf2040f349f2ef&profile_id=164"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f1410]/40 via-[#6b4b30]/20 to-[#c7a26f]/50" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 flex h-full items-end p-8 sm:p-12"
          >
            <div className="max-w-xl rounded-2xl border border-[#f4e8d0]/45 bg-[#fff7eb]/25 p-6 backdrop-blur-md">
              <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#fff1dc]">Artistic Photography & Weddings</p>
              <h1 className="font-serif text-4xl leading-tight text-[#fff8eb] sm:text-6xl">Capturing Moments That Feel Like Poetry</h1>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#fff2df] sm:text-base">
                Editorial-grade wedding films and portrait sessions crafted with cinematic storytelling and timeless color.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative min-h-[70vh] bg-gradient-to-br from-[#e2fbf8] via-[#ffffff] to-[#8fe8df] p-8 sm:p-12 lg:min-h-[78vh]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,152,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(13,148,136,0.35),transparent_35%)]" />
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 flex h-full flex-col justify-center"
          >
            <div className="glass-teal max-w-xl rounded-2xl p-6 sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-teal-700">Professional Printing & Tech Services</p>
              <h2 className="text-4xl font-black leading-tight text-slate-900 sm:text-6xl">Precision Printing for Every Need</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                Passport photos, PVC cards, canvas prints, lamination, and instant digital finishing powered by calibrated equipment.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {[
                  ["10K+", "Prints / month"],
                  ["24hr", "Fast delivery"],
                  ["4K", "Pro color checks"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-xl border border-teal-200 bg-white/70 p-3">
                    <p className="text-lg font-extrabold text-teal-700">{value}</p>
                    <p className="text-xs text-slate-600">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
