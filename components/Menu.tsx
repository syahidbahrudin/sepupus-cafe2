"use client";
import React, { useState, useEffect, useRef } from "react";

const coffeeItems = [
  {
    name: "Espresso",
    price: "RM 8",
    description: "Rich, bold shot of premium coffee",
  },
  {
    name: "Americano",
    price: "RM 10",
    description: "Smooth espresso with hot water",
  },
  {
    name: "Cappuccino",
    price: "RM 12",
    description: "Perfect balance of espresso, steamed milk, and foam",
  },
  {
    name: "Latte",
    price: "RM 14",
    description: "Creamy steamed milk with espresso art",
  },
  {
    name: "Mocha",
    price: "RM 16",
    description: "Chocolate and espresso blend with whipped cream",
  },
  {
    name: "Cold Brew",
    price: "RM 12",
    description: "Smooth, refreshing cold-extracted coffee",
  },
];

const foodItems = [
  {
    name: "Croissant",
    price: "RM 8",
    description: "Buttery, flaky French pastry",
  },
  {
    name: "Avocado Toast",
    price: "RM 18",
    description: "Fresh avocado on artisan sourdough",
  },
  {
    name: "Breakfast Sandwich",
    price: "RM 22",
    description: "Egg, cheese, and bacon on brioche",
  },
  {
    name: "Blueberry Muffin",
    price: "RM 10",
    description: "Homemade with fresh blueberries",
  },
  {
    name: "Grilled Panini",
    price: "RM 20",
    description: "Ham, cheese, and tomato pressed sandwich",
  },
  {
    name: "Caesar Salad",
    price: "RM 24",
    description: "Crisp romaine with parmesan and croutons",
  },
];

const specialties = [
  {
    name: "Sepupus Special",
    price: "RM 18",
    description: "Our signature blend with caramel notes",
  },
  {
    name: "Iced Vanilla Latte",
    price: "RM 16",
    description: "Cool, creamy, and perfectly sweet",
  },
  {
    name: "Matcha Latte",
    price: "RM 15",
    description: "Premium Japanese matcha with steamed milk",
  },
  {
    name: "Chai Tea Latte",
    price: "RM 14",
    description: "Spiced tea blend with warm milk",
  },
];

export default function Menu() {
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
      id="menu"
      className="min-h-screen bg-gradient-to-b from-orange-100 to-amber-50 py-12 sm:py-16 lg:py-20"
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
            Our Menu
          </h2>
          <p
            className={`text-lg sm:text-xl text-orange-800 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            Discover our carefully curated selection of premium coffees, fresh
            pastries, and delicious meals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Coffee Section */}
          <div
            className={`bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-900 mb-6 sm:mb-8 text-center">
              ☕ Coffee
            </h3>
            <div className="space-y-6">
              {coffeeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border-b border-orange-200 pb-4"
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-orange-900">
                      {item.name}
                    </h4>
                    <p className="text-orange-700 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-orange-900 font-bold text-lg ml-4">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Food Section */}
          <div
            className={`bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-900 mb-6 sm:mb-8 text-center">
              🥐 Food
            </h3>
            <div className="space-y-6">
              {foodItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border-b border-orange-200 pb-4"
                >
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-orange-900">
                      {item.name}
                    </h4>
                    <p className="text-orange-700 text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-orange-900 font-bold text-lg ml-4">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specialties Section */}
        <div className="mt-8 sm:mt-12">
          <div
            className={`bg-gradient-to-r from-orange-200 to-amber-200 p-6 sm:p-8 rounded-2xl shadow-lg transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-900 mb-6 sm:mb-8 text-center">
              ✨ House Specialties
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {specialties.map((item, index) => (
                <div key={index} className="bg-white/80 p-4 sm:p-6 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-orange-900">
                        {item.name}
                      </h4>
                      <p className="text-orange-700 text-sm mt-1">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-orange-900 font-bold text-lg sm:ml-4 self-start">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Footer */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-orange-800 text-base sm:text-lg mb-3 sm:mb-4">
            All prices are in Malaysian Ringgit (RM)
          </p>
          <p className="text-orange-700 text-sm sm:text-base">
            Ask our baristas about seasonal specials and daily fresh selections!
          </p>
        </div>
      </div>
    </section>
  );
}
