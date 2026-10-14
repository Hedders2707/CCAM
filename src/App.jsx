import React from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { Logo } from "./components/Logo";

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
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-ink py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
          <Logo inverse />
          <p className="text-sm text-white/55">
            © {new Date().getFullYear()} Capital Craft and Maintenance. Qualified, bonded and insured.
          </p>
        </div>
      </footer>
    </div>
  );
}
