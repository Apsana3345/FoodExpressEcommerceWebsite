import React from 'react'
import { assets } from '../assets/admin_assets/assets'
import Wrapper from './layout/Wrapper'

const Navbar = ({setToken}) => {
  return (
    <Wrapper>
    <div className='flex items-center py-2 px-[4%] justify-between' >
<div className="flex items-center">
<img src={assets .logo}  className="w-7" alt="" />
<p className="w-25 text-xl lg:text-2xl text-[#0D7A57] ">FoodExpress</p>

</div>
<button onClick={()=>setToken('')} className='bg-[#0D7A57] text-xs sm:text-sm px-5 py-2 sm:px-7 sm:py-2 rounded-lg text-white  '>Logout</button>

    </div>
    </Wrapper>
  )
}

export default Navbar