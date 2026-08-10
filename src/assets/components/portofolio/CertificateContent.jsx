import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineDocumentText, HiOutlineAcademicCap } from "react-icons/hi2";

const portfolioItems = [
  {
    id: 1,
    title: "Junior Web Programmer (BNSP)",
    desc: "Competency Certificate as a Junior Web Programmer issued by Badan Nasional Sertifikasi Profesi (BNSP). Valid for 3 years, from October 2, 2025 to October 2, 2028.",
    category: "Certificate",
    projectUrl: "/docs/Certificate/Certificate_BNSP.pdf",
    thumbnailUrl: "/images/Certificate/sertifikasi.jpg",
  },
  {
    id: 2,
    title: "Internship Certificate",
    desc: "Certificate of completion for the University Graduate Internship Program organized by Kementerian Ketenagakerjaan RI & PT Shelter Indonesia Gemilang, as a Web Developer.",
    category: "Certificate",
    projectUrl: "/docs/Certificate/Certificate_Magang_2026.pdf",
    thumbnailUrl: "/images/Certificate/Magang.png",
  },
  {
    id: 3,
    title: "Back End Javascript",
    desc: "Certificate of completion for the Back-End JavaScript Independent Study Program by Binar Academy, under Kampus Merdeka. Period: February 16 - June 30, 2024.",
    category: "Certificate",
    projectUrl: "/docs/Certificate/BEJS.pdf",
    thumbnailUrl: "/images/Certificate/BEJS.jpg",
  },
  {
    id: 4,
    title: "Front End Javascript",
    desc: "Certificate of completion for the Front-End JavaScript Independent Study Program by Binar Academy, under Kampus Merdeka. Period: August 14 - December 31, 2023.",
    category: "Certificate",
    projectUrl: "/docs/Certificate/FEJS.pdf",
    thumbnailUrl: "/images/Certificate/FEJS.jpg",
  },
  {
    id: 5,
    title: "Essential Skills (9 Modules)",
    desc: "A series of 9 training certificates from the Gerakan Nasional Indonesia Kompeten (GNIK) & Kementerian Ketenagakerjaan RI, covering key soft skills for the workplace. ",
    category: "Certificate",
    files: [
      {
        label: "Social Influence",
        url: "/docs/Certificate/Essential Skills - Social Influence.pdf",
      },
      {
        label: "Emotional Intelligence",
        url: "/docs/Certificate/Essential Skills - Emotional Intelligence.pdf",
      },
      {
        label: "Digital Literacy",
        url: "/docs/Certificate/Essential Skills - Digital Literacy.pdf",
      },
      {
        label: "Self Efficacy",
        url: "/docs/Certificate/Essential Skills - Self Efficacy.pdf",
      },
      {
        label: "Adaptability",
        url: "/docs/Certificate/Essential Skills - Adaptability.pdf",
      },
      {
        label: "Digital Disruption",
        fullLabel: "Digital Disruption & Transformation",
        url: "/docs/Certificate/Essential Skills - Digital Disruption & Transformation.pdf",
      },
      {
        label: "Integrity at Work",
        url: "/docs/Certificate/Essential Skills - Integrity at Work.pdf",
      },
      {
        label: "Design Thinking",
        url: "/docs/Certificate/Essential Skills - Design Thinking.pdf",
      },
      {
        label: "Emotional Resilience",
        url: "/docs/Certificate/Essential Skills - Emotional Resilience.pdf",
      },
    ],
    thumbnailUrl: "/images/Certificate/Social Influence.png",
  },
  {
    id: 6,
    title: "Cumlaude Graduate",
    desc: "Award certificate from the Rector of UPN Veteran Jawa Timur recognizing academic achievement as an Information Systems graduate with a GPA of 3.88. Issued on July 26, 2025.",
    category: "Award",
    projectUrl: "/docs/Certificate/Penghargaan.pdf",
    thumbnailUrl: "/images/Certificate/Penghargaan.jpg",
  },
];

export const CertificateContent = () => {
  const itemsPerPage = 3;
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);
  const isExpanded = visibleCount >= portfolioItems.length;

  const toggleItems = () => {
    if (isExpanded) {
      setVisibleCount(itemsPerPage);
    } else {
      setVisibleCount(portfolioItems.length);
    }
  };

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.slice(0, visibleCount).map((item) => {
          const isClickable = !item.files && item.projectUrl;
          return (
            <div
              key={item.id}
              onClick={() => {
                if (isClickable) {
                  window.open(item.projectUrl, "_blank", "noopener,noreferrer");
                }
              }}
              className={`flex h-full flex-col rounded-xl border border-gray-700 bg-slate-200 p-5 shadow-xl transition duration-300 hover:scale-105 hover:border-sky-600 dark:bg-slate-800/80 dark:hover:border-cyan-400 ${
                isClickable ? "cursor-pointer" : ""
              }`}
            >
              <div className="relative mb-4 flex h-48 items-center justify-center overflow-hidden rounded-lg bg-gray-900 text-sm text-gray-500 sm:h-64">
                {item.thumbnailUrl ? (
                  <img
                    src={item.thumbnailUrl}
                    alt={`Thumbnail ${item.title}`}
                    className="h-full w-full border border-slate-400 object-cover transition duration-500 hover:scale-105"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 flex items-center justify-center ${
                      item.category === "Certificate"
                        ? "bg-cyan-900/40 text-cyan-400 "
                        : "bg-yellow-900/40 text-yellow-400"
                    }`}
                  >
                    {item.category === "Certificate" ? (
                      <HiOutlineDocumentText className="h-20 w-20" />
                    ) : (
                      <HiOutlineAcademicCap className="h-20 w-20" />
                    )}
                  </div>
                )}
              </div>

              <h4 className="mb-1 text-lg font-bold text-black dark:text-white sm:text-xl">
                {item.title}
              </h4>
              <p className="text-xs text-gray-900 dark:text-gray-400 sm:text-sm">
                {item.desc}
              </p>

              <div className="mt-auto pt-3">
                {item.files ? (
                  <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
                    {item.files.map((file, idx) => (
                      <a
                        key={idx}
                        href={file.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={file.fullLabel || file.label}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center truncate rounded-md border border-sky-600 px-2 py-1 text-[11px] font-semibold text-sky-600 transition duration-300 hover:bg-sky-200 hover:underline dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:font-normal dark:text-cyan-400 dark:hover:bg-cyan-500/20"
                      >
                        {file.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a
                    href={item.projectUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center font-bold text-sky-600 transition duration-300 hover:underline dark:text-cyan-400"
                  >
                    View Certificate <FiExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
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
