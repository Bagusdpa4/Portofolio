import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../assets/components/Navbar";
import { Footer } from "../assets/components/Footer";
import Profile from "../assets/img/Profile.jpg";

import { ProjectContent } from "../assets/components/portofolio/ProjectContent";
import { CertificateContent } from "../assets/components/portofolio/CertificateContent";
import { ArticleContent } from "../assets/components/portofolio/ArticleContent";
import { TechStackContent } from "../assets/components/portofolio/TechStackContent";

import {
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaClock,
  FaInstagram,
} from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { PiCertificateFill } from "react-icons/pi";
import { GiGears } from "react-icons/gi";
import { FiExternalLink } from "react-icons/fi";
import { FaPhoneVolume, FaPhone } from "react-icons/fa6";
import { HiCode } from "react-icons/hi";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// Komponen Section
const Section = ({ id, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-10 sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
};

// Data Kontak Pribadi
const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "sugab.dwi88@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Telepon",
    value: "+6282229749462",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "Bagusdpa4",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "bagusdwiputraadiyono",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    value: "bagusdwiputraa",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Lokasi",
    value: "Sidoarjo, Indonesia",
  },
];

// Komponen Item Kontak
const ContactItem = ({ icon: Icon, label, value }) => (
  <div className="flex cursor-default items-start space-x-3 rounded-lg border border-gray-700 bg-gray-900/50 p-3 transition duration-300 hover:border-cyan-400">
    <Icon className="my-3 h-6 w-6 shrink-0 text-cyan-400" />
    <div className="text-left">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
        {label}
      </p>
      <p className="break-word text-base font-semibold text-white sm:text-lg">
        {value.length > 25 ? value.substring(0, 22) + "..." : value}
      </p>
    </div>
  </div>
);

// Komponen Statistik
const StatItem = ({ icon: Icon, number, label }) => (
  <div className="flex flex-col items-center p-4">
    <div className="flex items-center">
      <Icon className="mr-2 h-5 w-5 text-cyan-400 sm:h-6 sm:w-6" />
      <p className="text-3xl font-extrabold text-white sm:text-4xl">{number}</p>
    </div>
    <p className="mt-1 text-center text-xs uppercase tracking-widest text-gray-400">
      {label}
    </p>
  </div>
);

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
      duration: 2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

// Variants untuk Judul/Header Section (Muncul dari Atas)
const sectionHeaderVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Variants untuk Konten (Muncul/Fade In)
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

// Variants Container untuk Staggering (misalnya, Daftar Kontak atau Statistik)
const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, // Jeda sebelum anak pertama muncul
      staggerChildren: 0.1, // Jeda antara setiap anak
    },
  },
};

// Variants untuk item-item di dalam Stagger Container
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export const Homepage = () => {
  const [activeTab, setActiveTab] = useState("project");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Kolom Statistik Section 2
  const totalProjects = 3;
  const totalCertificates = 4;
  const totalArticles = 3;
  const yearsOfExperience = 1;

  // Component Section Portfolio
  let PortfolioContentComponent;
  if (activeTab === "certificate") {
    PortfolioContentComponent = CertificateContent;
  } else if (activeTab === "article") {
    PortfolioContentComponent = ArticleContent;
  } else if (activeTab === "techstack") {
    PortfolioContentComponent = TechStackContent;
  } else {
    PortfolioContentComponent = ProjectContent;
  }

  // Active tab section portfolio
  const activeTabStyle =
    "bg-linear-to-r from-cyan-600 to-blue-700 text-white shadow-lg shadow-cyan-900/50";
  const inactiveTabStyle =
    "text-gray-400 hover:bg-gray-700/50 hover:scale-105 cursor-pointer";

  return (
    <motion.div
      className="from-gray-950 to-blue-950 via-slate-800 bg-linear-to-r min-h-screen font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Navbar handleSmoothScroll={handleSmoothScroll} />

      <main>
        {/* 1. HOME SECTION */}
        <Section id="home" className="justify-center pt-0 text-center">
          <div className="mx-auto max-w-4xl py-20">
            <motion.p
              className="mb-4 text-lg font-light tracking-widest text-white opacity-80 sm:text-xl"
              variants={textVariants}
            >
              Welcome To My
            </motion.p>
            <motion.h1
              className="text-slate-500 text-5xl font-extrabold leading-tight tracking-tighter sm:text-7xl lg:text-9xl"
              variants={textVariants}
            >
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Portfolio
              </span>
              Website
            </motion.h1>
            <motion.div
              className="mt-12 flex w-full justify-center sm:mt-16"
              variants={textVariants}
            >
              <div className="flex h-32 w-64 items-center justify-center rounded-lg border border-cyan-500/30 bg-gray-900/50 text-gray-400 sm:h-40 sm:w-80 sm:text-xl">
                <FaLaptopCode className="mr-2 h-10 w-10 text-cyan-400" />
                <p className="text-sm sm:text-base">Creative Developer</p>
              </div>
            </motion.div>
          </div>
        </Section>

        <hr className="mx-auto w-full max-w-7xl border-t border-gray-700" />

        {/* 2. ABOUT SECTION */}
        <Section id="about">
          <div className="w-full max-w-7xl">
            <motion.div
              className="mb-10 text-center"
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="mb-2 text-4xl font-extrabold text-white sm:text-5xl">
                About Me
              </h2>
              <p className="flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-cyan-400 sm:text-sm">
                <FaUser className="mr-1 h-4 w-4 lg:mr-2" /> Transforming ideas
                into digital experiences
              </p>
            </motion.div>

            {/* Konten Utama */}
            <div className="flex flex-col items-center gap-10 text-left md:flex-row-reverse md:items-start md:gap-16">
              <motion.div
                className="mt-10 flex w-full justify-center md:mt-0 md:w-1/3 md:justify-end"
                variants={contentFadeInVariants("right")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative h-64 w-64 sm:h-80 sm:w-80">
                  <div className="absolute inset-0 m-auto h-full w-full animate-pulse rounded-full bg-cyan-500 opacity-20 blur-3xl filter"></div>

                  {/* Container Foto Profil */}
                  <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border-4 border-cyan-500/50 bg-gray-700 shadow-2xl shadow-cyan-500/20">
                    <img
                      src={Profile}
                      alt="Foto Profil Bagus Dwi"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Section Kiri */}
              <motion.div
                className="w-full space-y-4 md:w-2/3"
                variants={contentFadeInVariants("left")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-2xl font-light text-white sm:text-3xl">
                  Hello, I'm
                </p>
                <h3 className="text-4xl font-extrabold text-cyan-400 sm:text-5xl">
                  Bagus Dwi Putra Adiyono
                </h3>
                <p className="text-base text-gray-300 sm:text-lg">
                  Saya adalah seorang pengembang **Front-End** yang bersemangat
                  dalam mengubah ide kreatif menjadi antarmuka pengguna yang
                  indah dan fungsional. Saya memiliki keahlian dalam React dan
                  Tailwind CSS untuk menciptakan pengalaman digital yang
                  responsif, modern, dan berpusat pada pengguna. Saya juga
                  mengeksplorasi pengembangan Full-Stack menggunakan Node.js
                  untuk membangun solusi digital yang komprehensif dari awal
                  hingga akhir.
                </p>

                {/* Button */}
                <div className="flex flex-col space-y-3 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <a
                    href="/docs/CV_Bagus Dwi Putra Adiyono.pdf"
                    target="_blank"
                    className="bg-linear-to-r inline-flex cursor-pointer items-center justify-center rounded-lg from-cyan-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
                  >
                    <span className="mr-2">💾</span> Download CV
                  </a>
                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
                    onClick={(e) => handleSmoothScroll(e, "portfolio")}
                  >
                    <span className="mr-2">{"</>"}</span> View Projects
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Statistik */}
            <motion.div
              className="mt-16 border-t border-gray-700 pt-10"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="grid grid-cols-2 divide-x divide-gray-700 rounded-xl border border-gray-600 bg-gray-800/50 lg:grid-cols-4"
                variants={staggerContainerVariants}
              >
                {
                  // Pembungkus StatItem dengan motion.div
                  [
                    { icon: HiCode, number: totalProjects, label: "PROJECTS" },
                    {
                      icon: PiCertificateFill,
                      number: totalCertificates,
                      label: "CERTIFICATES",
                    },
                    {
                      icon: GrArticle,
                      number: totalArticles,
                      label: "ARTICLES",
                    },
                    {
                      icon: FaClock,
                      number: yearsOfExperience,
                      label: "YEARS OF EXPERIENCE",
                    },
                  ].map((stat, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <StatItem
                        icon={stat.icon}
                        number={stat.number}
                        label={stat.label}
                      />
                    </motion.div>
                  ))
                }
              </motion.div>
            </motion.div>
          </div>
        </Section>

        <hr className="mx-auto w-full max-w-7xl border-t border-gray-700" />

        {/* 3. PORTFOLIO SECTION */}
        <Section id="portfolio">
          <div className="w-full max-w-7xl text-center">
            <motion.div
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mb-2 flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-cyan-400 sm:text-sm">
                <FaBriefcase className="mr-2 h-4 w-4" /> My Work
              </p>
              <h2 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
                Portfolio Showcase
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-base text-gray-400 sm:text-lg">
                Explore my journey through projects, certifications, and
                technical expertise. Each section represents a milestone in my
                continuous learning path.
              </p>
            </motion.div>

            {/* TOMBOL NAVIGASI */}
            <motion.div
              className="mx-auto mb-12 flex max-w-4xl justify-center space-x-2 rounded-xl border border-cyan-700/50 bg-gray-900/50 p-2 sm:space-x-4 sm:p-3"
              variants={contentFadeInVariants("up")}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Tombol Project */}
              <button
                onClick={() => setActiveTab("project")}
                className={`flex w-1/4 flex-col items-center justify-center rounded-lg px-3 py-3 font-semibold transition duration-300 sm:px-4 sm:py-4 ${
                  activeTab === "project" ? activeTabStyle : inactiveTabStyle
                }`}
              >
                <HiCode className="mb-1 h-6 w-6" />
                <span className="text-sm sm:text-base">Projects</span>
              </button>
              {/* Tombol Certificate */}
              <button
                onClick={() => setActiveTab("certificate")}
                className={`flex w-1/4 flex-col items-center justify-center rounded-lg px-3 py-3 font-semibold transition duration-300 sm:px-4 sm:py-4 ${
                  activeTab === "certificate"
                    ? activeTabStyle
                    : inactiveTabStyle
                }`}
              >
                <PiCertificateFill className="mb-1 h-6 w-6" />
                <span className="text-sm sm:text-base">Certificates</span>
              </button>
              {/* Tombol Article */}
              <button
                onClick={() => setActiveTab("article")}
                className={`flex w-1/4 flex-col items-center justify-center rounded-lg px-3 py-3 font-semibold transition duration-300 sm:px-4 sm:py-4 ${
                  activeTab === "article" ? activeTabStyle : inactiveTabStyle
                }`}
              >
                <GrArticle className="mb-1 h-6 w-6" />
                <span className="text-sm sm:text-base">Articles</span>
              </button>
              {/* Tombol Tech Stack */}
              <button
                onClick={() => setActiveTab("techstack")}
                className={`flex w-1/4 flex-col items-center justify-center rounded-lg px-3 py-3 font-semibold transition duration-300 sm:px-4 sm:py-4 ${
                  activeTab === "techstack" ? activeTabStyle : inactiveTabStyle
                }`}
              >
                <GiGears className="mb-1 h-6 w-6" />
                <span className="text-sm sm:text-base">Tech Stack</span>
              </button>
            </motion.div>

            {/* Default Konten */}
            <div className="mt-10">
              <PortfolioContentComponent />
            </div>
          </div>
        </Section>

        <hr className="mx-auto w-full max-w-7xl border-t border-gray-700" />

        {/* 4. CONTACT SECTION */}
        <Section id="contact">
          <div className="w-full max-w-7xl">
            {/* Header */}
            <motion.div
              className="mb-12 text-center sm:mb-16"
              variants={sectionHeaderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="mb-2 flex items-center justify-center text-sm font-semibold uppercase tracking-wider text-cyan-400 sm:text-base">
                <FaEnvelope className="mr-2 h-4 w-4" /> Get in Touch
              </p>
              <h2 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Let's Collaborate
              </h2>
              <p className="mx-auto max-w-2xl text-base text-gray-400 sm:text-xl">
                Tertarik untuk berdiskusi tentang peluang kerja, proyek, atau
                kolaborasi? Anda dapat menghubungi saya melalui
                platform-platform di bawah ini.
              </p>
            </motion.div>

            {/* Container */}
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-2">
              {/* Section Kiri */}
              <motion.div
                className="flex w-full flex-col items-center lg:w-1/2"
                variants={contentFadeInVariants("left")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="mb-6 text-base font-semibold text-gray-300 sm:text-lg">
                  Klik ikon di bawah ini untuk menghubungi saya.
                </p>
                <div className="relative flex h-56 w-56 items-center justify-center rounded-full sm:h-72 sm:w-72">
                  {/* Efek Cincin Bercahaya (Pulsating Ring) */}
                  <div className="absolute inset-0 h-full w-full animate-ping rounded-full border border-cyan-500/50 opacity-50"></div>
                  <div className="absolute inset-0 h-full w-full rounded-full border-4 border-cyan-500/70 bg-gray-900/50 shadow-2xl shadow-cyan-500/30"></div>

                  {/* Ikon Kiri */}
                  <a href="https://wa.me/+6282229749462" title="Hubungi Saya">
                    <FaPhoneVolume className="relative z-10 h-28 w-28 text-cyan-400 transition duration-300 hover:scale-110 sm:h-36 sm:w-36" />
                  </a>
                </div>
              </motion.div>

              {/* Section Kanan */}
              <motion.div
                className="w-full lg:w-1/2"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
                  {/* Daftar Kontak */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {contactInfo.map((item, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <ContactItem
                          icon={item.icon}
                          label={item.label}
                          value={item.value}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Tombol ke Halaman Kontak Detail */}
                  <motion.div className="mt-10" variants={itemVariants}>
                    <a
                      href="/contact"
                      className="text-gray-950 inline-flex w-full items-center justify-center rounded-lg bg-cyan-500 px-8 py-3 text-base font-bold shadow-xl transition duration-300 hover:scale-[1.01] hover:bg-cyan-400"
                    >
                      Lihat Detail Kontak Lengkap
                      <FiExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </motion.div>
  );
};
