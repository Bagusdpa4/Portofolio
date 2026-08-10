import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const portfolioItems = [
  {
    id: 1,
    title:
      "Information System Development for Web-Based Creative Services E-Commerce Using Rapid Application Development Method",
    desc: "A scientific journal article discussing the development of a web-based e-commerce information system for creative services using the Rapid Application Development (RAD) method.",
    category: "Article",
    projectUrl: "https://jurnal.kdi.or.id/index.php/bt/article/view/2615",
    file: "/docs/Article/Information System Development for Web-Based Creative Services E-Commerce Using Rapid Application Development Method.pdf",
    thumbnailUrl: "/images/Article/RAD.jpg",
  },
  {
    id: 2,
    title:
      "Analisis Self-Efficacy Pembelajaran Mahasiswa Menggunakan E-learning UPN “VETERAN” Jawa Timur Dengan Model GSCA",
    desc: "A scientific journal article analyzing students' learning self-efficacy using UPN Veteran Jawa Timur's e-learning platform, based on the Generalized Structured Component Analysis (GSCA) model.",
    category: "Article",
    projectUrl: "https://garuda.kemdiktisaintek.go.id/documents/detail/4008369",
    file: "/docs/Article/Information System Development for Web-Based Creative Services E-Commerce Using Rapid Application Development Method.pdf",
    thumbnailUrl: "/images/Article/GSCA.jpg",
  },
  {
    id: 3,
    title:
      'Analysis Of The Effectiveness Of Use Of Indonesian Language At UPN "Veteran" Jawa Timur E-Learning Website',
    desc: "A scientific journal article analyzing the effectiveness of Indonesian language use on UPN Veteran Jawa Timur's e-learning website.",
    category: "Article",
    projectUrl: "https://garuda.kemdiktisaintek.go.id/documents/detail/3534138",
    file: "/docs/Article/ANALYSIS OF THE EFFECTIVENESS OF USE OF INDONESIAN LANGUAGE AT UPN 'VETERAN' JAWA TIMUR ELEARNING WEBSITE.pdf",
    thumbnailUrl: "/images/Article/Matapena.jpg",
  },
];

export const ArticleContent = () => {
  const itemsPerPage = 3;
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);
  const isExpanded = visibleCount >= portfolioItems.length;

  const toggleItems = () => {
    if (isExpanded) {
      setVisibleCount(itemsPerPage);
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      setVisibleCount(portfolioItems.length);
    }
  };

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            onClick={() => {
              window.open(item.file, "_blank", "noopener,noreferrer");
            }}
            className="cursor-pointer rounded-xl border border-gray-700 bg-slate-200 p-5 shadow-xl transition duration-300 hover:scale-105 hover:border-sky-600 dark:bg-slate-800/80 dark:hover:border-cyan-400"
          >
            <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-900 text-sm text-gray-500 sm:h-64">
              {item.thumbnailUrl ? (
                <img
                  src={item.thumbnailUrl}
                  alt={`Thumbnail ${item.title}`}
                  className="h-full w-full border border-slate-400 object-cover transition duration-500 hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-900/40 text-indigo-400">
                  <HiOutlineNewspaper className="h-20 w-20" />
                </div>
              )}
            </div>
            <h4 className="mb-1 text-sm font-bold text-black dark:text-white sm:text-lg">
              {item.title}
            </h4>
            <p className="text-xs text-gray-900 dark:text-gray-400 sm:text-sm">
              {item.desc}
            </p>
            <a
              href={item.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-3 inline-flex items-center font-bold text-sky-600 transition duration-300 hover:underline dark:text-cyan-400"
            >
              Link Article <FiExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        ))}
      </div>

      {portfolioItems.length > itemsPerPage && (
        <div className="mt-12 sm:mt-16">
          <button
            onClick={toggleItems}
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-sky-900/30 transition duration-300 hover:scale-[1.05] hover:bg-sky-700 dark:bg-cyan-600 dark:shadow-cyan-900/50 dark:hover:bg-cyan-700 sm:px-8 sm:text-lg"
          >
            {isExpanded ? "See Less" : "See All"}
          </button>
        </div>
      )}
    </>
  );
};
