import React, { Dispatch, SetStateAction } from 'react'
import { Icons } from '../constants'
import win10 from "../../public/Icons/win10.svg"
import bubble from "../../public/Icons/bubble.png"

type PageProps = {
  func: Dispatch<SetStateAction<String[]>>,
  tabs: Array<String>
}

function WindowsBar({func, tabs} : PageProps) {

  return (
    <div className='w-full h-10 bg-[#0c0c0c] flex items-center z-[1000000000] justify-between'>
      <div className='flex'>
        <div className='w-10 h-10 relative flex justify-center items-center group hover:bg-opacity-10 bg-opacity-0 bg-white transition-all'>
          <div className='absolute w-[45%] h-[45%] _icon grayscale group-hover:grayscale-0 _icon transition-all'
          style={{ backgroundImage: `url('${win10.src}')` }}/>
        </div>
        {Icons.map((icon,i) => (
            <div className='w-10 h-10 relative flex justify-center items-center
            hover:bg-opacity-10 bg-opacity-0 bg-white transition-all' key={i}>
              <div className='absolute w-[55%] h-[55%] _icon'
              style={{
                backgroundImage: `url('${icon.href}')`
              }}/>
            </div>
        ))}
      </div>
              {/* h-[14px] w-[17px] */}
      <div className='flex items-center'>

        <div className='flex border-r-[1px] h-10 mr-1 border-neutral-500 items-center px-4 justify-center
        _icon-parent'>
          <div className='h-[17px] w-[17px] _icon'
          style={{
            backgroundImage: `url('${bubble.src}')`
          }}/>
        </div>
      </div>
    </div>
  )
}

export default WindowsBar