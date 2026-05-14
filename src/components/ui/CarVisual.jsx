"use client";

import { motion } from "framer-motion";

const bodyShapes = {
  sedan: "M78 164 C112 116 160 94 238 91 L375 91 C444 96 489 118 525 164 L580 178 C602 184 615 199 618 221 L54 221 C56 194 61 177 78 164 Z",
  suv: "M65 163 C96 118 139 96 220 91 L396 91 C459 99 506 126 548 166 L594 179 C611 187 621 202 624 222 L48 222 C50 195 54 177 65 163 Z",
  hatchback: "M75 166 C105 126 143 103 213 99 L350 99 C421 101 474 126 528 170 L582 184 C600 190 612 204 615 222 L55 222 C57 197 61 179 75 166 Z",
  mpv: "M56 166 C88 120 139 97 226 92 L430 94 C494 103 543 132 579 172 L620 185 C635 193 643 205 645 223 L42 223 C45 198 48 181 56 166 Z"
};

export default function CarVisual({ car, variant, className = "" }) {
  const accent = variant?.accent || car?.accent || "#22d3ee";
  const shape = bodyShapes[car?.bodyType] || bodyShapes.sedan;

  return (
    <div className={`relative overflow-hidden ${className}`} aria-label={`${car?.name} ${variant?.name || ""}`}>
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${accent}55, transparent 38%), linear-gradient(135deg, rgba(15,23,42,.18), rgba(8,145,178,.16))`
        }}
      />
      <motion.svg
        viewBox="0 0 680 300"
        className="relative z-10 h-full w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.45)]"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        key={variant?.image || car?.thumbnail}
        role="img"
      >
        <defs>
          <linearGradient id={`paint-${car?.id}-${variant?.name}`} x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="45%" stopColor={accent} />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id={`glass-${car?.id}-${variant?.name}`} x1="0%" x2="100%">
            <stop offset="0%" stopColor="#dffbff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <ellipse cx="340" cy="238" rx="285" ry="18" fill={accent} opacity="0.26" />
        <path d={shape} fill={`url(#paint-${car?.id}-${variant?.name})`} opacity="0.96" />
        <path d="M180 112 L356 112 C404 114 438 129 468 158 L139 158 C148 137 161 122 180 112 Z" fill={`url(#glass-${car?.id}-${variant?.name})`} opacity="0.82" />
        <path d="M82 183 C216 198 424 197 582 184" fill="none" stroke="white" strokeOpacity="0.44" strokeWidth="3" />
        <path d="M104 220 L590 220" stroke={accent} strokeWidth="5" strokeLinecap="round" opacity="0.65" />
        <circle cx="180" cy="223" r="36" fill="#020617" stroke="#94a3b8" strokeWidth="8" />
        <circle cx="180" cy="223" r="13" fill={accent} />
        <circle cx="500" cy="223" r="36" fill="#020617" stroke="#94a3b8" strokeWidth="8" />
        <circle cx="500" cy="223" r="13" fill={accent} />
        <text x="340" y="278" textAnchor="middle" fill="#e2e8f0" fontSize="18" fontWeight="700" letterSpacing="3">
          {variant?.name || car?.category}
        </text>
      </motion.svg>
    </div>
  );
}
