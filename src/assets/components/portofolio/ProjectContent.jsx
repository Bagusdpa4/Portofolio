import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

export const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Cahaya Kreativ",
    desc: "Sistem pemesanan dan pengelolaan jasa kreatif untuk salah satu CV Fotografi di Surabaya, mencakup fitur e-commerce lengkap, manajemen produk, dan dashboard admin. Dibuat menggunakan Reactjs, Node.js/Express, dan PostgreSQL.",
    category: "Website/Full-Stack",
    projectUrl: "https://cahayakreativ.com/",
    thumbnailUrl: "/images/Cahaya Kreativ.jpg",
  },
  {
    id: 2,
    title: "Restful API for Airline Ticket Booking",
    desc: "Pembuatan Restful API untuk simulasi pemesanan tiket pesawat. Fitur termasuk otentikasi JWT, validasi data, dan integrasi database. Dibangun dengan Node.js, Express, dan PostgreSQL.",
    category: "Backend Javascript",
    projectUrl: "https://api-ticketing.vercel.app/api-docs",
    thumbnailUrl: "/images/Restful API for Airline Ticket Booking.jpg",
  },
  {
    id: 3,
    title: "Website Online Course",
    desc: "Pembuatan website online course yang responsif dan modern. Fokus pada pencarian course dan progress pembelajran serta dashboar admin. Dibangun menggunakan Reactjs dan Tailwind CSS.",
    category: "Frontend Javascript",
    projectUrl: "https://final-project-binar-seven.vercel.app/",
    thumbnailUrl: "/images/Online Course.jpg",
  },
  {
    id: 4,
    title: "List Movie TMDB",
    desc: "Aplikasi Website untuk menampilkan daftar film, detail, dan pencarian, memanfaatkan API dari The Movie Database (TMDB). Dibangun dengan Reactjs, Axios, Redux dan JWT.",
    category: "Frontend Javascript",
    projectUrl: "https://challenge-06-beta.vercel.app/",
    thumbnailUrl: "/images/TMDB.jpg",
  },
  {
    id: 5,
    title: "ToDo List App",
    desc: "Aplikasi manajemen tugas harian sederhana yang mencakup penambahan, penghapusan, dan penandaan selesai. Diimplementasikan menggunakan Reactjs dan Logika Javascript sederhana.",
    category: "Frontend Javascript",
    projectUrl: "https://bagusdpa4.github.io/challenge03/",
    thumbnailUrl: "/images/ToDo List.jpg",
  },
  {
    id: 6,
    title: "Landing Pages Rental Car",
    desc: "Implementasi desain UI/UX kedalam website dengan berfokus menampilkan informasi penyewaan mobil. Diimplementasikan dengan HTML dan CSS Murni.",
    category: "Frontend Javascript",
    projectUrl: "https://bagusdpa4.github.io/challenge-01/",
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
