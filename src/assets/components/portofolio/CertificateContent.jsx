import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineDocumentText, HiOutlineAcademicCap } from "react-icons/hi2";

const portfolioItems = [
  {
    id: 1,
    title: "Junior Web Programmer (BNSP)",
    desc: "Sertifikat Kompetensi sebagai Junior Web Programmer dari BNSP (Badan Nasional Sertifikasi Profesi). Berlaku 3 tahun sejak diterbitkan pada tanggal 02 Oktober 2025 sampai dengan 02 Oktober 2028.",
    category: "Sertifikat",
    projectUrl: "/docs/sertifikasi.pdf",
    thumbnailUrl: "/images/sertifikasi.jpg",
  },
  {
    id: 2,
    title: "Essential Skills: Social Influence",
    desc: "Sertifikat Pelatihan dari Gerakan Nasional Indonesia Kompeten (GNIK) & Kemnaker RI untuk membangun kemampuan mempengaruhi orang lain secara positif di lingkungan kerja melalui sikap, komunikasi, dan hubungan interpersonal.",
    category: "Sertifikat",
    projectUrl: "/docs/Essential Skills - Social Influence.pdf",
    thumbnailUrl: "/images/Social Influence.png",
  },
  {
    id: 3,
    title: "Essential Skills: Emotional Intelligence",
    desc: "Sertifikat Pelatihan dari Gerakan Nasional Indonesia Kompeten (GNIK) & Kemnaker RI untuk membangun kemampuan untuk mengenali, memahami, dan mengelola emosi diri sendiri serta emosi orang lain, serta menggunakan pemahaman tersebut untuk membimbing pikiran dan tindakan.",
    category: "Sertifikat",
    projectUrl: "/docs/Essential Skills - Emotional Intelligence.pdf",
    thumbnailUrl: "/images/Emotional Intelligence.png",
  },
  {
    id: 4,
    title: "Essential Skills: Digital Literacy",
    desc: "Sertifikat Pelatihan dari Gerakan Nasional Indonesia Kompeten (GNIK) & Kemnaker RI untuk membantu memahami konsep literasi digital, etika dan keamanan digital, penerapan digitalisasi di tempat kerja, hingga pengembangan digital mindset yang adaptif terhadap perubahan.",
    category: "Sertifikat",
    projectUrl: "/docs/Essential Skills - Digital Literacy.pdf",
    thumbnailUrl: "/images/Digital Literacy.png",
  },
  {
    id: 5,
    title: "Essential Skills: Self Efficacy",
    desc: "Sertifikat Pelatihan dari Gerakan Nasional Indonesia Kompeten (GNIK) & Kemnaker RI untuk membangun keyakinan seseorang terhadap kemampuannya sendiri untuk mengatur tindakan, menghadapi tantangan, dan mencapai hasil atau kinerja tertentu dalam situasi tertentu.",
    category: "Sertifikat",
    projectUrl: "/docs/Essential Skills - Self Efficacy.pdf",
    thumbnailUrl: "/images/Self Efficacy.png",
  },
  {
    id: 6,
    title: "Essential Skills: Adaptability",
    desc: "Sertifikat Pelatihan dari Gerakan Nasional Indonesia Kompeten (GNIK) & Kemnaker RI untuk membangun kemampuan beradaptasi secara efektif di dunia kerja yang dinamis dan penuh perubahan.",
    category: "Sertifikat",
    projectUrl: "/docs/Essential Skills - Adaptability.pdf",
    thumbnailUrl: "/images/Adaptability.png",
  },
  {
    id: 7,
    title: "Essential Skills: Digital Disruption & Transformation",
    desc: "Sertifikat Pelatihan dari Gerakan Nasional Indonesia Kompeten (GNIK) & Kemnaker RI untuk membangun mindset adaptif, kritis, dan berkelanjutan, agar mampu tetap relevan dan berkontribusi secara bermakna di tengah percepatan teknologi dan transformasi organisasi.",
    category: "Sertifikat",
    projectUrl:
      "/docs/Essential Skills - Digital Disruption & Transformation.pdf",
    thumbnailUrl: "/images/Digital Disruption & Transformation.png",
  },
  {
    id: 8,
    title: "Essential Skills: Integrity at Work",
    desc: "Sertifikat Pelatihan dari Gerakan Nasional Indonesia Kompeten (GNIK) & Kemnaker RI untuk membangun karakter individu, budaya organisasi, serta kepercayaan publik dengan membekali pemahaman konseptual, reflektif, dan aplikatif mengenai integritas dalam konteks dunia kerja dan kehidupan profesional.",
    category: "Sertifikat",
    projectUrl: "/docs/Essential Skills - Integrity at Work.pdf",
    thumbnailUrl: "/images/Integrity at Work.png",
  },
  {
    id: 9,
    title: "Essential Skills: Design Thinking",
    desc: "Sertifikat Pelatihan dari Gerakan Nasional Indonesia Kompeten (GNIK) & Kemnaker RI untuk membangun pola pikir inovatif melalui Design Thinking sebagai pendekatan berpikir yang berfokus pada manusia (human-centered), kreatif, dan aplikatif dalam menyelesaikan berbagai tantangan.",
    category: "Sertifikat",
    projectUrl: "/docs/Essential Skills - Design Thinking.pdf",
    thumbnailUrl: "/images/Design Thinking.png",
  },
  {
    id: 10,
    title: "Essential Skills: Emotional Resilience",
    desc: "Sertifikat Pelatihan dari Gerakan Nasional Indonesia Kompeten (GNIK) & Kemnaker RI untuk membangun ketahanan emosional (Emotional Resilience) di dunia kerja untuk menghadapi tantangan dan tekanan secara adaptif.",
    category: "Sertifikat",
    projectUrl: "/docs/Essential Skills - Emotional Resilience.pdf",
    thumbnailUrl: "/images/Emotional Resilience.png",
  },
  {
    id: 11,
    title: "Back End Javascript",
    desc: "Penyelesaian program Studi Independen Bersertifikat Back End Javascript oleh Binar Academy, Kampus Merdeka. Periode 16 Feb 2024 - 30 Jun 2024.",
    category: "Sertifikat",
    projectUrl: "/docs/BEJS.pdf",
    thumbnailUrl: "/images/BEJS.jpg",
  },
  {
    id: 12,
    title: "Front End Javascript",
    desc: "Penyelesaian program Studi Independen Bersertifikat Front End Javascript oleh Binar Academy, Kampus Merdeka. Periode 14 Aug 2023 - 31 Dec 2023.",
    category: "Sertifikat",
    projectUrl: "/docs/FEJS.pdf",
    thumbnailUrl: "/images/FEJS.jpg",
  },
  {
    id: 13,
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
            See More Certificates
          </button>
        </div>
      )}
    </>
  );
};
