import React from 'react'
import './dot.css'
function Dot({backcolor}) {
  return (
    <div className='dot'
    style={{backgroundColor:`${backcolor}`}}
    ></div>
  )
}

export default Dot