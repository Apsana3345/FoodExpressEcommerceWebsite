import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='w-full  max-w-screen-2xl mx-auto lg:px-8'>
    {children}
  </div>
  )
}

export default Wrapper
