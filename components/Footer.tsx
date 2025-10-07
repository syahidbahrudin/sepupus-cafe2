"use client";

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-white py-8 sm:py-12">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Sepupus Cafe
          </h3>
          <p className="text-orange-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Where great coffee meets warm hospitality. Join us for an
            unforgettable experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 text-center sm:text-left">
          <div className="order-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Quick Links
            </h4>
            <div className="space-y-2 text-orange-200 text-sm sm:text-base">
              <button
                onClick={() => {
                  const element = document.getElementById("home");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="block hover:text-white transition-colors w-full sm:w-auto"
              >
                Home
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="block hover:text-white transition-colors w-full sm:w-auto"
              >
                About
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("menu");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="block hover:text-white transition-colors w-full sm:w-auto"
              >
                Menu
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="block hover:text-white transition-colors w-full sm:w-auto"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="order-2">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Contact Info
            </h4>
            <div className="space-y-2 text-orange-200 text-sm sm:text-base">
              <p>123 Coffee Street</p>
              <p>Kuala Lumpur, 50200</p>
              <p className="break-all sm:break-normal">+60 12 494 0241</p>
              <p className="break-all sm:break-normal">hello@sepupuscafe.com</p>
            </div>
          </div>

          <div className="order-3 sm:col-span-2 lg:col-span-1">
            <h4 className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
              Opening Hours
            </h4>
            <div className="space-y-2 text-orange-200 text-sm sm:text-base">
              <p>Mon-Fri: 7:00 AM - 9:00 PM</p>
              <p>Saturday: 8:00 AM - 10:00 PM</p>
              <p>Sunday: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-800 pt-6 sm:pt-8 text-center">
          <p className="text-orange-200 text-xs sm:text-sm leading-relaxed">
            © 2024 Sepupus Cafe. All rights reserved. Made with ❤️ for coffee
            lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
