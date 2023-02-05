import React from 'react'
import { folders } from '../../constants'

function QuickStart() {
  return (
    <div className='h-full flex flex-col pt-1 space-y-4'>
        <div className='flex items-center space-x-2 flex-nowrap pl-4'>
            <div className='w-2 h-2 -rotate-45 border-b-2 border-l-2 border-black/50 mb-1'/>
            <p className='_folder-text'>Frequent folders (6)</p>
            <div className='w-96 h-[0.0625rem] bg-black/10'/>
        </div>
        <div className='flex w-full ml-8 flex-wrap space-y-2'>
            {folders.map((folder,i) => (
                <div key={i} className={"w-[40%] px-2 py-2 flex space-x-1 bg-blue-500 bg-opacity-0 hover:bg-opacity-20 "}>
                    <div className='w-14 h-14 _icon' style={{ backgroundImage: `url('${folder.href}')` }}/>
                    <div className='flex flex-col -space-y-0.5'>
                        <h2 className='text-sm'>{folder.desc}</h2>
                        <p className='text-sm text-black/60'>This PC</p>
                        <div className='_icon w-3 h-3' style={{ backgroundImage:`url(Icons/pin.png)` }}/>
                    </div>
                </div>
            ))}
        </div>
        <div className='flex items-center space-x-2 flex-nowrap pl-4'>
            <div className='w-2 h-2 -rotate-45 border-b-2 border-l-2 border-black/50 mb-1'/>
            <p className='_folder-text'>Recent Files (1)</p>
            <div className='w-96 h-[0.0625rem] bg-black/10'/>
        </div>
    </div>
  )
}

export default QuickStart