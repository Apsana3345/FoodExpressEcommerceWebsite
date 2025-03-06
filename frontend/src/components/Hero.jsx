import React from 'react'
import { assets } from '../assets/assets'
import Wrapper from './layout/Wrapper'
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center py-54 w-full"
      style={{ backgroundImage: `url(${assets.herobg})`, backgroundRepeat:"no-repeat" }}
    >
        <div className="absolute inset-0 bg-black opacity-80 z-10 "></div>
      <Wrapper>
        <div className="flex prata-regular  sm:flex-row items-center   text-gray-300">
            <div className='z-20 p-4 '>
              <div className="flex items-center  gap-2">
                <p className=" font-medium sm:font-bold text-lg md:text-4xl lg:text-5xl">You are on the right place to find out  </p>
              </div>
              <h1 className=" font-medium  sm:font-bold text-xl md:text-4xl lg:text-5xl sm:py-3 leading-relaxed">
               the tasty and delicious food!
              </h1>
              <div className="flex items-center bg-[#0D7A57] w:4/4 sm:w-3.4/4 md:w-2/4 sm:py-3 rounded gap-2 py-1 px-6 mt-2">
                <input type="text" className="font-semibold text-base md:text-lg border-none outline-none" placeholder="What are you looking for? " />
               <Link to="/collection">
                <img src={assets.searchhero} alt="" className="w-5 ml-auto  " />
                </Link>
              </div>
            </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Hero
