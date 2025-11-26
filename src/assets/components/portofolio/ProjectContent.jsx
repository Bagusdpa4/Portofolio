import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

export const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Cahaya Kreativ",
    desc: "Sistem pemesanan dan pengelolaan jasa kreatif, mencakup fitur e-commerce lengkap, manajemen produk, Konsultasi Chat dan dashboard admin.",
    longDesc:
      "Sebuah sistem pemesanan dan pengelolaan jasa kreatif untuk salah satu CV Fotografi di Surabaya. Proyek ini dirancang untuk berfokus pada pemesanan layanan jasa secara online mulai dari registrasi, booking jadwal, pembayaran dan konsultasi via chat dalam website. Admin dapat melakukan kontrol website berupa manajemen produk, monitoring order dan chat yang masuk. Produk yang disediakan meliputi paket jasa fotografi, videografi dan manajemen konten sosial media. Pengerjaan sistem ini membutuhkan waktu sekitar 9 bulan dan website ini telah diserahkan dan diintegrasikan oleh perusahaan terkait. Seluruh proses pengembangan, mulai dari perancangan hingga deployment, dikerjakan sebagai proyek individual.",
    category: "Website/Full-Stack",
    time: "Desember 2024 - Agustus 2025",
    projectUrl: "https://cahayakreativ.com/",
    githubUrl: "https://github.com/Bagusdpa4/Cahaya-Kreativ-FE",
    techStack: [
      "Javascript",
      "ReactJS",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Expressjs",
      "PostgreSQL",
      "Midtrans",
      "Prisma ORM",
      "Google Cloud Platform",
      "JWT Authentication",
      "Restful API",
      "Github",
      "Visual Studio Code",
      "Vercel",
    ],
    features: [
      "Sistem pemesanan jasa kreatif online 24/7.",
      "Sistem pemilihan & pengaturan jadwal layanan jasa kreatif.",
      "Sistem pembayaran menggunakan midtrans.",
      "Sistem konsultasi antara customer dengan perusahaan.",
      "Manajemen chat, produk dan order via Admin Dashboard.",
      "Sistem otentikasi (JWT).",
      "Integrasi PostgreSQL sebagai database.",
      "Desain responsif dan dinamis.",
    ],
    thumbnailUrl: "/images/Cahaya Kreativ.jpg",
  },
  {
    id: 2,
    title: "Restful API for Airline Ticket Booking",
    desc: "Pembuatan Restful API untuk simulasi pemesanan tiket pesawat. Fitur termasuk pencarian jadwal penerbangan, pemesanan & pembayaran tiket secara online.",
    longDesc:
      "Restful API yang dikembangkan untuk website simulasi pemesanan tiket pesawat dengan standar arsitektur REST. Restful API ini mencakup proses autentikasi JWT, validasi data, dan pengelolaan data maskapai, jadwal penerbangan serta pemesanan & pembayaran tiket. PostgreSQL digunakan sebagai wadah penyimpanan data keseluruhan sistem. Sistem dilengkapi dokumentasi interaktif menggunakan Swagger agar mudah diakses dan diintegrasi oleh tim Front-end. Proyek akhir ini dikembangkan selama 6 minggu secara berkelompok yang terdiri dari 3 tim Back-end dan 3 tim Front-end.",
    category: "Backend Javascript",
    time: "Februari - Juli 2024",
    projectUrl: "https://api-ticketing.vercel.app/api-docs",
    githubUrl: "https://github.com/Bagusdpa4/Backend_Flight_Ticketing",
    techStack: [
      "Javascript",
      "Node.js",
      "Expressjs",
      "PostgreSQL",
      "Midtrans",
      "Prisma ORM",
      "Restful API",
      "JWT Authentication",
      "Google Cloud Platform",
      "Swagger/OpenAPI",
      "Github",
      "Postman",
      "Trello",
      "Visual Studio Code",
      "Vercel",
    ],
    features: [
      "Endpoint untuk pendaftaran & login user.",
      "Implementasi otentikasi JWT.",
      "CRUD data maskapai, jadwal penerbangan dan harga tiket sesuai destinasi.",
      "Pencarian & pemilihan jadwal penerbangan.",
      "Pemesanan & pembayaran tiket.",
      "Menerapkan validasi data input.",
      "Menerapkan cronjob sebagai perintah untuk membuat data penerbangan berulang.",
      "Dokumentasi API interaktif.",
    ],
    thumbnailUrl: "/images/Restful API for Airline Ticket Booking.jpg",
  },
  {
    id: 3,
    title: "Website Online Course",
    desc: "Pembuatan website online course yang responsif dan modern. Fokus pada pencarian course dan progress pembelajaran serta dashboard admin sebagai tempat manajemen course.",
    longDesc:
      "Platform website kursus online yang dirancang modern dan responsif. Fitur utamanya meliputi pencarian course, pembelian course, progress pembelajaran, serta dashboard admin untuk manajemen course. Proyek ini dibangun menggunakan ReactJS dan Redux untuk performa cepat dalam menampilkan data, serta Tailwind CSS untuk tampilan yang rapi dan responsif. Fokus pengembangannya adalah memberikan pengalaman pengguna yang optimal dengan navigasi yang mudah dalam mencari course dan mendukung proses belajar online. Proyek akhir ini dikembangkan selama 6 minggu secara berkelompok, terdiri dari 4 tim Back-end dan 4 tim Front-end.",
    category: "Frontend Javascript",
    time: " Agustus 2023 - Januari 2024",
    projectUrl: "https://final-project-binar-seven.vercel.app/",
    githubUrl: "https://github.com/Bagusdpa4/Final-Project",
    techStack: [
      "Javascript",
      "ReactJS",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Github",
      "Trello",
      "Vercel",
      "Visual Studio Code",
      "Material Tailwind",
    ],
    features: [
      "Fitur autentikasi akun.",
      "Pencarian dan filter course.",
      "Pelacakan progres pembelajaran (progress bar).",
      "Pembelian course.",
      "Dashboard admin sebagai manajemen course.",
      "Responsif di semua ukuran layar.",
    ],
    thumbnailUrl: "/images/Online Course.jpg",
  },
  {
    id: 4,
    title: "List Movie TMDB",
    desc: "Aplikasi Website untuk menampilkan daftar film, detail film, dan pencarian film terpopuler didunia saat ini. Pengambilan data memanfaatkan API dari The Movie Database (TMDB).",
    longDesc:
      "Aplikasi web untuk mencari dan menjelajahi informasi suatu film menggunakan API dari The Movie Database (TMDB). Pengguna dapat melihat daftar film populer, detail film, dan melakukan pencarian film secara cepat. Data film yang diambil merupakan film asli yang ada didunia saat ini. Redux digunakan untuk manajemen state, sedangkan Axios menangani pengambilan data API TMDB. Aplikasi ini dibuat dengan fokus pada kecepatan, kemudahan akses, dan tampilan yang informatif. Namun website ini belum mengintegrasikan tampilan responsif.",
    category: "Frontend Javascript",
    time: "November 2023",
    projectUrl: "https://challenge-06-beta.vercel.app/",
    githubUrl: "https://github.com/Bagusdpa4/challenge-06",
    techStack: [
      "Javascript",
      "Tailwind CSS",
      "Redux",
      "Node.js",
      "Axios",
      "Github",
      "Vercel",
      "Visual Studio Code",
      "The Movie Database (TMDB) API",
      "JWT Authentication",
      "Google Cloud Platform",
    ],
    features: [
      "Fitur autentikasi akun.",
      "Menampilkan daftar film populer real-time.",
      "Fitur pencarian film real-time.",
      "Halaman detail film dengan rating.",
      "Manajemen state menggunakan Redux.",
      "Integrasi dengan TMDB API.",
    ],
    thumbnailUrl: "/images/TMDB.jpg",
  },
  {
    id: 5,
    title: "ToDo List App",
    desc: "Aplikasi manajemen tugas harian sederhana yang mencakup penambahan, penghapusan, dan penandaan selesai.",
    longDesc:
      "Aplikasi daftar tugas harian (ToDo List) yang sederhana namun fungsional. Pengguna dapat melakukan pencarian, penambahan, pengeditan, penghapusan, serta menandai tugas sebagai selesai. Data disimpan secara lokal dan statis sehingga data baru akan hilang ketika halaman di-refresh. Tampilan dibuat sederhana dan mudah digunakan untuk memenuhi kebutuhan manajemen tugas harian. Proyek ini berfokus pada penguasaan dasar-dasar React.JS dan memanfaatkan logika JavaScript sederhana, namun belum mengintegrasikan tampilan responsif.",
    category: "Frontend Javascript",
    time: "September 2023",
    projectUrl: "https://bagusdpa4.github.io/challenge03/",
    githubUrl: "https://github.com/Bagusdpa4/challenge03",
    techStack: [
      "JavaScript",
      "ReactJS",
      "HTML",
      "Tailwind CSS",
      "Node.js",
      "Github",
      "Vercel",
      "Visual Studio Code",
    ],
    features: [
      "Penambahan tugas baru.",
      "Penghapusan tugas.",
      "Pengeditan tugas",
      "Menandai tugas sebagai selesai.",
      "Filter tugas.",
      "Melakukan pencarian tugas yang sudah ada.",
      "Penyimpanan data lokal sementara dan statis.",
    ],
    thumbnailUrl: "/images/ToDo List.jpg",
  },
  {
    id: 6,
    title: "Landing Pages Rental Car",
    desc: "Implementasi desain UI/UX ke dalam landing page penyewaan mobil dengan fokus pada tampilan informasi yang jelas dan sederhana.",
    longDesc:
      "Landing page penyewaan mobil yang dibangun berdasarkan desain UI/UX dengan menekankan ketepatan visual dan konsistensi layout. Website ini menampilkan informasi layanan rental secara jelas, dengan struktur yang teratur dan elemen visual yang sederhana. Proyek dikembangkan menggunakan HTML dan CSS murni sebagai latihan dasar front-end dan penerapan konsep responsive design yang belom sempurna 100%. Tampilan yang bersih, ringan, dan mudah dipahami menjadi fokus utama dalam pengerjaannya.",
    category: "Landing Pages",
    time: "Agustus 2023",
    projectUrl: "https://bagusdpa4.github.io/challenge-01/",
    githubUrl: "https://github.com/Bagusdpa4/challenge-01",
    techStack: [
      "Javascript",
      "HTML5",
      "CSS",
      "Github",
      "Vercel",
      "Visual Studio Code",
      "Responsive Design",
    ],
    features: [
      "Desain responsif yang sederhana dan ringan.",
      "Penyajian informasi layanan rental yang jelas dan terstruktur.",
      "Implementasi elemen visual dasar menggunakan CSS.",
      "Ketepatan visual dan layout sesuai dengan desain UI/UX.",
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
