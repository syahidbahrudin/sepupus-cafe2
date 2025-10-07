"use client";

export default function Footer() {
  return (
    <footer className="bg-orange-900 text-white py-12">
      <div className="max-w-[1300px] mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Sepupus Cafe</h3>
          <p className="text-orange-200 max-w-2xl mx-auto">
            Where great coffee meets warm hospitality. Join us for an
            unforgettable experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-orange-200">
              <button
                onClick={() => {
                  const element = document.getElementById("home");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="block hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="block hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("menu");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="block hover:text-white transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="block hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <div className="space-y-2 text-orange-200">
              <p>123 Coffee Street</p>
              <p>Kuala Lumpur, 50200</p>
              <p>+60 12 494 0241</p>
              <p>hello@sepupuscafe.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Opening Hours</h4>
            <div className="space-y-2 text-orange-200">
              <p>Mon-Fri: 7:00 AM - 9:00 PM</p>
              <p>Saturday: 8:00 AM - 10:00 PM</p>
              <p>Sunday: 8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-800 pt-8">
          <p className="text-orange-200">
            © 2024 Sepupus Cafe. All rights reserved. Made with ❤️ for coffee
            lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
