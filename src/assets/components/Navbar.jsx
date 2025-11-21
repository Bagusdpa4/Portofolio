import React, { useState, useEffect, useCallback } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const SCROLL_THRESHOLD = 100;

export const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > SCROLL_THRESHOLD) {
      setIsNavbarHidden(true);
      setIsMenuOpen(false);
    } else if (window.scrollY < lastScrollY) {
      setIsNavbarHidden(false);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", 
        block: "start", 
      });
    }
  };

  return (
    <nav
      className={`bg-gray-950/90 fixed left-0 top-0 z-50 w-full transform border-b border-cyan-500/30 shadow-lg backdrop-blur-sm transition-transform duration-300 ease-in-out ${
        isNavbarHidden ? "-translate-y-full" : "translate-y-0"
      } `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 font-sans text-white lg:px-8">
        {/* Section Kiri */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-wider text-cyan-400 transition duration-300 hover:text-cyan-300"
          onClick={(e) => handleLinkClick(e, "home")}
        >
          Portfolio Bagus
        </a>

        {/* Responsive Hamburger */}
        <button
          className="z-50 p-2 text-gray-300 hover:text-cyan-400 focus:outline-none lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Tutup Menu" : "Buka Menu"}
        >
          {isMenuOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>

        {/* Section Kanan */}
        <div className="hidden space-x-8 lg:flex">
          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, item.toLowerCase())}
              className="text-base font-semibold uppercase tracking-wide transition duration-300 hover:text-cyan-400"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Tautan Navigasi Dropdown */}
      <div
        className={`bg-gray-950/95 absolute w-full overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "max-h-60 border-t border-cyan-500/20 py-4 opacity-100"
            : "max-h-0 opacity-0"
        } `}
      >
        <div className="flex flex-col space-y-3 px-6">
          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-1 text-lg font-medium text-gray-300 hover:text-cyan-400"
              onClick={(e) => handleLinkClick(e, item.toLowerCase())}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
