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
          <div className="absolute inset-0 bg-gradient-to-b from-[#1f1410]/35 via-[#6b4b30]/18 to-[#c7a26f]/45" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 flex h-full items-end p-5 sm:p-8 lg:p-12"
          >
            <div className="max-w-xl rounded-2xl border border-[#f4e8d0]/35 bg-[#fff7eb]/20 p-5 backdrop-blur-sm sm:p-7">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#fff1dc] sm:text-xs sm:tracking-[0.35em]">Wedding Photography in Kozhikode</p>
              <h1 className="font-serif text-3xl leading-tight text-[#fff8eb] sm:text-5xl lg:text-6xl">
                Premium Wedding Photography in Kozhikode That Makes Booking Easy
              </h1>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#fff2df] sm:mt-4 sm:text-base">
                Focus Studio helps couples in Kozhikode check availability quickly, choose the right package, and get clean, polished wedding coverage without confusion.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
                <a href="#availability" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Check Availability
                </a>
                <a href="#portfolio" className="rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
                  View Portfolio
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative min-h-[60vh] bg-gradient-to-br from-[#e2fbf8] via-[#ffffff] to-[#8fe8df] p-5 sm:min-h-[70vh] sm:p-8 lg:min-h-[78vh] lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,152,0.25),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(13,148,136,0.35),transparent_35%)]" />
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 flex h-full flex-col justify-center"
          >
            <div className="glass-teal max-w-xl rounded-2xl p-5 sm:p-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-teal-700">Wedding Focus</p>
              <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">Limited Dates. Fast Replies. Clear Coverage.</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:mt-4 sm:text-base">
                We keep the process simple: check your date, choose a package, and confirm the booking before the schedule fills up.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 text-center sm:mt-8 sm:grid-cols-3">
                {[
                  ["Limited", "Bookings / month"],
                  ["Fast", "WhatsApp replies"],
                  ["Focused", "Wedding only"],
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
