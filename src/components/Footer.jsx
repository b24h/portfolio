import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {SiUpwork} from "react-icons/si"

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl text-rose-400" style={{fontFamily: 'satoshi-black'}}>Bassma Housbane</h2>
          <p className="text-sm text-gray-300 mt-2" style={{fontFamily: 'satoshi-medium'}}>
            Full-Stack Developer | Passionate about coding and building solutions.
          </p>
        </div>

        {/* Social */}
        <div className="md:text-right">
          <h3 className="text-lg text-rose-400 font-semibold mb-3" style={{fontFamily: 'satoshi-bold'}}>My Socials</h3>
          <div className="flex justify-end md-justify-end space-x-4 text-2xl">
            <a href="https://github.com/b24h" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/bassmahousbane/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition">
              <FaLinkedin />
            </a>
            <a href="https://www.upwork.com/freelancers/~01a2d13b1f391f5273" className="hover:text-rose-400 transition">
              <SiUpwork />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Bassma Housbane. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer