import { BatteryCharging, Cpu, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const tech = [
  { icon: BatteryCharging, title: "Short Blade Battery", text: "Arsitektur baterai LFP Geely yang berfokus pada keamanan termal, umur pakai panjang, dan efisiensi energi harian." },
  { icon: Cpu, title: "GEA Architecture", text: "Arsitektur new energy Geely untuk packaging kabin lega, performa responsif, dan efisiensi yang praktis." },
  { icon: ShieldCheck, title: "Level 2 ADAS", text: "Rangkaian bantuan mengemudi seperti adaptive cruise, lane support, blind spot monitoring, dan 360 camera pada banyak varian." }
];

export default function TechnologySection() {
  return (
    <AnimatedSection className="section-shell py-20" id="technology">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="eyebrow">Technology</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Built around battery intelligence</h2>
          <p className="mt-5 text-slate-400">Katalog ini menonjolkan teknologi inti Geely Lampung: baterai, GEA architecture, EM-i Super Hybrid, cockpit cerdas, dan sistem keselamatan untuk pembeli kendaraan new energy premium.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {tech.map((item) => (
            <div key={item.title} className="glass-panel rounded-3xl p-6">
              <item.icon className="text-cyan-200" />
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
