import React from 'react'
import Folder from './folder'
import Google from './google'

interface props{
  type: String,
  selected: String,
}

function Tab({type, selected} : props) {
  return (
    <div className={`absolute ${selected == type && 'z-[10000]'} h-full w-full`}>
      {type == "folder"?
      <Folder/>
      :<Google/>}
    </div>
  )
}

export default Tab