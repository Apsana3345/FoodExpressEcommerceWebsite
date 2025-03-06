import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Wrapper from "../components/layout/Wrapper";
import Relatedproducts from "../components/Relatedproducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);
  const [image, setImage] = useState("");
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState("");
  // console.log(productId);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        // console.log(item)
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <Wrapper>
      <div className="border-t-1 border-gray-300 pt-10 transition-opacity ease-in  duration-500 opacity-100 p-4">
        {/* product data */}

        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* product image */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
            <div className="flex sm:flex-col overflow-x-auto  sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  className={`w-[24%] rounded p-2   sm:w-full sm:mb-3 bg-[#edd0e76c] flex-shrink-0 cursor-pointer  `}
                  src={item}
                  key={index}
                  alt=""
                />
              ))}
            </div>

            <div className="w-full bg-[#edd0e76c] rounded p-2  sm:w-[80%]">
              <img src={image} alt="" className="w-full h-auto " />
            </div>
          </div>

          {/* product info */}

          <div className="flex-1 ">
            <h1 className=" font-medium text-2xl mt-2">{productData.name}</h1>

            <div className="flex items-center gap-1 mt-2">
              <Icon
                className="w-3.5 text-yellow-400"
                icon="material-symbols:star"
              />
              <Icon
                className="w-3.5 text-yellow-400"
                icon="material-symbols:star"
              />
              <Icon
                className="w-3.5 text-yellow-400"
                icon="material-symbols:star"
              />
              <Icon
                className="w-3.5 text-yellow-400"
                icon="material-symbols:star"
              />
              <Icon
                className="w-3.5 text-gray-400"
                icon="material-symbols:star"
              />
              <p className="pl-2 ">
                (100)  <span className="text-gray-500">|</span>
                <span className="text-green-600">  {productData.stock}</span>
              </p>
            </div>

            <p className="mt-5 text-3xl font-mediun">
              {currency}
              {productData.price}
            </p>

            <p className="text-gray-600 mt-5 md:w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size</p>

              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={` py-2 px-4 bg-gray-100 rounded  ${
                      item === size ? " bg-green-800  text-white " : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() =>addToCart(productData._id,size)}
              className="bg-[#0D7A57] rounded  text-white px-8 py-3 text-sm active:bg-green-700
                                     "
            >
              ADD TO CART
            </button>

            <hr className="mt-8 sm:w-4/5 text-gray-500" />

            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1 border-1 border-gray-300 rounded py-3 items-center">
              <p className="flex gap-5 items-center p-1">
                <Icon className=" w-9 h-9 " icon="tabler:truck-delivery" />
                Free Delivery inside the city
              </p>
              <hr className=" w-full  border-gray-300" />
              <p className="flex gap-5 items-center p-1">
                {" "}
                <Icon className=" w-7 h-7 " icon="game-icons:cash" /> Cash on
                delivery available.
              </p>
              <hr className="w-full  border-gray-300" />
              <p className="flex gap-5 items-center p-1">
                <Icon
                  className=" w-7 h-7 "
                  icon="fluent-mdl2:return-to-session"
                />
                Easy return within 2-4 hours.
              </p>
            </div>
          </div>
        </div>
        {/* product description and review  */}

        <div className="mt-20">
          <div className="flex ">
            <p className="border border-gray-300 px-5 py-3 text-sm ">
              Description{" "}
            </p>
            <p className="border px-5 py-3 text-sm border-gray-300">
              Reviews(100){" "}
            </p>

            {/* <button 
                        onClick={() => setActiveTab('description')} 
                        className={`px-8 py-4 text-sm font-bold transition-colors
                                  ${activeTab === 'description' 
                                    ? 'border-b-2 border-pink-500 text-pink-500' 
                                    : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Description
                    </button>
                    <button 
                        onClick={() => setActiveTab('reviews')} 
                        className={`px-8 py-4 text-sm font-bold transition-colors
                                  ${activeTab === 'reviews' 
                                    ? 'border-b-2 border-pink-500 text-pink-500' 
                                    : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        Reviews (122)
                    </button> */}
          </div>

          <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6  text-gray-500 text-sm ">
            <p>
              A food e-commerce website is an online platform that facilitates
              the buying and selling of food products over the internet. It
              serves as a virtual marketplace where restaurants, grocery stores,
              and food suppliers can showcase their products, interact with
              customers, and process orders without the need for a physical
              visit. Food e-commerce websites have gained immense popularity due
              to their convenience, accessibility, and the ability to deliver
              fresh products to customers' doorsteps.
            </p>
            <p>
              Food e-commerce websites typically display food items with
              detailed descriptions, high-quality images, pricing, and any
              available variations (e.g., flavors, portion sizes, dietary
              preferences). Each product usually has its own dedicated page with
              relevant nutritional information, ingredients, and delivery
              options.
            </p>
          </div>
        </div>

        {/*display related products  */}

<Relatedproducts category={productData.category} subCategory={productData.subCategory} />


      </div>
    </Wrapper>
  ) : (
    <div className="opacity-0"> </div>
  );
};
export default Product;
