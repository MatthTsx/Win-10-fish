import React from 'react'
import Node from './node'

type tab = {
    name: String,
    href: String
}

function Google() {
    const [view, setView] = React.useState<number>(0)
    const [tabs, setTabs] = React.useState<Array<tab>>([
        {
            name:"Node.js",
            href:"Icons/Node.png"
        }
    ])

  return (
    <div className='h-full w-full bg-white flex flex-col'>
        <div className='w-full h-8 bg-[#dddddd] flex justify-between pt-1'>
            <div className='flex h-full items-center ml-3'>
                {tabs.map((tab, index) => (
                    <div className='flex items-center h-full bg-white w-52 rounded-t-md justify-between' key={index}>
                        <div className='flex items-center h-full px-2 space-x-1'>
                            <div className='_icon w-4 h-4' style={{ backgroundImage: `url(${tab.href})` }}/>
                            <p className='text-[0.8rem] mt-0.5'>{tab.name}</p>
                        </div>
                        <div className='relative w-10 h-full flex items-center justify-center'>
                            <div className='w-2.5 h-0.5 bg-black/60 absolute rotate-45'/>
                            <div className='w-2.5 h-0.5 bg-black/60 absolute -rotate-45'/>
                        </div>
                    </div>
                ))}
            </div>
            {/* TODO: Exit, etc buttons */}
            <div></div>
        </div>
        <div className='w-full h-9 border-b-[1px] shadow-sm flex relative px-5 items-center'>
            <div className='relative flex items-center justify-center opacity-90 mr-8'>
                <div className='absolute w-3 h-0.5 bg-black ml-0.5 rounded-md'/>
                <div className='absolute w-2 h-2 border-b-2 border-l-2 border-black rotate-45'/>
            </div>
            <div className='relative flex items-center justify-center opacity-40 rotate-180 mr-6'>
                <div className='absolute w-3 h-0.5 bg-black ml-0.5 rounded-md'/>
                <div className='absolute w-2 h-2 border-b-2 border-l-2 border-black rotate-45'/>
            </div>
            <div className='w-3 h-3 _icon opacity-90' style={{ backgroundImage: "url(Icons/reload_google.png)" }}/>
            <div className='w-[72rem] mx-4 bg-[#dddddd]/20 rounded-full overflow-hidden flex
            h-7 items-center'>
                {tabs[view]?.name=="Node.js"?
                <p className='text-sm text-neutral-500'>https://<span className='text-black/70'>nodejs.org</span>/en</p>
                :""}
            </div>
        </div>

        {tabs[view]?.name == "Node.js" ?
        <Node/>
        :<div>a</div>}
    </div>
  )
}

export default Google