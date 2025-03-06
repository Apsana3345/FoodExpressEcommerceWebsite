import React from "react";
import Wrapper from "./layout/Wrapper";
import { assets } from "../assets/assets";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
const onSubmitHandler =(event)=>{
  event.preventDefault();

}


  return (
    <div className="bg-[#0D7A57]  text-white ">
      <Wrapper>
        <div className="flex   p-4 ">
          <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-4  md:grid-cols-2  gap-5 my-10 mt-10 text-sm  justify-between">
            <div className="flex flex-col gap-6 items-center ">
              <div className="flex flex-col  items-start col-span-2">
                <div className="flex ">
                <img src={assets.img12} alt="" />
                <p className=" text-sm sm:text-2xl font-bold  ">FoodExpress</p>

                </div>


              <p className="text-gray-300 text-[12px] sm:text-xl w-3/4">
                These super foods are packed with vital nutrients, including
                vitamins and minerals that can help keep you healthy. Plus
                they’re easy to enjoy-just add water and let the magic happen!
              </p>
              </div>

             


            </div>

            <div className="flex flex-col items-center col-span-1">
              <p className="text-sm sm:text-2xl  font-bold  mb-5 ">
                Navigation{" "}
              </p>
              <ul className="flex flex-col text-[10px] sm:text-base gap-1 text-white">
               <li>Home</li>
                <li>My Profile</li>
                <li>My Cart</li>
                <li>Categories</li>
              </ul>
            </div>

           

            <div className="items-center">
              <p className="text-sm    sm:text-2xl font-bold  mb-5 ">
                About Us
              </p>
              <ul className="flex text-[10px] sm:text-base flex-col gap-1 text-white">
                <li>About us</li>
                <li>Contact Us</li>
              </ul>
            </div> 
          

       

        
          <div >
           

            <div className="flex flex-col gap-3 items-center">
              <p className=" text-[14px] font-bold sm:text-xl">Follow us on:</p>
              <div className="flex gap-2">
                <Icon icon="logos:facebook" />
                <Icon icon="skill-icons:instagram" />
                <Icon icon="devicon:linkedin" />
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col  col-span-2  ">
              <p className="text-sm sm:text-xl">
                {" "}
                Get 10% off for your first order:
              </p>
              <form onSubmit={onSubmitHandler} className="flex items-center border-1 p-1 mt-2  rounded w-[170px] sm:w-[300px]">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="border-0 outline-0 w-[120px] sm:w-[250px]  mr-3 text-sm sm:text-base "
                />
                <button type="submit">

                <img
                  src={assets.send}
                  alt=""
                  className="w-[15px] h-[12px]  sm:mr-4 "
                />
                </button>
              </form>


            </div> */}


</div>


</div>



        <div>
          <hr />
          <p className="py-5 text-[11px] sm:text-xl text-center">
            ©Copyright FoodExpress-ApsanaSharma 2025 . All rights reserved.
          </p>
        </div>



      </Wrapper>
    </div>
  );
};

export default Footer;
