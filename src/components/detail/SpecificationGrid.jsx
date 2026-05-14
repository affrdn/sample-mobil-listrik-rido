export default function SpecificationGrid({ specifications, variant }) {
  const mergedSpecs = {
    ...specifications,
    "Selected Variant": variant.name,
    "Variant Price": variant.price,
    "Variant Range": variant.range,
    "Variant Battery": variant.battery,
    "Variant Power": variant.power,
    "Variant Drivetrain": variant.drivetrain,
    "Variant 0-100 km/h": variant.acceleration,
    "Variant Top Speed": variant.topSpeed,
    "Variant Fast Charging": variant.chargingSpeed
  };

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(mergedSpecs).map(([label, value]) => (
        <div key={label} className="glass-panel rounded-2xl p-4">
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
          <p className="mt-2 font-semibold text-white">{value}</p>
        </div>
      ))}
    </div>
  );
}
