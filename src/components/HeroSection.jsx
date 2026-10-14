import React, { useState } from "react";
import { ArrowRight, Check, Phone } from "lucide-react";
import { buttonClasses } from "./ui/button";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { PHONE_HREF } from "../siteInfo";

import BenchtopBefore from "../assets/BenchtopBefore.jpg";
import BenchtopAfter from "../assets/BenchtopAfter.jpg";
import DeckBefore from "../assets/DeckBefore.jpg";
import DeckAfter from "../assets/DeckAfter.jpg";

const projects = [
  {
    id: "deck",
    label: "Deck restoration",
    summary: "Weathered, uneven boards replaced and oiled to a rich finish.",
    before: DeckBefore,
    after: DeckAfter,
    beforeAlt: "Weathered timber deck before restoration",
    afterAlt: "Restored timber deck freshly oiled",
  },
  {
    id: "benchtop",
    label: "Benchtop refinish",
    summary: "Stained, water-damaged timber sanded back and resealed.",
    before: BenchtopBefore,
    after: BenchtopAfter,
    beforeAlt: "Water-stained timber kitchen benchtop before refinishing",
    afterAlt: "Kitchen benchtop sanded and resealed to an even finish",
  },
];

const highlights = [
  "Qualified, bonded & insured",
  "6+ years of experience",
  "Free estimates & consultations",
  "Short-notice repairs",
];

export function HeroSection() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((project) => project.id === activeId);

  return (
    <section id="home" className="relative overflow-hidden bg-ink text-white">
      {/* Soft brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-brand/25 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:px-8 lg:py-24">
        {/* Content */}
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-1.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            Canberra · Queanbeyan · Jerrabomberra
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Expert <span className="italic text-brand">Carpentry</span>  & Maintenance Services
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            From custom cladding to full renovations, we bring your vision to life with
            precision, care and honest workmanship.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/90">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={buttonClasses({ size: "lg" })}>
              Get a free quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={PHONE_HREF} className={buttonClasses({ size: "lg", variant: "inverse" })}>
              <Phone className="h-4 w-4" />
              Call us
            </a>
          </div>
        </div>

        {/* Before / After */}
        <div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl shadow-black/40 sm:p-3">
            <BeforeAfterSlider key={active.id} {...active} />
          </div>

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/65">{active.summary}</p>
            <div className="flex shrink-0 gap-1 rounded-full bg-white/5 p-1" role="group" aria-label="Choose a project">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  aria-pressed={project.id === activeId}
                  onClick={() => setActiveId(project.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${project.id === activeId ? "bg-white text-ink" : "text-white/70 hover:text-white"}`}
                >
                  {project.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
