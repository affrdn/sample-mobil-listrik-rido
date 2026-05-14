"use client";

import Link from "next/link";
import { ArrowLeft, BatteryCharging, GitCompareArrows, ShieldCheck } from "lucide-react";
import { useState } from "react";
import CarVisual from "@/components/ui/CarVisual";
import VariantSelector from "@/components/detail/VariantSelector";
import SpecificationGrid from "@/components/detail/SpecificationGrid";
import { useCarStore } from "@/store/useCarStore";

export default function DetailClient({ car }) {
  const [variant, setVariant] = useState(car.variants[0]);
  const { toggleCompare } = useCarStore();

  return (
    <main>
      <section className="section-shell py-10">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-200">
          <ArrowLeft size={16} /> Back to catalog
        </Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="glass-panel overflow-hidden rounded-[2rem]">
            <CarVisual car={car} variant={variant} className="h-[24rem] sm:h-[34rem]" />
          </div>
          <div>
            <p className="eyebrow">{car.category}</p>
            <h1 className="mt-3 text-5xl font-semibold leading-none md:text-7xl">{car.name}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">{car.description}</p>
            <div className="mt-8 rounded-3xl border border-cyan-200/20 bg-cyan-300/10 p-6">
              <p className="text-sm text-cyan-200">Selected variant</p>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold">{variant.name}</h2>
                  <p className="mt-1 text-slate-300">{variant.range} range · {variant.acceleration} 0-100 km/h</p>
                </div>
                <p className="text-2xl font-semibold text-cyan-100">{variant.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-10">
        <p className="eyebrow">Variant selector</p>
        <h2 className="mt-3 text-3xl font-semibold">Pilih karakter mobil</h2>
        <div className="mt-6">
          <VariantSelector variants={car.variants} selectedVariant={variant} onSelect={setVariant} />
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="mb-6">
          <p className="eyebrow">Specifications</p>
          <h2 className="mt-3 text-3xl font-semibold">Detail lengkap</h2>
        </div>
        <SpecificationGrid specifications={car.specifications} variant={variant} />
      </section>

      <section className="section-shell grid gap-5 py-12 lg:grid-cols-3">
        <InfoPanel icon={<BatteryCharging />} title="Charging information" items={[car.chargingInfo.fastCharging, car.chargingInfo.acCharging, car.chargingInfo.v2l]} />
        <InfoPanel icon={<ShieldCheck />} title="Safety technology" items={car.safetyFeatures} />
        <InfoPanel icon={<GitCompareArrows />} title="Interior highlights" items={car.interiorHighlights} />
      </section>

      <section className="section-shell py-12">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-3 text-3xl font-semibold">Design details</h2>
          </div>
          <button onClick={() => toggleCompare(car)} className="premium-button">
            Add to compare <GitCompareArrows size={17} />
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          {car.gallery.map((item, index) => (
            <div key={item} className="glass-panel rounded-3xl p-5">
              <div className="mb-5 h-24 rounded-2xl" style={{ background: `linear-gradient(135deg, ${variant.accent}66, rgba(15,23,42,.7))` }} />
              <p className="text-sm text-slate-400">0{index + 1}</p>
              <h3 className="mt-1 font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function InfoPanel({ icon, title, items }) {
  return (
    <div className="glass-panel rounded-3xl p-6">
      <div className="text-cyan-200">{icon}</div>
      <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="border-b border-white/10 pb-3 last:border-b-0">{item}</li>
        ))}
      </ul>
    </div>
  );
}
