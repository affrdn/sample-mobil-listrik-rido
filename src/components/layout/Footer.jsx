import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="section-shell flex flex-col gap-6 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">BYD EV Indonesia</p>
          <p>Katalog premium mobil listrik BYD untuk eksplorasi produk dan varian.</p>
        </div>
        <div className="flex gap-5">
          <Link href="/#models" className="hover:text-cyan-200">Models</Link>
          <Link href="/#compare" className="hover:text-cyan-200">Compare</Link>
          <Link href="/#technology" className="hover:text-cyan-200">Technology</Link>
        </div>
      </div>
    </footer>
  );
}
