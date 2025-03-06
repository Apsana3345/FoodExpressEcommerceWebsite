import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify';
import Wrapper from './layout/Wrapper';



const Login = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            // console.log(email,password)

            // Make api call for authentication
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
            // console.log(response)

            // when login successful, store token in local storage
            if (response.data.success) {
                setToken(response.data.token)
            } else {
                toast.error(response.data.message)
            }
        }
        catch (error) {
            console.log(error)
            toast.error(error.
                // response?.data?.
                message || 'An error occurred')
        }
    }

    return (
        <Wrapper>
        <div className='min-h-screen flex items-center justify-center w-full'>
            <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md '>
                <h1 className='text-2xl text-[#0D7A57] font-bold mb-4'>Admin Panel</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p>Email Address</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-400 outline-none' type="email" placeholder="Enter your email" required />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p>Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-400 outline-none' type="password" placeholder="Enter your password" required />
                    </div>
                    <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-[#0D7A57]' type="submit"  > Login </button>

                </form>
            </div>
        </div>
        </Wrapper>
    )
}

export default Login
