import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaTrello,
  FaNpm,
  FaYarn,
  FaLaravel,
  FaPhp,
  FaGitlab,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiFirebase,
  SiVercel,
  SiRedux,
  SiMui,
  SiMongodb,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiJsonwebtokens,
  SiSwagger,
  SiGooglegemini,
} from "react-icons/si";
import { TbBrandPrisma, TbApi, TbBrandOffice } from "react-icons/tb";
import { BiLogoVisualStudio, BiLogoGoogleCloud } from "react-icons/bi";
import { RiClaudeFill } from "react-icons/ri";

const skillsData = [
  // Frontend
  { name: "HTML", icon: FaHtml5, color: "text-orange-600" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "ReactJS", icon: FaReact, color: "text-cyan-400" },
  { name: "Redux", icon: SiRedux, color: "text-purple-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-700" },
  { name: "Vite", icon: SiVite, color: "text-purple-400" },
  { name: "Material UI", icon: SiMui, color: "text-blue-500" },

  // Backend & Database
  { name: "Node JS", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express Js", icon: SiExpress, color: "text-gray-500" },
  { name: "RESTful API", icon: TbApi, color: "text-pink-500" },
  { name: "JWT", icon: SiJsonwebtokens, color: "text-red-500" },
  { name: "Prisma", icon: TbBrandPrisma, color: "text-cyan-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
  { name: "Swagger", icon: SiSwagger, color: "text-emerald-400" },
  // { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Laravel", icon: FaLaravel, color: "text-orange-600" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-500" },
  { name: "MySQL", icon: SiMysql, color: "text-orange-600" },
  // { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },

  // Tools & Lainnya
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "Gitlab", icon: FaGitlab, color: "text-orange-600" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Trello", icon: FaTrello, color: "text-blue-500" },
  { name: "NPM", icon: FaNpm, color: "text-red-600" },
  { name: "Yarn", icon: FaYarn, color: "text-blue-500" },
  { name: "Google Cloud", icon: BiLogoGoogleCloud, color: "text-blue-400" },
  { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-600" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "MS Office", icon: TbBrandOffice, color: "text-red-400" },
  { name: "Claude AI", icon: RiClaudeFill, color: "text-orange-600" },
  {
    name: "Google Gemini Ai",
    icon: SiGooglegemini,
    iconGradientId: "gemini-icon-gradient",
  },
  // { name: "Figma", icon: FaFigma, color: "text-fuchsia-500" },
];

const SkillItem = ({
  skill,
  Icon,
  color,
  iconGradientId,
  isHiddenOnMobile,
}) => (
  <div
    key={skill}
    className={`${isHiddenOnMobile ? "hidden lg:flex" : "flex"} aspect-square w-full flex-col items-center justify-center rounded-lg border border-gray-700/50 bg-slate-300/70 p-2 text-center transition duration-300 hover:scale-110 hover:border-sky-600 hover:shadow-lg hover:shadow-indigo-500/20 dark:bg-gray-900/50 dark:hover:border-cyan-400 sm:p-4`}
  >
    <Icon
      className={`mb-2 h-7 w-7 shrink-0 sm:h-10 sm:w-10 ${color || ""}`}
      style={iconGradientId ? { fill: `url(#${iconGradientId})` } : undefined}
    />
    <p className="text-xs font-bold leading-tight text-black dark:font-semibold dark:text-white sm:text-sm">
      {skill}
    </p>
  </div>
);

export const TechStackContent = () => {
  const itemsPerPage = 12;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleItems = () => {
    if (isExpanded) {
      setIsExpanded(false);
      const portfolioSection = document.getElementById("portfolio");
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div className="mt-4 rounded-xl border border-gray-700 bg-slate-200 p-6 shadow-xl dark:bg-slate-800/80 sm:p-8">
      {/* Definisi gradient SVG, disembunyikan, dipakai via fill="url(#...)" */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient
            id="gemini-icon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="30%" stopColor="#facc15" /> {/* yellow-400 */}
            <stop offset="50%" stopColor="#22c55e" /> {/* green-500 */}
            <stop offset="90%" stopColor="#3b82f6" /> {/* blue-500 */}
          </linearGradient>
        </defs>
      </svg>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-8 lg:mx-auto lg:max-w-6xl lg:grid-cols-8">
        {skillsData.map((item, index) => (
          <SkillItem
            key={item.name}
            skill={item.name}
            Icon={item.icon}
            color={item.color}
            iconGradientId={item.iconGradientId}
            isHiddenOnMobile={index >= itemsPerPage && !isExpanded}
          />
        ))}
      </div>

      {skillsData.length > itemsPerPage && (
        <div className="mt-8 text-center sm:mt-10 lg:hidden">
          <button
            onClick={toggleItems}
            className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-xl shadow-sky-900/30 transition duration-300 hover:scale-[1.05] hover:bg-sky-700 dark:bg-cyan-600 dark:shadow-cyan-900/50 dark:hover:bg-cyan-700 sm:px-8 sm:text-lg"
          >
            {isExpanded ? "See Less" : "See All"}
          </button>
        </div>
      )}
    </div>
  );
};
