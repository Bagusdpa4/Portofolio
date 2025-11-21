import React, { useState } from "react";
import { Navbar } from "../assets/components/Navbar";
import { Footer } from "../assets/components/Footer";

// Import Komponen Konten Portfolio
import { ProjectContent } from "../assets/components/ProjectContent";
import { CertificateContent } from "../assets/components/CertificateContent";
import { TechStackContent } from "../assets/components/TechStackContent";

// Import Icons
import {
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
  FaStar,
  FaClock,
} from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { HiCode } from "react-icons/hi";

// Komponen Section
const Section = ({ id, children, className = "" }) => {
  return (
    <section
      id={id}
      className={`flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-[5rem] sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
};

// Data Kontak Pribadi
const contactInfo = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: "bagus.putra@example.com",
    link: "mailto:bagus.putra@example.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "/bagusdwi",
    link: "https://linkedin.com/in/bagusdwi",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "/bagusdev",
    link: "https://github.com/bagusdev",
  },
  {
    icon: FaPhone,
    label: "Telepon",
    value: "+62 812 3456 7890",
    link: "tel:+6281234567890",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Lokasi",
    value: "Jakarta, Indonesia",
    link: "https://maps.google.com/search?q=Jakarta+Indonesia",
  },
];

// Komponen Item Kontak
const ContactItem = ({ icon: Icon, label, value, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-start space-x-3 rounded-lg border border-gray-700 bg-gray-900/50 p-3 transition duration-300 hover:border-cyan-400"
  >
    <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
    <div className="text-left">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
        {label}
      </p>
      <p className="break-words text-base font-semibold text-white sm:text-lg">
        {value.length > 20 ? value.substring(0, 17) + "..." : value}
      </p>
    </div>
  </a>
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

export const Homepage = () => {
  const [activeTab, setActiveTab] = useState("project");

  const generalContactInfo = contactInfo.slice(0, 3);
  const totalProjects = 11;
  const totalCertificates = 7;
  const yearsOfExperience = 3;

  let PortfolioContentComponent;
  if (activeTab === "certificate") {
    PortfolioContentComponent = CertificateContent;
  } else if (activeTab === "techstack") {
    PortfolioContentComponent = TechStackContent;
  } else {
    PortfolioContentComponent = ProjectContent;
  }

  // Kelas Tailwind untuk style tombol navigasi aktif
  const activeTabStyle =
    "bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg shadow-cyan-900/50";
  const inactiveTabStyle = "text-gray-400 hover:bg-gray-800/50";

  return (
    <div className="from-gray-950 to-blue-950 via-slate-800 min-h-screen bg-gradient-to-r font-sans">
      <Navbar />

      <main>
        {/* 1. HOME SECTION */}
        <Section id="home" className="justify-center pt-0 text-center">
          <div className="mx-auto max-w-4xl py-20">
            <p className="mb-4 text-lg font-light tracking-widest text-white opacity-80 sm:text-xl">
              Welcome To My
            </p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tighter sm:text-7xl lg:text-9xl">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Portfolio
              </span>
              Website
            </h1>
            <div className="mt-12 flex w-full justify-center sm:mt-16">
              <div className="flex h-32 w-64 items-center justify-center rounded-lg border border-cyan-500/30 bg-gray-900/50 text-gray-400 sm:h-40 sm:w-80 sm:text-xl">
                <FaLaptopCode className="mr-2 h-10 w-10 text-cyan-400" />
                <p className="text-sm sm:text-base">Creative Developer</p>
              </div>
            </div>
          </div>
        </Section>

        <hr className="mx-auto w-full max-w-7xl border-t border-gray-700" />

        {/* 2. ABOUT SECTION */}
        <Section id="about">
          <div className="w-full max-w-7xl">
            {/* Judul dan Subtitle diposisikan di tengah atas */}
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-4xl font-extrabold text-white sm:text-5xl">
                About Me
              </h2>
              <p className="flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-cyan-400 sm:text-sm">
                <FaUser className="mr-2 h-4 w-4" /> Transforming ideas into
                digital experiences
              </p>
            </div>

            {/* Konten Utama (Deskripsi dan Foto) */}
            <div className="flex flex-col items-center gap-10 text-left md:flex-row-reverse md:items-start md:gap-16">
              {/* KANAN (Foto Profil) */}
              <div className="mt-10 flex w-full justify-center md:mt-0 md:w-1/3 md:justify-end">
                <div className="relative h-64 w-64 sm:h-80 sm:w-80">
                  {/* Efek Blur/Glow di belakang */}
                  <div className="absolute inset-0 m-auto h-full w-full animate-pulse rounded-full bg-cyan-500 opacity-20 blur-3xl filter"></div>

                  {/* Container Foto Profil */}
                  <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full border-4 border-cyan-500/50 bg-gray-700 shadow-2xl shadow-cyan-500/20">
                    <span className="text-2xl text-gray-400"></span>
                  </div>
                </div>
              </div>

              {/* KIRI (Deskripsi, Nama, dan Tombol) */}
              <div className="w-full space-y-4 md:w-2/3">
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

                {/* Tombol Aksi */}
                <div className="flex flex-col space-y-3 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  {/* Tombol Primary: Download CV */}
                  <button className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:bg-cyan-600">
                    <span className="mr-2">💾</span> Download CV
                  </button>
                  {/* Tombol Secondary: View Projects */}
                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
                  >
                    <span className="mr-2">{"< >"}</span> View Projects
                  </a>
                </div>
              </div>
            </div>

            {/* Statistik */}
            <div className="mt-16 border-t border-gray-700 pt-10">
              <div className="grid grid-cols-3 divide-x divide-gray-700 rounded-xl border border-gray-700 bg-gray-800/50">
                <StatItem
                  icon={FaStar}
                  number={totalProjects}
                  label="TOTAL PROJECTS"
                />
                <StatItem
                  icon={FaGraduationCap}
                  number={totalCertificates}
                  label="CERTIFICATES"
                />
                <StatItem
                  icon={FaClock}
                  number={yearsOfExperience}
                  label="YEARS OF EXPERIENCE"
                />
              </div>
            </div>
          </div>
        </Section>

        <hr className="mx-auto w-full max-w-7xl border-t border-gray-700" />

        {/* 3. PORTFOLIO SECTION */}
        <Section id="portfolio">
          <div className="w-full max-w-7xl text-center">
            <p className="mb-2 flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-cyan-400 sm:text-sm">
              <FaBriefcase className="mr-2 h-4 w-4" /> My Work
            </p>
            <h2 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
              Portfolio Showcase
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base text-gray-400 sm:text-lg">
              Explore my journey through projects, certifications, and technical
              expertise. Each section represents a milestone in my continuous
              learning path.
            </p>

            {/* TOMBOL NAVIGASI - Warna diubah ke Cyan/Blue */}
            <div className="mx-auto mb-12 flex max-w-4xl justify-center space-x-2 rounded-xl border border-cyan-700/50 bg-gray-900/50 p-2 sm:space-x-4 sm:p-3">
              {/* Tombol Project */}
              <button
                onClick={() => setActiveTab("project")}
                className={`flex w-1/3 flex-col items-center justify-center rounded-lg px-3 py-3 font-semibold transition duration-300 sm:px-4 sm:py-4 ${
                  activeTab === "project" ? activeTabStyle : inactiveTabStyle
                }`}
              >
                <HiCode className="mb-1 h-6 w-6" />
                <span className="text-sm sm:text-base">Projects</span>
              </button>
              {/* Tombol Certificate */}
              <button
                onClick={() => setActiveTab("certificate")}
                className={`flex w-1/3 flex-col items-center justify-center rounded-lg px-3 py-3 font-semibold transition duration-300 sm:px-4 sm:py-4 ${
                  activeTab === "certificate"
                    ? activeTabStyle
                    : inactiveTabStyle
                }`}
              >
                <FaGraduationCap className="mb-1 h-6 w-6" />
                <span className="text-sm sm:text-base">Certificates</span>
              </button>
              {/* Tombol Tech Stack */}
              <button
                onClick={() => setActiveTab("techstack")}
                className={`flex w-1/3 flex-col items-center justify-center rounded-lg px-3 py-3 font-semibold transition duration-300 sm:px-4 sm:py-4 ${
                  activeTab === "techstack" ? activeTabStyle : inactiveTabStyle
                }`}
              >
                <GiGears className="mb-1 h-6 w-6" />
                <span className="text-sm sm:text-base">Tech Stack</span>
              </button>
            </div>

            {/* Konten yang ditampilkan berdasarkan Tab Aktif */}
            <div className="mt-10">
              <PortfolioContentComponent />
            </div>
          </div>
        </Section>

        <hr className="mx-auto w-full max-w-7xl border-t border-gray-700" />

        {/* 4. CONTACT SECTION */}
        <Section id="contact">
          <div className="w-full max-w-7xl text-center">
            <p className="mb-2 flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-cyan-400 sm:text-sm">
              <FaEnvelope className="mr-2 h-4 w-4" /> Get in Touch
            </p>
            <h2 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
              Let's Collaborate
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base text-gray-400 sm:mb-12 sm:text-xl">
              Tertarik untuk berdiskusi tentang peluang kerja, proyek, atau
              kolaborasi? Anda dapat menemukan beberapa informasi utama di bawah
              ini.
            </p>

            <div className="mx-auto w-full max-w-3xl">
              {/* Menampilkan 3 item Kontak General saja */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {generalContactInfo.map((item, index) => (
                  <ContactItem
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                    link={item.link}
                  />
                ))}
              </div>

              {/* Tombol ke Halaman Kontak Detail */}
              <div className="mt-10 sm:mt-14">
                <a
                  href="/contact"
                  className="text-gray-950 inline-flex items-center rounded-lg bg-cyan-500 px-8 py-3 text-base font-bold shadow-lg transition duration-300 hover:bg-cyan-400"
                >
                  Lihat Detail Kontak Lainnya{" "}
                  <FiExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};
