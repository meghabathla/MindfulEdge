import  { useEffect, useState } from 'react'

const DigitalClock = () => {
    
    const [currentTime, setCurrentTime] =useState(new Date().toLocaleTimeString([], 
      { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }))

    const updateTime=()=>{
      const time= new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
      setCurrentTime(time)
    }
    useEffect(()=>{
        const timer= setInterval(updateTime , 1000)
       return ()=> clearInterval(timer)
    },[])
  return (
    <h1>{currentTime}</h1>
  )
}

export default DigitalClock