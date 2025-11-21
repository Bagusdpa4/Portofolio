import React, { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const portfolioItems = [
  {
    id: 4,
    title: "Sertifikat Web Dev Basic",
    desc: "Penyelesaian kursus dasar pengembangan web.",
    category: "Sertifikat",
    projectUrl: "#",
  },
  {
    id: 6,
    title: "Sertifikat React Intermediate",
    desc: "Penguasaan React Hooks dan State Management.",
    category: "Sertifikat",
    projectUrl: "#",
  },
  {
    id: 7,
    title: "Sertifikat Node.js Expert",
    desc: "Membangun RESTful API dengan Express.js.",
    category: "Sertifikat",
    projectUrl: "#",
  },
  {
    id: 8,
    title: "Sertifikat Algoritma Dasar",
    desc: "Pemahaman struktur data dan algoritma.",
    category: "Sertifikat",
    projectUrl: "#",
  },
  {
    id: 9,
    title: "Sertifikat Cloud Computing",
    desc: "Dasar-dasar layanan dan infrastruktur cloud.",
    category: "Sertifikat",
    projectUrl: "#",
  },
  {
    id: 10,
    title: "Sertifikat Design System",
    desc: "Membuat dan mengelola Design System.",
    category: "Sertifikat",
    projectUrl: "#",
  },
];

export const CertificateContent = () => {
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
            className="bg-slate-800/80 rounded-xl border border-gray-700 p-5 shadow-xl transition duration-300 hover:border-indigo-500"
          >
            {/* Placeholder Gambar Sertifikat */}
            <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gray-900 text-sm text-gray-500 sm:h-64"></div>

            <h4 className="mb-1 text-lg font-bold text-white sm:text-xl">
              {item.title}
            </h4>
            <p className="text-xs text-gray-400 sm:text-sm">{item.desc}</p>
            <a
              href={item.projectUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center text-xs text-cyan-400 transition duration-300 hover:underline sm:text-sm"
            >
              View Credential <FiExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        ))}
      </div>

      {visibleCount < portfolioItems.length && (
        <div className="mt-12 sm:mt-16">
          <button
            onClick={showMoreItems}
            className="text-gray-950 rounded-lg bg-cyan-500 px-8 py-3 text-base font-bold shadow-lg transition duration-300 hover:bg-cyan-400"
          >
            See All Certificates
          </button>
        </div>
      )}
    </>
  );
};
