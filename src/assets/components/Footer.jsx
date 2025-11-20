import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-cyan-500/30 py-8 font-sans text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 lg:px-8">
        <div className="mb-6 flex w-full max-w-lg flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <a
            href="#"
            className="text-2xl font-extrabold tracking-wider text-cyan-400 transition duration-300 hover:text-cyan-300"
          >
            Bagus
          </a>

          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition duration-200 hover:text-cyan-400 sm:text-base"
            >
              [GitHub]
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition duration-200 hover:text-cyan-400 sm:text-base"
            >
              [LinkedIn]
            </a>
            <a
              href="mailto:youremail@example.com"
              className="text-sm text-gray-400 transition duration-200 hover:text-cyan-400 sm:text-base"
            >
              [Email]
            </a>
          </div>
        </div>

        <div className="mb-6 mt-4 w-full max-w-lg border-t border-gray-700"></div>

        <p className="text-center text-sm text-gray-500">
          &copy; {currentYear} Bagus. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
