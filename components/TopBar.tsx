"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/sepupus-logo-no-background.png";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

interface TopBarProps {
  isHero?: boolean;
}

export default function TopBar({ isHero = false }: TopBarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isHero) {
    // Hero TopBar - always visible on hero section
    return (
      <div className="absolute top-0 left-0 right-0 z-50 flex flex-row items-center justify-between max-w-[1300px] mx-auto py-7 px-6">
        <div className="flex-1 flex justify-start items-center gap-10">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href.substring(1))}
              className="text-amber-50 hover:text-orange-200 transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image src={logo} alt="logo" width={130} height={130} />
        </div>
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link
            className="bg-orange-200 py-2 px-4 rounded-3xl font-medium flex items-center gap-2 text-orange-950"
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
    );
  }

  // Scroll TopBar - appears when scrolling
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md shadow-sm  transition-all duration-300 ${
        isScrolled ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex flex-row items-center justify-between max-w-[1300px] mx-auto py-4 px-6">
        <div className="flex-1 flex justify-start items-center gap-8">
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
        <div className="flex-1 flex justify-center items-center">
          <Image src={logo} alt="logo" width={80} height={80} />
        </div>
        <div className="flex-1 flex justify-end items-center gap-4">
          <Link
            className="bg-orange-200 py-2 px-4 rounded-3xl font-medium flex items-center gap-2 text-orange-950"
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
  );
}
