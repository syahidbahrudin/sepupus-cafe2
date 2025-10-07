"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "@/assets/sepupus-logo-no-background.png";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Menu",
    href: "#menu",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const handleMobileNavClick = (
  sectionId: string,
  setIsMobileMenuOpen: (open: boolean) => void
) => {
  scrollToSection(sectionId);
  setIsMobileMenuOpen(false);
};

interface TopBarProps {
  isHero?: boolean;
}

export default function TopBar({ isHero = false }: TopBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll prevention and click outside to close
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent body scrolling
      document.body.style.overflow = "hidden";

      // Handle click outside to close
      const handleClickOutside = (event: MouseEvent) => {
        if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(event.target as Node) &&
          menuButtonRef.current &&
          !menuButtonRef.current.contains(event.target as Node)
        ) {
          setIsMobileMenuOpen(false);
        }
      };

      // Handle escape key to close
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsMobileMenuOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);

      return () => {
        document.body.style.overflow = "unset";
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscapeKey);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  if (isHero) {
    // Hero TopBar - always visible on hero section
    return (
      <>
        <div className="absolute top-0 left-0 right-0 z-50 flex flex-row items-center justify-between max-w-[1300px] mx-auto py-4 sm:py-7 px-4 sm:px-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-start items-center gap-6 xl:gap-10">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-amber-50 hover:text-orange-200 transition-colors duration-200 cursor-pointer font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-amber-50 hover:text-orange-200 transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50 rounded-md"
              aria-label={
                isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 lg:flex-1 flex justify-center items-center">
            <Image src={logo} alt="logo" width={130} height={130} />
          </div>

          {/* Desktop Order Button */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
            <Link
              className="bg-orange-200 py-2 px-4 rounded-3xl font-medium flex items-center gap-2 text-orange-950 hover:bg-orange-300 transition-colors duration-200"
              href="https://wa.me/+60124940241"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
              <div className="bg-yellow-950 backdrop-blur-sm p-1 rounded-full flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in">
            <div
              ref={mobileMenuRef}
              id="mobile-menu"
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-orange-900 via-orange-800 to-orange-900 shadow-lg animate-slide-in-top"
              role="navigation"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col pt-20 pb-8 px-6">
                {links.map((link, index) => (
                  <button
                    key={link.name}
                    onClick={() =>
                      handleMobileNavClick(
                        link.href.substring(1),
                        setIsMobileMenuOpen
                      )
                    }
                    className="mobile-nav-item text-amber-50 hover:text-orange-200 transition-all duration-200 cursor-pointer font-medium py-4 text-lg border-b border-orange-700/30 last:border-b-0 text-left hover:bg-orange-800/30 rounded-lg px-2 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50 animate-slide-in-left opacity-0"
                    style={{
                      animationDelay: `${index * 100 + 200}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    {link.name}
                  </button>
                ))}
                <div
                  className="mt-6 pt-6 border-t border-orange-700/30 animate-slide-in-bottom opacity-0"
                  style={{
                    animationDelay: "600ms",
                    animationFillMode: "forwards",
                  }}
                >
                  <Link
                    className="bg-orange-200 py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 text-orange-950 hover:bg-orange-300 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
                    href="https://wa.me/+60124940241"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Order Now
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Scroll TopBar - appears when scrolling
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md shadow-sm transition-all duration-300 ${
          isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-row items-center justify-between max-w-[1300px] mx-auto py-3 sm:py-4 px-4 sm:px-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-start items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-orange-900 hover:text-orange-600 transition-colors duration-200 cursor-pointer font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-orange-900 hover:text-orange-600 transition-colors duration-200 p-2 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 rounded-md"
              aria-label={
                isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-scroll"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 lg:flex-1 flex justify-center items-center">
            <Image src={logo} alt="logo" width={80} height={80} />
          </div>

          {/* Desktop Order Button */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
            <Link
              className="bg-orange-200 py-2 px-4 rounded-3xl font-medium flex items-center gap-2 text-orange-950 hover:bg-orange-300 transition-colors duration-200"
              href="https://wa.me/+60124940241"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Now
              <div className="bg-yellow-950 backdrop-blur-sm p-1 rounded-full flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay for Scroll TopBar */}
      {isMobileMenuOpen && isScrolled && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div
            ref={mobileMenuRef}
            id="mobile-menu-scroll"
            className="absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-slide-in-top"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col pt-16 pb-8 px-6">
              {links.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() =>
                    handleMobileNavClick(
                      link.href.substring(1),
                      setIsMobileMenuOpen
                    )
                  }
                  className="mobile-nav-item text-orange-900 hover:text-orange-600 transition-all duration-200 cursor-pointer font-medium py-4 text-lg border-b border-orange-200/50 last:border-b-0 text-left hover:bg-orange-100/50 rounded-lg px-2 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 animate-slide-in-left opacity-0"
                  style={{
                    animationDelay: `${index * 100 + 200}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {link.name}
                </button>
              ))}
              <div
                className="mt-6 pt-6 border-t border-orange-200/50 animate-slide-in-bottom opacity-0"
                style={{
                  animationDelay: "600ms",
                  animationFillMode: "forwards",
                }}
              >
                <Link
                  className="bg-orange-200 py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 text-orange-950 hover:bg-orange-300 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
                  href="https://wa.me/+60124940241"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Order Now
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
