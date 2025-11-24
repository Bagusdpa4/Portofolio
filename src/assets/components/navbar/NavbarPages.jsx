import React, { useState, useEffect, useCallback } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

const SCROLL_THRESHOLD = 100;
const SECTION_IDS = ["home", "about", "portfolio", "contact"];

export const NavbarPages = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomePage = pathname === "/";

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    if (isHomePage) {
      if (window.scrollY > lastScrollY && window.scrollY > SCROLL_THRESHOLD) {
        setIsNavbarHidden(true);
        setIsMenuOpen(false);
      } else if (window.scrollY < lastScrollY) {
        setIsNavbarHidden(false);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY, isHomePage]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveSection(id);

    if (isHomePage) {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // PERBAIKAN: Navigasi ke halaman yang dituju, bukan ke section di homepage.
      // 'home' -> '/'
      // 'about' -> '/about'
      const targetPath = id === "home" ? "/" : `/${id}`;
      navigate(targetPath);
    }
  };

  useEffect(() => {
    if (!isHomePage) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }

    // Logic Intersection Observer hanya untuk Homepage
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      SECTION_IDS.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, isHomePage]);

  // Logika untuk menentukan tautan aktif di halaman non-homepage
  const isLinkActive = (id) => {
    if (isHomePage) {
      return activeSection === id;
    }

    // Jika di halaman non-homepage, cek pathname
    if (id === "home") {
      return pathname === "/";
    }

    // Cek apakah pathname dimulai dengan '/[id]' (misalnya, '/portfolio' atau '/portfolio/detail')
    return pathname.startsWith(`/${id}`);
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
          BagusDev
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

        {/* Section Kanan (Desktop) */}
        <div className="hidden space-x-8 lg:flex">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
              className={`relative text-base font-semibold uppercase tracking-wide transition duration-300 hover:text-cyan-400 ${
                // PERBAIKAN LOGIKA LINK AKTIF
                isLinkActive(id)
                  ? "text-cyan-400 after:w-full after:bg-cyan-400"
                  : "text-gray-300 after:w-0 after:bg-gray-500"
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {/* Tautan Navigasi Dropdown (Mobile) */}
      <div
        className={`bg-gray-950/95 absolute w-full overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "max-h-60 border-t border-cyan-500/20 py-4 opacity-100"
            : "max-h-0 opacity-0"
        } `}
      >
        <div className="flex flex-col space-y-3 px-6">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block py-1 text-lg font-medium transition duration-300 ${
                // PERBAIKAN LOGIKA LINK AKTIF
                isLinkActive(id)
                  ? "font-bold text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
              onClick={(e) => handleLinkClick(e, id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};