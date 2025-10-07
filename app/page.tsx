"use client";
import TopBar from "@/components/TopBar";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import WelcomeScreen from "@/components/WelcomeScreen";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [welcomeAnimationPhase, setWelcomeAnimationPhase] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.body.classList.add("welcome-active");

    const welcomeSequence = async () => {
      setWelcomeAnimationPhase(1);

      setTimeout(() => setWelcomeAnimationPhase(2), 800);

      setTimeout(() => setWelcomeAnimationPhase(3), 2500);

      setTimeout(() => {
        setShowWelcome(false);
        setIsLoaded(true);
        setIsHeroVisible(true);
        document.body.classList.remove("welcome-active");
      }, 3500);
    };

    welcomeSequence();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        } else {
          setIsHeroVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Welcome Screen */}
      <WelcomeScreen
        showWelcome={showWelcome}
        welcomeAnimationPhase={welcomeAnimationPhase}
      />

      {/* Scroll-triggered TopBar */}
      <TopBar />

      {/* Hero Section */}
      <HeroSection
        ref={heroRef}
        isLoaded={isLoaded}
        isHeroVisible={isHeroVisible}
      />

      {/* All Sections */}
      <About />
      <Menu />
      <Contact />
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}
