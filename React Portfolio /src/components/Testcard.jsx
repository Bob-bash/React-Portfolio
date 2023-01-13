import React from 'react'
import './testcard.css'
function Testcard({img,des,backcolor}){
  return (
    <div className='testcard'>
        <img src={img} alt="" className='testcard__img'/>
        <div className="testcard__con"
        style={{backgroundColor:`${backcolor}`}}
        >
            <strong className='testcard__bold'>"</strong>
            <p className='s'>{des}</p>
        </div>
    </div>
  )
}

export default Testcard 