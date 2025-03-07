import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import Wrapper from "../components/layout/Wrapper";
import Carttotal from "../components/Carttotal";

const CartItem = ({ productData, item, currency, updateQuantity }) => (
  <div className="bg-white rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="flex items-start gap-6">
      {/* Image */}
      <div className="relative group">
        <img
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
          src={productData.image[0]}
          alt={productData.name}
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 rounded-lg transition-colors duration-300"></div>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-gray-800">
              {productData.name}
            </h3>
            <div className="mt-2 flex items-center gap-3">
              <span className="text-lg font-semibold text-[#0D7A57]">
                {currency}{productData.price}
              </span>
              <span className="px-3 py-1 text-sm bg-gray-100 rounded-full text-gray-600">
                {item.size}
              </span>
            </div>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => updateQuantity(item._id, item.size, 0)}
            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
          >
            <Icon icon="icomoon-free:bin" className="w-5 h-5" />
          </button>
        </div>

        {/* Quantity Control */}
        <div className="mt-4 flex items-center gap-3">
          <label className="text-sm text-gray-600">Quantity:</label>
          <div className="relative">
            <input
              type="number"
              min="1"
              defaultValue={item.quantity}
              onChange={(e) =>
                e.target.value === "" || e.target.value === "0"
                  ? null
                  : updateQuantity(item._id, item.size, Number(e.target.value))
              }
              className="w-20 px-3 py-2 border border-gray-200 rounded-lg text-center
                       focus:border-[#0D7A57] focus:ring-1 focus:ring-[#0D7A57]/20 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
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
  }, [cartItems, products]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Wrapper>
        <div className="py-12 px-4">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <Title text1={"Your"} text2={"Cart"} />
            <p className="mt-4 text-gray-600">
              Review and manage your selected items
            </p>
          </div>

          {/* Cart Content */}
          <div className="max-w-4xl mx-auto">
            {cartData.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">Your cart is empty</p>
                <button
                  onClick={() => navigate('/collection')}
                  className="mt-4 text-[#0D7A57] hover:text-[#0D7A57]/80 font-medium"
                >
                  Continue Shopping →
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="space-y-4">
                  {cartData.map((item, index) => (
                    <CartItem
                      key={index}
                      productData={products.find((product) => product._id === item._id)}
                      item={item}
                      currency={currency}
                      updateQuantity={updateQuantity}
                    />
                  ))}
                </div>

                {/* Cart Total and Checkout */}
                <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
                  <Carttotal />
                  <div className="mt-6 text-right">
                    <button
                      onClick={() => navigate('/place-order')}
                      className="bg-[#0D7A57] text-white px-8 py-3 rounded-lg hover:bg-[#0D7A57]/90 
                               transform hover:scale-[1.02] transition-all duration-300 font-medium"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;