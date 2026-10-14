import React, { useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

const clamp = (value) => Math.min(100, Math.max(0, value));

export function BeforeAfterSlider({ before, after, beforeAlt, afterAlt, className = "" }) {
  const [position, setPosition] = useState(50);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const moveTo = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    setPosition(clamp(((clientX - rect.left) / rect.width) * 100));
  };

  const handlePointerDown = (event) => {
    isDragging.current = true;
    setHasInteracted(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    moveTo(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (isDragging.current) moveTo(event.clientX);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const handleKeyDown = (event) => {
    const step = event.shiftKey ? 10 : 2;
    const keyMoves = {
      ArrowLeft: position - step,
      ArrowDown: position - step,
      ArrowRight: position + step,
      ArrowUp: position + step,
      Home: 0,
      End: 100,
    };
    if (event.key in keyMoves) {
      event.preventDefault();
      setHasInteracted(true);
      setPosition(clamp(keyMoves[event.key]));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`group relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl bg-ink-soft touch-pan-y cursor-ew-resize ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
    >
      {/* After sits underneath, Before is clipped on top */}
      <img
        src={after}
        alt={afterAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <img
        src={before}
        alt={beforeAlt}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      {/* Labels fade out as the divider covers them */}
      <span
        className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-opacity"
        style={{ opacity: position < 18 ? 0 : 1 }}
      >
        Before
      </span>
      <span
        className="pointer-events-none absolute right-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-opacity"
        style={{ opacity: position > 82 ? 0 : 1 }}
      >
        After
      </span>

      {/* Divider + handle */}
      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_12px_rgba(0,0,0,0.35)]"
        style={{ left: `${position}%` }}
      />
      <div
        role="slider"
        tabIndex={0}
        aria-label="Drag to compare before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        aria-valuetext={`${Math.round(position)}% before`}
        onKeyDown={handleKeyDown}
        className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-primary text-white shadow-lg shadow-black/30 transition-transform group-active:scale-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
        style={{ left: `${position}%` }}
      >
        <ChevronsLeftRight className="h-5 w-5" aria-hidden="true" />
      </div>

      {/* One-time hint until the user drags */}
      <div
        className={`pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-ink/75 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-opacity duration-500 ${hasInteracted ? "opacity-0" : "opacity-100"}`}
      >
        Drag to compare
      </div>
    </div>
  );
}
