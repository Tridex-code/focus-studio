"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function QuickPrintUploader() {
  const [dragActive, setDragActive] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <section id="contact" className="px-4 py-16 pb-28 sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto grid w-full max-w-[2200px] gap-6 rounded-3xl border border-white/30 bg-white/20 p-6 shadow-xl backdrop-blur-xl lg:grid-cols-2 lg:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-700">Quick Print</p>
          <h3 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Drag, Drop, and Print</h3>
          <p className="mt-3 max-w-xl text-slate-700">
            Upload your design, choose finish options, and get instant confirmation for pickup or delivery. Perfect for urgent IDs, brochures, and event collaterals.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
            {[
              "Passport Photo",
              "PVC Card",
              "Canvas",
              "Lamination",
            ].map((item) => (
              <span key={item} className="rounded-xl border border-teal-200 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>

        <motion.label
          onDragOver={(event) => {
            event.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragActive(false);
            const file = event.dataTransfer.files?.[0];
            if (file) setFileName(file.name);
          }}
          whileHover={{ scale: 1.01 }}
          className={`flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition ${
            dragActive ? "border-teal-500 bg-teal-50" : "border-slate-300 bg-white/70"
          }`}
        >
          <input
            type="file"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) setFileName(file.name);
            }}
          />
          <p className="text-lg font-semibold text-slate-900">Drop your files here</p>
          <p className="mt-2 text-sm text-slate-600">or tap to browse from your device</p>
          <p className="mt-4 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Supports JPG, PNG, PDF
          </p>
          {fileName ? <p className="mt-4 text-sm font-medium text-teal-700">Selected: {fileName}</p> : null}
        </motion.label>
      </div>
    </section>
  );
}
