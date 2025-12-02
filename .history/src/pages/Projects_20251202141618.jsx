import React from "react";
import simplify from "@/assets/simplify.png";
import onhand from "@/assets/onhand.png";
import themoneymap from "@/assets/the-money-map.png";
import pageseller from "@/assets/page-seller.png";
import writtenwonders from "@/assets/written-wonders.png";
import tone from ".@/assets/tone.png";
import evoke from ".@/assets/evoke.png";
import aurea from ".@/assets/aurea.png";

const Projects = () => {
  const projects = [
    {
      title: "Simplify",
      description:
        "Simplify is a web-based project management platform built to help teams plan, organize, and track their work in an intuitive and visually structured way.",
      image: simplify,
      link: "https://github.com/b24h/simplify",
      tech: ["ReactJS", "Laravel", "MySQL", "CSS"],
    },
    {
      title: "OnHand",
      description:
        "OnHand is a modern e-commerce platform designed to promote sustainable shopping by enabling users to buy and sell second-hand products easily.",
      image: onhand,
      link: "https://github.com/b24h/onhand",
      tech: ["ReactJS", "Node.js", "ExpressJS", "MongoDB", "CSS3"],
    },
    {
      title: "The Money Map",
      description:
        "he Money Map is a web application designed to help users manage their personal finances effectively.",
      image: themoneymap,
      link: "https://github.com/b24h/the-money-map",
      tech: ["ReactJS", "Laravel", "MySQL", "Chart.js", "Tailwindcss"],
    },
    {
      title: "Page Seller",
      description:
        "Page Seller is a full-stack web platform designed for writers and readers alike.",
      image: pageseller,
      link: "https://github.com/b24h/page-seller",
      tech: ["ReactJS (Vite)", "Laravel", "MySQL", "REST API", "Service Worker", "Stripe API"],
    },
    {
      title: "Written Wonders",
      description:
        "Written Wonders is a comprehensive web-based platform designed to support authors throughout the creative writing process.",
      image: writtenwonders,
      link: "https://github.com/b24h/written-wonders",
      tech: ["ReactJS (Vite)", "Laravel", "MySQL", "REST API", "Service Worker"],
    },
    {
      title: "Tone",
      description:
        "Tone is a modern web application built to simplify the invoicing process for individuals and businesses. ",
      image: tone,
      link: "https://github.com/b24h/tone",
      tech: ["ReactJS (Vite)", "Laravel", "MySQL", "REST API", "Service Worker", "PDF generation"],
    },
    {
      title: "Evoke",
      description:
        "Evoke is a web-based application built with Python that allows users to create and take quizzes across various topics. ",
      image: evoke,
      link: "https://github.com/b24h/evoke",
      tech: ["PHP", "CSS", "MySQL"],
    },
    {
      title: "Aurea",
      description:
        "Aurea is a digital platform designed to help users create, organize, and manage their personal wishlists.",
      image: aurea,
      link: "https://github.com/b24h/aurea",
      tech: ["ReactJS", "Laravel", "MySQL"],
    },
  ];

  return (
    <section className="py-16 px-4 bg-orange-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl text-stone-800 mb-6"
          style={{ fontFamily: "satoshi-black" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.p
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base"
          style={{ fontFamily: "satoshi-medium" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of the projects I've worked on:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3
                  className="text-xl font-semibold text-stone-800 mb-2"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-zinc-600 text-sm mb-4"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-rose-200 text-rose-800 px-2 py-1 rounded-full text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-rose-300 border-1 border-stone-800 text-stone-800 px-4 py-2 rounded-sm text-sm font-semibold hover:bg-rose-400 transition-colors"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
