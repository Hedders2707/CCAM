import React from "react";
import { Hammer, Home, Wrench, PaintBucket, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    icon: Hammer,
    title: "Custom Carpentry",
    description: "Expertly crafted  and decorative woodwork tailored to your space, including framing, doors, windows, and feature installations.",
    features: [
      "Skirting and architraves (decorative trim work)",
      "New door installation, jambs, and hardware (custom fitting and detailing)",
      "Timber and aluminium windows (custom framing and fitting)",
      "Timber frames (bespoke  elements)"
    ]
  },
  {
    icon: Home,
    title: "Home Renovations",
    description: "Transform your home with upgrades and modern finishes, from ceilings to bathrooms and everything in between.",
    features: [
      "Walls and ceiling sheeting (plasterboard installation and finishing)",
      "Suspended grid ceilings",
      "Timber and steel frames ",
      "Eaves (upgrades or replacements)",
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
      "Cladding upgrade and replacements"
    ]
  },
  {
    icon: PaintBucket,
    title: "Interior & Exterior",
    description: "Enhance your indoor and outdoor spaces with durable finishes and  carpentry suited to all environments.",
    features: [
      "Walls and ceiling sheeting",
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
      "Quality Guarantee",
      "Qualified Carpenter",
      "Fully Insured",
      "Warranty Protection"
    ]
  }
]


export function ServicesSection() {
  return (
    <section className="py-16 px-8 bg-secondary" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4">Our Professional Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From small repairs to major renovations, we offer comprehensive carpentry
            and maintenance services to keep your home in perfect condition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <a href="#contact">
            <Button size="lg" className="gap-2">
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}