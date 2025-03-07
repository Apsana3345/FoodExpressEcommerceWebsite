import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import Navlist from './smallcomponent/Navlist'
import NavRight from './smallcomponent/NavRight'
import Wrapper from './layout/Wrapper'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <Wrapper>
          <div className='flex items-center justify-between py-4 px-4'>
            {/* Logo Section */}
            <Link 
              to='/'
              className="flex items-center gap-2 hover:opacity-90 transition-opacity duration-200"
            >
              <img 
                src={assets.img12} 
                className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 object-contain" 
                alt="FoodExpress Logo" 
              />
              <span className="text-xl xs:text-2xl sm:text-3xl font-semibold text-[#0D7A57]">
                FoodExpress
              </span>
            </Link>

            {/* Center Navigation */}
            <div className="flex-1 flex justify-center">
              <Navlist />
            </div>

            {/* Right Section */}
            <NavRight />
          </div>
        </Wrapper>
      </div>
      {/* Spacer for fixed navbar */}
      <div className="h-[72px] sm:h-[80px]"></div>
    </>
  )
}

export default Navbar