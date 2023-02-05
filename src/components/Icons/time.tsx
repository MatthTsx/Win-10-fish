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
            const minutes = data.getMinutes() >= 10? data.getMinutes().toString() : "0" + data.getMinutes().toString()
            const hora = data.getHours() >= 12? (data.getHours() - 12).toString() : data.getHours().toString()
            const pm_am = data.getHours() >= 12? "PM" : "AM"
            const time = hora +":"+ minutes + " " + pm_am
            const day = array_day[2]?.toString() +"-"+ array_day[1]?.toString() +"-"+ array_day[3]?.slice(2).toString()

            setDate({time, day})
        })
    })

  return (
    <div className='h-10 w-16 flex flex-col items-center justify-between py-0.5 pb-1 _icon-parent'>
        <p className='_time-text'>{date?.time}</p>
        <p className='_time-text'>{date?.day}</p>
    </div>
  )
}

export default Time