"use client";

import { GitCompareArrows, PlusCircle } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useCarStore } from "@/store/useCarStore";

export default function CompareSection({ cars }) {
  const { compareVariants, toggleCompareVariant } = useCarStore();
  const allVariants = cars.flatMap((car) =>
    car.variants.map((variant) => ({
      id: `${car.id}-${variant.name.toLowerCase().replaceAll(" ", "-")}`,
      carName: car.name,
      category: car.category,
      ...variant
    }))
  );
  const selected = compareVariants.length ? compareVariants : allVariants.slice(0, 4);
  const gridClass = "grid min-w-[980px] grid-cols-[1.1fr_repeat(4,minmax(0,1fr))]";
  const metrics = [
    ["price", "Harga"],
    ["range", "Range"],
    ["battery", "Baterai"],
    ["power", "Power"],
    ["torque", "Torque"],
    ["drivetrain", "Drivetrain"],
    ["acceleration", "0-100 km/h"],
    ["topSpeed", "Top speed"],
    ["chargingSpeed", "Fast charging"]
  ];

  return (
    <AnimatedSection className="section-shell py-20" id="compare">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Compare UI</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Bandingkan model Geely</h2>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <GitCompareArrows size={18} className="text-cyan-200" />
          Pilih sampai 4 varian untuk dibandingkan
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
        <div className={`${gridClass} border-b border-white/10 bg-slate-900/70 text-sm font-semibold text-slate-300`}>
          <div className="p-4">Metric</div>
          {selected.map((variant) => (
            <div key={variant.id} className="p-4 text-white">
              <p>{variant.carName}</p>
              <p className="mt-1 text-xs font-medium text-cyan-200">{variant.name}</p>
            </div>
          ))}
          {Array.from({ length: Math.max(0, 4 - selected.length) }).map((_, index) => (
            <div key={`empty-head-${index}`} className="p-4 text-slate-500">-</div>
          ))}
        </div>
        {metrics.map(([metric, label]) => (
          <div key={metric} className={`${gridClass} border-b border-white/10 last:border-b-0`}>
            <div className="p-4 text-sm text-slate-400">{label}</div>
            {selected.map((variant) => (
              <div key={`${variant.id}-${metric}`} className="p-4 text-sm font-medium text-white">
                {variant[metric]}
              </div>
            ))}
            {Array.from({ length: Math.max(0, 4 - selected.length) }).map((_, index) => (
              <div key={`empty-${metric}-${index}`} className="p-4 text-sm text-slate-600">-</div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        {cars.flatMap((car) => car.variants.map((variant) => ({ car, variant }))).map(({ car, variant }) => {
          const id = `${car.id}-${variant.name.toLowerCase().replaceAll(" ", "-")}`;
          const active = compareVariants.some((item) => item.id === id);

          return (
          <button key={id} onClick={() => toggleCompareVariant(car, variant)} className={`${active ? "premium-button" : "ghost-button"} py-2`}>
            <PlusCircle size={16} /> {car.name} {variant.name}
          </button>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
