import AnimatedSection from "@/components/ui/AnimatedSection";
import CarCard from "@/components/cards/CarCard";

export default function FeaturedCars({ cars }) {
  return (
    <AnimatedSection className="section-shell py-20" id="models">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow">Featured BYD cars</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Premium EV lineup</h2>
        </div>
        <p className="max-w-xl text-slate-400">Semua produk dirender dari data JSON lokal, termasuk harga awal, range, baterai, dan opsi compare.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </AnimatedSection>
  );
}
