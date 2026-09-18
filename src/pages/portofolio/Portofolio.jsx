import React, { useCallback, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import {
  FaCode,
  FaStar,
  FaGithub,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from "react-icons/fa";
import { portfolioItems } from "../../assets/components/portofolio/ProjectContent";
import { Navbar } from "../../assets/components/navbar/Navbar";
import { Loading } from "../../assets/components/loading/Loading";
import { ImageLightbox } from "../../assets/components/common/ImageLightbox";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithSkeleton } from "../../assets/components/common/ImageWithSkeleton";

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
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const project = portfolioItems.find((item) => item.id === parseInt(id));

  const allImages = project
    ? [project.thumbnailUrl, ...(project.galleryUrls || [])]
    : [];

  const hasMultipleImages = allImages.length > 1;

  const goToPrevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1,
    );
  };

  const goToNextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1,
    );
  };

  const goToImage = (idx) => {
    setCurrentImageIndex(idx);
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [id]);

  useEffect(() => {
    const minimumLoadTime = 700;
    const startTime = Date.now();
    let timer;

    setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = minimumLoadTime - elapsedTime;

      timer = setTimeout(
        () => {
          setIsLoading(false);
          if (!project) {
            navigate("/404", { replace: true });
          }
        },
        Math.max(0, remainingTime),
      );
    }, 50);

    return () => clearTimeout(timer);
  }, [id, navigate, project]);

  const featuresList = project?.features || [];
  const technologiesList = project?.techStack || [];
  const isTechStackCategorized = !Array.isArray(technologiesList);
  const githubLink = project?.githubUrl || "#";
  const mainDescription = project?.longDesc || project?.desc;

  const handleProjectLinkClickBreadcrumb = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      navigate("/");
      setTimeout(() => {
        window.history.replaceState(null, null, `/#${sectionId}`);
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Logika retry untuk memastikan scroll
          setTimeout(() => {
            const retryElement = document.getElementById(sectionId);
            if (retryElement) {
              retryElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 300);
        }
      }, 100);
    },
    [navigate],
  );

  if (isLoading || !project) {
    return <Loading />;
  }

  if (!project) {
    return null;
  }

  // Deteksi apakah project ini punya "tim lain" (backend atau frontend terpisah)
  const hasBackendTeam = project.backendurl || project.backendgithuburl;
  const hasFrontendTeam = project.frontendurl || project.frontendgithuburl;

  // Label tombol utama
  const mainDemoLabel = hasFrontendTeam ? "Documentation API" : "Live Demo";

  // Label tombol GitHub utama, disesuaikan berdasarkan peran project ini
  const mainGithubLabel = hasBackendTeam
    ? "Frontend GitHub"
    : hasFrontendTeam
      ? "Backend GitHub"
      : "GitHub";

  // Data tim lain (untuk heading & tombol sekunder)
  const otherRepo = hasBackendTeam
    ? {
        role: "Backend",
        url: project.backendurl,
        githubUrl: project.backendgithuburl,
        demoLabel: "Documentation API",
        githubLabel: "Backend GitHub",
      }
    : hasFrontendTeam
      ? {
          role: "Frontend",
          url: project.frontendurl,
          githubUrl: project.frontendgithuburl,
          demoLabel: "Live Demo",
          githubLabel: "Frontend GitHub",
        }
      : null;

  const otherRepoHeading = otherRepo
    ? project.isTeamProject
      ? `${otherRepo.role} Team Repository`
      : `${otherRepo.role} Repository`
    : null;

  // Animasi transisi gambar
  const imageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  const ImageCarousel = ({
    allImages,
    currentImageIndex,
    hasMultipleImages,
    projectTitle,
    onImageClick,
    onPrev,
    onNext,
    onSelect,
  }) => (
    <div>
      <div className="group relative overflow-hidden rounded-xl border border-gray-400 shadow-2xl dark:border-gray-700">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            variants={imageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={onImageClick}
            className="cursor-pointer"
          >
            <ImageWithSkeleton
              src={allImages[currentImageIndex]}
              alt={`${projectTitle} screenshot ${currentImageIndex + 1}`}
              className="w-full"
              imgClassName="h-auto w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gray-900/70 text-white opacity-100 transition duration-300 md:opacity-0 md:group-hover:opacity-100">
          <FaExpand className="h-4 w-4" />
        </div>

        {hasMultipleImages && (
          <>
            <button
              onClick={onPrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-900/70 text-white opacity-100 transition duration-300 hover:bg-sky-600 dark:hover:bg-cyan-600 md:opacity-0 md:group-hover:opacity-100"
            >
              <FaChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={onNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-gray-900/70 text-white opacity-100 transition duration-300 hover:bg-sky-600 dark:hover:bg-cyan-600 md:opacity-0 md:group-hover:opacity-100"
            >
              <FaChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {allImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => onSelect(idx)}
              aria-label={`Go to image ${idx + 1}`}
              className={`h-4 w-4 cursor-pointer rounded-full transition duration-300 ${
                idx === currentImageIndex
                  ? "w-5 bg-sky-600 dark:bg-cyan-400"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <Navbar />

      <motion.div
        className="bg-linear-to-r min-h-screen bg-white from-gray-100 via-white to-blue-100/40 px-4 pb-16 pt-20 dark:bg-gray-950 dark:from-gray-950 dark:via-slate-800 dark:to-blue-950 sm:px-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.5 } },
        }}
      >
        <div className="mx-auto max-w-7xl pt-4">
          <motion.div
            className="mb-8 flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-400"
            variants={itemVariants}
          >
            <a
              href="/"
              onClick={(e) => handleProjectLinkClickBreadcrumb(e, "home")}
              className="hover:text-sky-600 dark:hover:text-cyan-400"
            >
              Home
            </a>
            <span>/</span>
            <a
              href="/#portfolio"
              onClick={(e) => handleProjectLinkClickBreadcrumb(e, "portfolio")}
              className="hover:text-sky-600 dark:hover:text-cyan-400"
            >
              Project
            </a>
            <span>/</span>
            <span className="cursor-default font-medium text-sky-600 underline dark:text-cyan-400">
              {project.title}
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <motion.div
              className="order-1 space-y-8 lg:col-span-3"
              variants={contentFadeInVariants("left")}
            >
              <div className="space-y-3">
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center justify-between gap-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {project.category}
                    </p>
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                        project.isTeamProject
                          ? "border-purple-500/40 bg-purple-500/10 text-purple-600 dark:text-purple-300"
                          : "border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-300"
                      }`}
                    >
                      {project.isTeamProject ? "Team Project" : "Solo Project"}
                    </span>
                  </div>

                  {project.time && (
                    <p className="text-md flex items-center font-bold text-sky-600 dark:font-normal dark:text-cyan-400">
                      <FaClock className="mr-2 h-4 w-4 text-gray-600 dark:text-gray-300" />
                      {project.time}
                    </p>
                  )}
                </div>
              </div>

              <div className="block lg:hidden">
                <motion.div variants={itemVariants}>
                  <ImageCarousel
                    allImages={allImages}
                    currentImageIndex={currentImageIndex}
                    hasMultipleImages={hasMultipleImages}
                    projectTitle={project.title}
                    onImageClick={() => setIsLightboxOpen(true)}
                    onPrev={goToPrevImage}
                    onNext={goToNextImage}
                    onSelect={goToImage}
                  />
                </motion.div>
              </div>

              <div className="space-y-8">
                <p className="whitespace-pre-wrap pt-0 text-justify text-base leading-relaxed text-gray-700 dark:text-gray-300 lg:text-xl">
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
                    {mainDemoLabel}
                    <FiExternalLink className="ml-2 h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-lg border border-gray-600 bg-gray-800 px-6 py-3 text-lg font-bold text-white shadow transition duration-300 hover:scale-[1.02] dark:text-gray-300"
                    variants={itemVariants}
                  >
                    {mainGithubLabel}
                    <FaGithub className="ml-2 h-5 w-5" />
                  </motion.a>
                </motion.div>

                {otherRepo && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                      {otherRepoHeading}
                    </p>
                    <motion.div
                      className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                      variants={staggerContainerVariants}
                    >
                      {otherRepo.url && (
                        <motion.a
                          href={otherRepo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center rounded-lg border border-sky-600 bg-sky-600/10 px-6 py-3 text-lg font-bold text-sky-600 shadow transition duration-300 hover:scale-[1.02] hover:bg-sky-600/20 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-400 dark:hover:bg-cyan-500/20"
                          variants={itemVariants}
                        >
                          {otherRepo.demoLabel}
                          <FiExternalLink className="ml-2 h-5 w-5" />
                        </motion.a>
                      )}
                      {otherRepo.githubUrl && (
                        <motion.a
                          href={otherRepo.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center rounded-lg border border-gray-600 bg-gray-800 px-6 py-3 text-lg font-bold text-white shadow transition duration-300 hover:scale-[1.02] dark:text-gray-300"
                          variants={itemVariants}
                        >
                          {otherRepo.githubLabel}
                          <FaGithub className="ml-2 h-5 w-5" />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                )}

                <motion.div
                  className="rounded-xl border border-gray-400 bg-slate-200 p-6 dark:border-gray-700 dark:bg-slate-800/60"
                  variants={staggerContainerVariants}
                >
                  <h2 className="mb-4 flex items-center text-xl font-bold text-gray-900 dark:text-white">
                    <FaCode className="mr-2 text-sky-600 dark:text-cyan-400" />{" "}
                    Technologies Used
                  </h2>

                  {isTechStackCategorized ? (
                    <div className="space-y-4">
                      {Object.keys(technologiesList).map((category) => (
                        <div key={category}>
                          <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-gray-900 dark:text-white">
                            {category}
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {technologiesList[category].map((tech, index) => (
                              <motion.span
                                key={index}
                                className="rounded-full bg-slate-400 px-3 py-1 text-sm font-medium text-white dark:bg-gray-700/70 dark:text-cyan-400"
                                variants={itemVariants}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {technologiesList.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="rounded-full bg-slate-400 px-3 py-1 text-sm font-medium text-white dark:bg-gray-700/70 dark:text-cyan-400"
                          variants={itemVariants}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="order-2 space-y-8 lg:col-span-2"
              variants={contentFadeInVariants("right")}
            >
              <div className="hidden lg:block">
                <ImageCarousel
                  allImages={allImages}
                  currentImageIndex={currentImageIndex}
                  hasMultipleImages={hasMultipleImages}
                  projectTitle={project.title}
                  onImageClick={() => setIsLightboxOpen(true)}
                  onPrev={goToPrevImage}
                  onNext={goToNextImage}
                  onSelect={goToImage}
                />
              </div>

              <motion.div
                className="rounded-xl border border-gray-400 bg-slate-200 p-6 shadow-xl dark:border-gray-700 dark:bg-slate-800/60"
                variants={staggerContainerVariants}
              >
                <h2 className="mb-5 flex items-center text-2xl font-bold text-gray-900 dark:text-white">
                  <FaStar className="mr-3 text-yellow-400 dark:text-amber-400" />{" "}
                  Key Features
                </h2>
                <ul className="list-none space-y-3 pl-0 text-justify">
                  {featuresList.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start text-base text-gray-700 dark:text-gray-300 lg:text-lg"
                      variants={itemVariants}
                    >
                      <span className="mr-3 font-bold text-sky-600 dark:text-cyan-400">
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

      <ImageLightbox
        images={allImages}
        currentIndex={currentImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onPrev={() => goToPrevImage()}
        onNext={() => goToNextImage()}
        onSelect={goToImage}
      />
    </>
  );
};
