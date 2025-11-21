import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const emailAddress = "sugab.dwi88@gmail.com";

  return (
    <footer className="bg-gray-950 border-t border-cyan-500/30 py-4 font-sans text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 lg:px-8">
        <div className="mb-4 flex w-full max-w-7xl items-center justify-between space-y-0 sm:mb-0">
          <a
            href="#"
            className="text-xl font-extrabold tracking-wider text-cyan-400 transition duration-300 hover:text-cyan-300 sm:text-2xl"
          >
            Bagus
          </a>

          <div className="flex space-x-4">
            <a
              href="https://github.com/Bagusdpa4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 transition duration-200 hover:text-cyan-400 sm:text-xl"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/bagusdwiputraadiyono/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 transition duration-200 hover:text-cyan-400 sm:text-xl"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/+6282229749462"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 transition duration-200 hover:text-cyan-400 sm:text-xl"
              title="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://www.instagram.com/bagusdwiputraa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-gray-400 transition duration-200 hover:text-cyan-400 sm:text-xl"
              title="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={`mailto:${emailAddress}`}
              className="text-lg text-gray-400 transition duration-200 hover:text-cyan-400 sm:text-xl"
              title={`Kirim Email ke ${emailAddress}`}
            >
              <AiOutlineMail />
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-gray-500 sm:mt-2">
          &copy; {currentYear} Bagus. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
