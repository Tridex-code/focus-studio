"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Do you cover full-day wedding photography and videography?",
    answer:
      "Yes. We cover pre-wedding, wedding-day, and highlight edits with clear package options.",
  },
  {
    question: "How quickly can I get passport photos and urgent prints?",
    answer:
      "Most passport photos and urgent prints are ready within 15 to 30 minutes during studio hours.",
  },
  {
    question: "Can we book consultations before confirming a package?",
    answer:
      "Yes. Message us on WhatsApp or visit our studio in Mailavu, Kozhikode to check availability first.",
  },
  {
    question: "Do you provide album design and premium print finishing?",
    answer:
      "Yes. We provide album design, lamination, canvas, and premium print finishing.",
  },
  {
    question: "What areas near Kozhikode do you serve?",
    answer:
      "We serve Kozhikode and nearby areas for weddings, events, and studio printing.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[2200px] rounded-3xl border border-white/35 bg-white/45 p-6 shadow-xl backdrop-blur-xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">FAQ</p>
        <h3 className="mt-2 font-serif text-3xl text-slate-900 sm:text-4xl">Quick Answers Before You Book</h3>

        <div className="mt-6 grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white/85">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-base">{faq.question}</span>
                  <span className="text-xl font-bold text-teal-700">{isOpen ? "-" : "+"}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`faq-content-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-4 text-sm leading-relaxed text-slate-700 sm:px-5">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
