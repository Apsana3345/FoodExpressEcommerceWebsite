import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Wrapper from "./layout/Wrapper";
import ProductItems from "./ProductItems";
import { Link } from "react-router-dom";

const OurFood = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 14));
  }, [products]);

  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <Wrapper>
        <div className="px-4">
          {/* Header Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="text-center space-y-4">
              <Title text1="Our" text2="Foods" />
              <p className="max-w-2xl mx-auto text-sm text-gray-600 md:text-base">
                Experience the perfect blend of taste and quality with our delicious
                food selection. From hearty meals to delightful treats, every dish
                is crafted with the finest ingredients.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
            {latestProducts.map((item, index) => (
              <ProductItems
                key={index}
                id={item._id}
                image={item.image[0]}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>

          {/* Simple Load More Button */}
          <div className="text-center mt-12">
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

export default OurFood;