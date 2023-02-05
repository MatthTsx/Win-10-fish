import React from 'react'
import FullScreen from '../buttons/fullScreen'
import Minimize from '../buttons/Minimize'
import Exit from '../buttons/X'
import Part3 from '../folder/Part3'
import Part4 from '../folder/Part4'

function Folder() {
  return (
    <div className={`w-[50rem] h-[35rem] bg-white flex
    relative top-12 left-32 flex-col border-2 border-blue-500/20`}>
        <div className='w-full h-8 flex justify-between items-center'>
            <div className='flex h-full items-center space-x-3'>
                <div className='w-9 h-4 flex justify-center items-center border-r-[1px] border-black/40'>
                    <div className='_icon w-5 h-5' style={{ backgroundImage: "url('/Icons/folder.png')" }}/>
                </div>
                <div className='_icon w-4 h-4' style={{ backgroundImage: "url('/Icons/file1.png')" }}/>
                <div className='_icon w-4 h-4' style={{ backgroundImage: "url('/Icons/file2.png')" }}/>
                <div className='w-24 h-4 flex justify-center items-center border-l-[1px] border-black/40'>
                    <p className='text-xs font-semibold tracking-tight w-20 break-keep text-black/70'>File Explorer</p>
                </div>
            </div>
            <div className='h-full flex items-center'>
                <Minimize/>
                <FullScreen/>
                <Exit/>
            </div>
        </div>
        <div className='w-full  border-b-[1px] border-black/20 drop-shadow-2xl h-7 flex justify-between items-center'>
            <div className='h-full flex items-center'>
                <p className='text-xs text-white bg-blue-500 h-full flex items-center w-16 justify-center'>File</p>
                <p className='text-xs h-full flex items-center w-16 justify-center'>Home</p>
                <p className='text-xs h-full flex items-center w-16 justify-center'>Share</p>
                <p className='text-xs h-full flex items-center w-16 justify-center'>View</p>
            </div>
            <div className='px-2 flex flex-row-reverse h-full items-center'>
                <div className='_icon w-4 h-4' style={{ backgroundImage: "url('/Icons/interrogation.png')" }}/>
                <div className='w-8 h-full flex items-center justify-center pb-0.5'>
                    <div className='border-b-2 border-l-2 border-black/20 w-2 h-2 -rotate-45'/>
                </div>
            </div>
        </div>
        <Part3/>
        <Part4/>
    </div>
  )
}

export default Folder