import React, { useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaCode, FaStar, FaGithub } from "react-icons/fa";
import { portfolioItems } from "../../assets/components/portofolio/ProjectContent";
import { Navbar } from "../../assets/components/navbar/Navbar";
import { motion } from "framer-motion";

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
      delay: 0.2,
    },
  },
});

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Portofolio = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = portfolioItems.find((item) => item.id === parseInt(id));

  const featuresList = project?.features || [];
  const technologiesList = project?.techStack || [];
  const githubLink = project?.githubUrl || "#";
  const mainDescription = project?.longDesc || project?.desc;

  const handleProjectLinkClick = useCallback(
    (e, sectionId) => {
      e.preventDefault();

      navigate("/");

      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    },
    [navigate],
  );

  if (!project) {
    return (
      <div className="min-h-screen pt-20 text-center text-white">
        <h1 className="text-4xl font-bold text-red-400">
          404 - Project Not Found
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Maaf, proyek dengan ID "{id}" tidak ditemukan.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block text-cyan-400 underline hover:no-underline"
        >
          &larr; Kembali ke Homepage
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <motion.div
        className="from-gray-950 to-blue-950 via-slate-800 bg-linear-to-r min-h-screen px-4 pb-16 pt-20 sm:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        <div className="mx-auto max-w-7xl pt-4">
          <motion.div
            className="mb-8 flex items-center space-x-2 text-sm text-gray-400"
            variants={itemVariants}
          >
            <a
              href="/"
              onClick={(e) => handleProjectLinkClick(e, "home")}
              className="hover:text-cyan-400"
            >
              Home
            </a>
            <span>/</span>
            <a
              href="/#portfolio"
              onClick={(e) => handleProjectLinkClick(e, "portfolio")}
              className="hover:text-cyan-400"
            >
              Project
            </a>
            <span>/</span>
            <span className="cursor-default font-medium text-cyan-400 underline">
              {project.title}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <motion.div
              className="order-1 space-y-8 lg:col-span-3"
              variants={contentFadeInVariants("left")}
            >
              <div className="space-y-3">
                <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-300">{project.category}</p>
              </div>

              <div className="block lg:hidden">
                <motion.div
                  className="overflow-hidden rounded-xl border border-gray-700 shadow-2xl"
                  variants={itemVariants}
                >
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="h-auto w-full object-cover"
                  />
                </motion.div>
              </div>

              <div className="space-y-8">
                <p className="whitespace-pre-wrap pt-0 text-xl leading-relaxed text-gray-400">
                  {mainDescription}
                </p>

                <motion.div
                  className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                  variants={staggerContainerVariants}
                >
                  <motion.a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-linear-to-r inline-flex flex-1 items-center justify-center rounded-lg from-cyan-600 to-blue-700 px-6 py-3 text-lg font-bold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-cyan-500"
                    variants={itemVariants}
                  >
                    Live Demo
                    <FiExternalLink className="ml-2 h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-lg border border-gray-600 px-6 py-3 text-lg font-bold text-gray-300 shadow transition duration-300 hover:bg-gray-800 hover:text-white"
                    variants={itemVariants}
                  >
                    GitHub
                    <FaGithub className="ml-2 h-5 w-5" />
                  </motion.a>
                </motion.div>

                <motion.div
                  className="bg-slate-800/60 rounded-xl border border-gray-700 p-6"
                  variants={staggerContainerVariants}
                >
                  <h2 className="mb-4 flex items-center text-xl font-bold text-white">
                    <FaCode className="mr-2 text-cyan-400" /> Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {technologiesList.map((tech, index) => (
                      <motion.span
                        key={index}
                        className="rounded-full bg-gray-700/70 px-3 py-1 text-sm font-medium text-cyan-300"
                        variants={itemVariants}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="order-2 space-y-8 lg:col-span-2"
              variants={contentFadeInVariants("right")}
            >
              <div className="hidden overflow-hidden rounded-xl border border-gray-700 shadow-2xl lg:block">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="h-auto w-full object-cover"
                />
              </div>

              <motion.div
                className="bg-slate-800/60 rounded-xl border border-gray-700 p-8 shadow-xl"
                variants={staggerContainerVariants}
              >
                <h2 className="mb-5 flex items-center text-2xl font-bold text-white">
                  <FaStar className="mr-3 text-yellow-400" /> Key Features
                </h2>
                <ul className="list-none space-y-3 pl-0">
                  {featuresList.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-lg text-gray-300"
                      variants={itemVariants}
                    >
                      <span className="mr-3 mt-1 font-bold text-cyan-400">
                        &#9679;
                      </span>{" "}
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
