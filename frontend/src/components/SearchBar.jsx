import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const [visible, setVisible] = useState(false)
    const location = useLocation();

    useEffect(() => {
        if (location.pathname.includes('collection') ) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }, [location])

  return showSearch && visible ?  (
 <div className='border-t border-b border-gray-300 bg-gray-50 text-center'>
<div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2  '>
<input type="text" value={search} onChange={(e) => setSearch(e.target.value)}  className='flex-1 bg-inherit outline-none text-sm '  placeholder='Search Food' />
<img className=' w-4 '  src={assets.searchhero} alt="Search"  />

</div>
<img  onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer'  src={assets.crossicon} alt="Clear" />

    </div>
  ):null
}

export default SearchBar