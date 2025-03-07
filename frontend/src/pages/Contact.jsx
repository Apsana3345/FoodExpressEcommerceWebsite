import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Wrapper from '../components/layout/Wrapper'

const Contact = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <Wrapper>
        <div className="max-w-6xl mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Title text1={"Contact"} text2={" Us"} />
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Get in touch with us for any questions or concerns.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-[#0D7A57] rounded-2xl transform rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-300"></div>
              <img 
                className='w-full rounded-2xl shadow-lg transform group-hover:scale-[1.02] transition-all duration-300' 
                src={assets.img8} 
                alt="Our Store" 
              />
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Store Info */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                  Our Store
                  <div className="w-2 h-2 rounded-full bg-[#0D7A57]"></div>
                </h2>
                
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#0D7A57] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="text-gray-600">
                      Butwal, Rupandehi<br />
                      Ward 12, DharmaKotpath
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#0D7A57] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="space-y-1">
                      <a href="tel:+977 9812134345" className="text-gray-600 hover:text-[#0D7A57] transition-colors duration-300">
                        Tel: (977) 9812134345
                      </a>
                      <br />
                      <a href="mailto:foodexpress@gmail.com" className="text-gray-600 hover:text-[#0D7A57] transition-colors duration-300">
                        foodexpress@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Section */}
              <div className="border-t pt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Work at FoodExpress
                </h3>
                <p className="text-gray-600 mb-6">
                  Learn more about our teams and collaboration opportunities.
                </p>
                <button className="group relative px-8 py-4 bg-white text-[#0D7A57] border-2 border-[#0D7A57] rounded-lg font-medium hover:bg-[#0D7A57] hover:text-white transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Jobs
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Contact;