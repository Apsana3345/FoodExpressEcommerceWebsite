import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({id,image,name,price}) => {

    const{currency}=useContext(ShopContext)
  return (

    <div className='  flex  text-center  '>
    <Link className='text-gray-700 cursor-pointer' to={`/products/${id}`} >
        <div className=' overflow-hidden w-[180px] h-[200px] shadow-[5px_5px_15px_2px_rgba(0,0,0,0.25)] bg-[#edd0e76c] p-3  rounded  '>

<img className="hover:scale-110 transition ease-in-out w-[150px] h-[150px]" src={image} alt="" />

        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium '>{currency}{price}</p>
    </Link>
     </div>
  )
}

export default ProductItems