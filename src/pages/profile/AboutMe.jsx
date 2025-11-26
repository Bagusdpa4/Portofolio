import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaLightbulb,
  FaHeart,
  FaUserTie,
} from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import Foto from "../../assets/img/Foto.jpg";
import { Navbar } from "../../assets/components/navbar/Navbar";
import { Loading } from "../../assets/components/loading/Loading";
import { motion } from "framer-motion";

const futureFocusAndAspiration =
  "Saya berambisi untuk terus berkembang di dunia teknologi informasi melalui peningkatan kompetensi di bidang pengembangan aplikasi, analisis sistem, serta pengelolaan data. Ke depannya, saya ingin memperdalam pemahaman terkait arsitektur sistem modern, optimalisasi proses bisnis berbasis teknologi, serta pemanfaatan layanan cloud untuk mendukung efisiensi operasional. Saya berharap dapat berkontribusi dalam menciptakan solusi teknologi yang bermanfaat, berkelanjutan, dan mampu memberikan dampak positif bagi pengguna maupun organisasi.";
const careerSummary1 =
  "Saya merupakan lulusan S1 Sistem Informasi dari Universitas Pembangunan Nasional “Veteran” Jawa Timur dengan pengalaman lebih dari satu tahun dalam pengembangan aplikasi berbasis web. Saya terbiasa menggunakan berbagai tools, framework, dan pendekatan yang mendukung proses pembangunan aplikasi berbasis web, mulai dari pengembangan website, sistem e-commerce, integrasi RESTful API, hingga perancangan dan pengelolaan database. Saya mampu menangani proyek dari tahap analisis kebutuhan, perancangan, pengembangan, hingga implementasi dan pengujian, termasuk proyek yang telah digunakan dalam lingkungan perusahaan.";
const careerSummary2 =
  "Saya memiliki ketertarikan pada pengembangan teknologi informasi secara menyeluruh, baik di bidang pemrograman, analisis sistem, maupun pengelolaan data. Fokus saya adalah merancang solusi teknologi yang fungsional, aman, dan sesuai dengan kebutuhan operasional pengguna. Saya merupakan individu yang terstruktur, mampu berkolaborasi dengan baik dalam tim, memiliki kemampuan pemecahan masalah yang kuat, serta dapat berkomunikasi dengan jelas. Saya berkomitmen untuk terus belajar dan beradaptasi dengan perkembangan teknologi guna memberikan kontribusi terbaik dalam lingkungan kerja profesional.";

const hobbies = [
  "Bermain Futsal",
  "Bermain Game",
  "Menonton Film",
  "Mendengarkan Musik",
];

const interest = ["Web Developer", "IT Programmer", "IT Support"];

const categorizedSkills = {
  Frontend: [
    "JavaScript (ES6+)",
    "React.JS",
    "Tailwind CSS",
    "Bootstrap",
    "Redux",
    "HTML5 & CSS3",
    "Next.js (Dasar)",
  ],
  Backend: [
    "Node.js & Express.js",
    "Prisma ORM",
    "RESTful API Development",
    "JWT Authentication",
    "Error Handling",
    "Google Cloud Platform",
  ],
  Database: ["PostgreSQL", "MySQL (Dasar)"],
  Tools: [
    "Git & GitHub",
    "Visual Studio Code",
    "Postman",
    "Vercel",
    "Microsoft Office",
  ],
};

const myExperiences = [
  // {
  //   title: "Front-End Developer (Intern)",
  //   company: "Tech Solutions Inc.",
  //   duration: "Jan 2024 - Jun 2024",
  //   description:
  //     "Mengembangkan komponen UI yang responsif menggunakan React dan Tailwind CSS, meningkatkan kecepatan loading halaman sebesar 15%.",
  // },
  // {
  //   title: "Freelance Web Developer",
  //   company: "Self-Employed",
  //   duration: "2023 - Sekarang",
  //   description:
  //     "Menyediakan layanan pembuatan landing page dan website portofolio untuk klien kecil.",
  // },
];

const myEducation = [
  {
    degree: "Sarjana Sistem Informasi",
    institution: "Universitas Pembangunan Nasional 'Veteran' Jawa Timur",
    duration: "2021 - 2025",
    gpa: "3.88 / 4.00",
  },
];

const myEducationNonFormal = [
  {
    degree: "Backend Javascript",
    institution: "PT. Lentera Bangsa Benderang (Binar Academy)",
    duration: "Februari - Juli 2024",
  },
  {
    degree: "Frontend Javascript",
    institution: "PT. Lentera Bangsa Benderang (Binar Academy)",
    duration: "Agustus 2023 - Januari 2024",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export const AboutMe = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const minimumLoadTime = 700;
    const startTime = Date.now();
    let timer;

    timer = setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = minimumLoadTime - elapsedTime;

      setTimeout(
        () => {
          setIsLoading(false);
        },
        Math.max(0, remainingTime),
      );
    }, 50);

    return () => clearTimeout(timer);
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

  if (isLoading) {
    return <Loading />;
  }

  return (
    <motion.div
      className="from-gray-950 to-blue-950 via-slate-800 bg-linear-to-br min-h-screen px-4 pb-16 sm:px-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
      }}
    >
      <Navbar handleSmoothScroll={handleSmoothScroll} />

      <div className="mx-auto max-w-7xl pt-24 sm:pt-[100px]">
        <motion.header className="mb-8 text-center" variants={fadeIn}>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            About <span className="text-cyan-400">Me</span>
          </h1>
          <p className="mt-3 text-lg text-gray-400">
            A deep dive into my journey, skills, and goals.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <motion.div
            className="lg:order-0 order-1 space-y-8 lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="bg-slate-800/60 rounded-xl border border-gray-700 p-8 shadow-2xl"
              variants={fadeInLeft}
            >
              <div className="mx-auto mb-6 h-56 w-56 overflow-hidden rounded-xl border-4 border-cyan-400/50 bg-gray-700/70 shadow-inner">
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={Foto}
                    loading="lazy"
                    alt="Foto Profil Bagus Dwi"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h2 className="mb-4 text-center text-3xl font-bold text-white">
                Bagus Dwi Putra Adiyono
              </h2>

              <p className="mb-6 text-center text-lg text-gray-400">
                S1 Sistem Informasi | Junior Web Developer
              </p>

              <div className="space-y-3 text-gray-300">
                <p className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-cyan-400">Email:</span>
                  <span className="text-right">sugab.dwi88@email.com</span>
                </p>
                <p className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-cyan-400">Telepon:</span>
                  <span className="text-right">0822-2974-9462</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-cyan-400">Lokasi:</span>
                  <span className="text-right">Sidoarjo, Indonesia</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/60 hidden rounded-xl border border-gray-700 p-8 shadow-2xl lg:block"
              variants={fadeInLeft}
            >
              <h2 className="mb-5 flex items-center text-2xl font-bold text-white">
                <FaHeart className="mr-3 text-pink-400" /> Hobbies
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-300">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-pink-400">&#9679;</span>
                    {hobby}
                  </li>
                ))}
              </ul>
              <h2 className="mb-5 mt-6 flex items-center text-2xl font-bold text-white">
                <FaBriefcase className="mr-3 text-cyan-400" /> Career Interests
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-300">
                {interest.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-cyan-400">&#9679;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.section
              className="bg-slate-800/60 hidden space-y-6 rounded-xl border border-gray-700 p-6 shadow-xl lg:block"
              variants={fadeInLeft}
            >
              <h2 className="flex items-center text-3xl font-bold text-white">
                <FaCode className="mr-3 text-yellow-400" />
                Technical Expertise
              </h2>

              {Object.keys(categorizedSkills).map((category) => (
                <div key={category} className="pt-2">
                  <h3 className="mb-3 text-xl font-semibold text-cyan-400">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {categorizedSkills[category].map((skill, index) => (
                      <motion.span
                        key={index}
                        className="rounded-full bg-gray-700/70 px-4 py-1 text-sm font-medium text-white shadow-md transition duration-200 hover:bg-gray-600"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1 + index * 0.05,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.section>
          </motion.div>

          <motion.div
            className="lg:order-0 order-2 space-y-12 lg:col-span-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.section
              className="lg:order-0 order-2 space-y-4"
              variants={fadeInRight}
            >
              <h2 className="flex items-center border-b border-cyan-500/50 pb-2 text-3xl font-bold text-white">
                <FaUserTie className="mr-3 text-cyan-400" /> Summary
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {careerSummary1}
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                {careerSummary2}
              </p>
            </motion.section>

            <motion.section
              className="lg:order-0 order-3 space-y-6"
              variants={fadeInRight}
            >
              <h2 className="flex items-center border-b border-cyan-500/50 pb-2 text-3xl font-bold text-white">
                <MdWorkHistory className="mr-3 text-green-400" /> Work
                Experience
              </h2>
              <div className="space-y-6">
                {myExperiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-cyan-400 pl-4"
                    variants={fadeInRight}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="font-medium text-cyan-300">
                      {exp.company} | {exp.duration}
                    </p>
                    <p className="mt-2 text-gray-400">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="lg:order-0 order-4 space-y-6"
              variants={fadeInRight}
            >
              <h2 className="flex items-center border-b border-cyan-500/50 pb-2 text-3xl font-bold text-white">
                <FaGraduationCap className="mr-3 text-red-400" /> Education
              </h2>
              <div className="space-y-4">
                {myEducation.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-gray-500 pl-4"
                    variants={fadeInRight}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="font-medium text-gray-300">
                      {edu.institution} | {edu.duration}
                    </p>
                    <p className="mt-1 text-sm text-gray-400">GPA: {edu.gpa}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="lg:order-0 order-4 space-y-6"
              variants={fadeInRight}
            >
              <h2 className="flex items-center border-b border-cyan-500/50 pb-2 text-3xl font-bold text-white">
                <GiBookmarklet className="mr-3 text-blue-400" /> Education
                Non-Formal
              </h2>
              <div className="space-y-4">
                {myEducationNonFormal.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-gray-500 pl-4"
                    variants={fadeInRight}
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="font-medium text-gray-300">
                      {edu.institution}
                    </p>
                    <p className="mt-1 text-sm text-gray-400">{edu.duration}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.div
              className="bg-slate-800/60 lg:order-0 order-5 rounded-xl border border-gray-700 p-8 shadow-2xl lg:hidden"
              variants={fadeInRight}
            >
              <h2 className="mb-5 flex items-center text-2xl font-bold text-white">
                <FaHeart className="mr-3 text-pink-400" /> Hobbies
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-300">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-pink-400">&#9679;</span>
                    {hobby}
                  </li>
                ))}
              </ul>

              <h2 className="mb-5 mt-6 flex items-center text-2xl font-bold text-white">
                <FaBriefcase className="mr-3 text-cyan-400" /> Career Interests
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-300">
                {interest.map((interest, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-blue-400">&#9679;</span>
                    {interest}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.section
              className="bg-slate-800/60 lg:order-0 order-6 space-y-4 rounded-xl border border-gray-700 p-6 shadow-xl"
              variants={fadeInRight}
            >
              <h2 className="flex items-center text-3xl font-bold text-white">
                <FaLightbulb className="mr-3 text-amber-400" /> Future Goals &
                Aspirations
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {futureFocusAndAspiration}
              </p>
            </motion.section>

            <motion.section
              className="bg-slate-800/60 lg:order-0 order-7 space-y-6 rounded-xl border border-gray-700 p-6 shadow-xl lg:hidden"
              variants={fadeInRight}
            >
              <h2 className="flex items-center text-3xl font-bold text-white">
                <FaCode className="mr-3 text-yellow-400" />
                Technical Expertise
              </h2>

              {Object.keys(categorizedSkills).map((category) => (
                <div key={category} className="pt-2">
                  <h3 className="mb-3 text-xl font-semibold text-cyan-400">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {categorizedSkills[category].map((skill, index) => (
                      <motion.span
                        key={index}
                        className="rounded-full bg-gray-700/70 px-4 py-1 text-sm font-medium text-white shadow-md transition duration-200 hover:bg-gray-600"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.1 + index * 0.05,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.section>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
