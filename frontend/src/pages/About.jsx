import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Wrapper from '../components/layout/Wrapper'

const About = () => {
  return (
<Wrapper>
    <div className='p-4'>
    <div  className='text-2xl text-center pt-8 border-t text-gray-400 '>
      <Title text1={'About'} text2={"Us"}/>
        
    </div>
<div className="my-10 flex flex-col md:flex-row gap-16">

  <img src={assets.img3} alt="" className="w-full md:max-w-[450px] bg-[#edd0e76c] p-4" />
  <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
  <p>FoodExpress was established to provide a convenient and reliable solution for food delivery, connecting customers with their favorite restaurants quickly and efficiently. </p>
  <p>With a focus on speed, quality, and customer satisfaction, FoodExpress aims to offer an exceptional dining experience right at your doorstep, ensuring every meal is delivered fresh and on time.</p>
  <b className='text-gray-800'>Our Misson</b>
  <p>To revolutionize the food delivery experience by providing fast, reliable, and convenient services that exceed customer expectations. We are committed to delivering high-quality meals from local restaurants, ensuring freshness, speed, and satisfaction with every order. Our goal is to connect people with the food they love while maintaining exceptional customer service and supporting the growth of our restaurant partners.</p>
  </div>

</div>
<div className='text-4xl py-4  '>
<Title text1={"Why"} text2={"Choose Us"}/>
</div>
<div className="flex border border-gray-300 flex-col md:flex-row text-sm mb-20">
  {/* <div className="border px-18 md:px-16 sm:py-20 flex flex-col gap-5">
    <b>Freshness Guarantee</b>
    <p className='text-gray-600 '>At FoodExpress, our Freshness Guarantee ensures that every meal is prepared with the freshest ingredients and delivered at its best quality. Enjoy delicious, fresh meals every time you order with us.</p>

  </div> */}
  <div className="border border-gray-300 px-18 md:px-16 sm:py-20  flex flex-col gap-5">
    <b>Fast and Reliable Delivery</b>
    <p className='text-gray-600 '> We ensure your meals arrive quickly and on time, every time.</p>

  </div>
  <div className="border border-gray-300 px-18 md:px-16 sm:py-20 flex flex-col gap-5">
    <b>Easy Ordering Process</b>
    <p className='text-gray-600 '> Our user-friendly platform makes ordering your favorite meals simple and hassle-free.</p>

  </div>
  <div className="border border-gray-300 px-18 md:px-16 sm:py-20 flex flex-col gap-5">
    <b>Excellent Customer Support </b>
    <p className='text-gray-600 '>  Our dedicated support team is available to assist you with any questions or concerns.


</p>

  </div>
</div>

    </div>
    </Wrapper>
  )
}

export default About