"use client";
import React, { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Contact() {
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
      id="contact"
      className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-200 py-12 sm:py-16 lg:py-20"
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
            Visit Us
          </h2>
          <p
            className={`text-lg sm:text-xl text-orange-800 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            Come experience the warmth of Sepupus Cafe. We're here to serve you
            the perfect cup and create memorable moments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div
              className={`bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-4 sm:mb-6">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">
                      Location
                    </h4>
                    <p className="text-orange-800">
                      123 Coffee Street
                      <br />
                      Kuala Lumpur, 50200
                      <br />
                      Malaysia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">
                      Phone
                    </h4>
                    <p className="text-orange-800">+60 12 494 0241</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-900" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">
                      Email
                    </h4>
                    <p className="text-orange-800">hello@sepupuscafe.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-4 sm:mb-6 flex items-center gap-3">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                Opening Hours
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-orange-800 font-medium">
                    Monday - Friday
                  </span>
                  <span className="text-orange-900 font-semibold">
                    7:00 AM - 9:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-800 font-medium">Saturday</span>
                  <span className="text-orange-900 font-semibold">
                    8:00 AM - 10:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-800 font-medium">Sunday</span>
                  <span className="text-orange-900 font-semibold">
                    8:00 AM - 8:00 PM
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-100 rounded-lg">
                <p className="text-orange-800 text-sm">
                  <strong>Holiday Hours:</strong> Please check our social media
                  for special holiday hours and closures.
                </p>
              </div>
            </div>
          </div>

          {/* Map and Social Media */}
          <div className="space-y-6 sm:space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-4 sm:mb-6">
                Find Us
              </h3>
              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl p-8 text-center">
                <MapPin className="w-16 h-16 text-orange-600 mx-auto mb-4" />
                <p className="text-orange-800 mb-4">
                  Interactive map coming soon!
                </p>
                <p className="text-orange-700 text-sm">
                  Located in the heart of Kuala Lumpur, easily accessible by
                  public transport and with parking available nearby.
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-4 sm:mb-6">
                Follow Us
              </h3>

              <div className="space-y-4">
                <a
                  href="https://instagram.com/sepupuscafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl hover:from-pink-200 hover:to-purple-200 transition-all duration-200"
                >
                  <Instagram className="w-8 h-8 text-pink-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Instagram</h4>
                    <p className="text-gray-600 text-sm">@sepupuscafe</p>
                  </div>
                </a>

                <a
                  href="https://facebook.com/sepupuscafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl hover:from-blue-200 hover:to-indigo-200 transition-all duration-200"
                >
                  <Facebook className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Facebook</h4>
                    <p className="text-gray-600 text-sm">Sepupus Cafe</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 p-4 bg-orange-100 rounded-lg">
                <p className="text-orange-800 text-sm text-center">
                  Follow us for daily specials, events, and behind-the-scenes
                  content!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gradient-to-r from-orange-300 to-amber-300 p-6 sm:p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold text-orange-900 mb-3 sm:mb-4">
              Questions or Special Requests?
            </h3>
            <p className="text-orange-800 mb-4 sm:mb-6 text-sm sm:text-base">
              We'd love to hear from you! Whether you're planning an event, have
              dietary requirements, or just want to say hello.
            </p>
            <a
              href="mailto:hello@sepupuscafe.com"
              className="inline-flex items-center gap-2 bg-orange-900 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-orange-800 transition-colors duration-200 text-sm sm:text-base"
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Send us an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
