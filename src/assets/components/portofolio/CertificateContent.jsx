import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineDocumentText, HiOutlineAcademicCap } from "react-icons/hi2";

const portfolioItems = [
  {
    id: 1,
    title: "Junior Web Programmer (BNSP)",
    desc: "Sertifikat Kompetensi sebagai Junior Web Programmer dari BNSP (Badan Nasional Sertifikasi Profesi). Berlaku 3 tahun. Diterbitkan 02 Oktober 2025.",
    category: "Sertifikat",
    projectUrl: "/docs/sertifikasi.pdf",
    thumbnailUrl: "/images/sertifikasi.jpg",
  },
  {
    id: 2,
    title: "Back End Javascript",
    desc: "Penyelesaian program Studi Independen Bersertifikat Back End Javascript oleh Binar Academy, Kampus Merdeka. Periode 16 Feb 2024 - 30 Jun 2024.",
    category: "Sertifikat",
    projectUrl: "/docs/BEJS.pdf",
    thumbnailUrl: "/images/BEJS.jpg",
  },
  {
    id: 3,
    title: "Front End Javascript",
    desc: "Penyelesaian program Studi Independen Bersertifikat Front End Javascript oleh Binar Academy, Kampus Merdeka. Periode 14 Aug 2023 - 31 Dec 2023.",
    category: "Sertifikat",
    projectUrl: "/docs/FEJS.pdf",
    thumbnailUrl: "/images/FEJS.jpg",
  },
  {
    id: 4,
    title: "Lulusan Berpredikat Dengan Pujian (Cumlaude)",
    desc: "Piagam Penghargaan dari Rektor UPN Veteran Jawa Timur atas prestasi lulusan S-1 Sistem Informasi dengan IPK 3.88. Diterbitkan 26 Juli 2025.",
    category: "Penghargaan",
    projectUrl: "/docs/Penghargaan.pdf",
    thumbnailUrl: "/images/Penghargaan.jpg",
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
            className="bg-slate-800/80 rounded-xl border border-gray-700 p-5 shadow-xl transition duration-300 hover:scale-105 hover:border-cyan-400"
          >
            <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-900 text-sm text-gray-500 sm:h-64">
              {item.thumbnailUrl ? (
                <img
                  src={item.thumbnailUrl}
                  alt={`Thumbnail ${item.title}`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-110"
                />
              ) : (
                // Fallback jika thumbnailUrl tidak ada
                <div
                  className={`absolute inset-0 flex items-center justify-center ${
                    item.category === "Sertifikat"
                      ? "bg-cyan-900/40 text-cyan-400"
                      : "bg-yellow-900/40 text-yellow-400"
                  }`}
                >
                  {item.category === "Sertifikat" ? (
                    <HiOutlineDocumentText className="h-20 w-20" />
                  ) : (
                    <HiOutlineAcademicCap className="h-20 w-20" />
                  )}
                </div>
              )}
            </div>

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
              View Certificate <FiExternalLink className="ml-1 h-3 w-3" />
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
