import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const NavRight = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    setToken("");
    setCartItems({});
  };

  // Navigation Links for mobile menu
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/collection", label: "Our Food" },
  ];

  return (
    <>
      <div className="flex items-center justify-end gap-3 xs:gap-4 sm:gap-8">
        {/* Search Icon */}
        <div className="flex items-center h-7 sm:h-6">
          <button 
            onClick={() => setShowSearch(true)}
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <img 
              src={assets.img16} 
              className="w-6 h-6 sm:w-6 sm:h-6 object-contain" 
              alt="Search" 
            />
          </button>
        </div>

        {/* Profile Section */}
        <div className="relative group flex items-center h-7 sm:h-6">
          <button 
            onClick={() => token ? null : navigate('/login')}
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <img 
              className="w-6 h-6 sm:w-6 sm:h-6 object-contain" 
              src={assets.profileicon} 
              alt="Profile" 
            />
          </button>

          {/* Profile Dropdown */}
          {token && (
            <div className="absolute right-0 pt-4 z-50 hidden group-hover:block">
              <div className="bg-white rounded-lg shadow-lg py-2 w-48 border border-gray-100">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm text-gray-500">Welcome!</p>
                </div>
                <div className="py-1">
                  <button 
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    onClick={() => navigate("/profile")}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    My Profile
                  </button>
                  <button 
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                    onClick={() => navigate("/orders")}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Orders
                  </button>
                  <button 
                    className="w-full px-4 py-2 text-left text-sm text-[#0D7A57]  hover:bg-red-50 flex items-center gap-2"
                    onClick={logout}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <div className="flex items-center h-7 sm:h-6">
          <Link to="/cart" className="relative hover:opacity-75 transition-opacity duration-200">
            <img 
              src={assets.carticon} 
              className="w-6 h-6 sm:w-6 sm:h-6 object-contain" 
              alt="Cart" 
            />
            {getCartCount() > 0 && (
              <div className="absolute -top-2 -right-2 bg-[#0D7A57] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {getCartCount()}
              </div>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center h-7 sm:h-6 sm:hidden">
          <button
            onClick={() => setVisible(true)}
            className="hover:opacity-75 transition-opacity duration-200"
          >
            <img 
              src={assets.img21} 
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain" 
              alt="Menu" 
            />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 ${visible ? 'visible' : 'invisible'}`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            visible ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={() => setVisible(false)}
        />

        {/* Sidebar Content */}
        <div className={`absolute top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ${
          visible ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium text-gray-800">Menu</h2>
            <button 
              onClick={() => setVisible(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setVisible(false)}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                    isActive ? 'bg-[#0D7A57]/10 text-[#0D7A57]' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            {!token && (
              <NavLink
                to="/login"
                onClick={() => setVisible(false)}
                className="mt-4 block px-4 py-2 text-center text-white bg-[#0D7A57] rounded-lg hover:bg-[#0D7A57]/90 transition-colors duration-200"
              >
                Sign In / Sign Up
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavRight;