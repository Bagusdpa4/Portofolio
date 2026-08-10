import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaGraduationCap,
  FaBriefcase,
  FaLightbulb,
  FaHeart,
  FaUserTie,
  FaBuilding,
  FaClock,
} from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { GiBookmarklet } from "react-icons/gi";
import Foto from "../../assets/img/Foto.jpg";
// import Profile from "../../assets/img/Profile.jpg";
import { Navbar } from "../../assets/components/navbar/Navbar";
import { Loading } from "../../assets/components/loading/Loading";
import { motion } from "framer-motion";

const futureFocusAndAspiration =
  "I am ambitious to keep growing in the field of information technology by improving my competencies in application development, systems analysis, and data management. Going forward, I want to deepen my understanding of modern system architecture, technology-driven business process optimization, and the use of cloud services to support operational efficiency. I hope to contribute to creating technology solutions that are useful, sustainable, and able to make a positive impact for both users and organizations.";

const careerSummary1 =
  "I am a Web Developer with over 2 years of experience building responsive web applications through internships, academic projects, and independent work. I am proficient in React.js, Node.js, Express.js, Laravel, RESTful APIs, and SQL databases, and I hold a Bachelor's degree in Information Systems from Universitas Pembangunan Nasional 'Veteran' Jawa Timur. I have handled projects end-to-end, from requirements analysis and system design through development, testing, and deployment, including projects delivered for real company use.";

const careerSummary2 =
  "As a Certified Junior Web Programmer, I am committed to building software solutions that are scalable, maintainable, and user-centered. I focus on designing technology solutions that are functional, secure, and aligned with users' operational needs. I am structured, collaborate well within teams, have strong problem-solving skills, and communicate clearly. I am committed to continuously learning and adapting to new technologies to deliver the best contribution in a professional work environment.";

const hobbies = [
  "Playing Futsal",
  "Playing Games",
  "Watching Movies",
  "Listening to Music",
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
    // "Next.js (Dasar)",
  ],
  Backend: [
    "Node.js & Express.js",
    "Prisma ORM",
    "RESTful API Development",
    "JWT Authentication",
    "Error Handling",
    "Google Cloud Platform",
    "Midtrans",
    "Laravel",
  ],
  Database: ["PostgreSQL", "MySQL"],
  Tools: [
    "Git & GitHub",
    "Visual Studio Code",
    "Postman",
    "Vercel",
    "Microsoft Office",
  ],
};

const myExperiences = [
  {
    title: "Web Developer",
    type: "Internship",
    company: "PT. Shelter Indonesia Gemilang",
    duration: "Dec 2025 - Jun 2026",
    jobdesk: [
      "Developed an internal admin panel using React.js to streamline sales data management and support efficient data maintenance across company operations.",
      "Maintained and enhanced a courier deposit management system by implementing 5 new features and resolving application issues using React.js and Laravel, improving system functionality for internal operations.",
      "Developed 5 digital signage web interfaces using React.js to support a branch launching event and showcase 5 company application products.",
      "Built an internal booking system using React.js and Laravel to manage reservations for meeting rooms, company vehicles, and office equipment, replacing manual booking processes with a centralized digital platform.",
      "Enhanced the Customer Activity module by redesigning the user interface and expanding data visualization using React.js, providing users with more comprehensive activity insights.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    type: "Freelance",
    company: "Drulz Deals",
    duration: "Jun 2026 - Now",
    jobdesk: [
      "Developed a web-based coffee ordering platform featuring discounted products from multiple coffee brands for client promotional campaigns.",
      "Implemented a structured product catalog to display coffee brands and menu offerings in a user-friendly interface.",
      "Integrated WhatsApp as the ordering and payment communication channel, enabling customers to place orders directly with the client.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    type: "Freelance",
    company: "Cahaya Kreativ",
    duration: "Jan - Aug 2025",
    jobdesk: [
      "Independently developed a full-stack web application using React.js, Express.js, and PostgreSQL for a photography and videography service provider.",
      "Implemented authentication, booking management, payment processing, scheduling, and customer consultation features to streamline service ordering workflows.",
      "Designed and developed an administrative dashboard to manage services, products, customer orders, and booking schedules through a centralized interface.",
      "Deployed the application for production use, enabling the client to digitize and manage daily booking operations.",
    ],
  },
];

const myEducation = [
  {
    degree: "Bachelor's Degree in Information Systems",
    institution: "Universitas Pembangunan Nasional 'Veteran' Jawa Timur",
    duration: "2021 - 2025",
    gpa: "3.88 / 4.00",
  },
];

const myEducationNonFormal = [
  {
    degree: "Backend Javascript",
    institution: "PT. Lentera Bangsa Benderang (Binar Academy)",
    duration: "February - July 2024",
  },
  {
    degree: "Frontend Javascript",
    institution: "PT. Lentera Bangsa Benderang (Binar Academy)",
    duration: "August 2023 - January 2024",
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
      className="bg-linear-to-br min-h-screen bg-white from-gray-100 via-white to-blue-100/40 px-4 pb-16 dark:bg-gray-950 dark:from-gray-950 dark:via-slate-800 dark:to-blue-950 sm:px-8"
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
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            About <span className="text-sky-600 dark:text-cyan-400">Me</span>
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
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
              className="rounded-xl border border-gray-400 bg-slate-200 p-6 shadow-2xl dark:border-gray-700 dark:bg-slate-800/60"
              variants={fadeInLeft}
            >
              <div className="mx-auto mb-6 h-60 w-60 overflow-hidden rounded-xl border-4 border-sky-400 bg-slate-200 shadow-inner dark:border-cyan-400 dark:bg-gray-700/70">
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={Foto}
                    loading="lazy"
                    alt="Foto Profil Bagus Dwi"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 dark:text-white lg:text-3xl">
                Bagus Dwi Putra Adiyono
              </h2>

              <div className="mb-6 text-center text-lg text-gray-600 dark:text-gray-400">
                {/* Mobile */}
                <p className="block lg:hidden">
                  <span className="block">S1 Information Systems</span>
                  <span className="block">Certified Web Programmer</span>
                </p>
                {/* Desktop */}
                <p className="hidden lg:block">
                  S1 Information Systems | Certified Web Programmer
                </p>
              </div>

              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <p className="flex justify-between border-b border-gray-400 pb-2 dark:border-gray-700">
                  <span className="font-medium text-sky-600 dark:text-cyan-400">
                    Email:
                  </span>
                  <span className="text-right">sugab.dwi88@gmail.com</span>
                </p>
                <p className="flex justify-between border-b border-gray-400 pb-2 dark:border-gray-700">
                  <span className="font-medium text-sky-600 dark:text-cyan-400">
                    Phone:
                  </span>
                  <span className="text-right">0822-2974-9462</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium text-sky-600 dark:text-cyan-400">
                    Location:
                  </span>
                  <span className="text-right">Sidoarjo, Indonesia</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              className="hidden rounded-xl border border-gray-400 bg-slate-200 p-6 shadow-2xl dark:border-gray-700 dark:bg-slate-800/60 lg:block"
              variants={fadeInLeft}
            >
              <h2 className="mb-5 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                <FaHeart className="mr-3 text-pink-500 dark:text-pink-400" />{" "}
                Hobbies
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-600 dark:text-gray-400">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-pink-500 dark:text-pink-400">
                      &#9679;
                    </span>
                    {hobby}
                  </li>
                ))}
              </ul>
              <h2 className="mb-5 mt-6 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                <FaBriefcase className="mr-3 text-sky-600 dark:text-cyan-400" />{" "}
                Career Interests
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-600 dark:text-gray-400">
                {interest.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-sky-600 dark:text-cyan-400">
                      &#9679;
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.section
              className="hidden space-y-6 rounded-xl border border-gray-400 bg-slate-200 p-6 shadow-xl dark:border-gray-700 dark:bg-slate-800/60 lg:block"
              variants={fadeInLeft}
            >
              <h2 className="flex items-center text-3xl font-bold text-gray-900 dark:text-white">
                <FaCode className="mr-3 text-yellow-400 dark:text-amber-400" />
                Technical Expertise
              </h2>

              {Object.keys(categorizedSkills).map((category) => (
                <div key={category} className="pt-2">
                  <h3 className="mb-3 text-xl font-semibold text-sky-600 dark:text-cyan-400">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {categorizedSkills[category].map((skill, index) => (
                      <motion.span
                        key={index}
                        className="rounded-full bg-slate-400 px-4 py-1 text-sm font-medium text-white shadow-md transition duration-200 hover:bg-gray-400 dark:bg-gray-700/70 dark:hover:bg-gray-600"
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
              className="lg:order-0 order-2 space-y-4 text-justify"
              variants={fadeInRight}
            >
              <h2 className="flex items-center border-b border-sky-600 pb-2 text-3xl font-bold text-gray-900 dark:border-cyan-500/50 dark:text-white">
                <FaUserTie className="mr-3 text-sky-600 dark:text-cyan-400" />{" "}
                Summary
              </h2>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-300 lg:text-lg">
                {careerSummary1}
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-300 lg:text-lg">
                {careerSummary2}
              </p>
            </motion.section>

            <motion.section
              className="lg:order-0 order-3 space-y-6"
              variants={fadeInRight}
            >
              <h2 className="flex items-center border-b border-sky-600 pb-2 text-2xl font-bold text-gray-900 dark:border-cyan-500/50 dark:text-white lg:text-3xl">
                <MdWorkHistory className="mr-3 text-green-500 dark:text-green-400" />{" "}
                Work Experience
              </h2>
              <div className="space-y-6 text-justify">
                {myExperiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-sky-600 pl-4 dark:border-cyan-400"
                    variants={fadeInRight}
                  >
                    <div className="flex flex-wrap items-center gap-2 pb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white lg:text-xl">
                        {exp.title}
                      </h3>
                      {exp.type && (
                        <span className="rounded-full border bg-slate-400 px-2.5 py-0.5 text-sm font-semibold text-white dark:border-cyan-500/30 dark:bg-cyan-500/20 dark:text-cyan-300">
                          {exp.type}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2 font-semibold text-sky-600 dark:text-cyan-300">
                      <span className="flex items-center gap-2">
                        <FaBuilding className="text-gray-900 dark:text-white" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaClock className="text-gray-900 dark:text-white" />
                        {exp.duration}
                      </span>
                    </div>
                    <ul className="mt-2 list-none space-y-1 text-base text-gray-600 dark:text-gray-400 lg:text-lg">
                      {exp.jobdesk.map((point, i) => {
                        const match = point.match(/^(.*?)(\(.*?\))(.*)$/);
                        return (
                          <li key={i} className="flex items-start">
                            <span className="mr-3 text-sky-600 dark:text-cyan-400">
                              &#9679;
                            </span>
                            <span>
                              {match ? (
                                <>
                                  {match[1]}
                                  <span className="rounded-md border bg-slate-400 px-1.5 py-0.5 text-sm font-medium text-white dark:border-cyan-500/30 dark:bg-cyan-500/20 dark:text-cyan-300">
                                    {match[2]}
                                  </span>
                                  {match[3]}
                                </>
                              ) : (
                                point
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="lg:order-0 order-4 space-y-6"
              variants={fadeInRight}
            >
              <h2 className="flex items-center border-b border-sky-600 pb-2 text-2xl font-bold text-gray-900 dark:border-cyan-500/50 dark:text-white lg:text-3xl">
                <FaGraduationCap className="mr-3 text-red-500 dark:text-red-400" />{" "}
                Education
              </h2>
              <div className="space-y-4 text-justify">
                {myEducation.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-sky-600 pl-4 dark:border-cyan-400"
                    variants={fadeInRight}
                  >
                    <h3 className="text-base font-bold text-gray-900 dark:text-white lg:text-xl">
                      {edu.degree}
                    </h3>
                    <div className="font-semibold text-gray-500 dark:text-gray-300">
                      {/* Mobile */}
                      <p className="block text-base lg:hidden">
                        UPN Veteran Jawa Timur | {edu.duration}
                      </p>
                      {/* Desktop */}
                      <p className="hidden lg:block lg:text-base">
                        {edu.institution} | {edu.duration}
                      </p>
                    </div>
                    <p className="mt-1 text-base font-medium text-gray-600 dark:text-gray-400">
                      GPA: {edu.gpa}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="lg:order-0 order-4 space-y-6"
              variants={fadeInRight}
            >
              <h2 className="flex items-center border-b border-sky-600 pb-2 text-2xl font-bold text-gray-900 dark:border-cyan-500/50 dark:text-white lg:text-3xl">
                <GiBookmarklet className="mr-3 text-blue-500 dark:text-blue-400" />{" "}
                Education Non-Formal
              </h2>
              <div className="space-y-4 text-justify">
                {myEducationNonFormal.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="border-l-4 border-sky-600 pl-4 dark:border-cyan-400"
                    variants={fadeInRight}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white lg:text-xl">
                      {edu.degree}
                    </h3>
                    <div className="font-semibold text-gray-500 dark:text-gray-300">
                      {/* Mobile */}
                      <p className="block text-lg lg:hidden">Binar Academy</p>
                      {/* Desktop */}
                      <p className="hidden lg:block lg:text-base">
                        {edu.institution}
                      </p>
                    </div>
                    <p className="mt-1 text-base font-medium text-gray-600 dark:text-gray-400">
                      {edu.duration}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.div
              className="lg:order-0 order-5 rounded-xl border border-gray-400 bg-slate-200 p-6 shadow-2xl dark:border-gray-700 dark:bg-slate-800/60 lg:hidden"
              variants={fadeInRight}
            >
              <h2 className="mb-4 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                <FaHeart className="mr-3 text-pink-500 dark:text-pink-400" />{" "}
                Hobbies
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-600 dark:text-gray-400">
                {hobbies.map((hobby, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-pink-500 dark:text-pink-400">
                      &#9679;
                    </span>
                    {hobby}
                  </li>
                ))}
              </ul>

              <h2 className="mb-4 mt-6 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                <FaBriefcase className="mr-3 text-sky-600 dark:text-cyan-400" />{" "}
                Career Interests
              </h2>
              <ul className="list-none space-y-2 pl-0 text-gray-600 dark:text-gray-400">
                {interest.map((interest, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2 text-sky-600 dark:text-cyan-400">
                      &#9679;
                    </span>
                    {interest}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.section
              className="lg:order-0 order-6 space-y-2 rounded-xl border border-gray-400 bg-slate-200 p-6 shadow-xl dark:border-gray-700 dark:bg-slate-800/60 lg:hidden"
              variants={fadeInRight}
            >
              <h2 className="flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                <FaCode className="mr-3 text-yellow-400 dark:text-amber-400" />
                Technical Expertise
              </h2>

              {Object.keys(categorizedSkills).map((category) => (
                <div key={category} className="pt-2">
                  <h3 className="mb-3 text-xl font-semibold text-sky-600 dark:text-cyan-400">
                    {category}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {categorizedSkills[category].map((skill, index) => (
                      <motion.span
                        key={index}
                        className="rounded-full bg-slate-400 px-4 py-1 text-sm font-medium text-white shadow-md transition duration-200 hover:bg-gray-400 dark:bg-gray-700/70 dark:hover:bg-gray-600"
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

            <motion.section
              className="lg:order-0 order-7 space-y-2 rounded-xl border border-gray-400 bg-slate-200 p-6 shadow-xl dark:border-gray-700 dark:bg-slate-800/60"
              variants={fadeInRight}
            >
              <h2 className="flex items-center text-xl font-bold text-gray-900 dark:text-white">
                <FaLightbulb className="mr-3 text-yellow-400 dark:text-amber-400" />{" "}
                Future Goals & Aspirations
              </h2>
              <p className="text-justify text-lg leading-relaxed text-gray-500 dark:text-gray-300">
                {futureFocusAndAspiration}
              </p>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
