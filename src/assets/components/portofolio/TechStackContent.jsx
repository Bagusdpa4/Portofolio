import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaTrello,
  FaNpm,
  FaYarn,
  FaLaravel,
  FaPhp,
  FaGitlab,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiVercel,
  SiRedux,
  SiMui,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPostman,
  SiJsonwebtokens,
  SiSwagger,
  SiGooglegemini,
  SiShadcnui,
  SiTypescript
} from "react-icons/si";
import { IoIosSettings } from "react-icons/io";
import { TbBrandPrisma, TbApi, TbBrandOffice } from "react-icons/tb";
import { BiLogoVisualStudio, BiLogoGoogleCloud } from "react-icons/bi";
import { PiFramerLogoFill } from "react-icons/pi";
import { RiClaudeFill, RiNextjsFill, RiSupabaseFill } from "react-icons/ri";

const skillsData = {
  Frontend: [
    { name: "HTML", icon: FaHtml5, color: "text-orange-600" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "Typescript", icon: SiTypescript, color: "text-blue-500" },
    { name: "ReactJS", icon: FaReact, color: "text-cyan-400" },
    {
      name: "Next.js (Dasar)",
      icon: RiNextjsFill,
      color: "dark:text-white text-black",
    },
    { name: "Redux", icon: SiRedux, color: "text-purple-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-700" },
    { name: "Vite", icon: SiVite, color: "text-purple-400" },
    {
      name: "Shadcn UI",
      icon: SiShadcnui,
      color: "dark:text-white text-black",
    },
    { name: "Material UI", icon: SiMui, color: "text-blue-500" },
    {
      name: "Framer Motion",
      icon: PiFramerLogoFill,
      color: "dark:text-white text-black",
    },
  ],

  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "dark:text-white text-black",
    },
    { name: "RESTful API", icon: TbApi, color: "text-pink-500" },
    { name: "JWT", icon: SiJsonwebtokens, color: "text-red-500" },
    { name: "Prisma", icon: TbBrandPrisma, color: "text-cyan-400" },
    { name: "Swagger", icon: SiSwagger, color: "text-emerald-400" },
    { name: "Laravel", icon: FaLaravel, color: "text-orange-600" },
    { name: "PHP", icon: FaPhp, color: "text-indigo-500" },
  ],

  Database: [
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
    { name: "MySQL", icon: SiMysql, color: "text-orange-600" },
    { name: "Supabase", icon: RiSupabaseFill, color: "text-green-600" },
  ],

  "Tools & Others": [
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "GitHub", icon: FaGithub, color: "dark:text-white text-black" },
    { name: "GitLab", icon: FaGitlab, color: "text-orange-600" },
    { name: "Vercel", icon: SiVercel, color: "dark:text-white text-black" },
    { name: "Trello", icon: FaTrello, color: "text-blue-500" },
    { name: "NPM", icon: FaNpm, color: "text-red-600" },
    { name: "Yarn", icon: FaYarn, color: "text-blue-500" },
    { name: "Google Cloud", icon: BiLogoGoogleCloud, color: "text-blue-400" },
    { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-600" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "MS Office", icon: TbBrandOffice, color: "text-red-400" },
    { name: "Figma", icon: FaFigma, color: "text-fuchsia-500" },
  ],

  "Artificial Intelligence": [
    { name: "Claude AI", icon: RiClaudeFill, color: "text-orange-600" },
    {
      name: "Google Gemini AI",
      icon: SiGooglegemini,
      iconGradientId: "gemini-icon-gradient",
    },
    {
      name: "Others",
      icon: IoIosSettings,
      color: "dark:text-white text-black",
    },
  ],
};

const SkillItem = ({ skill, Icon, color, iconGradientId }) => (
  <div className="flex aspect-square w-full flex-col items-center justify-center rounded-lg border border-gray-700/50 bg-slate-300/70 p-2 text-center transition duration-300 hover:scale-105 hover:border-sky-600 hover:shadow-lg hover:shadow-indigo-500/20 dark:bg-gray-900/40 dark:hover:border-cyan-400 sm:p-4">
    <Icon
      className={`mb-2 h-7 w-7 shrink-0 sm:h-10 sm:w-10 ${color || ""}`}
      style={iconGradientId ? { fill: `url(#${iconGradientId})` } : undefined}
    />

    <span className="text-xs font-medium text-gray-800 dark:text-gray-200 sm:text-sm">
      {skill}
    </span>
  </div>
);

const DEFAULT_VISIBLE_CATEGORIES = ["Frontend", "Backend"];

export const TechStackContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleItems = () => {
    if (isExpanded) {
      setIsExpanded(false);

      const portfolioSection = document.getElementById("portfolio");

      if (portfolioSection) {
        portfolioSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      setIsExpanded(true);
    }
  };

  const allCategories = Object.entries(skillsData);
  const hasHiddenCategories = allCategories.some(
    ([category]) => !DEFAULT_VISIBLE_CATEGORIES.includes(category),
  );

  return (
    <div className="w-full">
      {/* SVG gradient untuk icon Gemini */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient
            id="gemini-icon-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="40%" stopColor="#facc15" /> {/* yellow-400 */}
            <stop offset="40%" stopColor="#22c55e" /> {/* green-500 */}
            <stop offset="70%" stopColor="#3b82f6" /> {/* blue-500 */}
          </linearGradient>
        </defs>
      </svg>

      <div className="space-y-10">
        {allCategories.map(([category, items]) => {
          const isDefaultVisible =
            DEFAULT_VISIBLE_CATEGORIES.includes(category);

          return (
            <div
              key={category}
              className={
                isDefaultVisible || isExpanded ? undefined : "hidden lg:block"
              }
            >
              <h3 className="mb-4 text-lg font-bold text-gray-800 dark:text-gray-200 sm:text-xl">
                {category}
              </h3>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-8 lg:mx-auto lg:max-w-6xl lg:grid-cols-8">
                {items.map((item) => (
                  <SkillItem
                    key={item.name}
                    skill={item.name}
                    Icon={item.icon}
                    color={item.color}
                    iconGradientId={item.iconGradientId}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {hasHiddenCategories && (
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
