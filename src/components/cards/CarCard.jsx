"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import CarVisual from "@/components/ui/CarVisual";

export default function CarCard({ car }) {
  const [variant, setVariant] = useState(car.variants[0]);

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className="glass-panel group overflow-hidden rounded-3xl"
    >
      <CarVisual car={car} variant={variant} className="h-56" />
      <div className="space-y-5 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-cyan-200">{car.category}</p>
            <h3 className="mt-1 text-2xl font-semibold">{car.name}</h3>
          </div>
          <p className="rounded-full border border-cyan-200/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
            {variant.name}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {car.variants.map((item) => {
            const active = variant.name === item.name;

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setVariant(item)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${active ? "border-cyan-200 bg-cyan-300 text-slate-950" : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-200/60 hover:text-white"}`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-3 text-sm">
          <Metric label="Price" value={variant.price} />
          <Metric label="Range" value={variant.range} />
          <Metric label="Battery" value={variant.battery} />
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <Metric label="Power" value={variant.power} />
          <Metric label="Charging" value={variant.chargingSpeed} />
        </div>

        <Link href={`/cars/${car.slug}`} className="ghost-button w-full justify-between">
          Lihat detail {variant.name} <ArrowUpRight size={17} />
        </Link>
      </div>
    </motion.article>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">
      <p className="text-xs text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-white">{value}</p>
    </div>
  );
}
