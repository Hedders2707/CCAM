import React, { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { buttonClasses } from "./ui/button";
import { InstagramIcon } from "./InstagramIcon";
import { PHONE_DISPLAY, PHONE_HREF, INSTAGRAM_URL } from "../siteInfo";

const navItems = [
  { title: "Our Work", href: "#home" },
  { title: "Services", href: "#services" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/85 backdrop-blur-md transition-shadow ${isScrolled ? "border-border shadow-sm" : "border-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between gap-4">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-sm font-medium text-ink/75 transition-colors hover:text-primary"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Capital Craft on Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink/75 transition-colors hover:bg-accent hover:text-primary"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <div className="hidden sm:block">
              <a href={PHONE_HREF} className={buttonClasses({ size: "sm" })}>
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>
            {/* Compact call button on small phones */}
            <a
              href={PHONE_HREF}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white sm:hidden"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink hover:bg-accent md:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="border-t border-border pb-4 pt-2 md:hidden" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
