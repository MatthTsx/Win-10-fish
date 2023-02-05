import React from 'react'

function LittleIcon({url}:{url: string}) {
  return (
    <div className='w-6 pt-1 h-10 relative flex justify-center items-center px-1
    hover:bg-opacity-10 bg-opacity-0 bg-white transition-all'>
        <div className='_icon h-4 w-4'
        style={{ backgroundImage: `url('${url}')` }}/>
    </div>
  )
}

export default LittleIcon