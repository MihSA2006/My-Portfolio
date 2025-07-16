import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Message envoyé avec succès!');
    setFormData({ email: '', message: '' });
  };

  return (
    <div id='contactMe' className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Section de gauche */}
          <div className="flex flex-col items-center space-y-8 text-center">
            <motion.h2 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-black"
            >
              Contactez-moi
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-gray-400"
            >
              Je suis disponible pour discuter de nouveaux projets ou collaborations. N'hésitez pas à me contacter pour toute question ou opportunité.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center group text-center">
                <div className="p-3 rounded-full bg-neutral-800 mr-4 group-hover:bg-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-gray-400 group-hover:text-black transition-colors">sarobidyharena21@example.com</span>
              </div>
            </motion.div>
          </div>

          {/* Formulaire de droite */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gray-50 rounded-lg p-8 border border-gray-50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className='mb-6'>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded bg-white border border-white shadow-lg text-black focus:border-gray-600 focus:ring-0 transition-all"
                  placeholder="votre@gmail.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded bg-white border border-white shadow-lg text-black focus:border-gray-600 focus:ring-0 transition-all"
                  placeholder="Votre message ici..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded border border-gray-700 hover:bg-gray-900 hover:border-gray-600 transition-all font-medium"
              >
                Envoyer
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMe;