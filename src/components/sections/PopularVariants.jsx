import AnimatedSection from "@/components/ui/AnimatedSection";

export default function PopularVariants({ cars }) {
  const variants = cars.flatMap((car) => car.variants.map((variant) => ({ ...variant, carName: car.name }))).slice(0, 8);

  return (
    <AnimatedSection className="section-shell py-16" id="variants">
      <div className="mb-8">
        <p className="eyebrow">Popular variants</p>
        <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Varian unggulan</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {variants.map((variant) => (
          <div key={`${variant.carName}-${variant.name}`} className="glass-panel rounded-3xl p-5 transition hover:-translate-y-1 hover:border-cyan-200/40">
            <p className="text-sm text-cyan-200">{variant.carName}</p>
            <h3 className="mt-2 text-xl font-semibold">{variant.name}</h3>
            <p className="mt-4 text-2xl font-semibold">{variant.price}</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
              <span>{variant.range}</span>
              <span>{variant.power}</span>
              <span>{variant.battery}</span>
              <span>{variant.drivetrain}</span>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
