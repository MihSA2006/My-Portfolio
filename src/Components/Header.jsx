import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi"; 
import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi';

const Header = () => {
    const [activeLink, setActiveLink] = useState('Acceuil');
    
      const links = [
        { label: 'Acceuil', href: '#me' },
        { label: 'Mes Projets', href: '#project' },
        { label: 'Mes Competences', href: '#skills' },

        // { label: 'Me contacter', href: '#experience' },
      ];
    
      return (
        <header className="w-full py-6 px-8 flex justify-between items-center bg-white/60 backdrop-blur-md fixed top-0 z-50 rounded-bl-[20px] rounded-br-[20px]">
          {/* <div className="text-2xl font-bold text-gray-800">
            Harena Sarobidy
          </div> */}
    
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-gray-600 mr-10">
              {/* <Phone size={16} /> */}
              <span>Harena Sarobidy</span>
            </div>
            <button className="md:hidden">
              <BiMenuAltLeft size={24} />
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={
                  `transition-all duration-300 ease-in-out mr-[20px]` +
                  (activeLink === link.label
                    ? 'text-gray-700 font-bold scale-110'
                    : 'text-gray-600 hover:scale-105')
                }
                style={{ fontSize: 'inherit', display: 'flex', alignItems: 'center' }}
              >
                {activeLink === link.label ? (
                  <>
                    <span className="mr-[10px] text-[20px] transition-all duration-300">(</span>
                    <span className="transition-all duration-300">{link.label}</span>
                    <span className="ml-[10px] text-[20px] transition-all duration-300">)</span>
                  </>
                ) : (
                  <span className="transition-all duration-300">{link.label}</span>
                )}
              </a>
            ))}
          </nav>
    
          {/* <div>
            <button
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 border-2 border-teal-600 hover:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50"
            >
              Télécharger mon CV
            </button>
          </div> */}
        </header>
    )
}

export default Header
