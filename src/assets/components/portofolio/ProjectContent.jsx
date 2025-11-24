import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

export const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Cahaya Kreativ",
    desc: "Sistem pemesanan dan pengelolaan jasa kreatif, mencakup fitur e-commerce lengkap, manajemen produk, dan dashboard admin.",
    longDesc:
      "Sistem pemesanan dan pengelolaan jasa kreatif untuk salah satu CV Fotografi di Surabaya. Proyek ini dibangun dari nol sebagai solusi e-commerce lengkap, mencakup frontend responsif untuk pelanggan dan dashboard admin yang powerful untuk manajemen produk, inventaris, dan melihat statistik penjualan.",
    category: "Website/Full-Stack",
    projectUrl: "https://cahayakreativ.com/",
    githubUrl: "https://github.com/Bagusdpa4/Cahaya-Kreativ-FE",
    techStack: [
      "ReactJS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "Redux",
    ],
    features: [
      "Sistem pemesanan jasa kreatif online 24/7",
      "Manajemen inventaris dan produk via Admin Dashboard",
      "Sistem otentikasi (JWT)",
      "Integrasi PostgreSQL sebagai database",
      "Desain responsif",
    ],
    thumbnailUrl: "/images/Cahaya Kreativ.jpg",
  },
  {
    id: 2,
    title: "Restful API for Airline Ticket Booking",
    desc: "Pembuatan Restful API untuk simulasi pemesanan tiket pesawat. Fitur termasuk otentikasi JWT, validasi data, dan integrasi database.",
    longDesc:
      "Pembuatan Restful API yang komprehensif untuk simulasi sistem pemesanan tiket pesawat. API ini dirancang dengan standar arsitektur REST, menggunakan Node.js dan Express untuk routing serta PostgreSQL untuk penyimpanan data. Mencakup implementasi otentikasi JWT dan dokumentasi API (misalnya dengan Swagger).",
    category: "Backend Javascript",
    projectUrl: "https://api-ticketing.vercel.app/api-docs",
    githubUrl: "https://github.com/Bagusdpa4/Backend_Flight_Ticketing",
    techStack: ["Node.js", "Express", "PostgreSQL", "JWT", "Swagger/OpenAPI"],
    features: [
      "Endpoint untuk pendaftaran & login user",
      "Implementasi otentikasi JWT",
      "CRUD untuk data tiket & maskapai",
      "Validasi data input (e.g., Joi)",
      "Dokumentasi API interaktif",
    ],
    thumbnailUrl: "/images/Restful API for Airline Ticket Booking.jpg",
  },
  {
    id: 3,
    title: "Website Online Course",
    desc: "Pembuatan website online course yang responsif dan modern. Fokus pada pencarian course dan progress pembelajran serta dashboard admin.",
    longDesc:
      "Pengembangan frontend untuk platform kursus online yang modern dan ramah pengguna. Fokus utama adalah pada pengalaman pengguna dalam mencari kursus, melacak kemajuan pembelajaran, dan dashboard personal. Dibangun sepenuhnya menggunakan ReactJS untuk performa tinggi dan Tailwind CSS untuk desain cepat dan responsif.",
    category: "Frontend Javascript",
    projectUrl: "https://final-project-binar-seven.vercel.app/",
    githubUrl: "https://github.com/Bagusdpa4/Final-Project",
    techStack: ["ReactJS", "Tailwind CSS", "React Router", "Redux"],
    features: [
      "Pencarian dan filter kursus",
      "Pelacakan progres pembelajaran (progress bar)",
      "Dashboard admin/user",
      "Responsif di semua ukuran layar",
    ],
    thumbnailUrl: "/images/Online Course.jpg",
  },
  {
    id: 4,
    title: "List Movie TMDB",
    desc: "Aplikasi Website untuk menampilkan daftar film, detail, dan pencarian, memanfaatkan API dari The Movie Database (TMDB).",
    longDesc:
      "Aplikasi web untuk menjelajahi dan mencari film menggunakan API publik dari The Movie Database (TMDB). Aplikasi ini menampilkan daftar film populer, detail film, dan fungsi pencarian yang cepat. Menggunakan Redux untuk manajemen state dan Axios untuk pengambilan data.",
    category: "Frontend Javascript",
    projectUrl: "https://challenge-06-beta.vercel.app/",
    githubUrl: "https://github.com/Bagusdpa4/challenge-06",
    techStack: [
      "ReactJS",
      "Redux",
      "Axios",
      "The Movie Database (TMDB) API",
      "JWT",
    ],
    features: [
      "Menampilkan daftar film populer",
      "Fitur pencarian film real-time",
      "Halaman detail film dengan rating",
      "Manajemen state menggunakan Redux",
    ],
    thumbnailUrl: "/images/TMDB.jpg",
  },
  {
    id: 5,
    title: "ToDo List App",
    desc: "Aplikasi manajemen tugas harian sederhana yang mencakup penambahan, penghapusan, dan penandaan selesai.",
    longDesc:
      "Aplikasi daftar tugas harian (ToDo List) yang sederhana namun fungsional. Memungkinkan pengguna untuk menambah, menghapus, dan menandai tugas sebagai selesai. Proyek ini berfokus pada penguasaan dasar-dasar ReactJS dan manipulasi DOM menggunakan JavaScript.",
    category: "Frontend Javascript",
    projectUrl: "https://bagusdpa4.github.io/challenge03/",
    githubUrl: "https://github.com/Bagusdpa4/challenge03",
    techStack: ["ReactJS", "HTML", "CSS", "Vanilla JavaScript"],
    features: [
      "Menambah tugas baru",
      "Menghapus tugas",
      "Menandai tugas sebagai selesai",
      "Penyimpanan data lokal",
    ],
    thumbnailUrl: "/images/ToDo List.jpg",
  },
  {
    id: 6,
    title: "Landing Pages Rental Car",
    desc: "Implementasi desain UI/UX kedalam website dengan berfokus menampilkan informasi penyewaan mobil.",
    longDesc:
      "Implementasi desain UI/UX untuk landing page penyewaan mobil. Fokus pada keakuratan visual, responsivitas di berbagai perangkat, dan optimasi kinerja. Dibangun murni menggunakan HTML dan CSS tanpa framework frontend untuk latihan dasar web development.",
    category: "Landing Pages",
    projectUrl: "https://bagusdpa4.github.io/challenge-01/",
    githubUrl: "https://github.com/Bagusdpa4/challenge-01",
    techStack: ["HTML5", "CSS3", "Responsive Design"],
    features: [
      "Desain yang responsif (Mobile-First)",
      "Tampilan informasi penyewaan mobil yang jelas",
      "Formulir pencarian mobil statis",
      "Efek visual CSS sederhana",
    ],
    thumbnailUrl: "/images/Rental Binar Car.jpg",
  },
];

export const ProjectContent = () => {
  const itemsPerPage = 3;
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + itemsPerPage);
  };

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            className="bg-slate-800/80 rounded-xl border border-gray-700 p-5 shadow-xl transition duration-300 hover:scale-105 hover:border-cyan-400"
          >
            <div className="mb-4 h-40 overflow-hidden rounded-lg bg-gray-900 sm:h-52">
              <img
                src={item.thumbnailUrl}
                alt={`Thumbnail for ${item.title}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
            </div>

            <h4 className="mb-2 text-xl font-bold text-white">{item.title}</h4>
            <p className="min-h-[60px] text-sm text-gray-400">{item.desc}</p>

            <div className="mt-4 flex items-center justify-end text-sm">
              <a
                href={`/project/${item.id}`}
                className="flex items-center text-cyan-400 transition duration-300 hover:underline"
              >
                Detail Project <FiExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < portfolioItems.length && (
        <div className="mt-12 sm:mt-16">
          <button
            onClick={showMoreItems}
            className="text-gray-950 cursor-pointer rounded-lg bg-cyan-500 px-8 py-3 text-base font-bold shadow-lg transition duration-300 hover:bg-cyan-400"
          >
            See More Projects
          </button>
        </div>
      )}
    </>
  );
};