import React from "react";

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
} from "react-icons/si";
import { TbBrandPrisma, TbApi, TbBrandOffice } from "react-icons/tb";
import { BiLogoVisualStudio, BiLogoGoogleCloud } from "react-icons/bi";

const skillsData = [
  // Frontend
  { name: "HTML", icon: FaHtml5, color: "text-orange-600" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "ReactJS", icon: FaReact, color: "text-cyan-400" },
  { name: "Redux", icon: SiRedux, color: "text-purple-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-700" },
  { name: "Vite", icon: SiVite, color: "text-purple-400" },
  // { name: "Material UI", icon: SiMui, color: "text-blue-500" },

  // Backend & Database
  { name: "Node JS", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-400" },
  { name: "RESTful API", icon: TbApi, color: "text-pink-500" },
  { name: "JWT", icon: SiJsonwebtokens, color: "text-red-500" },
  { name: "Prisma", icon: TbBrandPrisma, color: "text-cyan-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  // { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  // { name: "MySQL", icon: SiMysql, color: "text-orange-400" },
  // { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },

  // Tools & Lainnya
  { name: "Git", icon: FaGitAlt, color: "text-orange-700" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Trello", icon: FaTrello, color: "text-blue-500" },
  { name: "NPM", icon: FaNpm, color: "text-red-600" },
  { name: "Yarn", icon: FaYarn, color: "text-blue-500" },
  { name: "Google Cloud", icon: BiLogoGoogleCloud, color: "text-blue-400" },
  { name: "VS Code", icon: BiLogoVisualStudio, color: "text-blue-600" },
  { name: "Postman", icon: SiPostman, color: "text-orange-500" },
  { name: "MS Office", icon: TbBrandOffice, color: "text-red-400" },
  // { name: "Figma", icon: FaFigma, color: "text-fuchsia-500" },
];

const SkillItem = ({ skill, Icon, color }) => (
  <div
    key={skill}
    className="flex h-24 w-24 flex-col items-center justify-center rounded-lg border border-gray-700/50 bg-gray-900/50 p-4 text-center transition duration-300 hover:scale-110 hover:border-cyan-400 hover:shadow-lg hover:shadow-indigo-500/20 sm:h-28 sm:w-28"
  >
    <Icon className={`mb-2 h-8 w-8 sm:h-10 sm:w-10 ${color}`} />
    <p className="text-xs font-semibold text-white sm:text-sm">{skill}</p>
  </div>
);

export const TechStackContent = () => (
  <div className="bg-slate-800/80 mt-4 rounded-xl border border-gray-700 p-6 shadow-xl sm:p-8">
    <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 sm:gap-8 lg:mx-auto lg:max-w-6xl lg:grid-cols-8">
      {skillsData.map((item) => (
        <SkillItem
          key={item.name}
          skill={item.name}
          Icon={item.icon}
          color={item.color}
        />
      ))}
    </div>
  </div>
);
