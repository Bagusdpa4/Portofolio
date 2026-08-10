import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import {
  FaBriefcase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import webDeveloperAnimation from "../animation/Coding.json";

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/Bagusdpa4", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/bagusdwiputraadiyono/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/bagusdwiputraa/",
    label: "Instagram",
  },
  { icon: FaWhatsapp, href: "https://wa.me/+6282229749462", label: "WhatsApp" },
  { icon: SiGmail, href: "mailto:sugab.dwi88@gmail.com", label: "Email" },
];

const Section = ({ id, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`relative flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
};

const contentFadeInVariants = (direction = "up") => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
    y: direction === "up" ? 100 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
});

export const HeroSection = ({ handleSmoothScroll }) => (
  <Section
    id="home"
    className="bg-linear-to-r overflow-hidden from-gray-100 via-white to-blue-100 text-left dark:from-gray-950 dark:via-slate-800 dark:to-blue-950"
  >
    <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl grow items-center justify-center">
      <div className="flex h-full w-full flex-col-reverse items-center gap-10 py-4 lg:flex-row lg:gap-8">
        {/* KOLOM KIRI */}
        <motion.div
          className="flex h-full w-full flex-col justify-center lg:w-3/5"
          variants={contentFadeInVariants("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Main Headline */}
          <h1 className="text-6xl font-extrabold leading-tight text-black dark:text-white sm:text-7xl md:text-8xl">
            <span className="block text-sky-600 dark:text-cyan-400">Web</span>
            <span className="mt-2 block">Developer</span>
          </h1>

          {/* 1. Sub-tagline yang cocok */}
          <p className="mt-4 text-xl font-semibold text-black dark:text-gray-300 md:text-2xl">
            Building Fast, Reliable, and User-Focused Web Applications.
          </p>

          {/* 2. Short Description (Minimal 2 baris) */}
          <p className="mx-auto mt-6 max-w-3xl text-justify text-lg text-black dark:text-gray-400 lg:mx-0 lg:max-w-none">
            I focus on building websites with modern technologies. I can help
            you create digital products that not only look great but also
            deliver a seamless user experience and top-notch performance.
          </p>

          {/* 3. CTA Buttons (Disuaikan untuk mobile) */}
          <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
            <a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, "portfolio")}
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-sky-900/30 transition duration-300 hover:scale-[1.05] hover:bg-sky-700 dark:bg-cyan-600 dark:shadow-cyan-900/50 dark:hover:bg-cyan-700 sm:px-8 sm:text-lg"
            >
              <FaBriefcase className="mr-2 h-5 w-5" /> View Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "contact")}
              className="inline-flex items-center justify-center rounded-lg border border-black px-6 py-3 text-base font-semibold text-black transition duration-300 hover:scale-[1.05] hover:bg-black/10 dark:border-white dark:text-white dark:hover:bg-white/10 sm:px-8 sm:text-lg"
            >
              <FaEnvelope className="mr-2 h-5 w-5" /> Get in Touch
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex w-full justify-center space-x-6 border-t border-black pt-6 dark:border-gray-700/50 lg:justify-start">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-black transition duration-300 hover:scale-125 hover:text-sky-600 dark:text-gray-400 dark:hover:text-cyan-400"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              >
                <link.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* KOLOM KANAN */}
        <motion.div
          className="group relative hidden w-full justify-center lg:flex lg:h-full lg:w-2/4 lg:items-center"
          variants={contentFadeInVariants("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Kontainer untuk Lottie */}
          <div className="relative h-full w-full max-w-full sm:h-[600px] sm:w-[600px]">
            <Lottie
              animationData={webDeveloperAnimation}
              loop={true}
              autoplay={true}
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </Section>
);
