import React from 'react'
import { assets } from '../assets/assets'
import Wrapper from './layout/Wrapper'

const PolicyCard = ({ icon, title, description }) => (
  <div className="flex flex-col items-center group p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg">
    <div className="relative mb-6">
      <div className="absolute inset-0 bg-[#0D7A57] rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity"></div>
      <div className="relative flex bg-[#0D7A57] rounded-full w-16 h-16 items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <div className="bg-[#369e7d] rounded-full w-14 h-14 flex items-center justify-center">
          <img 
            src={icon} 
            className="w-8 h-8 object-contain transform group-hover:scale-110 transition-transform duration-300" 
            alt={title}
          />
        </div>
      </div>
    </div>
    
    <div className="text-center">
      <h3 className="font-semibold text-lg mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
        {description}
      </p>
    </div>
  </div>
)

const Policy = () => {
  const policies = [
    {
      icon: assets.delivery,
      title: "Free and Fast Delivery",
      description: "Free delivery for all orders over Rs2000 under this city"
    },
    {
      icon: assets.service,
      title: "24/7 Customer Service",
      description: "Friendly 24/7 customer support"
    },
    {
      icon: assets.verified,
      title: "Money Back Guarantee",
      description: "In case of differences in delivery"
    }
  ]

  return (
    <div className="py-16 bg-gray-50/50">
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <PolicyCard
              key={index}
              icon={policy.icon}
              title={policy.title}
              description={policy.description}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default Policy