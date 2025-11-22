import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const portfolioItems = [
  {
    id: 1,
    title:
      "Information System Development for Web-Based Creative Services E-Commerce Using Rapid Application Development Method",
    desc: "Jurnal ilmiah yang membahas pengembangan sistem informasi e-commerce jasa kreatif berbasis web menggunakan metode Rapid Application Development (RAD).",
    category: "Article",
    projectUrl: "https://jurnal.kdi.or.id/index.php/bt/article/view/2615",
    file: "/docs/Information System Development for Web-Based Creative Services E-Commerce Using Rapid Application Development Method.pdf",
    thumbnailUrl: "/images/RAD.jpg",
  },
  {
    id: 2,
    title:
      "Analisis Self-Efficacy Pembelajaran Mahasiswa Menggunakan E-learning UPN “VETERAN” Jawa Timur Dengan Model GSCA",
    desc: "Jurnal ilmiah yang menganalisis kemampuan pembelajaran mahasiswa menggunakan e-learning UPN Veteran Jawa Timur dengan pendekatan model Generalized Structured Component Analysis (GSCA).",
    category: "Article",
    projectUrl: "https://ejurnal.unim.ac.id/index.php/submit/article/view/2667",
    file: "/docs/Information System Development for Web-Based Creative Services E-Commerce Using Rapid Application Development Method.pdf",
    thumbnailUrl: "/images/GSCA.jpg",
  },
  {
    id: 3,
    title:
      "ANALYSIS OF THE EFFECTIVENESS OF USE OF INDONESIAN LANGUAGE AT UPN 'VETERAN' JAWA TIMUR ELEARNING WEBSITE",
    desc: "Jurnal ilmiah yang menganalisis efektivitas penggunaan bahasa indonesia pada website e-learning UPN Veteran Jawa Timur.",
    category: "Article",
    projectUrl: "https://ejurnal.unim.ac.id/index.php/matapena/article/view/2650",
    file: "/docs/ANALYSIS OF THE EFFECTIVENESS OF USE OF INDONESIAN LANGUAGE AT UPN 'VETERAN' JAWA TIMUR ELEARNING WEBSITE.pdf",
    thumbnailUrl: "/images/Matapena.jpg",
  },
];

export const ArticleContent = () => {
  const itemsPerPage = 3;
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + itemsPerPage);
  };

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="bg-slate-800/80 rounded-xl border border-gray-700 p-5 shadow-xl transition duration-300 hover:scale-105 hover:border-cyan-400"
          >
            <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gray-900 text-sm text-gray-500 sm:h-64">
              {item.thumbnailUrl ? (
                <img
                  src={item.thumbnailUrl}
                  alt={`Thumbnail ${item.title}`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-900/40 text-indigo-400">
                  <HiOutlineNewspaper className="h-20 w-20" />
                </div>
              )}
            </div>
            <h4 className="mb-1 text-sm font-bold text-white sm:text-lg">
              {item.title}
            </h4>
            <p className="text-xs text-gray-400 sm:text-sm">{item.desc}</p>
            <a
              href={item.projectUrl || item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center text-xs text-cyan-400 transition duration-300 hover:underline sm:text-sm"
            >
              Link Article <FiExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        ))}
      </div>

      {visibleCount < portfolioItems.length && (
        <div className="mt-12 sm:mt-16">
          <button
            onClick={showMoreItems}
            className="text-gray-950 cursor-pointer rounded-lg bg-cyan-500 px-8 py-3 text-base font-bold shadow-lg transition duration-300 hover:bg-cyan-400"
          >
            See All Certificates
          </button>
        </div>
      )}
    </>
  );
};
