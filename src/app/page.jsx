import cars from "@/data/cars.json";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedCars from "@/components/sections/FeaturedCars";
import PopularVariants from "@/components/sections/PopularVariants";
import CompareSection from "@/components/sections/CompareSection";
import TechnologySection from "@/components/sections/TechnologySection";

export default function HomePage() {
  return (
    <main>
      <HeroSection cars={cars} />
      <FeaturedCars cars={cars} />
      <PopularVariants cars={cars} />
      <CompareSection cars={cars} />
      <TechnologySection />
    </main>
  );
}
