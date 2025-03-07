import React from 'react'
import { assets } from '../assets/assets'
import Wrapper from './layout/Wrapper'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[85vh] w-full flex items-center"
      style={{ 
        backgroundImage: `url(${assets.herobg})`, 
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/75"></div>

      <Wrapper>
        <div className="flex prata-regular sm:flex-row items-center text-white max-w-5xl mx-auto">
          <div className="z-20 p-6 md:p-8 space-y-6">
            {/* Badge */}
           

            {/* Main Text */}
            <div className="space-y-3">
              <p className="font-bold text-2xl md:text-4xl lg:text-5xl leading-tight animate-slideUp">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  You are on the right place to find out
                </span>
              </p>

              <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl text-[#0D7A57] leading-tight drop-shadow-xl animate-slideUp">
                the tasty and delicious food!
              </h1>
            </div>

            {/* Search Section */}
            <div className="max-w-xl space-y-4 animate-slideUp">
              <div className="group relative">
                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden shadow-lg hover:shadow-[#0D7A57]/20 transition-all duration-300">
                  <input 
                    type="text" 
                    className="w-full px-6 py-3 bg-transparent text-white placeholder-gray-400 font-medium text-base focus:outline-none focus:placeholder-[#0D7A57]/50 transition-colors"
                    placeholder="Search for your favorite dishes..." 
                  />
                  <Link 
                    to="/collection" 
                    className="p-2 mx-2 bg-[#0D7A57] rounded-full hover:bg-[#0D7A57]/80 transition-all duration-300 hover:scale-105"
                  >
                    <img src={assets.searchhero} alt="Search" className="w-4 h-4 brightness-0 invert" />
                  </Link>
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 -z-10 bg-[#0D7A57]/20 rounded-full blur-xl scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Popular searches */}
              <div className="flex gap-3 flex-wrap items-center animate-fadeIn">
                <span className="text-sm text-gray-400 font-medium">Popular:</span>
                {['Pizza', 'Momo', 'Burger', 'Thakali Set'].map((item) => (
                  <button 
                    key={item}
                    className="px-4 py-1.5 text-sm bg-white/10 rounded-full hover:bg-[#0D7A57] hover:scale-105 transition-all duration-300"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Hero