"use client";

import Image from "next/image";
import logo from "@/assets/sepupus-logo-no-background.png";

interface WelcomeScreenProps {
  showWelcome: boolean;
  welcomeAnimationPhase: number;
}

export default function WelcomeScreen({
  showWelcome,
  welcomeAnimationPhase,
}: WelcomeScreenProps) {
  // if (!showWelcome) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-tl from-orange-800 via-orange-900 to-orange-950 flex items-center justify-center transition-all duration-1000 ease-out 
        ${welcomeAnimationPhase === 3 ? "opacity-0" : "opacity-100"}
        `}
    >
      <div className="text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div
          className={`mb-6 sm:mb-8 transition-all flex justify-center duration-800 ease-out ${
            welcomeAnimationPhase >= 1
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <Image src={logo} alt="logo" width={200} height={200} />
        </div>

        {/* Welcome Text */}
        <div
          className={`transition-all duration-800 ease-out ${
            welcomeAnimationPhase >= 1
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-orange-100 mb-4 sm:mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-orange-300 block sm:inline">
              Sepupu's Cafe
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`transition-all duration-800 ease-out ${
            welcomeAnimationPhase >= 2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-orange-200 max-w-md mx-auto leading-relaxed">
            Good food. Great coffee. <br /> Better company.
          </p>
        </div>

        {/* Loading Animation */}
        <div
          className={`mt-8 sm:mt-12 transition-all duration-800 ease-out ${
            welcomeAnimationPhase >= 2
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-100 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-100 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 bg-orange-100 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
