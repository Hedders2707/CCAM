import React from "react";
import { Check } from "lucide-react"
import HouseFraming from "../assets/HouseFraming.jpg"

const reasons = [
  "Qualified & insured",
  "6+ years experience",
  "Local family business",
  "Quality guarantee",
  "Short-notice services",
  "Free quotes",
]

const stats = [
  { value: "30+", label: "Projects completed" },
  { value: "100%", label: "Customer satisfaction" },
  { value: "6+", label: "Years on the tools" },
]

export function AboutSection() {
  return (
    <section className="bg-white py-20 sm:py-28" id="about">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={HouseFraming}
              alt="Timber framing on a home extension in progress"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-ink p-5 text-white shadow-xl sm:left-auto sm:right-[-1.5rem] sm:w-64">
            <div className="font-display text-4xl font-semibold text-brand">2025</div>
            <p className="mt-1 text-sm text-white/75">Founded on years of hands-on trade experience in the Canberra region.</p>
          </div>
        </div>

        {/* Content */}
        <div className="pt-6 lg:pt-0">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">About us</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            Craftsmanship you can trust.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Our business is built on over six years of hands-on carpentry experience and a deep
            passion for craftsmanship. From custom builds to full-scale renovations, we take pride
            in delivering high-quality, detail-driven work that transforms spaces and stands the
            test of time.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Whether it's framing, finishing, or restoring, every project reflects our commitment to
            precision, reliability, and client satisfaction.
          </p>

          <h3 className="mt-10 text-lg font-semibold text-ink">Why choose Capital Craft</h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-center gap-3 text-ink/85">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {reason}
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-semibold text-primary sm:text-4xl">{stat.value}</dd>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
