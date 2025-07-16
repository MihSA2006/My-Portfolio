
import React, { useEffect, useState, useRef } from 'react'
import Me from '../Components/Me'
import MyProject from '../Components/MyProject'
import Header from '../Components/Header'
import MySkills from '../Components/MySkills'
import ContactMe from '../Components/ContactMe'
import Footer from '../Components/Footer'


const Portfolio = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mySkillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight - windowHeight;
      const percent = docHeight > 0 ? scrollY / docHeight : 0;
      setShowHeader(percent > 0.3);

      // Afficher le bouton si on atteint la section MySkills
      if (mySkillsRef.current) {
        const rect = mySkillsRef.current.getBoundingClientRect();
        setShowScrollTop(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleScrollToTop = () => {
    const duration = 1000; // Durée de l'animation en ms
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    const scroll = () => {
      const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((currentTime - startTime) / duration));
      
      window.scroll(0, Math.ceil(start * (1 - easeInOutCubic(time))));
      
      if(time < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-opacity duration-500 ${showHeader ? 'opacity-100 pointer-events-auto backdrop-blur-md' : 'opacity-0 pointer-events-none'}`}
        style={{ willChange: 'opacity' }}
      >
        <Header />
      </div>


      <Me />
      <MyProject />


      <div ref={mySkillsRef}>
        <MySkills />
      </div>


      <ContactMe />
      <Footer />



      <button
        onClick={handleScrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-black text-white rounded-full p-3 shadow-lg hover:bg-neutral-800 transition-all duration-300 flex items-center justify-center
        ${showScrollTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} transition-opacity duration-500`}
        aria-label="Remonter en haut"
        style={{ willChange: 'opacity' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  )
}

export default Portfolio
