"use client";

import Link from "next/link";
import { ArrowUpRight, Heart, Plus } from "lucide-react";
import { motion } from "framer-motion";
import CarVisual from "@/components/ui/CarVisual";
import { useCarStore } from "@/store/useCarStore";

export default function CarCard({ car }) {
  const variant = car.variants[0];
  const { compareCars, wishlist, toggleCompare, toggleWishlist } = useCarStore();
  const compared = compareCars.some((item) => item.id === car.id);
  const wished = wishlist.some((item) => item.id === car.id);

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
          <div className="flex gap-2">
            <button
              onClick={() => toggleWishlist(car)}
              className={`grid h-10 w-10 place-items-center rounded-full border transition ${wished ? "border-cyan-200 bg-cyan-300 text-slate-950" : "border-white/10 bg-white/5 text-white hover:border-cyan-200"}`}
              aria-label="Wishlist"
            >
              <Heart size={17} />
            </button>
            <button
              onClick={() => toggleCompare(car)}
              className={`grid h-10 w-10 place-items-center rounded-full border transition ${compared ? "border-cyan-200 bg-cyan-300 text-slate-950" : "border-white/10 bg-white/5 text-white hover:border-cyan-200"}`}
              aria-label="Add to compare"
            >
              <Plus size={17} />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 text-sm">
          <Metric label="From" value={variant.price} />
          <Metric label="Range" value={variant.range} />
          <Metric label="Battery" value={variant.battery} />
        </div>
        <Link href={`/cars/${car.slug}`} className="ghost-button w-full justify-between">
          View details <ArrowUpRight size={17} />
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
