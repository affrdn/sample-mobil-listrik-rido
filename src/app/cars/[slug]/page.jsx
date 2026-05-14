import { notFound } from "next/navigation";
import cars from "@/data/cars.json";
import DetailClient from "@/components/detail/DetailClient";

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const car = cars.find((item) => item.slug === slug);

  if (!car) {
    return {
      title: "Car not found"
    };
  }

  return {
    title: `${car.name} ${car.category}`,
    description: `${car.description} Lihat harga, varian, baterai, range, charging, safety, dan interior ${car.name}.`,
    openGraph: {
      title: `${car.name} | BYD EV Indonesia`,
      description: car.description
    }
  };
}

export default async function CarDetailPage({ params }) {
  const { slug } = await params;
  const car = cars.find((item) => item.slug === slug);

  if (!car) {
    notFound();
  }

  return <DetailClient car={car} />;
}
