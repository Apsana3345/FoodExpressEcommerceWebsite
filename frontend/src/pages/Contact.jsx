import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Wrapper from '../components/layout/Wrapper'

const Contact = () => {
  return (
    <Wrapper>

    
    <div className='p-4 ' >

<div className="text-center text-2xl pt-10 border-t border-gray-300 ">
<Title text1={"Contact"} text2={" Us"}/>



</div>
<div className="my-10 flex flex-col justify-center md:flex-row  gap-10 mb-28">

<img className='w-full md:max-w-[480px] rounded-sm bg-[#edd0e76c]' src={assets.img8} alt="" />
<div className="flex flex-col justify-center items-start gap-6">
  <p className="font-medium text-3xl text-gray-700">Our Store</p>
  <p className='text-gray-500'>Butwal,Rupandehi <br />Ward 12,DharmaKotpath</p>
  <p className='text-gray-500'> <a className='text-gray-400' href="tel:+977 9812134345">Tel: (977) 9812134345</a> <br /><a href="mailto:foodexpress@gmail.com ">foodexpress@gmail.com </a></p>
  <p className='font-medium text-2xl text-gray-700'>Work at FoodExpress</p>
  <p className='text-gray-500'> Learn more about our teams and collaboration.</p>
  <button className="border border-[#0D7A57] rounded-sm px-8 py-4 text-base text-gray-500 hover:bg-[#0D7A57] hover:text-white transotion-all duration-500">Explore Jobs</button>
</div>


</div>

    </div>
    </Wrapper>
  )
}

export default Contact