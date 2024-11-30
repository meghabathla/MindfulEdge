import React from 'react'
import { IoMdSettings } from "react-icons/io";

const Footer = () => {
  return (
    <div className='footer'>
        <div className='settings_section'>
        <IoMdSettings  style={{color: 'rgb(238, 229, 229)'}} size={20}/>
          <div>Unsplash</div>
        </div>
        <div className='qoutes_section'>"There is never enough time to do everything, but there is always enough time to do the most important thing.”</div>
        <div className='task_section'>Tasks</div>
    </div>
  )
}

export default Footer
