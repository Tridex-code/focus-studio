"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Nihal & Amina",
    role: "Wedding Couple",
    quote:
      "We booked Focus Studio after checking the portfolio and got exactly what we wanted: clear communication, strong coverage, and beautiful wedding photos.",
    image:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Riyas K.",
    role: "Event Client",
    quote:
      "They were on time, handled the event professionally, and delivered edited photos faster than we expected.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Fathima P.",
    role: "Print Customer",
    quote:
      "The print work was sharp, fast, and accurate. Passport photos and lamination were done without any hassle.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
  },
];

export function ClientTestimonials() {
  return (
    <section id="testimonials" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[2200px]">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Testimonials</p>
          <h3 className="mt-2 font-serif text-3xl text-slate-900 sm:text-4xl">What Clients Say After Booking</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-2xl border border-white/40 bg-white/65 p-5 shadow-xl backdrop-blur-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={`${item.name} testimonial portrait`}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-600">{item.role}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate-700">{item.quote}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
