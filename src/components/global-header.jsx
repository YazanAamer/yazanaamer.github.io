"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ activePage = "/" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Contact Us", path: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center">
            <img
              src="https://ucarecdn.com/57b8154e-92f3-4fb4-a901-46954d5f0cec/-/format/auto/"
              alt="ZENITH Logo"
              className="h-12 w-auto"
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`text-lg font-medium transition-colors duration-200 ${
                  activePage === item.path
                    ? "text-[#FF7043]"
                    : "text-[#222222] hover:text-[#FF7043]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-[#222222] hover:text-[#FF7043]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className={`text-lg font-medium transition-colors duration-200 ${
                    activePage === item.path
                      ? "text-[#FF7043]"
                      : "text-[#222222] hover:text-[#FF7043]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
},

function StoryComponent() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-bold mb-4">Default Header (Home Page)</h2>
        <MainComponent activePage="/" />
      </div>

      <div className="mt-32">
        <h2 className="text-lg font-bold mb-4">About Page Header</h2>
        <MainComponent activePage="/about" />
      </div>

      <div className="mt-32">
        <h2 className="text-lg font-bold mb-4">Services Page Header</h2>
        <MainComponent activePage="/services" />
      </div>

      <div className="mt-32">
        <h2 className="text-lg font-bold mb-4">Contact Page Header</h2>
        <MainComponent activePage="/contact" />
      </div>
    </div>
  );
});
}