import React from "react";
import { useState } from "react";
import {
  Home,
  Hammer,
  Users,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import CCAMSmall from "../assets/CCAMSmall.jpg";

const navItems = [
  { title: "Home", icon: Home, href: "#home" },
  { title: "Services", icon: Hammer, href: "#services" },
  { title: "About Us", icon: Users, href: "#about" },
  { title: "Contact", icon: Phone, href: "#contact" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  console.log("LOGO PATH:", CCAMSmall);

  return (
    <header className="sticky top-0 z-50 bg-primary text-primary-foreground border-b border-primary-foreground/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-25">
          {/* Logo */}
          <div href="#home" className="flex items-center gap-3">
            <div className="w-20 h-20 border-3 border-accent bg-white rounded-lg flex items-center justify-center">
              <img className="pl-0.5" src={CCAMSmall} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-background">Capital Craft</h1>
              <p className="text-m text-primary-foreground/80">& Maintenance</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {item.title}
                </a>
              );
            })}
          </nav>

          {/* Contact Info & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+61 413 315 700</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-primary-foreground/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 px-3 py-2 text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    {item.title}
                  </a>
                );
              })}
              <div className="px-3 py-2 text-sm text-primary-foreground/80 border-t border-primary-foreground/20 mt-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
