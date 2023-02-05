import React from 'react'
import { NodeTexts, NodeTerms } from '../../constants'

function Node() {
  return (
    <div className='flex flex-col h-full w-full'>
        <div className='flex items-center justify-between w-full h-12 bg-[#333333] px-4'>
            <div className=' w-24 h-7 _icon' style={{ backgroundImage: "url(Icons/NodeLogo.png)" }}/>
            <div className='flex'>
                {NodeTexts.map((node,i) => (
                    <p key={i} className={`px-3 uppercase text-xs h-4 text-white/80 border-l-[1px]
                    border-white/40 ${i==0 && 'border-l-0'}`}>{node}</p>
                ))}
            </div>
            <div>aaadwad</div>
        </div>
        <div className="w-full h-[30rem] flex justify-center pt-8">
            <div className='flex flex-col w-[37rem] items-center space-y-6'>
                <p className='text-lg'>Node.js is an open-source, cross-platform JavaScript runtime environment</p>
                <div className='w-full flex flex-col items-center space-y-3'>
                    <p className='text-3xl'>Download for Windows (x64)</p>
                    <div className='w-full flex justify-evenly'>
                        <div className='w-[45%]'>
                            <div className='w-[90%] h-24 bg-green-700 rounded-md outline-3 hover:bg-[#619651]
                            transition-all flex flex-col items-center justify-center'>
                                <h1 className='text-white text-2xl'>18.14.0 LTS</h1>
                                <p className='text-white text-sm translate-y-2'>Recommended For Most Users</p>
                            </div>
                            <div className='flex items-center justify-between w-[90%] my-3'>
                                <p className='text-xs text-green-900/70 hover:underline cursor-pointer'>Other Downloads</p>
                                <p className='text-xs text-green-900/70 hover:underline cursor-pointer border-x-[1px] px-2
                                border-black/40'>Changelog</p>
                                <p className='text-xs text-green-900/70 hover:underline cursor-pointer'>API Docs</p>
                            </div>
                        </div>
                        <div className='w-[45%]'>
                            <div className='w-[90%] h-24 bg-green-700 rounded-md outline-3 hover:bg-[#619651]
                            transition-all flex flex-col items-center justify-center'>
                                <h1 className='text-white text-2xl'>19.6.0 Current</h1>
                                <p className='text-white text-sm translate-y-2'>Latest Features</p>
                            </div>
                            <div className='flex items-center justify-between w-[90%] my-3'>
                                <p className='text-xs text-green-900/70 hover:underline cursor-pointer'>Other Downloads</p>
                                <p className='text-xs text-green-900/70 hover:underline cursor-pointer border-x-[1px] px-2
                                border-black/40'>Changelog</p>
                                <p className='text-xs text-green-900/70 hover:underline cursor-pointer'>API Docs</p>
                            </div>
                        </div>
                    </div>
                    <p className='text-lg'>For information about supported releases, see the <span className='text-green-600'>release schedule</span>.</p>
                </div>
            </div>
        </div>
        <div className='w-full h-[10rem] bg-[#333333] flex items-center justify-center flex-col'>
            <p className='w-[70%] text-xs text-white/90 first-letter:ml-5'>
            Copyright <span className='text-blue-300'>OpenJS Foundation</span> and Node.js contributors. All rights reserved. The <span className='text-blue-300'>OpenJS Foundation</span> has registered trademarks and uses trademarks. For a list of trademarks of the <span className='text-blue-300'>OpenJS Foundation</span>, please see our <span className='text-blue-300'>Trademark Policy</span> and <span className='text-blue-300'>Trademark List</span>. Trademarks and logos not indicated on the <span className='text-blue-300'>list of OpenJS Foundation trademarks</span> are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
            </p>
            <div className='flex w-full items-center justify-center my-4'>
                {NodeTerms.map((term,i) => (
                    <p key={i} className={`text-blue-300 text-sm border-l-[1px] px-1 border-white/60
                    ${i==0 && 'border-l-0'}`}>{term}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Node