"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const storyFrames = [
  {
    step: "Step 1",
    title: "Pre-Wedding Planning",
    text: "Moodboards, location recce, and shot listing to align every frame with your style.",
    image:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80",
  },
  {
    step: "Step 2",
    title: "Ceremony Highlights",
    text: "Real emotions and key rituals captured with cinematic movement and natural lighting.",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=80",
  },
  {
    step: "Step 3",
    title: "Reception Storytelling",
    text: "Energy, speeches, and dance-floor moments edited into a seamless visual narrative.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80",
  },
  {
    step: "Step 4",
    title: "Album and Delivery",
    text: "Curated edits, premium album design, and print-ready files delivered on schedule.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=80",
  },
];

export function StoryScrollGallery() {
  const [isPaused, setIsPaused] = useState(false);
  const loopFrames = [...storyFrames, ...storyFrames];

  return (
    <section id="story" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[2200px]">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Story Flow</p>
            <h3 className="mt-2 font-serif text-3xl text-slate-900 sm:text-4xl">Swipe Through the Wedding Journey</h3>
          </div>
          <p className="hidden text-sm text-slate-600 sm:block">Auto-scrolling story cards</p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-[#f8f5ef] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-[#f8f5ef] to-transparent" />

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="overflow-hidden pb-2"
          >
            <div className={`story-track gap-4 ${isPaused ? "story-paused" : ""}`}>
              {loopFrames.map((frame, index) => (
              <motion.article
                key={`${frame.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: (index % storyFrames.length) * 0.06 }}
                className="group relative min-h-[300px] w-[72vw] shrink-0 overflow-hidden rounded-3xl border border-white/40 sm:min-h-[360px] sm:w-[480px] lg:min-h-[400px] lg:w-[540px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${frame.image})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="max-w-xl rounded-2xl border border-white/35 bg-white/18 p-4 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100">{frame.step}</p>
                    <h4 className="mt-2 text-2xl font-bold text-white">{frame.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-white/90">{frame.text}</p>
                  </div>
                </div>
              </motion.article>
              ))}
            </div>
          </div>

          <p className="mt-3 text-center text-xs text-slate-600 sm:hidden">
            Auto-playing story cards. Tap and hold to pause.
          </p>
        </div>
      </div>
    </section>
  );
}
