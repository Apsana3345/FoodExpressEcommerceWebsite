import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Wrapper from './layout/Wrapper';
import ProductItems from './ProductItems';

const OurFood = () => {

const {products} = useContext(ShopContext);

const [latestProducts,setLatestProducts]=useState([]);
useEffect(()=>{
setLatestProducts(products.slice(0,14));
},[products])


  return (
    <div className='my-10'>
<Wrapper>

<div className="text-center flex flex-col  py-8 text-3xl p-4">
   <Title text1={"Our "} text2={'Foods'} /> 
<p className='w-3/4  text-base sm:text-sm md:text-lg  text-left text-gray-700 '>

Experience the perfect blend of taste and quality with our delicious food selection. From hearty meals to delightful treats, every dish is crafted with the finest ingredients and rich flavors to satisfy your cravings. Whether you're in the mood for something savory or sweet, our menu offers a variety of mouthwatering options made with love and passion. Indulge in fresh, flavorful, and wholesome goodness with every bite!

</p>
</div>
{/* Products rendering */}
<div className='grid gridcols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 gap-y-6 p-4'>
{latestProducts.map((item,index)=>(
<ProductItems key={index} id={item._id} image={item.image[0]} name={item.name} price={item.price}/>
))}


</div>
</Wrapper>

    </div>
  )
}

export default OurFood