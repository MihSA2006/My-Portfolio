import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi"; 
import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi';


const Header = () => {
  const [activeLink, setActiveLink] = useState('Acceuil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const links = [
    { label: 'Acceuil', href: '#me', sectionId: 'me' },
    { label: 'Mes Projets', href: '#project', sectionId: 'project' },
    { label: 'Mes Competences', href: '#skills', sectionId: 'skills' },
    { label: 'Contactez moi', href: '#contactMe', sectionId: 'contactMe' },
  ];

  // Synchroniser le lien actif avec le scroll
  React.useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = links.length - 1; i >= 0; i--) {
        const section = document.getElementById(links[i].sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) { // 120px pour compenser le header
            setActiveLink(links[i].label);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveLink(links[0].label);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="w-full py-6 px-8 flex justify-between items-center bg-white/60 backdrop-blur-md fixed top-0 z-50 rounded-bl-[20px] rounded-br-[20px]">
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2 text-gray-600 mr-10">
          <span>Harena Sarobidy</span>
        </div>
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
    </header>
  )
}

export default Header
