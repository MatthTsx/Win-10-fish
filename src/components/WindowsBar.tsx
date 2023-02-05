import React, { Dispatch, SetStateAction } from 'react'
import { Icons } from '../constants'
import win10 from "../../public/Icons/win10.svg"
import bubble from "../../public/Icons/bubble.png"
import search from '../../public/Icons/search.png'
import net from "../../public/Icons/net2.png"
import som from "../../public/Icons/som.png"
import energy from "../../public/Icons/energy.png"
import {Lang, LittleIcon, Time} from './Icons/'
import { tabs } from '../pages'

type PageProps = {
  func: Dispatch<SetStateAction<tabs>>,
  tabs: tabs,
  select: Dispatch<SetStateAction<String>>,
}

function WindowsBar({func, tabs, select} : PageProps) {


  function Tab(tab_name: string){
    select(tab_name)
    if(tabs.some(tab => tab.name == tab_name)){
      return
    }

    func([...tabs, {name: tab_name, maxed: true}])
    console.log("adicionado")
  }

  return (
    <div className='w-full h-10 bg-[#0c0c0c] flex items-center z-[1000000000] justify-between'>
      <div className='flex'>
        <div className='w-12 h-10 relative flex justify-center items-center group hover:bg-opacity-10 bg-opacity-0 bg-white transition-all'>
          <div className='absolute w-[40%] h-[40%] _icon grayscale group-hover:grayscale-0 _icon transition-all'
          style={{ backgroundImage: `url('${win10.src}')` }}/>
        </div>
        <div className={"h-10 w-80 bg-white flex items-center px-4 space-x-3"}>
          <div className='_icon w-4 h-4' style={{
            backgroundImage: `url('${search.src}')`
          }}/>
          <p className='cursor-default text-black/60 tracking-tight text-[15px]'>Type here to search</p>
        </div>

        {Icons.map((icon,i) => (
            <div className='_icon-parent-full' key={i}
            onClick={() => {
              if(!icon.tab) return
              Tab(icon.tab)
            }}
            >
              {icon.tab && tabs.some(tab => tab.name == icon.tab) &&
              <div className='bg-white/50 w-[80%] h-0.5 rounded-full absolute bottom-0'/>
              }
              <div className='absolute w-6 h-6 _icon'
              style={{
                backgroundImage: `url('${icon.href}')`
              }}/>
            </div>
        ))}
      </div>
              {/* h-[14px] w-[17px] */}
      <div className='flex items-center  flex-row-reverse'>

        <div className='flex border-r-[1px] h-10 mr-1 border-neutral-500 items-center px-4 justify-center
        _icon-parent'>
          <div className='h-[17px] w-[17px] _icon'
          style={{
            backgroundImage: `url('${bubble.src}')`
          }}/>
        </div>
        
        <Time/>
        <Lang/>
        <LittleIcon url={som.src}/>
        <LittleIcon url={net.src}/>
        <LittleIcon url={energy.src}/>

      </div>
    </div>
  )
}

export default WindowsBar