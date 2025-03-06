import React, { useContext, useState } from "react";
import Title from "../components/Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import Carttotal from "../components/Carttotal";
import { assets } from "../assets/assets";
import Wrapper from "../components/layout/Wrapper";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    zipCode: '',
    country: '',
    phone: '',
    state: ''
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({
      ...data,
      [name]: value
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      let orderItems = [];

      // Iterate through cartItems
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find((product) => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      };

      switch (method) {
        // Api calls for COD
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, {
            headers: { token }
          });
          // console.log(response.data);

          if (response.data.success) {
            setCartItems({});
            navigate('/orders');
          } else {
            toast.error(response.data.message);
          }
          break;

        // Api calls for Stripe (this section is commented out for now)
        case 'stripe':
        //   try {
            const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, {
              headers: { token }
            });
            if (responseStripe.data.success){
              const { session_url } = responseStripe.data;
              window.location.replace(session_url);
            }
            else{
              toast.error(responseStripe.data.message)

            }
            break;
             

        default:
          break;
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };


//Verify stripe 

const verifyStripe = async (req,res) => {
  const {userId , success,orderId} = req.body;

  try {
      if (success === 'true') {
          await orderModel.findByIdAndUpdate(orderId, {payment: true});
          await userModel.findByIdAndUpdate(userId, {cartData: []});
          res.json({success: true});
      } else {
          await orderModel.findByIdAndDelete(orderId);
          res.json({success: false});
      }
      
  } catch (error) {
      console.log(error);
      res.json({success:false, message:error.message});
  }
}






  return (
    <Wrapper>
      <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t border-gray-300 p-4">
        {/* leftside */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3 ">
            <Title text1={"Delivery"} text2={"Information"} />
          </div>
          <div className="flex gap-3">
            <input   onChange={onChangeHandler} name='firstName' value={formData.firstName}
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="First name"  required
            />
            <input
             onChange={onChangeHandler}
             value={formData.lastName}
             name='lastName'
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Last name"  required
            />
          </div>
          <input
           onChange={onChangeHandler}
           value={formData.email}
           name='email'
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="email"
            placeholder="Email Address"  required
          />
          <input
            onChange={onChangeHandler}
            value={formData.street}
            name='street'
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Street"  required
          />

          <div className="flex gap-3">
            <input
              onChange={onChangeHandler}
              value={formData.city}
              name='city'
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="City"  required
            />
            <input
             onChange={onChangeHandler}
             value={formData.state}
             name='state'
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="State" required
            />
          </div>
          <div className="flex gap-3">
            <input
             onChange={onChangeHandler}
             value={formData.zipCode}
             name='zipCode'
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="number"
              placeholder="Zipcode"
              required
            />
            <input
              onChange={onChangeHandler}
              value={formData.country}
              name='country'
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              placeholder="Country"
              required
            />
          </div>
          <input
           onChange={onChangeHandler}
           value={formData.phone}
           name='phone'
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Phone"
            required
          />
        </div>

        {/* Right Side */}

        <div className="mt-8 ">
          <div className="mt-8  min-w-80">
            {/* <div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24'>
              <OrderInfo formData={formData} /> */}
            <Carttotal />
          </div>
          <div className="mt-12">
            <Title text1={"Payment"} text2={"Method"} />
            {/* Payment method selection */}
            <div className="flex gap-3 flex-col lg:flex-row">
              <div
                onClick={() => setMethod("stripe")}
                className="flex items-center border-1 border-gray-300 p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full  ${
                    method === "stripe" ? "bg-green-400 " : ""
                  } `}
                ></p>
                <Icon className="h-5 mx-4" icon="logos:stripe" />
              </div>
              <div
                onClick={() => setMethod("razorpay")}
                className="flex items-center border-1 border-gray-300  p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full  ${
                    method === "razorpay" ? "bg-green-400 " : ""
                  } `}
                ></p>
                <img className="h-5 mx-4 text-" src={assets.razorpaylogo} />
              </div>
              <div
                onClick={() => setMethod("cod")}
                className="flex items-center border-1 border-gray-300  p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border border-gray-400 rounded-full  ${
                    method === "cod" ? "bg-green-400 " : ""
                  } `}
                ></p>
                <p className="text-gray-500 text-sm font-medium mx-4 ">
                  Cash on Delivery
                </p>
              </div>
            </div>


            <div className="w-full text-end mt-8">
              <button type='submit'  className="bg-[#0D7A57] text-white   px-16 py-3 text-sm rounded">
                Proceed to Checkout
              </button>
            </div>

          </div>

          {/* <button type='submit'
                className='w-full mt-6 bg-black text-white rounded-full py-3 px-8 font-medium
                         transition-all duration-300 hover:bg-gray-800 hover:shadow-lg 
                         hover:-translate-y-0.5 focus:ring-2 focus:ring-gray-200'
              >
                Place Order
              </button>
            </div>
           */}
        </div>
      </form>
    </Wrapper>
  );
};

export default PlaceOrder;
