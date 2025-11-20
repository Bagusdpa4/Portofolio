import React from "react";
// Impor komponen yang dimodifikasi
import { Navbar } from "../assets/components/Navbar";
import { Footer } from "../assets/components/Footer";

const Section = ({ id, children, className = "" }) => {
  return (
    // Menggunakan pt-[5rem] untuk mengimbangi Navbar yang fixed/sticky
    <section
      id={id}
      className={`flex min-h-screen flex-col items-center justify-center px-4 pb-16 pt-[5rem] sm:px-8 ${className}`}
    >
      {children}
    </section>
  );
};

export const Homepage = () => {
  return (
    <div className="from-gray-950 to-blue-950 min-h-screen bg-gradient-to-r via-slate-800 font-sans">
      <Navbar />

      <main>
        {/* 1. HOME SECTION (Responsive) */}
        <Section id="home" className="justify-center pt-0 text-center">
          <div className="mx-auto max-w-4xl py-20">
            <p className="mb-4 text-lg font-light tracking-widest text-white opacity-80 sm:text-xl">
              Welcome To My
            </p>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tighter sm:text-7xl lg:text-9xl">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Portfolio
              </span>
              Website
            </h1>
            <div className="mt-12 flex w-full justify-center sm:mt-16">
              <div className="flex h-32 w-64 items-center justify-center rounded-lg border border-cyan-500/30 bg-gray-900/50 text-sm text-gray-500 sm:h-40 sm:w-80 sm:text-base">
                [Ilustrasi Coding/Developer]
              </div>
            </div>
          </div>
        </Section>

        {/* 2. ABOUT SECTION (Responsive) */}
        <Section id="about">
          <div className="w-full max-w-7xl text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 sm:text-sm">
              Transforming ideas into digital experiences
            </p>
            <h2 className="mb-10 text-4xl font-extrabold text-white sm:mb-16 sm:text-5xl">
              About Me
            </h2>

            {/* Tata letak kolom berubah dari vertikal (mobile) menjadi horizontal (desktop) */}
            <div className="flex flex-col items-start gap-10 text-left md:flex-row md:gap-16">
              <div className="w-full space-y-4 md:w-2/3">
                <p className="text-2xl font-light text-white sm:text-3xl">
                  Hello, I'm
                </p>
                <h3 className="text-4xl font-extrabold text-cyan-400 sm:text-5xl">
                  Bagus
                </h3>
                <p className="text-base text-gray-300 sm:text-lg">
                  Saya adalah seorang pengembang **Front-End** yang bersemangat
                  dalam mengubah ide kreatif menjadi antarmuka pengguna yang
                  indah dan fungsional. Saya memiliki keahlian dalam React dan
                  Tailwind CSS untuk menciptakan pengalaman digital yang
                  responsif, modern, dan berpusat pada pengguna. Saya juga
                  mengeksplorasi pengembangan Full-Stack menggunakan Node.js
                  untuk membangun solusi digital yang komprehensif dari awal
                  hingga akhir.
                </p>
                <div className="flex flex-col space-y-3 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button className="hover:text-gray-950 rounded-lg border border-cyan-400 px-5 py-2 font-medium text-cyan-400 transition duration-300 hover:bg-cyan-400">
                    Download CV
                  </button>
                  <a
                    href="#portfolio"
                    className="rounded-lg bg-gray-700/50 px-5 py-2 text-center font-medium text-white transition duration-300 hover:bg-gray-600"
                  >
                    View Projects
                  </a>
                </div>
              </div>
              <div className="w-full space-y-4 pt-6 sm:space-y-6 md:w-1/3 md:pt-0">
                <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4 text-center">
                  <p className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">
                    7
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-gray-400 sm:text-sm">
                    Total Projects
                  </p>
                </div>
                <div className="rounded-lg border border-gray-700 bg-gray-800/50 p-4 text-center">
                  <p className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">
                    3
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-gray-400 sm:text-sm">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-center sm:mt-16">
              <div className="h-32 w-32 rounded-full border-4 border-gray-600 bg-gray-700 sm:h-40 sm:w-40"></div>
            </div>
          </div>
        </Section>

        {/* 3. PORTFOLIO SECTION (Responsive) */}
        <Section id="portfolio">
          <div className="w-full max-w-7xl text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
              Portfolio Showcase
            </h2>
            <p className="mb-8 text-base text-gray-400 sm:mb-12 sm:text-lg">
              Kumpulan proyek, sertifikat, dan teknologi yang telah saya
              gunakan.
            </p>

            {/* Grid responsif: 1 kolom di mobile, 2 di md, 3 di lg */}
            <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-lg border border-gray-700 bg-slate-800/80 p-4 shadow-xl transition duration-300 hover:border-cyan-400 sm:p-5"
                >
                  <div className="mb-4 flex h-32 items-center justify-center rounded-md bg-gray-900 text-sm text-gray-500 sm:h-48">
                    [Proyek/Sertifikat {i}]
                  </div>
                  <h4 className="mb-1 text-lg font-bold text-white sm:text-xl">
                    Judul Item
                  </h4>
                  <p className="text-xs text-gray-400 sm:text-sm">
                    Deskripsi Singkat Proyek atau Sertifikat.
                  </p>
                  <a
                    href="#"
                    className="mt-3 inline-block text-xs text-cyan-400 hover:underline sm:text-sm"
                  >
                    Details &rarr;
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 4. SKILLS SECTION (Responsive) */}
        <Section id="skills">
          <div className="w-full max-w-7xl text-center">
            <h2 className="mb-12 text-4xl font-extrabold text-white sm:mb-16 sm:text-5xl">
              Tech Stack
            </h2>

            <div className="flex w-full flex-wrap justify-center gap-6 sm:gap-8">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Tailwind",
                "MongoDB",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex flex-col items-center p-2 text-center"
                >
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/20 sm:h-16 sm:w-16">
                    <span className="text-lg font-bold text-cyan-400 sm:text-xl">
                      {skill.substring(0, 2)}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-white sm:text-sm">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 5. CONTACT SECTION (Responsive) */}
        <Section id="contact">
          <div className="w-full max-w-7xl text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl">
              Contact Me
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-base text-gray-400 sm:mb-12 sm:text-xl">
              Silakan hubungi saya untuk kolaborasi proyek atau peluang kerja.
            </p>

            <div className="mx-auto w-full max-w-lg rounded-xl border border-cyan-500/10 bg-slate-800/80 p-6 shadow-2xl sm:p-8">
              <form className="space-y-5 text-left sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm text-white focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm text-white focus:border-cyan-500 focus:ring-cyan-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-600 bg-gray-700 px-4 py-2 text-sm text-white focus:border-cyan-500 focus:ring-cyan-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-gray-950 w-full rounded-lg bg-cyan-500 px-5 py-2 text-base font-bold transition duration-300 hover:bg-cyan-400"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};
