import React, { useState, useEffect } from 'react'
import { assets } from '../assets/assets'
import Navlist from './smallcomponent/Navlist'
import NavRight from './smallcomponent/NavRight'
import Wrapper from './layout/Wrapper'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
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
          <div className='flex items-center justify-between py-5 p-4 font-medium'>
            <Link to='/'>
              <div className="flex items-center">
                <img src={assets.img12} className="w-7" alt="" />
                <p className="w-25 text-xl lg:text-2xl text-[#0D7A57]">FoodExpress</p>
              </div>
            </Link>

            <Navlist />
            <NavRight />
          </div>
        </Wrapper>
      </div>
      {/* This div adds space below the fixed navbar */}
      <div className="h-[84px]"></div>
    </>
  )
}

export default Navbar