// Testimonials.js
import React from 'react';
import Wrapper from './layout/Wrapper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsConstant } from '../constant/testimonialsConstant';



const Testimonials = () => {
  return (
    
    <div className='p-4'>

<Wrapper>


<div className=" flex flex-col sm:flex-row space-x-9 p-4 sm:items-start  items-center">
 <div className='flex flex-col w-[300px] items-center sm:w-3/4   lg:w-2/4  ' >
 <h2 className=" text-2xl font-bold mb-4">Testimonials</h2>
 <p className="mb-4 font-medium text-gray-700 text-sm  lg:text-base items-center ml-9 ">These super foods are made with all fresh and organic products that can help you stay healthy. Plus they’re adjusted according to your taste to enjoy the food of your own choice.
 Our menu is a celebration of fresh, locally-sourced ingredients, expertly prepared to bring out the rich, authentic flavors of each dish. Whether you're indulging in one of our signature recipes or trying something new, you can expect an extraordinary culinary journey. From comforting classics to creative modern twists, our dishes are crafted with passion and dedication, ensuring that every bite leaves you craving more. Join us and savor the taste of quality, warmth, and hospitality.

 </p>

 </div>
  <div className="flex flex-col items-center space-y-4 md:flex-col md:space-x-6 md:space-y-0">

  <Swiper
      
      spaceBetween={55} 
      autoplay={{
        
        delay: 2000,
        reverseDirection: true, // Reverse the autoplay direction
        disableOnInteraction: false,
      }}
      grabCursor={true}
      pagination={{ type: "bullets", clickable: true }}
      loop={true}
      modules={[Autoplay, Pagination]}
      className="swiper border-2 border-gray-300 rounded-2xl  overflow-hidden px-3 py-5 items-center w-[300px] md:w-[400px] lg:w-[520px]"
      speed={800}
    >

    {testimonialsConstant.map((item, index) => (
      <SwiperSlide key={index} className="bg-white p-5 rounded-lg w-full md:w-1/2 flex flex-col">
       
        <div className="flex mt-2">
          {[...Array(item.rating)].map((e, i) => (
            <span key={i} className="text-yellow-400">★</span>
          ))}
          {[...Array(5 - item.rating)].map((e, i) => (
            <span key={i} className="text-gray-300">★</span>
          ))}
          <span className="ml-2 text-gray-600 mb-2">{item.rating}/5</span>
        </div>
        <h3 className="text-lg font-semibold ">{item.title}</h3>
        <p className="mt-6 text-gray-700 ">{item.text}</p>
        <div className="flex items-center mt-10">
          <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center  mr-2">
            <span className="text-blue-600">{item.name.charAt(0)}</span>
          </div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

 
{/* <button className="mt-4 bg-[#0D7A57] w-30 items-center flex justify-center text-white py-2 px-4 rounded hover:bg-[#468f78]">
    View All →
  </button> */}
</div>
  
  </div>
 
</Wrapper>
    </div>
  );
};

export default Testimonials;