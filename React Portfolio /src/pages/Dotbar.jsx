import React from 'react'
import './dotbar.css'
import {Dot} from '../components'
import { useSelector,useDispatch } from 'react-redux'
function Dotbar() {
    const dotbar=[
        {id:0,name:'home'},
        {id:1,name:'skills'},
        {id:2,name:'projects'},
        {id:3,name:'test'},
        {id:4,name:'contact'},
    ]
    const selected=useSelector(state=>state.selected)
    const dispatch=useDispatch()
  return (
    <div className='dotbar'>
            {dotbar.map(item=>(
                <a className="dotw"
                href={`#${item.name}`}
                style={{outline:selected==item.name?'2px solid yellow':'none'}}
                onClick={e=>dispatch({type:'SELECTED',payload:item.name})}
                >
                    <Dot key={`${item.id}__id1`}
                    backcolor={selected==item.name?'yellow':'gray'}
                    />
                </a>
            ))}
    </div>
  )
}

export default Dotbar