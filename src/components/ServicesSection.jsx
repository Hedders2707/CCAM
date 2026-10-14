import React from "react";
import { Hammer, Home, Wrench, PaintBucket, Shield, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Custom Carpentry",
    description: "Expertly crafted and decorative woodwork tailored to your space, including framing, doors, windows, and feature installations.",
    features: [
      "Skirting and architraves (decorative trim work)",
      "New door installation, jambs, and hardware",
      "Timber and aluminium windows",
      "Bespoke timber frames"
    ]
  },
  {
    icon: Home,
    title: "Home Renovations",
    description: "Transform your home with upgrades and modern finishes, from ceilings to bathrooms and everything in between.",
    features: [
      "Wall and ceiling sheeting (plasterboard)",
      "Suspended grid ceilings",
      "Timber and steel frames",
      "Eaves upgrades or replacements",
      "Bathroom renovations"
    ]
  },
  {
    icon: Wrench,
    title: "General Maintenance",
    description: "Keep your property in top shape with routine carpentry services that address wear, damage, and seasonal upkeep.",
    features: [
      "Repair or replacement of skirting and architraves",
      "Adjusting or replacing door hardware",
      "Decking restoration",
      "Cladding upgrades and replacements"
    ]
  },
  {
    icon: PaintBucket,
    title: "Interior & Exterior",
    description: "Enhance your indoor and outdoor spaces with durable finishes and carpentry suited to all environments.",
    features: [
      "Wall and ceiling sheeting",
      "Decks and pergolas",
      "Timber and steel frames",
      "Deck sanding and staining"
    ]
  },
  {
    icon: Shield,
    title: "Warranty & Insurance",
    description: "Peace of mind with every project. Our services are fully insured and backed by skilled craftsmanship and solid guarantees.",
    features: [
      "Quality guarantee",
      "Qualified carpenter",
      "Fully insured",
      "Warranty protection"
    ]
  }
]

export function ServicesSection() {
  return (
    <section className="bg-paper py-20 sm:py-28" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">What we do</p>
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">
            Professional services, start to finish.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            From small repairs to major renovations, we offer comprehensive carpentry
            and maintenance services to keep your home in perfect condition.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-ink/5"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-sm font-semibold text-muted-foreground/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink/80">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}

          {/* Closing CTA tile fills the last grid cell */}
          <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl bg-primary p-7 text-white">
            <div aria-hidden="true" className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/10" />
            <div className="relative">
              <h3 className="text-2xl font-semibold">Not sure what you need?</h3>
              <p className="mt-3 leading-relaxed text-white/85">
                Tell us about the job and we'll come out, take a look, and give you an honest
                quote — free of charge.
              </p>
            </div>
            <a
              href="#contact"
              className="relative mt-8 inline-flex h-12 items-center justify-center gap-2 self-start rounded-full bg-white px-6 font-semibold text-primary transition-colors hover:bg-white/90"
            >
              Get a free quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
