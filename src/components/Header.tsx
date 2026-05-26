import React, { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    {
      name: "The Gilsonite Difference",
      href: "#gilsonite",
    },
    {
      name: "Services",
      href: "#services",
    },
    {
      name: "Process",
      href: "#process",
    },
    {
      name: "Gallery",
      href: "#gallery",
    },
    {
      name: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-asphalt text-white shadow-lg py-3" : "bg-brand-asphalt/90 text-white py-4 sm:py-5 backdrop-blur-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-heading text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white uppercase leading-none">
              Normile
            </span>
            <span className="font-heading text-brand-orange text-xs sm:text-sm md:text-base font-semibold tracking-widest uppercase leading-none mt-1">
              Sealcoating
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-brand-orange transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="tel:555-0198" className="flex items-center group">
              <Phone className="w-5 h-5 text-brand-orange mr-2 group-hover:animate-pulse" />
              <span className="font-heading text-xl font-bold tracking-wide group-hover:text-brand-orange transition-colors">
                (555) 019-8273
              </span>
            </a>
            <Button href="#contact" variant="primary" size="sm">
              Free Estimate
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-brand-asphalt border-t border-gray-800 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-sm sm:text-base font-semibold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-gray-800 border-b border-gray-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 px-3 flex flex-col space-y-4">
              <a
                href="tel:555-0198"
                className="flex items-center justify-center bg-gray-800 py-3"
              >
                <Phone className="w-5 h-5 text-brand-orange mr-2" />
                <span className="font-heading text-xl font-bold tracking-wide">
                  (555) 019-8273
                </span>
              </a>
              <Button
                href="#contact"
                variant="primary"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Estimate
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
