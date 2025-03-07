import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Wrapper from "./layout/Wrapper";
import ProductItems from "./ProductItems";
import { Link } from "react-router-dom";

const TodaysFood = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const todayProduct = products.filter((item) => item.bestseller);
    setBestSeller(todayProduct.slice(0, 6));
  }, [products]);

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <Wrapper>
        <div className="px-4">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Title text1="Today's" text2="Food" />
            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
              Indulge in a delicious selection of fresh and flavorful dishes,
              crafted with the finest ingredients. From wholesome meals to
              delightful treats, our collection offers something for every
              craving.
              <span className="inline-block ml-2 animate-bounce">🌿✨</span>
            </p>
          </div>

          {/* Products Grid */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-10 left-0 w-32 h-32 bg-[#0D7A57]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 right-0 w-32 h-32 bg-[#0D7A57]/5 rounded-full blur-3xl"></div>

            {/* Grid Container */}
            <div className="relative grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
              {bestSeller.map((item, index) => (
                <div 
                  key={index}
                  className="transform transition-all duration-300 hover:-translate-y-1"
                >
                  <ProductItems
                    id={item._id}
                    image={item.image[0]}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="text-center mt-5 ">
            <button className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-[#0D7A57] transition-all duration-300 hover:text-white">
              <span className="absolute inset-0 w-full h-full rounded-sm bg-[#0D7A57]/10 group-hover:bg-[#0D7A57] transition-all duration-300"></span>
              <span className="relative flex items-center">
               <Link to='/collection'> View More</Link>
                <svg 
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default TodaysFood;