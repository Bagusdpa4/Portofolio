import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const portfolioItems = [
  {
    id: 1,
    title: "Website E-Commerce",
    desc: "Platform penjualan produk fashion responsif dengan React.",
    category: "Proyek",
    projectUrl: "#",
  },
  {
    id: 2,
    title: "Sistem Manajemen Tugas",
    desc: "Aplikasi Todo List menggunakan Node.js dan MongoDB.",
    category: "Proyek",
    projectUrl: "#",
  },
  {
    id: 3,
    title: "Landing Page Startup",
    desc: "Desain UI/UX modern menggunakan Tailwind CSS.",
    category: "Proyek",
    projectUrl: "#",
  },
  {
    id: 4,
    title: "Aplikasi Cuaca Interaktif",
    desc: "Menggunakan API eksternal untuk menampilkan prakiraan cuaca.",
    category: "Proyek",
    projectUrl: "#",
  },
  {
    id: 5,
    title: "Blog Pribadi Berbasis Markdown",
    desc: "Sistem blog cepat menggunakan Gatsby/Next.js.",
    category: "Proyek",
    projectUrl: "#",
  },
  {
    id: 6,
    title: "Game Sederhana (Tic-Tac-Toe)",
    desc: "Diimplementasikan menggunakan state React dasar.",
    category: "Proyek",
    projectUrl: "#",
  },
];

export const ProjectContent = () => {
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
            <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-900 text-sm text-gray-500 sm:h-52"></div>

            <h4 className="mb-2 text-xl font-bold text-white">{item.title}</h4>
            <p className="min-h-[60px] text-sm text-gray-400">{item.desc}</p>

            <div className="mt-4 flex items-center justify-end text-sm font-semibold">
              <a
                href={item.projectUrl || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-cyan-400 transition duration-300 hover:underline"
              >
                Details <FiExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < portfolioItems.length && (
        <div className="mt-12 sm:mt-16">
          <button
            onClick={showMoreItems}
            className="text-gray-950 cursor-pointer rounded-lg bg-cyan-500 px-8 py-3 text-base font-bold shadow-lg transition duration-300 hover:bg-cyan-400"
          >
            See More Projects
          </button>
        </div>
      )}
    </>
  );
};
