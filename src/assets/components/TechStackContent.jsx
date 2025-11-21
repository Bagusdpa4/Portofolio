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
} from "react-icons/si";

const skillsData = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-600" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "ReactJS", icon: FaReact, color: "text-cyan-400" },
  { name: "Redux", icon: SiRedux, color: "text-purple-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-300" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-700" },
  { name: "Material UI", icon: SiMui, color: "text-blue-500" },
  { name: "Node JS", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-700" },
  { name: "Figma", icon: FaFigma, color: "text-fuchsia-500" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
  { name: "Vite", icon: SiVite, color: "text-purple-400" },
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
    <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:mx-auto lg:max-w-6xl">
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
