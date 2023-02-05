import React, { useEffect } from 'react'
import { sleep } from '../../utils/scripts'

type time = {
    time: string,
    day: string
}

function Time() {
    const [date, setDate] = React.useState<time>()

    useEffect(() => {
        sleep(10000).then(() => {
            const data = new Date(Date.now())
            const array_day = data.toDateString().split(" ")

            const time = data.getHours().toString() +":"+ data.getMinutes().toString()
            const day = array_day[2]?.toString() +"-"+ array_day[1]?.toString() +"-"+ array_day[3]?.slice(2).toString()

            setDate({time, day})
        })
    })

  return (
    <div className='h-10 w-16 flex flex-col items-center justify-between py-0.5 pb-1 _icon-parent'>
        <p className='_time-text'>{date?.time} AM</p>
        <p className='_time-text'>{date?.day}</p>
    </div>
  )
}

export default Time