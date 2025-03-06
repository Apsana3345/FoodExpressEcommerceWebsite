import React from 'react'
import {assets} from '../assets/assets'
import Navlist from './smallcomponent/Navlist'
import NavRight from './smallcomponent/NavRight'
import Wrapper from './layout/Wrapper'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
<Wrapper>
    <div className='flex items-center justify-between py-5 p-4 font-medium'>
      <Link to='/'>
      
<div className="flex items-center">
<img src={assets.img12}  className="w-7" alt="" />
<p className="w-25 text-xl lg:text-2xl text-[#0D7A57] ">FoodExpress</p>

</div>
      </Link>


<Navlist/>
<NavRight/>


    </div>
</Wrapper>
  )
}

export default Navbar