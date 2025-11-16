import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "./ui/button"
import { ImageCarousel } from "./ImageCarousel"

export function HeroSection() {
  return (
    <section className="py-16 px-8 bg-background" id="home">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl mb-4 text-white">
                Expert Carpentry &amp; Maintenance Services
              </h1>
              <p className="text-xl mb-6 text-white">
                Transform your home with our skilled craftsmanship. From custom cladding
                to complete renovations, we bring your vision to life with precision and care.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-white">Qualified, Bonded &amp; Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-white">6+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-white">Free Estimates &amp; Consultations</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-white">Short Notice Repair Services</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact">
                <Button size="lg" className="gap-2">
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="lg:order-first">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}