import { BatteryCharging, Cpu, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const tech = [
  { icon: BatteryCharging, title: "Blade Battery", text: "LFP battery architecture dengan fokus pada stabilitas termal, keamanan, dan durability untuk penggunaan harian." },
  { icon: Cpu, title: "e-Platform 3.0", text: "Platform EV dedicated untuk efisiensi packaging, kabin lega, charging lebih praktis, dan respons berkendara halus." },
  { icon: ShieldCheck, title: "DiPilot Safety", text: "Rangkaian bantuan mengemudi seperti adaptive cruise, lane support, blind spot monitoring, dan 360 camera pada banyak varian." }
];

export default function TechnologySection() {
  return (
    <AnimatedSection className="section-shell py-20" id="technology">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="eyebrow">Technology</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Built around battery intelligence</h2>
          <p className="mt-5 text-slate-400">Katalog ini menonjolkan teknologi inti BYD: baterai, platform EV, charging, dan sistem keselamatan yang relevan untuk pembeli mobil listrik premium.</p>
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
