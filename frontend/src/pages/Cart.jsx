import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Wrapper from "../components/layout/Wrapper";
import Carttotal from "../components/Carttotal";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }

      setCartData(tempData);
    }
  }, [cartItems,products]);

  return (
    <Wrapper>
      <div className="border-t pt-14 p-4">
        <div className="text-2xl mb-3">
          <Title text1={"Your"} text2={"Cart"} />
        </div>

        <div>
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );
            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols[4fr_2fr_0.5fr] items-center gap-4"
              >
                <div className="flex  items-start gap-6">
                  <img
                    className="w-16 sm:w-20 "
                    src={productData.image[0]}
                    alt=""
                  />
                  <div>
                    <p className="text-xs sm:text-lg font-medium">
                      {productData.name}{" "}
                    </p>

                    <div className="flex items-center gap-5 mt-2">
                      <p>
                        {currency}
                        {productData.price}
                      </p>
                      <p className="px-2 sm:px-3 sm:py-1 bg-slate-50">
                        {item.size}
                      </p>
                    </div>
                  </div>

                  {/* Product Details */}
                  {/* <div className='flex-1 min-w-0'>
                      <h3 className='text-lg font-medium text-gray-900 truncate'>{productData.name}</h3>
                      <div className='mt-1 flex items-center gap-4'>
                        <span className='text-lg font-medium text-pink-500'>{currency}{productData.price}</span>
                        <span className='px-3 py-1 text-sm bg-gray-100 rounded-full'>{item.size}</span>
                      </div> */}

                  {/* Quantity Control */}
                  {/* <div className='mt-4 flex items-center gap-4'> */}
                  {/* <div className='flex items-center'>
                          <label className='text-sm text-gray-600 mr-2'>Quantity:</label>
                          <input
                            type="number"
                            min="1"
                            defaultValue={item.quantity}
                            onChange={(e) => e.target.value === '' || e.target.value === '0' 
                              ? null 
                              : updateQuantity(item._id, item.size, Number(e.target.value))}
                            className='w-16 px-2 py-1 border border-gray-200 rounded-lg text-center
                                     focus:border-pink-500 focus:ring-1 focus:ring-pink-200 outline-none'
                          />
                        </div> */}

                  {/* Remove Button */}
                  {/* <button
                          onClick={() => updateQuantity(item._id, item.size, 0)}
                          className='text-sm text-gray-500 hover:text-red-500 flex items-center gap-1
                                   transition-colors duration-300'
                        >
                          <img className='w-4 h-4' src={assets.bin_icon} alt="Remove" />
                          <span>Remove</span>
                        </button> */}
                </div>

                <input
                  onChange={(e) =>
                    e.target.value === "" || e.target.value === "0"
                      ? null
                      : updateQuantity(
                          item._id,
                          item.size,
                          Number(e.target.value)
                        )
                  }
                  className="border outline-0 border-gray-300 rounded max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                {/* <img src="" alt="" /> */}
                <Icon
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className="w-4 mr-4 sm:w-12 cursor-pointer"
                  icon="icomoon-free:bin"
                />
              </div>

              // </div>
              // </div>
            );
          })}
        </div>

        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <Carttotal />
            <div className="w-full text-end">
              <button onClick={()=>navigate('/place-order')} className="bg-[#0D7A57] text-white text-sm my-8 px-8 py-3 rounded">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
