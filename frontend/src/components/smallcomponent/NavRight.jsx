import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const NavRight = () => {
  const [visible, setVisible] = useState(false);
  const {setShowSearch,getCartCount,navigate,token,setToken,setCartItems}=useContext(ShopContext);
  const logout = () => {
    
    localStorage.removeItem('token');
    navigate('/login');
    setToken("");
    setCartItems({});
  };



  return (
    <>
      <div className="flex items-center gap-3 sm:gap-8">
        <img   onClick={()=>setShowSearch(true)} src={assets.img16} className="w-3 sm:w-6  cursor-pointer" alt="" />
        <div className="group relative">
         {/* <Link to='/login'> */}
         
         {/* Dropdown menu */}
          <img onClick={()=>token ? null :navigate('/login')} className="w-3 sm:w-6   cursor-pointer" src={assets.profileicon} alt="" />
          
          {/* </Link> */}
          {token &&
           <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded ">
              <p className="cursor-pointer hover:text-black ">My Profile</p>
              <p  onClick={() => {
                              navigate("/orders");
                              // setDropdownOpen(false);
                            }} className="cursor-pointer hover:text-black  ">Orders</p>
              <p  
onClick={logout}

              className="cursor-pointer hover:text-black"> Logout</p>
            </div>
          </div>}
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.carticon} className="w-3 sm:w-6  min-w-3" />
          <p className="absolute right-[-5px] top-[-7px] w-3 text-center leading-3 bg-[#0D7A57] text-white aspect-square rounded-full text-[7px]">
          {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.img21}
          className="w-3 sm:w-6  cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* sidebar menu for small screens */}
      <div
        className={`absolute top-0 z-40 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        } `}
      >
        <div className="flex flex-col text-gray-600  ">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-2 p-3 cursor-pointer"
          >
            <img src={assets.dropdownicon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 border pl-6  border-gray-200"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border  border-gray-200"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-gray-200"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border border-gray-200"
            to="/login"
          >
            SignUp
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavRight;
