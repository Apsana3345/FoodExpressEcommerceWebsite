import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Wrapper from '../components/layout/Wrapper'

const FeatureBox = ({ title, description }) => (
  <div className="group relative overflow-hidden bg-white p-8 transition-all duration-300 hover:shadow-xl border-b-4 border-[#0D7A57]">
    <div className="absolute top-0 left-0 h-1 w-0 bg-[#0D7A57] transition-all duration-500 group-hover:w-full"></div>
    <div className="relative z-10">
      <h3 className="mb-4 text-xl font-bold text-gray-800 group-hover:text-[#0D7A57] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
    <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-[#0D7A57]/5 transition-transform duration-500 group-hover:scale-150"></div>
  </div>
);

const About = () => {
  return (
    <Wrapper>
      <div className='p-4 py-16'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <Title text1={'About'} text2={"Us"}/>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Delivering culinary excellence to your doorstep
          </p>
        </div>

        {/* About Section */}
        <div className="my-10 flex flex-col md:flex-row gap-8 items-center">
          {/* Image with decorative elements */}
          <div className="relative w-full md:w-[450px]">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#0D7A57]/20 rounded-lg"></div>
            <img 
              src={assets.img3} 
              alt="About FoodExpress" 
              className="relative w-full rounded-lg shadow-lg bg-[#edd0e76c] p-4 hover:transform hover:scale-[1.02] transition-transform duration-300" 
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                FoodExpress was established to provide a convenient and reliable solution for food delivery, 
                connecting customers with their favorite restaurants quickly and efficiently.
              </p>
              <p className="text-lg leading-relaxed">
                With a focus on speed, quality, and customer satisfaction, FoodExpress aims to offer 
                an exceptional dining experience right at your doorstep, ensuring every meal is delivered 
                fresh and on time.
              </p>
            </div>

            {/* Mission Section */}
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#0D7A57] mt-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize the food delivery experience by providing fast, reliable, and convenient 
                services that exceed customer expectations. We are committed to delivering high-quality 
                meals from local restaurants, ensuring freshness, speed, and satisfaction with every order.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20">
          <div className='text-center mb-12'>
            <Title text1={"Why"} text2={"Choose Us"}/>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Experience excellence in every delivery
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureBox
              title="Fast and Reliable Delivery"
              description="We ensure your meals arrive quickly and on time, every time. Our efficient delivery network guarantees prompt service."
            />
            <FeatureBox
              title="Easy Ordering Process"
              description="Our user-friendly platform makes ordering your favorite meals simple and hassle-free. Just a few clicks to delicious food."
            />
            <FeatureBox
              title="Excellent Customer Support"
              description="Our dedicated support team is available to assist you with any questions or concerns, ensuring a smooth experience."
            />
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="flex justify-center mt-16">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#0D7A57]/30 to-transparent rounded-full"></div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;