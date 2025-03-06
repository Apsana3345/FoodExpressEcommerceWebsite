import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import { useEffect } from 'react';





const Verify = () => {

    const {navigate,token,setCartItems,backendUrl} = useContext(ShopContext);
    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    const verifyPayment = async () =>{
    try {
    
        if(!token){
            return null
        }
        const response = await axios.post(
            backendUrl + '/api/order/verifyStripe',
            { success, orderId },
            { headers: { token } }
        );
        
        if (response.data.success) {
            setCartItems({});
            navigate('/orders');
        }
        else{
            navigate('/cart');
        }
    } catch (error) {
        console.error(error);
        toast.error(error.message);
    }
    
    
    }
    useEffect(() => {
                if (token) {
                    verifyPayment();
                }
            }, [token]);
    

return (


    <div>
 
      
    </div>
)


//     const {navigate,token,setCartItems,backendUrl} = useContext(ShopContext);
//     const [searchParams,setSearchParams] = useSearchParams();

//     const success = searchParams.get('success');
//     const orderId = searchParams.get('orderId');

//     const verifyPayment = async () => {
//         try {
//             if (!token) {
//                 toast.error('Authentication required');
//                 navigate('/login');
//                 return;
//             }

//             if (!orderId) {
//                 toast.error('Invalid order information');
//                 navigate('/cart');
//                 return;
//             }

//             const response = await axios.post(
//                 backendUrl + '/api/order/verifyStripe',
//                 { success, orderId },
//                 { headers: { token } }
//             );

//             if (response.data.success) {
//                 setCartItems({});
//                 toast.success('Payment successful!');
//                 // Add a small delay to ensure the order is saved
//                 setTimeout(() => {
//                     navigate('/orders');
//                 }, 1500);
//             } else {
//                 toast.error(response.data.message || 'Payment verification failed');
//                 navigate('/cart');
//             }
//         } catch (error) {
//             console.error('Payment verification error:', error);
//             toast.error(error.response?.data?.message || 'Failed to verify payment');
//             navigate('/cart');
//         }
//     }

//     useEffect(() => {
//         if (token) {
//             verifyPayment();
//         }
//     }, [token]);
    

//   return (
//     <div>
     
//     </div>
//   )
}

export default Verify
