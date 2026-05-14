"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const phoneNumber = "6289648077525";
const message = encodeURIComponent(
  "Halo Geely Lampung, saya ingin bertanya atau memesan produk Geely. Mohon dibantu informasinya."
);

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp untuk bertanya atau memesan produk Geely"
      initial={{ opacity: 0, scale: 0.86, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full border border-cyan-200/40 bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 shadow-glow backdrop-blur-xl sm:bottom-7 sm:right-7 sm:px-5"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 text-cyan-200">
        <MessageCircle size={19} />
      </span>
      <span className="hidden sm:inline">Tanya / Pesan</span>
    </motion.a>
  );
}
