import React, { useContext } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'

const Carttotal = () => {
    const {currency,delivery_fee,getCartAmount } = useContext(ShopContext)


  return (
    <div className='w-full border border-gray-300 p-3 rounded'>
        <div className='text-2xl'>
            <Title text1={"Cart"} text2={"Totals"} />

        </div>

<div className="flex flex-col gap-2 mt-2 text-sm">
    <div className="flex justify-between">
        <p>Subtotal</p>
        <p>{currency}{getCartAmount()}.00</p>
    </div>
    <hr className=' border-0.2  border-gray-400' />
<div className="flex justify-between">

<p>Shipping Fee</p>

<p>{currency}{delivery_fee}.00</p>

</div>
<hr className='border-0.2  border-gray-400' />
<div className="flex justify-between">
   <b>Total</b> 
   <b>Currency{getCartAmount()===0?0:getCartAmount()+delivery_fee}.00 </b> 
</div>



</div>



    </div>
  )
}

export default Carttotal