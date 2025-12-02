import React from 'react'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { FaLaptopCode } from 'react-icons/fa'
import { MdStyle } from 'react-icons/md'
import { TbComponents } from 'react-icons/tb'
import { motion } from 'framer-motion'

export default function  LandingPage(){
  return (
    <>
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between -mt-10 bg-orange-50 px-10 md:px-16 py-12 gap-10 md:gap-0">
        
        {/* LEFT: Text Section */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left md:ml-10 lg:ml-20"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-stone-800 mb-4" style={{fontFamily: 'satoshi-black'}}>
            Hi, I’m Bassma Housbane
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-stone-800 mb-6" style={{fontFamily: 'satoshi-medium'}}>
            An aspiring
            <span className="ml-2 block sm:inline">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  '',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl sm:text-2xl md:text-3xl text-rose-600 font-bold"
              />
            </span>
          </p>
          
          <p 
            className="mt-4 text-lg text-stone-700 italic" 
            style={{ fontFamily: 'satoshi-medium' }}
          >
            And I build things for the web.
          </p>

          <p 
            className="mt-4 text-lg text-stone-700" 
            style={{ fontFamily: 'satoshi-medium' }}
          >
            I'm passionate about clean code & problem solving.
            I specialize in building and occasionally designing  
            exceptional digital experiences.
          </p>

          <Link 
            to="/projects"
            className="mt-6 inline-block text-rose-500 tracking-wide hover:underline underline-offset-4 decoration-2 transition-all"
            style={{ fontFamily: 'satoshi-bold' }}
          >
            View my work →
          </Link>

        </motion.div>

        
      </section>
    </>
  )
}