"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type Category = "Wedding" | "Events" | "Print Samples";

type Item = {
  id: number;
  category: Category;
  title: string;
  image: string;
  span: string;
};

const items: Item[] = [
  { id: 1, category: "Wedding", title: "Golden Hour Vows", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80", span: "md:row-span-2" },
  { id: 2, category: "Wedding", title: "Ceremony Detail", image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80", span: "" },
  { id: 9, category: "Wedding", title: "Bride Portrait", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80", span: "" },
  { id: 10, category: "Wedding", title: "Family Blessings", image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1000&q=80", span: "" },
  { id: 11, category: "Wedding", title: "Couple Exit", image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1000&q=80", span: "" },
  { id: 12, category: "Wedding", title: "Reception Lights", image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1000&q=80", span: "" },
  { id: 3, category: "Events", title: "Stage Spotlight", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80", span: "" },
  { id: 4, category: "Events", title: "Crowd Energy", image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1000&q=80", span: "md:row-span-2" },
  { id: 5, category: "Print Samples", title: "Canvas Print", image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1000&q=80", span: "" },
  { id: 6, category: "Print Samples", title: "Photo Cards", image: "https://images.unsplash.com/photo-1452457807411-4979b707c5be?auto=format&fit=crop&w=1000&q=80", span: "" },
  { id: 7, category: "Wedding", title: "Reception Story", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80", span: "" },
  { id: 8, category: "Print Samples", title: "Laminated ID", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80", span: "" },
];

const filters: ("All" | Category)[] = ["All", "Wedding", "Events", "Print Samples"];

export function PortfolioGallery() {
  const [active, setActive] = useState<("All" | Category)>("Wedding");

  const filtered = useMemo(() => {
    if (active === "All") return items;
    return items.filter((item) => item.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-[2200px]">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Portfolio</p>
            <h3 className="mt-2 text-2xl font-bold leading-tight text-slate-900 sm:text-4xl">Wedding Stories and Selected Work in Kozhikode</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700 sm:text-base">
              Start with wedding coverage first. Events and print samples stay in secondary tabs if you want to explore more.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === filter ? "bg-slate-900 text-white" : "bg-white/70 text-slate-700 hover:bg-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/30 shadow-xl ${item.span}`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="text-xs text-white/80">{item.category}</p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
