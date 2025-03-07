import React from "react";
import Wrapper from "./layout/Wrapper";
import { assets } from "../assets/assets";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const FooterLink = ({ children }) => (
  <li className="hover:text-white/80 transition-colors duration-300 cursor-pointer">
    {children}
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0D7A57] to-[#065740] text-white relative p-4">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <Wrapper>
        <div className="pt-16 pb-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <Link to="/" className="inline-block group">
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={assets.img12} 
                    alt="FoodExpress Logo" 
                    className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h2 className="text-2xl font-bold text-white">
                    Food<span className="text-white/90">Express</span>
                  </h2>
                </div>
              </Link>
              <p className="text-gray-200 text-sm leading-relaxed">
                These super foods are packed with vital nutrients, including
                vitamins and minerals that can help keep you healthy. Plus
                they're easy to enjoy-just add water and let the magic happen!
              </p>
            </div>

            {/* Navigation Links */}
            <div className="lg:ml-12">
              <h3 className="text-xl font-bold mb-6 text-white">Navigation</h3>
              <ul className="space-y-3 text-sm text-gray-200">
                <FooterLink>Home</FooterLink>
                <FooterLink>My Profile</FooterLink>
                <FooterLink>My Cart</FooterLink>
                <FooterLink>Categories</FooterLink>
              </ul>
            </div>

            {/* About Links */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">About Us</h3>
              <ul className="space-y-3 text-sm text-gray-200">
                <FooterLink> <Link to='/about'>About us</Link></FooterLink>
                <FooterLink>Contact Us</FooterLink>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300">
                  <Icon icon="logos:facebook" className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300">
                  <Icon icon="skill-icons:instagram" className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all duration-300">
                  <Icon icon="devicon:linkedin" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-300">
                ©{new Date().getFullYear()} FoodExpress-ApsanaSharma. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;