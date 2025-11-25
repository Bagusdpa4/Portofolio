import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaLightbulb,
  FaHeart,
  FaImage,
} from "react-icons/fa";
import { Navbar } from "../../assets/components/navbar/Navbar";
import { Loading } from "../../assets/components/loading/Loading";
import { motion } from "framer-motion";

const developmentPhilosophy =
  "Saya percaya bahwa software yang baik haruslah cepat, mudah dipelihara, dan dapat diukur skalanya. Fokus pada Clean Code dan Testing adalah kunci untuk memberikan produk yang tidak hanya berfungsi saat ini, tetapi juga berkelanjutan di masa depan. Saya berkomitmen untuk belajar teknologi baru setiap hari.";
const careerSummary1 =
  "Saya adalah seorang pengembang yang bersemangat dalam membangun solusi web yang efisien dan user-friendly. Berbekal pengalaman di ReactJS, Node.js, dan PostgreSQL, saya mahir dalam seluruh siklus pengembangan (Full-Stack).";
const careerSummary2 =
  "Saya selalu mencari tantangan baru untuk mengoptimalkan kinerja aplikasi, menerapkan praktik terbaik industri, dan memberikan pengalaman pengguna terbaik melalui antarmuka yang intuitif dan cepat.";

const hobbies = [
  "Eksplorasi Kuliner Lokal",
  "Bermain Gitar",
  "Mendaki Gunung",
  "Membaca Buku Sejarah",
];

const categorizedSkills = {
  Frontend: [
    "ReactJS",
    "Redux",
    "Tailwind CSS",
    "Next.js (Dasar)",
    "JavaScript (ES6+)",
    "HTML5 & CSS3",
  ],
  Backend: [
    "Node.js & Express",
    "RESTful API Development",
    "JWT Authentication",
    "Error Handling",
  ],
  Database: ["PostgreSQL", "MongoDB", "SQL Basics"],
  Tools: [
    "Git & GitHub",
    "VS Code",
    "Vercel/Netlify Deployment",
    "Figma (Dasar UI/UX)",
  ],
};

const myExperiences = [
  {
    title: "Front-End Developer (Intern)",
    company: "Tech Solutions Inc.",
    duration: "Jan 2024 - Jun 2024",
    description:
      "Mengembangkan komponen UI yang responsif menggunakan React dan Tailwind CSS, meningkatkan kecepatan loading halaman sebesar 15%.",
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    duration: "2023 - Sekarang",
    description:
      "Menyediakan layanan pembuatan landing page dan website portofolio untuk klien kecil.",
  },
];

const myEducation = [
  {
    degree: "Sarjana Teknik Informatika",
    institution: "Universitas XYZ",
    duration: "2020 - 2024",
    gpa: "3.85",
  },
];

// --- Framer Motion Variants (Dibiarkan untuk konten) ---
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

      <div className="mx-auto max-w-7xl pt-[80px] sm:pt-[100px]">
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
            className="space-y-8 lg:col-span-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div
              className="bg-slate-800/60 rounded-xl border border-gray-700 p-8 shadow-2xl"
              variants={fadeInLeft}
            >
              <div className="mx-auto mb-6 h-56 w-56 overflow-hidden rounded-xl border-4 border-cyan-400/50 bg-gray-700/70 p-4 shadow-inner">
                <div className="flex h-full w-full items-center justify-center">
                  <FaImage className="h-24 w-24 text-gray-400" />
                </div>
              </div>

              <h2 className="mb-4 text-center text-3xl font-bold text-white">
                Bagus Dwi Putra Adiyono
              </h2>

              <p className="mb-6 text-center text-lg text-gray-400">
                Full-Stack Developer | Fokus pada ReactJS dan Node.js.
              </p>

              <div className="space-y-3 text-gray-300">
                <p className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-cyan-400">Email:</span>
                  <span className="text-right">bagusdpa4@email.com</span>
                </p>
                <p className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="font-medium text-cyan-400">Telepon:</span>
                  <span className="text-right">0812-xxxx-xxxx</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-cyan-400">Lokasi:</span>
                  <span className="text-right">Surabaya, Indonesia</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-800/60 rounded-xl border border-gray-700 p-8 shadow-2xl"
              variants={fadeInLeft}
            >
              <h2 className="mb-5 flex items-center text-2xl font-bold text-white">
                <FaHeart className="mr-3 text-pink-400" /> Hobbies & Interests
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-300">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-pink-400">&#9679;</span>
                    {hobby}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.section
              className="bg-slate-800/60 space-y-6 rounded-xl border border-gray-700 p-6 shadow-xl"
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
            className="space-y-12 lg:col-span-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.section className="space-y-4" variants={fadeInRight}>
              <h2 className="flex items-center border-b border-cyan-500/50 pb-2 text-3xl font-bold text-white">
                <FaBriefcase className="mr-3 text-cyan-400" /> My Career Summary
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {careerSummary1}
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                {careerSummary2}
              </p>
            </motion.section>

            <motion.section className="space-y-6" variants={fadeInRight}>
              <h2 className="flex items-center border-b border-cyan-500/50 pb-2 text-3xl font-bold text-white">
                <FaBriefcase className="mr-3 text-green-400" /> Work Experience
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

            <motion.section className="space-y-6" variants={fadeInRight}>
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
              className="bg-slate-800/60 space-y-4 rounded-xl border border-gray-700 p-6 shadow-xl"
              variants={fadeInRight}
            >
              <h2 className="flex items-center text-3xl font-bold text-white">
                <FaLightbulb className="mr-3 text-amber-400" /> Development
                Philosophy
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {developmentPhilosophy}
              </p>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
