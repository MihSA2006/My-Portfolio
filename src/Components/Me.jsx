import { FaFacebookF } from "react-icons/fa"; 
import { AiOutlineWhatsApp } from "react-icons/ai"; 
import { AiOutlineMail } from "react-icons/ai"; 
import React from 'react'
import img from '../assets/img.png'

const Me = () => {
  return (
    <div id="me" className="min-h-screen w-full relative flex flex-col">
      {/* Top half bg-neutral-50 */}
      <div className="w-full h-[30%] min-h-[40vh] bg-neutral-50"></div>
      {/* Bottom half white */}
      <div className="w-full h-[70%] min-h-[60vh] bg-white"></div>

      {/* Profile Image - perfectly centered on the separation */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-[500px] h-[500px] flex items-center justify-center">
          <img
            src={img}
            alt="Creative Professional"
            className="w-[350px] h-[350px] rounded-full object-cover shadow-lg ring-4 ring-white ring-opacity-50 border-4 border-white bg-white"
          />
        </div>
      </div>

      {/* Main Content - dans la moitié basse, centré */}
      <div className="absolute left-1/2 top-[55%] -translate-x-1/2 z-20 w-full flex justify-center">
        <div className="max-w-2xl w-full text-center animate-slide-up px-8">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-700 mb-8 tracking-wide">
            RAKOTOARIMANANA{' '}
            <span className="font-black text-neutral-900">Harena Sarobidy</span>
          </h1>

          {/* Description */}
          <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto">
            Developpeur Web et Mobile
          </p>

          {/* Credit */}
          <div className="flex  items-center gap-2 mb-4 justify-center">
            <div>
              <span className="flex items-center justify-center mb-2 rounded-full bg-neutral-50 border border-neutral-200 w-10 h-10">
                <AiOutlineMail className="text-grey text-2xl" />
              </span>

              <span className="flex items-center justify-center mb-2 rounded-full bg-neutral-50 border border-neutral-200 w-10 h-10">
                <AiOutlineWhatsApp className="text-grey text-2xl"/>
              </span>
              <a href="https://www.facebook.com/misandratraharena.rakotoarimanana">
                <span className="flex items-center justify-center mb-2 rounded-full bg-neutral-50 border border-neutral-200 w-10 h-10">
                  <FaFacebookF className="text-grey text-2xl" />
                </span>
              </a>
            </div>

            <div className="flex flex-col items-start ml-5">
              <div className="mt-4 mb-6">
                <span className="text-neutral-400 text-sm">sarobidyharena21@gmail.com</span>
              </div>
              <div className="mb-6">
                <span className="text-neutral-400 text-sm">+261 34 62 144 84</span>
              </div>
              <div className="mb-5">
                <a href="https://www.facebook.com/misandratraharena.rakotoarimanana">
                  <span className="text-neutral-400 text-sm">Misandratra Harena Rakotoarimanana</span>
                </a>
              </div>
            </div>

          </div>

          {/* Read More Button */}
          <button className="group relative inline-flex items-center text-neutral-800 font-medium text-lg tracking-widest transition-all duration-300 hover:text-neutral-900">
            <span className="relative z-10 text-blue-500">Telecharger mon CV</span>
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Me
