"use client";

import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Model", href: "/#models" },
  { label: "Variant", href: "/#variants" },
  { label: "Compare", href: "/#compare" },
  { label: "Technology", href: "/#technology" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/62 backdrop-blur-2xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-cyan-300/40 bg-cyan-300/10 text-cyan-200">
            <Zap size={18} />
          </span>
          <span className="text-lg tracking-wide">Geely Lampung</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-200">
              {item.label}
            </Link>
          ))}
        </div>
        <Link href="/#models" className="premium-button hidden py-2 md:inline-flex">
          Explore
        </Link>
        <button className="md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="section-shell border-t border-white/10 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-slate-200">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
