"use client";

import { Check, Minus, Sparkles } from "lucide-react";

const comparisonRows = [
  { label: "Harga", key: "price" },
  { label: "Range", key: "range" },
  { label: "Baterai", key: "battery" },
  { label: "Power", key: "power" },
  { label: "Akselerasi", key: "acceleration" },
  { label: "Charging DC", key: "chargingSpeed" }
];

export default function VariantComparison({ car, selectedVariant, onSelect }) {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 lg:grid-cols-2">
        {car.variants.map((variant) => {
          const active = selectedVariant.name === variant.name;
          const isMax = variant.name.toLowerCase().includes("max");

          return (
            <button
              key={variant.name}
              onClick={() => onSelect(variant)}
              className={`group rounded-3xl border p-5 text-left transition hover:-translate-y-1 ${
                active
                  ? "border-cyan-200 bg-cyan-300/15 shadow-glow"
                  : "border-white/10 bg-white/[0.04] hover:border-cyan-200/50"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-2xl font-semibold">{variant.name}</h3>
                    {isMax && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">
                        <Sparkles size={13} /> paling lengkap
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-cyan-100">{variant.price}</p>
                </div>
                <span className={`grid h-9 w-9 place-items-center rounded-full border ${active ? "border-cyan-200 bg-cyan-300 text-slate-950" : "border-white/15 text-slate-400"}`}>
                  {active ? <Check size={17} /> : <Minus size={17} />}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <Spec label="Range" value={variant.range} />
                <Spec label="Baterai" value={variant.battery} />
                <Spec label="Power" value={variant.power} />
                <Spec label="Charging" value={variant.chargingSpeed} />
              </div>

              <div className="mt-5 space-y-2">
                {(variant.highlights || []).slice(0, 4).map((item) => (
                  <p key={item} className="flex gap-2 text-sm leading-6 text-slate-300">
                    <Check size={16} className="mt-1 shrink-0 text-cyan-200" />
                    {item}
                  </p>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
        <div className="grid min-w-[720px] grid-cols-[1fr_repeat(3,minmax(0,1fr))] border-b border-white/10 bg-slate-900/80 text-sm font-semibold text-slate-300">
          <div className="p-4">Perbandingan</div>
          {car.variants.map((variant) => (
            <div key={variant.name} className="p-4 text-white">{variant.name}</div>
          ))}
          {Array.from({ length: Math.max(0, 3 - car.variants.length) }).map((_, index) => (
            <div key={`empty-head-${index}`} className="p-4 text-slate-500">-</div>
          ))}
        </div>
        {comparisonRows.map((row) => (
          <div key={row.key} className="grid min-w-[720px] grid-cols-[1fr_repeat(3,minmax(0,1fr))] border-b border-white/10 last:border-b-0">
            <div className="p-4 text-sm text-slate-400">{row.label}</div>
            {car.variants.map((variant) => (
              <div key={`${variant.name}-${row.key}`} className="p-4 text-sm font-medium text-white">{variant[row.key]}</div>
            ))}
            {Array.from({ length: Math.max(0, 3 - car.variants.length) }).map((_, index) => (
              <div key={`empty-${row.key}-${index}`} className="p-4 text-sm text-slate-600">-</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Spec({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-3">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-white">{value}</p>
    </div>
  );
}
