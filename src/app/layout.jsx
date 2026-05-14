import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: {
    default: "BYD EV Indonesia | Premium Electric Car Catalog",
    template: "%s | BYD EV Indonesia"
  },
  description:
    "Katalog premium mobil listrik BYD Indonesia dengan detail varian, spesifikasi, teknologi baterai, fitur keselamatan, dan perbandingan model.",
  keywords: ["BYD", "mobil listrik", "EV Indonesia", "BYD Seal", "BYD Atto 3", "BYD Dolphin"],
  openGraph: {
    title: "BYD EV Indonesia",
    description: "Premium electric car catalog for the Indonesian BYD lineup.",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-slate-950 text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
