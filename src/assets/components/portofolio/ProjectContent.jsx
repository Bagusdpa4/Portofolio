import React, { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const portfolioItems = [
  {
    id: 1,
    title: "Drulz Deals",
    desc: "A food & beverage ordering website with direct WhatsApp integration for order fulfillment with the store owner.",
    longDesc:
      "Drulz Deals is a food and beverage ordering web app built to simplify the ordering process between customers and outlet owners. Customers can choose their favorite outlet to place an order. Every product comes with its own discounted price, so customers can see the best price upfront without needing to negotiate. After selecting individual items or bundle packages, the order list is automatically forwarded to the website owner's WhatsApp, so the only remaining steps are payment confirmation and pickup at the chosen outlet.",
    category: "Frontend Javascript",
    time: "June 2026 - Present",
    projectUrl: "https://drulz-deals.vercel.app/",
    githubUrl: "https://github.com/Bagusdpa4/drulz-deals",
    techStack: [
      "Javascript",
      "ReactJS",
      "Tailwind CSS",
      "Node.js",
      "Github",
      "Visual Studio Code",
      "Vercel",
      "Supabase",
    ],
    features: [
      "Food & Beverage ordering system.",
      "More than one food & beverage brand.",
      "Individual product ordering.",
      "Bundle package ordering.",
      "Direct WhatsApp integration for payment.",
      "Responsive and dynamic design.",
    ],
    thumbnailUrl: "/images/Project/Project 1/Homepage.png",
    galleryUrls: [
      "/images/Project/Project 1/Satuan.png",
      "/images/Project/Project 1/Bundling.png",
      "/images/Project/Project 1/Other Product.png",
      "/images/Project/Project 1/Option Modal.png",
      "/images/Project/Project 1/Cart.png",
      "/images/Project/Project 1/Order.png",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Cahaya Kreativ",
    desc: "A booking and management system for creative services, featuring a complete e-commerce setup, product management, chat consultation, and an admin dashboard.",
    longDesc:
      "A booking and management system built for a photography company in Surabaya. This project focuses on end-to-end online service booking, from registration and schedule booking to payment and in-website chat consultation. Admins can control the website through product management and by monitoring incoming orders and chats. The services offered include photography, videography, and social media content management packages. The system took about 9 months to build and has since been handed over to and integrated by the client company. The entire development process, from planning to deployment, was carried out individually.",
    category: "Website/Full-Stack",
    time: "December 2024 - August 2025",
    projectUrl: "https://cahayakreativ.vercel.app/",
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
      "Neon",
      "Imagekit",
    ],
    features: [
      "24/7 online creative service booking system.",
      "Service scheduling and selection system.",
      "Payment system using Midtrans.",
      "Chat-based consultation between customers and the company.",
      "Chat, product, and order management via Admin Dashboard.",
      "JWT authentication system.",
      "PostgreSQL database integration.",
      "Responsive and dynamic design.",
    ],
    thumbnailUrl: "/images/Project/Project 2/Cahaya Kreativ.jpg",
    galleryUrls: [
      "/images/Project/Project 2/Gallery.png",
      "/images/Project/Project 2/Product.png",
      "/images/Project/Project 2/Auth.png",
      "/images/Project/Project 2/Chat.png",
      "/images/Project/Project 2/Detail.png",
      "/images/Project/Project 2/Order.png",
      "/images/Project/Project 2/Profile.png",
      "/images/Project/Project 2/Notif.png",
      "/images/Project/Project 2/Admin.png",
      "/images/Project/Project 2/Jadwal.png",
      "/images/Project/Project 2/Management Order.png",
      "/images/Project/Project 2/Management Product.png",
    ],
  },
  {
    id: 3,
    title: "Restful API for Airline Ticket Booking",
    desc: "A RESTful API built for a flight ticket booking simulation, featuring flight schedule search, online ticket booking, and payment.",
    longDesc:
      "A RESTful API built for a flight ticket booking simulation website, following standard REST architecture. It covers JWT authentication, data validation, and management of airline data, flight schedules, and ticket booking & payment. PostgreSQL serves as the database for the entire system. The API includes interactive documentation using Swagger for easy access and integration by the frontend team. This final project was developed over 6 weeks by a group of 3 back-end and 3 front-end teams.",
    category: "Backend Javascript",
    time: "February - July 2024",
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
      "Endpoints for user registration & login.",
      "JWT authentication implementation.",
      "CRUD for airline data, flight schedules, and destination-based ticket pricing.",
      "Flight schedule search & selection.",
      "Ticket booking & payment.",
      "Input data validation.",
      "Cron job implementation for generating recurring flight data.",
      "Interactive API documentation.",
    ],
    thumbnailUrl:
      "/images/Project/Project 3/Restful API for Airline Ticket Booking.jpg",
    galleryUrls: [
      "/images/Project/Project 3/Api.png",
      "/images/Project/Project 3/Api-2.png",
      "/images/Project/Project 3/Api-3.png",
      "/images/Project/Project 3/Schemas.png",
    ],
  },
  {
    id: 4,
    title: "Website Online Course",
    desc: "A modern, responsive online course website, focused on course discovery, learning progress tracking, and an admin dashboard for course management.",
    longDesc:
      "A modern, responsive online course platform. Key features include course search, course purchasing, learning progress tracking, and an admin dashboard for course management. The project was built using React.js and Redux for fast data rendering, along with Tailwind CSS for a clean, responsive look. Development focused on delivering an optimal user experience with easy course navigation and smooth support for online learning. This final project was developed over 6 weeks by a group of 4 back-end and 4 front-end teams.",
    category: "Frontend Javascript",
    time: "August 2023 - January 2024",
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
      "Account authentication.",
      "Course search and filtering.",
      "Learning progress tracking (progress bar).",
      "Course purchasing.",
      "Admin dashboard for course management.",
      "Responsive across all screen sizes.",
    ],
    thumbnailUrl: "/images/Project/Project 4/Online Course.jpg",
    galleryUrls: [
      "/images/Project/Project 4/Course.png",
      "/images/Project/Project 4/Detail.png",
      "/images/Project/Project 4/Filter.png",
      "/images/Project/Project 4/Auth.png",
      "/images/Project/Project 4/Profile.png",
      "/images/Project/Project 4/Notif.png",
      "/images/Project/Project 4/Buy.png",
      "/images/Project/Project 4/Course-me.png",
      "/images/Project/Project 4/Task.png",
    ],
  },
  {
    id: 5,
    title: "List Movie TMDB",
    desc: "A web app displaying movie listings, movie details, and search for today's most popular films worldwide, powered by The Movie Database (TMDB) API.",
    longDesc:
      "A web app for searching and exploring movie information using The Movie Database (TMDB) API. Users can browse popular movies, view movie details, and search quickly. All movie data reflects real, currently existing films. Redux handles state management, while Axios handles fetching data from the TMDB API. The app was built with a focus on speed, ease of access, and an informative layout. Note: this website has not yet been made fully responsive.",
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
      "Account authentication.",
      "Real-time popular movie listing.",
      "Real-time movie search.",
      "Movie detail page with ratings.",
      "State management using Redux.",
      "TMDB API integration.",
    ],
    thumbnailUrl: "/images/Project/Project 5/TMDB.jpg",
    galleryUrls: [
      "/images/Project/Project 5/Auth.png",
      "/images/Project/Project 5/Movie.png",
      "/images/Project/Project 5/Movie-2.png",
      "/images/Project/Project 5/Detail.png",
    ],
  },
  {
    id: 6,
    title: "ToDo List App",
    desc: "A simple daily task management app with features for adding, deleting, and marking tasks as complete.",
    longDesc:
      "A simple yet functional daily To-Do List app. Users can search, add, edit, delete, and mark tasks as complete. Data is stored locally and statically, so new entries are lost on page refresh. The interface is kept simple and easy to use for everyday task management. This project focused on mastering React.js fundamentals and basic JavaScript logic, though it has not yet been made fully responsive.",
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
      "Add new tasks.",
      "Delete tasks.",
      "Edit tasks.",
      "Mark tasks as complete.",
      "Task filtering.",
      "Search existing tasks.",
      "Temporary, static local data storage.",
    ],
    thumbnailUrl: "/images/Project/Project 6/ToDo List.jpg",
  },
  {
    id: 7,
    title: "Landing Pages Rental Car",
    desc: "A UI/UX design implementation for a car rental landing page, focused on clear and simple information display.",
    longDesc:
      "A car rental landing page built from a UI/UX design, with an emphasis on visual accuracy and layout consistency. The website presents rental service information clearly, with an organized structure and simple visual elements. It was developed using plain HTML and CSS as a front-end fundamentals exercise, applying responsive design concepts that aren't yet 100% complete. A clean, lightweight, and easy-to-understand look was the main focus throughout development.",
    category: "Landing Pages",
    time: "August 2023",
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
      "Simple, lightweight responsive design.",
      "Clear and structured presentation of rental service information.",
      "Basic visual elements implemented with CSS.",
      "Visual and layout accuracy matching the UI/UX design.",
    ],
    thumbnailUrl: "/images/Project/Project 7/Rental Binar Car.jpg",
  },
];

export const ProjectContent = () => {
  const navigate = useNavigate();
  const itemsPerPage = 3;
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);

  const showMoreItems = () => {
    setVisibleCount(portfolioItems.length);
  };

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.slice(0, visibleCount).map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/project/${item.id}`)}
            className="bg-slate-800/80 cursor-pointer rounded-xl border border-gray-700 p-5 shadow-xl transition duration-300 hover:scale-105 hover:border-cyan-400"
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
                onClick={(e) => e.stopPropagation()}
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
            See All Projects
          </button>
        </div>
      )}
    </>
  );
};
