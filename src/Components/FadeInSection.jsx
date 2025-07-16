import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.2, // Détection à 20% de visibilité
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
