"use client";

import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { useState } from "react";

const links = [
  { name: "Portfolio", href: "#portfolio" },
  { name: "Services", href: "#services" },
  { name: "Packages", href: "#packages" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#availability" },
];

export function StudioNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex w-full max-w-[2200px] items-center justify-between rounded-2xl border border-white/30 bg-white/20 px-4 py-3 backdrop-blur-lg">
          <a href="#" className="font-semibold tracking-wide text-slate-900">
            FOCUS STUDIO
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-white/40"
              >
                {link.name}
              </a>
            ))}
            <a href="#availability" className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
              Check Availability
            </a>
          </div>

          <button
            aria-label="Open booking menu"
            onClick={() => setOpen(true)}
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white md:hidden"
          >
            Book
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              aria-label="Close menu backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/45 md:hidden"
            />

            <motion.aside
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed inset-x-0 bottom-0 z-[60] rounded-t-3xl border border-white/35 bg-white/90 p-5 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-slate-300" />
              <h2 className="mb-4 text-base font-semibold text-slate-900">Quick Booking</h2>
              <div className="grid gap-3">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-base font-medium text-slate-800"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href={siteConfig.contact.whatsappUrl}
                  className="rounded-xl bg-slate-900 px-4 py-3 text-center text-base font-semibold text-white"
                >
                  Check Availability on WhatsApp
                </a>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
