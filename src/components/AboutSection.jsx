import React from "react";
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"
import HouseFraming from "../assets/HouseFraming.jpg"

export function AboutSection() {
  return (
    <section className="py-16 px-8" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="aspect-[4/3]">
                <img
                  src={HouseFraming}
                  alt="Master carpenter at work"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl mb-4 text-white">Craftsmanship You Can Trust</h2>
              <p className="text-lg mb-6 text-white">
                Founded in 2025, our business is built on over six years of hands-on carpentry experience and a deep passion for craftsmanship. From custom builds to full-scale renovations, we take pride in delivering high-quality, detail-driven work that transforms spaces and stands the test of time. Whether it's framing, finishing, or restoring, every project reflects our commitment to precision, reliability, and client satisfaction.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="mb-3 text-white">Why Choose Capital Craft</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Qualified &amp; Insured</Badge>
                  <Badge variant="secondary">6+ Years Experience</Badge>
                  <Badge variant="secondary">Local Family Business</Badge>
                  <Badge variant="secondary">Quality Guarantee</Badge>
                  <Badge variant="secondary">Short Notice Services</Badge>
                  <Badge variant="secondary">Free Quotes</Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <div className="text-2xl text-primary mb-1">30+</div>
                  <p className="text-sm text-white">Projects Completed</p>
                </div>
                <div>
                  <div className="text-2xl text-primary mb-1">100%</div>
                  <p className="text-sm text-white">Customer Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}