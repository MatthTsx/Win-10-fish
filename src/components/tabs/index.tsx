import React from 'react'
import Folder from './folder'

interface props{
  type: String,
  selected: String,
}

function Tab({type, selected} : props) {
  return (
    <div className={`absolute ${selected == type && 'z-[10000]'} h-full w-full`}>
      {type == "folder"?
      <Folder/>
      :<div className='w-full h-full bg-blue-500'>aaa</div>}
    </div>
  )
}

export default Tab