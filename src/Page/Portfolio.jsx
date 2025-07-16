
import React, { useEffect, useState } from 'react'
import Me from '../Components/Me'
import MyProject from '../Components/MyProject'
import Header from '../Components/Header'


const Portfolio = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight - windowHeight;
      const percent = docHeight > 0 ? scrollY / docHeight : 0;
      setShowHeader(percent > 1);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showHeader && <Header />}
      <Me />
      <MyProject />
    </>
  )
}

export default Portfolio
