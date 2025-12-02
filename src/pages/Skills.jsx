import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaPhp,
  FaLaravel,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaAws,
  FaFigma,
  FaJira,
} from "react-icons/fa";
import {
  SiRedux,
  SiVite,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiApache,
  SiJsonwebtokens,
  SiDatagrip,
  SiTrello
} from "react-icons/si";

import { motion } from "framer-motion";
import { CgWebsite } from "react-icons/cg";
import { RiPagesLine } from "react-icons/ri";
import { GrOptimize } from "react-icons/gr";
import { FaLayerGroup, FaRegListAlt } from "react-icons/fa";
import { BiData } from "react-icons/bi";
import { AiOutlineApi } from "react-icons/ai";
import { TbDeviceDesktopCode } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";



const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


export default function Skills(){
  const skills = [
  { icon: <FaHtml5 className="text-orange-500 text-8xl" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500 text-8xl" />, name: "CSS3" },
  { icon: <FaBootstrap className="text-purple-600 text-8xl" />, name: "Bootstrap" },
  { icon: <FaJs className="text-yellow-400 text-8xl" />, name: "JavaScript (ES6+)" },
  { icon: <FaReact className="text-cyan-400 text-8xl" />, name: "React" },
  { icon: <SiRedux className="text-purple-500 text-8xl" />, name: "Redux" },
  { icon: <SiVite className="text-violet-500 text-8xl" />, name: "Vite" },

  { icon: <FaPhp className="text-indigo-500 text-8xl" />, name: "PHP" },
  { icon: <FaLaravel className="text-red-500 text-8xl" />, name: "Laravel" },
  { icon: <FaPython className="text-yellow-500 text-8xl" />, name: "Python" },
  { icon: <FaNodeJs className="text-green-500 text-8xl" />, name: "Node.js" },

  { icon: <SiMysql className="text-blue-700 text-8xl" />, name: "MySQL" },
  { icon: <SiMongodb className="text-green-600 text-8xl" />, name: "MongoDB" },

  { icon: <FaGitAlt className="text-orange-600 text-8xl" />, name: "Git" },
  { icon: <FaGithub className="text-gray-700 text-8xl" />, name: "GitHub" },

  { icon: <FaDocker className="text-sky-500 text-8xl" />, name: "Docker" },
  { icon: <SiDatagrip className="text-green-500 text-8xl" />, name: "DataGrip" },

  { icon: <SiPostman className="text-orange-600 text-8xl" />, name: "Postman" },
  { icon: <SiJsonwebtokens className="text-yellow-600 text-8xl" />, name: "JSON Web Token" },

  { icon: <SiApache className="text-red-700 text-8xl" />, name: "Apache" },
  { icon: <FaAws className="text-orange-500 text-8xl" />, name: "Amazon Web Services" },

  { icon: <FaFigma className="text-pink-500 text-8xl" />, name: "Figma" },
  { icon: <FaJira className="text-blue-600 text-8xl" />, name: "Jira" },
  { icon: <SiTrello className="text-blue-400 text-8xl" />, name: "Trello" },
];

  const services = [
  {
    icon: <CgWebsite className="text-stone-800 text-6xl mb-4" />,
    title: "Full-Stack Web Application Development",
    description:
      "Building complete and scalable web applications using ReactJS for the frontend and Laravel or Python for the backend.",
  },
  {
    icon: <RiPagesLine className="text-stone-800 text-6xl mb-4" />,
    title: "Single-Page Applications (SPA)",
    description:
      "Creating fast, interactive, and modern SPAs with smooth user experience and API-driven architecture.",
  },
  {
    icon: <GrOptimize className="text-stone-800 text-6xl mb-4" />,
    title: "Website Redesign & Optimization",
    description:
      "Improving existing websites by enhancing performance, UI/UX quality, responsiveness, and loading speed.",
  },
  {
    icon: <FaLayerGroup className="text-stone-800 text-6xl mb-4" />,
    title: "Custom Dashboard & Admin Panel Development",
    description:
      "Designing powerful admin dashboards for managing data, analytics, users, payments, and internal tools.",
  },
  {
    icon: <BiData className="text-stone-800 text-6xl mb-4" />,
    title: "Database Design & Optimization",
    description:
      "Structuring, optimizing, and maintaining MySQL databases with clean schema design and efficient queries.",
  },
  {
    icon: <FaRegListAlt className="text-stone-800 text-6xl mb-4" />,
    title: "Automation Tools & Productivity Apps",
    description:
      "Developing custom tools such as budget managers, task managers, wishlists, and billing systems tailored to personal or business use.",
  },
  {
    icon: <AiOutlineApi className="text-stone-800 text-6xl mb-4" />,
    title: "API Development & Integration",
    description:
      "Creating secure REST APIs and integrating third-party services to extend application capabilities.",
  },
  {
    icon: <TbDeviceDesktopCode className="text-stone-800 text-6xl mb-4" />,
    title: "UI/UX Implementation",
    description:
      "Transforming designs into clean, modern, responsive interfaces using TailwindCSS and reusable React components.",
  },
  {
    icon: <MdOutlineSecurity className="text-stone-800 text-6xl mb-4" />,
    title: "Authentication & Security",
    description:
      "Implementing secure login systems, role-based access, and data protection following best practices.",
  },
];

  return (
    <>
      {/* Skills Section */}
      <section className="py-16 px-4 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-stone-800 mb-7"
          style={{ fontFamily: "satoshi-black" }}
        >
          My Tech Stack
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
          style={{ fontFamily: "satoshi-medium" }}
        >
          Here are a few technologies I've been working with recently:
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-6">
          {skills.map((skill, index) =>(
            <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-6xl mb-2 text-gray-800">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-rose-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-stone-800 mb-6"
            style={{ fontFamily: "satoshi-black" }}
          >
            What Can I Do
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
            style={{ fontFamily: "satoshi-medium" }}
          >
            I build full-stack digital solutions that combine thoughtful user experience
            with solid engineering. From designing clean and responsive interfaces in
            React to architecting secure and scalable back-end systems with Laravel
            and MySQL, I turn ideas into functional, reliable, and professional
            applications. Whether it’s creating a complete business tool, optimizing a
            web platform, or developing a custom solution for a client, I ensure
            maintainable code, smooth performance, and a modern, intuitive user
            experience across all devices.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-rose-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                {service.icon}
                <h5
                  className="mb-3 text-lg md:text-xl text-stone-800"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {service.title}
                </h5>
                <p
                  className="text-zinc-600"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};