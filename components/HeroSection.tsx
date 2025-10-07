"use client";
import TopBar from "@/components/TopBar";
import { forwardRef } from "react";

interface HeroSectionProps {
  isLoaded: boolean;
  isHeroVisible: boolean;
}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ isLoaded, isHeroVisible }, ref) => {
    return (
      <section
        ref={ref}
        id="home"
        className="relative min-h-screen overflow-hidden"
      >
        <TopBar isHero />
        <video
          width="100%"
          height="100%"
          controls={false}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/assets/Black and Brown Modern Simple Minimalist Beans Coming Soon Coffee Shop Video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 bg-black/20">
          <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
            <div className="text-center sm:text-left">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-orange-300 mb-2 sm:mb-4 transition-all duration-1000 ease-out leading-tight ${
                  isLoaded && isHeroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isLoaded && isHeroVisible ? "200ms" : "0ms",
                }}
              >
                Good food
              </h1>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-white mb-2 sm:mb-4 transition-all duration-1000 ease-out leading-tight ${
                  isLoaded && isHeroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isLoaded && isHeroVisible ? "600ms" : "0ms",
                }}
              >
                Great coffee
              </h1>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-orange-200 mb-4 sm:mb-6 transition-all duration-1000 ease-out leading-tight ${
                  isLoaded && isHeroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isLoaded && isHeroVisible ? "1000ms" : "0ms",
                }}
              >
                Better companion
              </h1>
              <p
                className={`text-white text-base sm:text-lg md:text-xl max-w-[600px] leading-relaxed transition-all duration-1000 ease-out mx-auto sm:mx-0 ${
                  isLoaded && isHeroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isLoaded && isHeroVisible ? "1400ms" : "0ms",
                }}
              >
                At Sepupus, we blend flavors and stories that bring people
                together. Every sip and bite is crafted to make you feel right
                at home — cozy, modern, and full of good energy.
              </p>

              {/* Hero CTA Button */}
              <div
                className={`mt-6 sm:mt-8 transition-all duration-1000 ease-out text-center sm:text-left ${
                  isLoaded && isHeroVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isLoaded && isHeroVisible ? "1800ms" : "0ms",
                }}
              >
                <button
                  onClick={() => {
                    const element = document.getElementById("menu");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="hover:cursor-pointer bg-orange-200 hover:bg-orange-300 text-orange-950 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium text-base sm:text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Explore Our Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
