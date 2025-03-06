import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import ProductItems from './ProductItems';
import Title from './Title';

const Relatedproducts = ({category, subCategory}) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);


    useEffect(() => {
        if (products.length > 0) {
          let productsCopy = products.slice();
    
          productsCopy = productsCopy.filter((item) =>
              category === item.category );
          productsCopy = productsCopy.filter((item) =>
              subCategory === item.subCategory );
    
// console.log(productsCopy.slice(0,5))
          setRelated(productsCopy.slice(0, 5));
        }
      }, [products]);
    




  return (
    <div className='my-24 p-4'>
 <div className='text-center text-3xl py-2'>
 <Title text1={'Related'} text2={' Item'} />

 </div>

<div className='grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6'>
{related.map((item, index) => (
            //   <div
            //       key={index}
            //       onClick={() => handleProductClick(item._id)}
            //       className='cursor-pointer transition-transform duration-300 hover:-translate-y-1'
            //   >
                <ProductItems
                key={index}
                    id={item._id}
                    name={item.name}
                    price={item.price}
                    image={item.image[0]}
                />
            //   </div>
          ))}
</div>

    </div>
  )
}

export default Relatedproducts