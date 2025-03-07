import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import Wrapper from "./layout/Wrapper";
import ProductItems from "./ProductItems";

const TodaysFood = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const todayProduct = products.filter((item) => item.bestseller);
    setBestSeller(todayProduct.slice(0, 6));
  }, [products]);

  return (
    <div className="my-10 p-4">
      <Wrapper>
        <div className="text-center flex flex-col py-8 px-4">
          <Title text1="Today's" text2="Food" />
          <p className="w-3/4  text-base sm:text-sm md:text-lg  text-left text-gray-700 ">
            Indulge in a delicious selection of fresh and flavorful dishes,
            crafted with the finest ingredients. From wholesome meals to
            delightful treats, our collection offers something for every
            craving. Enjoy the perfect blend of taste and quality in every bite!
            🌿✨
          </p>
        </div>

        <div className="mx-auto w-full px-4 sm:px-0">
          <div className="grid grid-cols-2 max-[450px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {bestSeller.map((item, index) => (
              <ProductItems
                key={index}
                id={item._id}
                image={item.image[0]}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default TodaysFood;
