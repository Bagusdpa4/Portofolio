import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaCode, FaLightbulb } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { RiCustomerServiceFill } from "react-icons/ri";

// Komponen Item Layanan
const ServiceItem = ({ icon: Icon, title, description, variants }) => (
  <motion.div
    className="relative flex h-full flex-col items-start overflow-hidden rounded-xl border border-gray-700 bg-gray-900/90 p-6 text-left shadow-xl transition-all duration-500 hover:border-cyan-500 hover:bg-gray-800/90 hover:shadow-cyan-900/50"
    variants={variants}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
  >
    {/* Decorative element */}
    <div className="absolute right-0 top-0 h-1/2 w-1/2 rounded-bl-full bg-cyan-500/10 opacity-50 blur-3xl filter transition-opacity duration-500 group-hover:opacity-70"></div>

    <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-600/20 ring-4 ring-cyan-500/20">
      <Icon className="h-7 w-7 text-cyan-400" />
    </div>
    <h4 className="relative z-10 mb-3 text-xl font-bold text-white">{title}</h4>
    <p className="relative z-10 text-sm text-gray-400">{description}</p>
  </motion.div>
);

// Data Layanan
const services = [
  {
    icon: FaLaptopCode,
    title: "Full-Stack Web Development",
    description:
      "Membangun aplikasi web fungsional dari nol, menangani logic backend (API) hingga antarmuka pengguna (UI/UX) dengan fokus pada performa dan skalabilitas.",
  },
  {
    icon: FaCode,
    title: "Frontend Development (React.js)",
    description:
      "Menciptakan pengalaman pengguna yang interaktif, responsif, dan modern menggunakan React.js, Tailwind CSS, dan praktik UI/UX terbaik.",
  },
  {
    icon: FaLightbulb,
    title: "RESTful API Integration",
    description:
      "Merancang, mengimplementasikan, dan mengintegrasikan API yang aman dan efisien untuk memastikan komunikasi data yang mulus antara klien dan server.",
  },
  {
    icon: GiGears,
    title: "Database Management & Query",
    description:
      "Perancangan dan pengelolaan skema database (PostgreSQL, MySQL) yang optimal, termasuk penulisan query yang efisien untuk kinerja aplikasi.",
  },
];

// Framer Motion Variants
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

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
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

// Komponen Utama
export const ServiceSection = ({ SectionComponent }) => {
  return (
    <SectionComponent id="services" className="relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-900/10 blur-[150px]"></div>

      <div className="relative z-10 w-full max-w-7xl pt-0 lg:pt-10">
        <motion.div
          className="mb-10 text-center"
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="mb-2 text-4xl font-extrabold text-white sm:text-5xl">
            My Services
          </h2>
          <p className="flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-cyan-400 sm:text-sm">
            <RiCustomerServiceFill className="mr-1 h-4 w-4 lg:mr-2" /> Apa yang dapat saya
            tawarkan
          </p>
        </motion.div>

        {/* Grid Layanan */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} variants={itemVariants} />
          ))}
        </motion.div>

        {/* Call to Action (CTA) */}
        <motion.div
          className="mt-16 text-center"
          variants={contentFadeInVariants("up")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Layanan ini dapat disesuaikan dengan kebutuhan unik proyek Anda.
            Hubungi saya untuk diskusi lebih lanjut!
          </p>
        </motion.div>
      </div>
    </SectionComponent>
  );
};