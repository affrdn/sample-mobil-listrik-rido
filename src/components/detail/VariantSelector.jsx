"use client";

export default function VariantSelector({ variants, selectedVariant, onSelect }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {variants.map((variant) => {
        const active = selectedVariant.name === variant.name;
        return (
          <button
            key={variant.name}
            onClick={() => onSelect(variant)}
            className={`rounded-3xl border p-4 text-left transition ${active ? "border-cyan-200 bg-cyan-300/15 shadow-glow" : "border-white/10 bg-white/[0.04] hover:border-cyan-200/50"}`}
          >
            <p className="text-lg font-semibold">{variant.name}</p>
            <p className="mt-2 text-cyan-200">{variant.price}</p>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-300">
              <span>{variant.range}</span>
              <span>{variant.battery}</span>
              <span>{variant.power}</span>
              <span>{variant.drivetrain}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
