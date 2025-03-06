import React, { useState } from 'react';
import { assets } from '../assets/assets';
import Wrapper from './layout/Wrapper';
import Title from './Title';

const SpecialityComponent = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <Wrapper>
      <div className="p-6 flex flex-col justify-center  ">
        <Title text1={"Our"} text2={" Speciality"}/>
        
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  gap-4 p-3">
          <div 
            onMouseEnter={() => setHoveredImage(1)}
            onMouseLeave={() => setHoveredImage(null)}
            className="relative bg-[#222] rounded-lg overflow-hidden lg:col-span-3  md:col-span-2"
          >
            <img
              src={assets.img17}
              alt="Drinks Image"
              className="w-full h-full object-cover"
            />
            {hoveredImage === 1 && (
              <div className="absolute inset-0 bg-[#222222a1] bg-opacity-70 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-xl sm:text-3xl font-bold mb-2 text-white"> Enjoy Variety of Drinks</h3>
                <p>Fresh Strawberry, ripe Lemon</p>
                {/* <p className="text-xl font-bold">Rs 240 <span className="line-through text-red-500">Rs 270</span></p> */}
                {/* <div className="mt-2">
                  <label className="block">Quantity:</label>
                  <input
                    type="number"
                    min="1"
                    defaultValue="1"
                    className="border border-gray-300 p-2 rounded w-20"
                  />
                </div>
                <button  className="mt-4 bg-[#0D7A57] text-white px-4 py-2 rounded">Add to cart</button> */}
              </div>
            )}
          </div>

          {/* Right side images */}
          <div className="space-y-4   md:col-span-2">
            <div
              onMouseEnter={() => setHoveredImage(2)}
              onMouseLeave={() => setHoveredImage(null)}
              className="relative "
            >
              <img
                src={assets.img19}
                alt="Right Image 1"
                className="w-full h-62 rounded-lg object-cover "
              />
              {hoveredImage === 2 && (
                <div className="absolute inset-0 bg-[#222222a1] bg-opacity-70 flex items-center justify-center text-white rounded-lg overflow-hidden ">
                  <div className="absolute  p-5 rounded-lg">
                    <h3 className="text-xl sm:text-3xl font-bold mb-2">Drinks</h3>
                    <p>Variety of Drinks</p>
                    {/* <p className="text-sm font-bold">Rs 240 <span className="line-through text-red-500">Rs 270</span></p>
                    <div className=" mt-1">
                      <label className="block ">Quantity:</label>
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="border border-gray-300 p-2 rounded w-20"
                      />
                    </div>
                    <button className="mt-4 bg-[#0D7A57] text-white px-4 py-2 rounded">Add to cart</button> */}
                  </div>
                </div>
              )}
            </div>

            <div
              onMouseEnter={() => setHoveredImage(3)}
              onMouseLeave={() => setHoveredImage(null)}
              className="relative "
            >
              <img
                src={assets.img7}
                alt="Right Image 2"
                className="w-full h-62 rounded-lg object-cover "
              />
              {hoveredImage === 3 && (
                <div className="absolute rounded-lg inset-0 bg-[#222222a1] bg-opacity-70 flex items-center justify-center text-white">
                  <div className="absolute col-span-2 p-5 rounded-lg">
                    <h3 className="text-xl sm:text-3xl font-bold mb-2"> Enjoy FreshFruits</h3>
                    <p> Have  healthy fruits</p>
                    {/* <p className="text-xl font-bold">Rs 240 <span className="line-through text-red-500">Rs 270</span></p>
                    <div className="mt-2">
                      <label className="block">Quantity:</label>
                      <input
                        type="number" 
                        min="1"
                        defaultValue="1"
                        className="border border-gray-300 p-2 rounded w-20"
                      />
                    </div>
                    <button    className="mt-4 bg-[#0D7A57] text-white px-4 py-2 rounded">Add to cart</button> */}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SpecialityComponent;