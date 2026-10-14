import React from "react";

// Vector take on the CCAM house mark so it stays crisp on any background
export function LogoMark({ className = "" }) {
  return (
    <svg viewBox="0 0 48 44" fill="none" className={className} aria-hidden="true">
      <path
        d="M4 22 24 4l20 18"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 18v22h28V18" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="round" />
      <rect x="19" y="20" width="4.5" height="4.5" fill="currentColor" />
      <rect x="24.5" y="20" width="4.5" height="4.5" fill="currentColor" />
      <rect x="19" y="25.5" width="4.5" height="4.5" fill="currentColor" />
      <rect x="24.5" y="25.5" width="4.5" height="4.5" fill="currentColor" />
    </svg>
  );
}

export function Logo({ inverse = false, className = "" }) {
  return (
    <a href="#home" className={`flex items-center gap-3 ${className}`} aria-label="Capital Craft & Maintenance — home">
      <LogoMark className={`h-9 w-9 ${inverse ? "text-brand" : "text-primary"}`} />
      <div className="leading-none">
        <div className={`font-display text-xl font-bold tracking-wide ${inverse ? "text-white" : "text-ink"}`}>
          CAPITAL
        </div>
        <div className={`mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${inverse ? "text-white/70" : "text-primary"}`}>
          Craft &amp; Maintenance
        </div>
      </div>
    </a>
  );
}
