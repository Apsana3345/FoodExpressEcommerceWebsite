import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({id, image, name, price}) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link 
      to={`/products/${id}`}
      className="group flex flex-col items-center w-full transform transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#edd0e76c] to-[#edd0e76c]/50 p-4">
        {/* Product Image */}
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Quick View Button - Optional */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] text-center transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-gray-800">
            View Details
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center w-full px-2">
        <h3 className="text-gray-800 font-medium text-sm sm:text-base mb-1 line-clamp-2 group-hover:text-[#0D7A57] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-[#0D7A57] font-semibold text-base sm:text-lg">
          {currency}{price}
        </p>
      </div>
    </Link>
  )
}

export default ProductItems