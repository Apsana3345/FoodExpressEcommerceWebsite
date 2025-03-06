import React from 'react'
import { assets } from '../assets/assets'
import Wrapper from './layout/Wrapper'

const Policy = () => {
  return (
    <Wrapper>

   
    <div className="flex flex-col sm:flex-row  justify-between items-center gap-12 text-center p-9 mb-10">
  <div className='flex flex-col items-center'>

  <div className='flex  bg-[#0D7A57] rounded-full w-[70px] p-2 h-[70px] items-center'>

<div className="bg-[#369e7d] rounded-full w-[55px] p-2 h-[55px]" >
  <img src={assets.delivery} className="w-12 m-auto mb-5" alt="" />
  </div>
</div>
  <div>
  <p className="font-semibold">Free and Fast Delivery</p>
  <p className="text-gray-400 text-[8px] sm:text-xl">Free delivery for all orders over Rs2000
  under this city</p>


</div>



  </div>
  <div className='flex flex-col items-center'>

  <div className='flex  bg-[#0D7A57] rounded-full w-[70px] p-2 h-[70px] items-center'>

<div className="bg-[#369e7d] rounded-full w-[55px] p-2 h-[55px]" >
  <img src={assets.service} className="w-12 m-auto mb-5" alt="" />
  </div>
</div>
  <div>
  <p className="font-semibold">24/7 Customer Service</p>
  <p className="text-gray-400">Friendly 24/7 customer support</p>


</div>



  </div>
  <div className='flex flex-col items-center'>

  <div className='flex  bg-[#0D7A57] rounded-full w-[70px] p-2 h-[70px] items-center'>

<div className="bg-[#369e7d] rounded-full w-[55px] p-2 h-[55px]" >
  <img src={assets.verified} className="w-12 m-auto mb-5" alt="" />
  </div>
</div>
  <div>
  <p className="font-semibold">Money Back Guarantee</p>
  <p className="text-gray-400">In case of differences in delivery</p>


</div>



  </div>

  
</div>
</Wrapper>
  )
}

export default Policy