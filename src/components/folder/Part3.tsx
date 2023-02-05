import React from 'react'

function Part3() {
  return (
    <div className='w-full h-8 px-4 flex items-center'>
        <div className='relative flex items-center justify-center opacity-20 mr-8'>
            <div className='absolute w-3 h-0.5 bg-black ml-0.5 rounded-md'/>
            <div className='absolute w-2 h-2 border-b-2 border-l-2 border-black rotate-45'/>
        </div>
        <div className='relative flex items-center justify-center opacity-20 rotate-180 mr-6'>
            <div className='absolute w-3 h-0.5 bg-black ml-0.5 rounded-md'/>
            <div className='absolute w-2 h-2 border-b-2 border-l-2 border-black rotate-45'/>
        </div>
        <div className='w-3 h-full flex items-center justify-center opacity-20 mr-4'>
            <div className='border-b-[1px] border-l-[1px] border-black w-1 h-1 -rotate-45'/>
        </div>
        <div className='relative flex items-center justify-center opacity-60 rotate-90'>
            <div className='absolute w-3 h-0.5 bg-black ml-0.5 rounded-md'/>
            <div className='absolute w-2 h-2 border-b-2 border-l-2 border-black rotate-45'/>
        </div>
        <div className='h-6 w-[55%] mx-4 justify-between
        border-[1px] border-black/20 flex items-center'>
            {/* TODO: FILE PATH */}
            <div className='flex items-center h-full pl-2 space-x-2'>
                <div className='_icon w-4 h-4' style={{ backgroundImage: "url(Icons/google.png)" }}/>
                <div className='w-1.5 h-1.5 -rotate-45 border-b-2 border-r-2 border-black/60'/>
                <p className='text-sm'>Quick access</p>
            </div>

            <div className='flex items-center h-full'>
                <div className='w-2 h-2 -rotate-45 border-b-2 border-l-2 mx-2 border-black/40'/>
                <div className='w-6 h-full flex items-center justify-center border-l-[1px] border-black/20'>
                    <div className='h-3.5 w-3.5 _icon' style={{ backgroundImage:"url('Icons/reload.png')" }}/>
                </div>
            </div>
        </div>
        <div className='h-6 w-56 mx-4 px-2 justify-between
        border-[1px] border-black/20 flex items-center'>
            <p className='text-sm text-black/60'>Search</p>
            <div className='w-5 h-full mb-1 flex items-center justify-center relative'>
                <div className='w-2.5 h-2.5 border-2 rounded-full border-black/50 absolute'/>
                <div className='w-2 h-0.5 -rotate-45 translate-y-1.5 -translate-x-1.5 bg-black/60'/>
            </div>
        </div>
    </div>
  )
}

export default Part3