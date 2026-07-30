import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { HiOutlineDocumentText, HiOutlineAcademicCap } from "react-icons/hi2";

const portfolioItems = [
  {
    id: 1,
    title: "Junior Web Programmer (BNSP)",
    desc: "Competency Certificate as a Junior Web Programmer issued by BNSP (Indonesian National Professional Certification Board). Valid for 3 years, from October 2, 2025 to October 2, 2028.",
    category: "Certificate",
    projectUrl: "/docs/Certificate_BNSP.pdf",
    thumbnailUrl: "/images/sertifikasi.jpg",
  },
  {
    id: 2,
    title: "Internship Certificate",
    desc: "Certificate of completion for the University Graduate Internship Program organized by Indonesia's Ministry of Manpower (Kemnaker) & Shelter Indonesia Gemilang, as a Web Developer.",
    category: "Certificate",
    projectUrl: "/docs/Certificate_Magang_2026.pdf",
    thumbnailUrl: "/images/Magang.png",
  },
  {
    id: 3,
    title: "Back End Javascript",
    desc: "Certificate of completion for the Back-End JavaScript Independent Study Program by Binar Academy, under Kampus Merdeka. Period: February 16 - June 30, 2024.",
    category: "Certificate",
    projectUrl: "/docs/BEJS.pdf",
    thumbnailUrl: "/images/BEJS.jpg",
  },
  {
    id: 4,
    title: "Front End Javascript",
    desc: "Certificate of completion for the Front-End JavaScript Independent Study Program by Binar Academy, under Kampus Merdeka. Period: August 14 - December 31, 2023.",
    category: "Certificate",
    projectUrl: "/docs/FEJS.pdf",
    thumbnailUrl: "/images/FEJS.jpg",
  },
  {
    id: 5,
    title: "Essential Skills: Social Influence",
    desc: "Training certificate from the National Competent Indonesia Movement (GNIK) & Indonesia's Ministry of Manpower, focused on building the ability to positively influence others in the workplace through attitude, communication, and interpersonal relationships.",
    category: "Certificate",
    projectUrl: "/docs/Essential Skills - Social Influence.pdf",
    thumbnailUrl: "/images/Social Influence.png",
  },
  {
    id: 6,
    title: "Essential Skills: Emotional Intelligence",
    desc: "Training certificate from GNIK & Indonesia's Ministry of Manpower, focused on building the ability to recognize, understand, and manage one's own emotions and the emotions of others, and to use that understanding to guide thought and action.",
    category: "Certificate",
    projectUrl: "/docs/Essential Skills - Emotional Intelligence.pdf",
    thumbnailUrl: "/images/Emotional Intelligence.png",
  },
  {
    id: 7,
    title: "Essential Skills: Digital Literacy",
    desc: "Training certificate from GNIK & Indonesia's Ministry of Manpower, covering digital literacy concepts, digital ethics and security, workplace digitalization, and developing an adaptive digital mindset.",
    category: "Certificate",
    projectUrl: "/docs/Essential Skills - Digital Literacy.pdf",
    thumbnailUrl: "/images/Digital Literacy.png",
  },
  {
    id: 8,
    title: "Essential Skills: Self Efficacy",
    desc: "Training certificate from GNIK & Indonesia's Ministry of Manpower, focused on building confidence in one's own ability to manage actions, face challenges, and achieve specific results or performance in a given situation.",
    category: "Certificate",
    projectUrl: "/docs/Essential Skills - Self Efficacy.pdf",
    thumbnailUrl: "/images/Self Efficacy.png",
  },
  {
    id: 9,
    title: "Essential Skills: Adaptability",
    desc: "Training certificate from GNIK & Indonesia's Ministry of Manpower, focused on building the ability to adapt effectively in a dynamic, ever-changing work environment.",
    category: "Certificate",
    projectUrl: "/docs/Essential Skills - Adaptability.pdf",
    thumbnailUrl: "/images/Adaptability.png",
  },
  {
    id: 10,
    title: "Essential Skills: Digital Disruption & Transformation",
    desc: "Training certificate from GNIK & Indonesia's Ministry of Manpower, focused on building an adaptive, critical, and sustainable mindset to stay relevant and contribute meaningfully amid accelerating technology and organizational transformation.",
    category: "Certificate",
    projectUrl:
      "/docs/Essential Skills - Digital Disruption & Transformation.pdf",
    thumbnailUrl: "/images/Digital Disruption & Transformation.png",
  },
  {
    id: 11,
    title: "Essential Skills: Integrity at Work",
    desc: "Training certificate from GNIK & Indonesia's Ministry of Manpower, focused on building individual character, organizational culture, and public trust through conceptual, reflective, and applied understanding of integrity in the workplace and professional life.",
    category: "Certificate",
    projectUrl: "/docs/Essential Skills - Integrity at Work.pdf",
    thumbnailUrl: "/images/Integrity at Work.png",
  },
  {
    id: 12,
    title: "Essential Skills: Design Thinking",
    desc: "Training certificate from GNIK & Indonesia's Ministry of Manpower, focused on building an innovative mindset through Design Thinking as a human-centered, creative, and applicable approach to solving various challenges.",
    category: "Certificate",
    projectUrl: "/docs/Essential Skills - Design Thinking.pdf",
    thumbnailUrl: "/images/Design Thinking.png",
  },
  {
    id: 13,
    title: "Essential Skills: Emotional Resilience",
    desc: "Training certificate from GNIK & Indonesia's Ministry of Manpower, focused on building emotional resilience in the workplace to adaptively handle challenges and pressure.",
    category: "Certificate",
    projectUrl: "/docs/Essential Skills - Emotional Resilience.pdf",
    thumbnailUrl: "/images/Emotional Resilience.png",
  },
  {
    id: 14,
    title: "Cumlaude Graduate",
    desc: "Award certificate from the Rector of UPN Veteran Jawa Timur recognizing academic achievement as an Information Systems graduate with a GPA of 3.88. Issued on July 26, 2025.",
    category: "Award",
    projectUrl: "/docs/Penghargaan.pdf",
    thumbnailUrl: "/images/Penghargaan.jpg",
  },
];

export const CertificateContent = () => {
  const itemsPerPage = 3;
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const showMoreItems = () => {
    setVisibleCount(portfolioItems.length);
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
                    item.category === "Certificate"
                      ? "bg-cyan-900/40 text-cyan-400"
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
