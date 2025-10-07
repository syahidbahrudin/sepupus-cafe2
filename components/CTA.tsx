"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight, Coffee, Clock, Heart } from "lucide-react";
import Link from "next/link";

export default function CTA() {
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
      className="bg-gradient-to-b from-orange-200 to-orange-300 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-900 mb-4 sm:mb-6 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            Ready for Your Perfect Cup?
          </h2>
          <p
            className={`text-lg sm:text-xl text-orange-800 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            Join us at Sepupus Cafe for an unforgettable coffee experience.
            Order ahead or visit us today!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Order Online */}
          <div
            className={`bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg text-center group hover:bg-white transition-all duration-1000 ease-out sm:col-span-2 lg:col-span-1 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-orange-300 transition-colors duration-300">
              <Coffee className="w-6 h-6 sm:w-8 sm:h-8 text-orange-900" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-3 sm:mb-4">
              Order Online
            </h3>
            <p className="text-orange-800 mb-4 sm:mb-6 text-sm sm:text-base">
              Skip the wait! Order your favorite drinks and food online for
              pickup or delivery.
            </p>
            <Link
              href="https://wa.me/+60124940241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold hover:bg-orange-800 transition-colors duration-200 text-sm sm:text-base"
            >
              Order Now
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </Link>
          </div>

          {/* Visit Us */}
          <div
            className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center group hover:bg-white transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
          >
            <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-300 transition-colors duration-300">
              <Clock className="w-8 h-8 text-orange-900" />
            </div>
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              Visit Our Cafe
            </h3>
            <p className="text-orange-800 mb-6">
              Experience our cozy atmosphere, meet our friendly baristas, and
              enjoy fresh coffee on-site.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="inline-flex items-center gap-2 bg-orange-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-800 transition-colors duration-200"
            >
              Find Us
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Join Community */}
          <div
            className={`bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center group hover:bg-white transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
          >
            <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-300 transition-colors duration-300">
              <Heart className="w-8 h-8 text-orange-900" />
            </div>
            <h3 className="text-2xl font-bold text-orange-900 mb-4">
              Join Our Community
            </h3>
            <p className="text-orange-800 mb-6">
              Follow us on social media for daily specials, events, and coffee
              tips from our experts.
            </p>
            <Link
              href="https://instagram.com/sepupuscafe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-800 transition-colors duration-200"
            >
              Follow Us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-amber-300 to-orange-400 p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-3xl font-bold text-orange-900 mb-4">
            Special Offers
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/90 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-orange-900 mb-2">
                First-Time Visitor
              </h4>
              <p className="text-orange-800 mb-3">
                Get 10% off your first order when you mention this website!
              </p>
              <span className="text-sm text-orange-700 font-medium">
                Valid until end of month
              </span>
            </div>
            <div className="bg-white/90 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-orange-900 mb-2">
                Loyalty Program
              </h4>
              <p className="text-orange-800 mb-3">
                Buy 9 coffees, get the 10th one free! Ask about our loyalty
                card.
              </p>
              <span className="text-sm text-orange-700 font-medium">
                Ongoing offer
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://wa.me/+60124940241"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-800 transition-colors duration-200"
            >
              Claim Your Offer
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <p className="text-orange-800 text-sm">
              Or call us at <strong>+60 12 494 0241</strong>
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-orange-900 mb-4">
            Stay Updated
          </h3>
          <p className="text-orange-800 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new menu items,
            and coffee brewing tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
            />
            <button className="bg-orange-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-800 transition-colors duration-200">
              Subscribe
            </button>
          </div>
          <p className="text-orange-700 text-sm mt-3">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
