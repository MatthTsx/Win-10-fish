import React from 'react'

function Exit() {
  return (
    <div className='relative w-12 h-full bg-[#ff3d3d] flex justify-center transition-all items-center
    hover:bg-opacity-100 bg-opacity-0 duration-100'>
        <div className='w-4 h-[0.0625rem] absolute rotate-45 bg-black'/>
        <div className='w-4 h-[0.0625rem] absolute -rotate-45 bg-black'/>
    </div>
  )
}

export default Exit