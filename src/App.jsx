import React from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (

    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <Navigation />

      {/* Main Content Area */}
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-8 px-8 border-t border-border">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2025 Capital Craft and Maintenance. All rights reserved. Qualified, bonded, and insured.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
