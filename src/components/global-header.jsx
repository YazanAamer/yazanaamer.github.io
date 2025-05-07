import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalHeader() {
  // Get the current path to determine active link
  const pathname = usePathname();
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
          <Link href="/" className="flex items-center">
            <img
              src="https://ucarecdn.com/57b8154e-92f3-4fb4-a901-46954d5f0cec/-/format/auto/"
              alt="ZENITH Logo"
              className="h-12 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-lg font-medium transition-colors duration-200 ${pathname === item.path
                    ? "text-[#FF7043]"
                    : "text-[#222222] hover:text-[#FF7043]"
                  }`}
              >
                {item.label}
              </Link>
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
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-lg font-medium transition-colors duration-200 ${pathname === item.path
                      ? "text-[#FF7043]"
                      : "text-[#222222] hover:text-[#FF7043]"
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}