import React from 'react'
import './skillscard.css'
function Skillscard({t1,t2,des,backcolor}) {
  return (
    <div className='skillcard'>
        <div className="skillcard__top">
            <div className="skillcard__ts">
                <h1>{t1}</h1>
                <h2>{t2}</h2>
            </div>
            <div className="skillcard__topcolor" 
            style={{
                backgroundColor:`${backcolor}`,
                width:'160px',
                height:'75px'
            }}  
            ></div>
        </div>
       <p className='skillcard__p'>{des}</p>
    </div>
  )
}

export default Skillscard