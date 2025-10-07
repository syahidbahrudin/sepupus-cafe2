"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100 py-20"
    >
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl font-bold text-orange-900 mb-6 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            Our Story
          </h2>
          <p
            className={`text-xl text-orange-800 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            Born from a passion for exceptional coffee and genuine connections,
            Sepupus Cafe is more than just a place to grab your morning brew.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div
              className={`bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              <h3 className="text-2xl font-semibold text-orange-900 mb-4">
                Our Mission
              </h3>
              <p className="text-orange-800 leading-relaxed">
                We believe that great coffee brings people together. Every cup
                we serve is carefully crafted with premium beans sourced from
                sustainable farms, roasted to perfection, and prepared with
                love.
              </p>
            </div>

            <div
              className={`bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
            >
              <h3 className="text-2xl font-semibold text-orange-900 mb-4">
                Our Values
              </h3>
              <ul className="text-orange-800 space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  Quality ingredients and sustainable sourcing
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  Creating a warm, welcoming community space
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  Supporting local farmers and artisans
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  Exceptional service with a personal touch
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div
              className={`bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
            >
              <h3 className="text-2xl font-semibold text-orange-900 mb-6">
                Why Choose Sepupus?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-900 font-bold text-lg">
                      ☕
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">
                      Premium Coffee
                    </h4>
                    <p className="text-orange-800 text-sm">
                      Hand-selected beans from the world's finest coffee regions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-900 font-bold text-lg">
                      🥐
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">
                      Fresh Pastries
                    </h4>
                    <p className="text-orange-800 text-sm">
                      Baked daily with the finest ingredients and traditional
                      recipes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-900 font-bold text-lg">
                      🏠
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">
                      Cozy Atmosphere
                    </h4>
                    <p className="text-orange-800 text-sm">
                      A warm, inviting space perfect for work, meetings, or
                      relaxation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
