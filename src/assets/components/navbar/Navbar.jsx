import React, { useState, useEffect, useCallback } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { HiSun, HiMoon } from "react-icons/hi2";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";

const SCROLL_THRESHOLD = 100;
const SECTION_IDS = ["home", "about", "services", "portfolio", "contact"];

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHomePage = pathname === "/";

  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > SCROLL_THRESHOLD) {
      setIsNavbarHidden(true);
      setIsMenuOpen(false);
    } else if (window.scrollY < lastScrollY) {
      setIsNavbarHidden(false);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setActiveSection(id);

    if (id === "home") {
      if (isHomePage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (isHomePage) {
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate(`/#${id}`);
    }
  };

  useEffect(() => {
    if (!isHomePage) return;

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

    return () => {
      SECTION_IDS.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [isHomePage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const isLinkActive = (id) => {
    if (isHomePage) {
      return activeSection === id;
    }
    if (id === "about" && pathname === "/about-me") {
      return true;
    }
    if (id === "portfolio" && pathname.includes("/project/")) {
      return true;
    }

    return false;
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transform border-b border-sky-600/30 bg-white/90 shadow-lg backdrop-blur-sm transition-transform duration-300 ease-in-out dark:border-cyan-500/30 dark:bg-transparent ${
        isNavbarHidden ? "-translate-y-full" : "translate-y-0"
      } `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 font-sans text-black dark:text-white lg:px-0">
        {/* Left Section */}
        <a
          href="/"
          className="text-2xl font-extrabold tracking-wider text-sky-600 transition duration-300 hover:text-sky-500 dark:text-cyan-400 dark:hover:text-cyan-300"
          onClick={(e) => handleLinkClick(e, "home")}
        >
          BagusDev
        </a>

        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full p-2 text-black transition duration-300 hover:bg-black/10 hover:text-sky-600 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:text-cyan-400"
          >
            {theme === "dark" ? (
              <HiSun className="h-5 w-5" />
            ) : (
              <HiMoon className="h-5 w-5" />
            )}
          </button>

          {/* Responsive Hamburger */}
          <button
            className="z-50 p-2 text-black hover:text-sky-600 focus:outline-none dark:text-gray-300 dark:hover:text-cyan-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Right Section (Desktop) */}
        <div className="hidden items-center space-x-8 lg:flex">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleLinkClick(e, id)}
              className={`relative text-base font-semibold uppercase tracking-wide transition duration-300 hover:text-sky-600 dark:hover:text-cyan-400 ${
                isLinkActive(id)
                  ? "text-sky-600 after:w-full after:bg-sky-600 dark:text-cyan-400 dark:after:bg-cyan-400"
                  : "text-black after:w-0 after:bg-black/40 dark:text-gray-300 dark:after:bg-gray-500"
              } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}

          {/* Theme Toggle (Desktop) */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="cursor-pointer rounded-full p-2 text-black transition duration-300 hover:bg-black/10 hover:text-sky-600 dark:text-gray-300 dark:hover:bg-gray-700/50 dark:hover:text-cyan-400"
          >
            {theme === "dark" ? (
              <HiSun className="h-5 w-5" />
            ) : (
              <HiMoon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Navigation Links (Mobile) */}
      <div
        className={`absolute w-full overflow-hidden bg-white/95 transition-all duration-300 ease-in-out dark:bg-gray-950/95 lg:hidden ${
          isMenuOpen
            ? "max-h-60 border-t border-sky-600/20 py-4 opacity-100 dark:border-cyan-500/20"
            : "max-h-0 opacity-0"
        } `}
      >
        <div className="flex flex-col space-y-2 px-6">
          {SECTION_IDS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`block py-1 text-lg font-medium transition duration-300 ${
                isLinkActive(id)
                  ? "font-bold text-sky-600 dark:text-cyan-400"
                  : "text-black hover:text-sky-600 dark:text-gray-300 dark:hover:text-cyan-400"
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