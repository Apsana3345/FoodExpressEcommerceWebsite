import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='inline-flex gap-2 items-center justify-start mb-3 '>
<p className='w-2 sm:w-2 h-[22px] sm:h-[25px] bg-[#0D7A57]  rounded-[2px]'></p>
<p className='text-[#0D7A57] text-3xl'>{text1}<span className="text-[#0D7A57] font-medium">{text2}</span></p>


    </div>
  )
}

export default Title