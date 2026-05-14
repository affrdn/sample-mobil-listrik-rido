import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata = {
  title: {
    default: "Geely Lampung | Premium New Energy Catalog",
    template: "%s | Geely Lampung"
  },
  description:
    "Katalog premium produk Geely Lampung dengan detail varian, spesifikasi, teknologi baterai, fitur keselamatan, dan perbandingan model.",
  keywords: ["Geely", "Geely Lampung", "Geely EX5", "Geely EX2", "Geely Starray EM-i"],
  openGraph: {
    title: "Geely Lampung",
    description: "Premium new energy catalog for the official Indonesian Geely lineup.",
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
        <WhatsAppButton />
      </body>
    </html>
  );
}
