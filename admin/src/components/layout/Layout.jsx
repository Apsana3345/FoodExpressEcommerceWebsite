import React from 'react'
import Navbar from '../Navbar'

const Layout = ({children,setToken}) => {
  return (
    <div className='flex flex-col min-h-screen'>
   <Navbar setToken={setToken}  />
   <hr className='border border-gray-300' />
    
    <main className='flex-1'>
      {children}
    </main>
    
  </div>
  )
}

export default Layout