import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const emailAddress = "sugab.dwi88@gmail.com";

  return (
    <footer className="border-t border-sky-600/30 bg-white/90 py-4 font-sans text-black dark:border-cyan-500/30 dark:bg-gray-950 dark:text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 lg:px-8">
        <div className="mb-4 flex w-full max-w-7xl flex-col items-center justify-center sm:flex-row sm:justify-between sm:space-y-0">
          <div className="mb-4 text-xl font-bold tracking-wider text-gray-900 transition duration-300 dark:font-extrabold dark:text-gray-400 sm:mb-0 sm:text-2xl">
            Bagus Dwi Putra Adiyono
          </div>

          <div className="flex max-w-sm flex-wrap justify-center gap-x-4 gap-y-2 sm:max-w-none">
            <a
              href="https://github.com/Bagusdpa4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-900 transition duration-200 hover:scale-150 hover:text-sky-600 dark:text-gray-400 dark:hover:text-cyan-400 sm:text-2xl"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/bagusdwiputraadiyono/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-900 transition duration-200 hover:scale-150 hover:text-sky-600 dark:text-gray-400 dark:hover:text-cyan-400 sm:text-2xl"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/+6282229749462"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-900 transition duration-200 hover:scale-150 hover:text-sky-600 dark:text-gray-400 dark:hover:text-cyan-400 sm:text-2xl"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/bagusdwiputraa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-900 transition duration-200 hover:scale-150 hover:text-sky-600 dark:text-gray-400 dark:hover:text-cyan-400 sm:text-2xl"
              title="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="text-lg text-gray-900 transition duration-200 hover:scale-150 hover:text-sky-600 dark:text-gray-400 dark:hover:text-cyan-400 sm:text-2xl"
              title={`Send Email to ${emailAddress}`}
            >
              <AiOutlineMail />
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-sm font-medium text-gray-900 dark:text-gray-400 sm:mt-2">
          &copy; {currentYear} Bagus. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
