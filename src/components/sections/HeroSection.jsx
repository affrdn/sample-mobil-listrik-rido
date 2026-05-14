"use client";

import Link from "next/link";
import { ArrowRight, Gauge, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import CarVisual from "@/components/ui/CarVisual";

export default function HeroSection({ cars }) {
  const heroCar = cars[0];
  const heroVariant = heroCar.variants[2];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-cyan" />
      <div className="section-shell relative grid min-h-[calc(100vh-4rem)] items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <p className="eyebrow">Electric luxury catalog</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
            BYD EV Indonesia
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Jelajahi lini mobil listrik BYD dengan pengalaman katalog premium, pilihan varian interaktif, spesifikasi detail, dan compare UI yang dibuat untuk keputusan lebih percaya diri.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#models" className="premium-button">
              Explore models <ArrowRight size={18} />
            </Link>
            <Link href="#compare" className="ghost-button">
              Compare lineup
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            <HeroStat icon={<Zap size={18} />} label="Blade Battery" value="Safety-first" />
            <HeroStat icon={<Gauge size={18} />} label="0-100 km/h" value="from 3.8s" />
            <HeroStat icon={<ShieldCheck size={18} />} label="ADAS" value="DiPilot" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="glass-panel rounded-[2rem]">
          <CarVisual car={heroCar} variant={heroVariant} className="h-[23rem] sm:h-[32rem]" />
        </motion.div>
      </div>
    </section>
  );
}

function HeroStat({ icon, label, value }) {
  return (
    <div className="glass-panel rounded-2xl p-4">
      <div className="text-cyan-200">{icon}</div>
      <p className="mt-3 text-xs text-slate-400">{label}</p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );
}
