import React from "react";
import myImg from '../assets/pfp.jpg';
import { motion } from "framer-motion";

export default function About(){
  return (
    <section className="min-h-screen flex flex-col -mt-10 md:flex-row items-center justify-center px-8 py-16 bg-white">

      {/* Right: Text */}
      <motion.div
        className="md:w-1/2 text-center mr-10 md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl mb-4 text-stone-800"
          style={{ fontFamily: 'satoshi-black' }}
        >
          About Me
        </h2>
        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
          I'm <span className="font-semibold text-stone-800">Bassma</span>, 
          a passionate Full-Stack Software Developer
          with a knack for building elegant and efficient web applications.
          My journey into the world of code began with a fascination for how
          technology can solve real-world problems. This curiosity has grown
          into a career dedicated to crafting seamless user experiences from
          server-side logic to client--side interactions.
        </p>
        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
          I thrive in collaborative environments, leveraging my skills in both
          front-end and back-end development to bring ideas to life. I'm an 
          advocate for clean, maintainable code and always eager to learn new
          technologies. Whether it's architecting a robust API or designing a
          responsive interface, I approach every challenge with enthusiasm
          and a commitment to quality.
        </p>

        {/* Highlights Section */}
        <motion.div
          className="flex flex-col gap-12 mt-12"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          viewport={{ once: true }}
        >
          <div className="mt-10">
            <h3
              className="text-2xl text-stone-900 mb-4"
              style={{fontFamily: "satoshi-bold"}}>
                Education
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Master 1 in Computer Science",
                  school: "SupMTI Rabat",
                  year: "Ongoing",
                },
                {
                  title: "Bachelor's Degree in Computer Science",
                  school: "SupMTI Rabat",
                  year: "2025",
                },
                {
                  title: "Advanced Technician Diploma in Full-Stack Development",
                  school: "ISTA",
                  year: "2024",
                },
                {
                  title: "Baccalauréat in Technical & Electrical Sciences",
                  school: "Jaber Ibn Hayane Highschool",
                  year: "2021",
                },
              ].map((item, i) =>(
                <motion.div key={i} className="bg-rose-100 p-4 rounded-lg shadow">
                  <h4 className="text-stone-800 text-lg" style={{ fontFamily: 'satoshi-bold' }}>{item.title}</h4>
                  <p className="text-sm text-zinc-600 mt" style={{ fontFamily: 'satoshi-bold' }}>{item.school}</p>
                  <span className="text-rose-600 text-sm" style={{ fontFamily: 'satoshi-bold' }}>{item.year}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl text-stone-900 mb-4" style={{ fontFamily: 'satoshi-bold' }}>
              Internships
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Oriental Espace",
                  year: "Ongoing",
                  tasks: [
                    "Designing a complete platform for club activity management, events, and authors meetings.",
                    "Participating in analysis, planning, and full development lifecycle.",
                  ],
                },
                {
                  title: "Provincial Direction of Berkane",
                  year: "2024",
                  tasks: [
                    "Built a full vehicle-management system with a team of 3 developers.",
                    "Contributed in UML design, development, testing and deployment.",
                  ],
                },
                {
                  title: "IT Department – Municipal Slaughterhouse",
                  year: "2023",
                  tasks: [
                    "Developed a hygiene tracking application using Flutter."
                  ],
              },
              ].map((item, i) => (
                <div key={i} className="bg-rose-100 p-4 rounded-lg shadow">
                  <h4 className="text-stone-800 text-lg" style={{ fontFamily: 'satoshi-bold' }}>{item.title}</h4>
                  <p className="text-rose-600 text-sm" style={{ fontFamily: 'satoshi-bold' }}>{item.year}</p>
                  <ul className="list-disc ml-6 mt-2 text-zinc-700 text-sm">
                    {item.tasks.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))
              }
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl text-stone-900 mb-4" style={{ fontFamily: "satoshi-bold" }}>
              Freelance Experience
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Freelance Web Developer",
                  year: "Ongoing",
                  tasks: [
                    "Developing custom websites and applications for clients, from UX/UI to backend architecture.",
                    "Focus on modern design, clean code, and scalable software solutions.",
                  ],
                }
              ].map((item, i) =>(
                <div key={i} className="bg-rose-100 p-4 rounded-lg shadow">
                  <h4 className="text-stone-800 text-lg" style={{ fontFamily: 'satoshi-bold' }}>{item.title}</h4>
                  <p className="text-rose-600 text-sm" style={{ fontFamily: 'satoshi-bold' }}>{item.year}</p>
                  <ul className="list-disc ml-6 mt-2 text-zinc-700 text-sm">
                    {item.tasks.map((t, idx) => (
                      <li key={idx}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};