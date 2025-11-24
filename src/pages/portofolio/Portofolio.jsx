// Portofolio.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaCode, FaStar, FaGithub } from "react-icons/fa"; // Tambahkan FaGithub
// Import data dari ProjectContent.jsx yang sudah di-export
import { portfolioItems } from "../../assets/components/portofolio/ProjectContent"; // Sesuaikan path jika perlu
import { NavbarPages } from "../../assets/components/navbar/NavbarPages";

export const Portofolio = () => {
  const { id } = useParams();
  const project = portfolioItems.find((item) => item.id === parseInt(id));

  // Data Mockup/Dummy untuk Fitur dan Teknologi
  // GANTI dengan data REAL dari object 'project' Anda jika sudah tersedia
  const mockDetails = {
    // Fitur berdasarkan deskripsi proyek E-Commerce
    features:
      project?.title === "E-Commerce Cahaya Kreativ"
        ? [
            "Sistem pemesanan jasa kreatif online 24/7.",
            "Manajemen inventaris dan produk melalui Dashboard Admin.",
            "Sistem pembayaran terintegrasi (contoh: Midtrans, dst).",
            "Dashboard statistik penjualan dan pemesanan.",
          ]
        : [
            "Fitur 1: Kustomisasi konten pesan.",
            "Fitur 2: Pengiriman pesan ke banyak channel secara simultan.",
            "Fitur 3: Pengaturan interval pengiriman pesan (untuk kontrol).",
          ],

    // Teknologi (diambil dari deskripsi project)
    technologies: [
      "ReactJS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "Redux (Jika ada)",
      "Axios",
      "JWT",
    ].filter(
      (tech) =>
        project?.desc.includes(tech.replace(/\s/g, "")) ||
        tech.includes("ReactJS"),
    ), // Filter sederhana

    githubUrl: "https://github.com/bagusdpa4/repo-name", // Ganti dengan URL GitHub yang sebenarnya
  };

  if (!project) {
    return (
      <div className="min-h-screen pt-20 text-center text-white">
        <h1 className="text-4xl font-bold text-red-400">
          404 - Project Not Found
        </h1>
        <p className="mt-4 text-xl text-gray-400">
          Maaf, proyek dengan ID "{id}" tidak ditemukan.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block text-cyan-400 underline hover:no-underline"
        >
          &larr; Kembali ke Homepage
        </Link>
      </div>
    );
  }

  return (
    <>
      <NavbarPages />

      <div className="bg-gray-950 min-h-screen px-4 pb-16 pt-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Bagian Navigasi Kembali dan Breadcrumb Sederhana */}
          <div className="mb-8 flex items-center space-x-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-cyan-400">
              Home
            </Link>
            <span>/</span>
            <Link to="/#portfolio" className="hover:text-cyan-400">
              Projects
            </Link>
            <span>/</span>
            <span className="font-medium text-white">{project.title}</span>
          </div>

          {/* Tata Letak Utama (Dua Kolom) */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Kolom Kiri (Deskripsi dan Fitur Utama) - Mengambil 2/3 Bagian */}
            <div className="space-y-8 lg:col-span-2">
              {/* Judul dan Ringkasan */}
              <div className="space-y-3">
                {/* <Link untuk Kembali yang terlihat di gambar */}
                <Link
                  to="/#portfolio"
                  className="bg-slate-800/60 hover:bg-slate-700 inline-flex items-center rounded-lg p-2 text-cyan-400 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back
                </Link>
                <h1 className="text-5xl font-extrabold text-white sm:text-6xl">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-300">{project.category}</p>

                <p className="whitespace-pre-wrap pt-4 text-xl leading-relaxed text-gray-400">
                  {project.desc}
                </p>
              </div>

              {/* Bagian Fitur Utama (Seperti Kartu Gelap) */}
              <div className="bg-slate-800/60 rounded-xl border border-gray-700 p-8 shadow-xl">
                <h2 className="mb-5 flex items-center text-2xl font-bold text-white">
                  <FaStar className="mr-3 text-yellow-400" /> Key Features
                </h2>
                <ul className="list-none space-y-3 pl-0">
                  {mockDetails.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-lg text-gray-300"
                    >
                      <span className="mr-3 mt-1 font-bold text-cyan-400">
                        &#9679;
                      </span>{" "}
                      {/* Bullet Point */}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kolom Kanan (Thumbnail, Buttons, Technologies) - Mengambil 1/3 Bagian */}
            <div className="space-y-8 lg:col-span-1">
              {/* Thumbnail Proyek (Di bagian atas kolom kanan) */}
              <div className="overflow-hidden rounded-xl border border-gray-700 shadow-2xl">
                <img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Tombol Aksi */}
              <div className="flex flex-col space-y-4">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-6 py-3 text-lg font-bold text-white shadow-lg transition duration-300 hover:scale-[1.02] hover:bg-cyan-500"
                >
                  Live Demo
                  <FiExternalLink className="ml-2 h-5 w-5" />
                </a>
                <a
                  href={mockDetails.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 text-lg font-bold text-gray-300 shadow transition duration-300 hover:bg-gray-800 hover:text-white"
                >
                  GitHub
                  <FaGithub className="ml-2 h-5 w-5" />
                </a>
              </div>

              {/* Bagian Teknologi Digunakan (Kartu Gelap) */}
              <div className="bg-slate-800/60 rounded-xl border border-gray-700 p-6 shadow-xl">
                <h2 className="mb-4 flex items-center text-xl font-bold text-white">
                  <FaCode className="mr-2 text-cyan-400" /> Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {mockDetails.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-gray-700/70 px-3 py-1 text-sm font-medium text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
