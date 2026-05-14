"use client";

import { GitCompareArrows, PlusCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useCarStore } from "@/store/useCarStore";

export default function CompareSection({ cars }) {
  const { compareCars, toggleCompare } = useCarStore();
  const selected = compareCars.length ? compareCars : cars.slice(0, 3);

  return (
    <AnimatedSection className="section-shell py-20" id="compare">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Compare UI</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Bandingkan model Geely</h2>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <GitCompareArrows size={18} className="text-cyan-200" />
          Pilih sampai 3 mobil dari kartu produk
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
        <div className="grid min-w-[760px] grid-cols-4 border-b border-white/10 bg-slate-900/70 text-sm font-semibold text-slate-300">
          <div className="p-4">Metric</div>
          {selected.map((car) => (
            <div key={car.id} className="p-4 text-white">{car.name}</div>
          ))}
        </div>
        {["price", "range", "battery", "power", "drivetrain", "acceleration", "topSpeed"].map((metric) => (
          <div key={metric} className="grid min-w-[760px] grid-cols-4 border-b border-white/10 last:border-b-0">
            <div className="p-4 text-sm capitalize text-slate-400">{metric.replace(/([A-Z])/g, " $1")}</div>
            {selected.map((car) => (
              <div key={`${car.id}-${metric}`} className="p-4 text-sm font-medium text-white">
                {car.variants[0][metric]}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {cars.slice(0, 6).map((car) => (
          <button key={car.id} onClick={() => toggleCompare(car)} className="ghost-button py-2">
            <PlusCircle size={16} /> {car.name}
          </button>
        ))}
      </div>
    </AnimatedSection>
  );
}
