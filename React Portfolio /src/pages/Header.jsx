import React from 'react'
import './header.css'
import {useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { motion } from 'framer-motion'
function Header() {
  const links=[
    {href1:'home',content:'Home'},
    {href1:'skills',content:'Skills'},
    {href1:'projects',content:'Projects'},
    {href1:'test',content:'Testimonials'},
    {href1:'contact',content:'Contact'}
  ]
  const [backshow, setBackshow] = useState(false);
  const selected=useSelector(state=>state.selected)
  const dispatch=useDispatch()
  const [locationinfo, setLocationinfo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(process.env.REACT_APP_API_KEY)
    .then(res=>res.json())
    .then(data=>setLocationinfo(data))
    .catch(e=>console.log(e))
    .finally(e=>setLoading(false))
  }, [selected]);
  return (
    <div className='header'
    style={{
    backgroundColor:backshow?'rgba(194,61,128,255)':'rgba(1,1,35,255)',
  }}
    >
      <div className="headerw">
        <a href="#home" className='header__logo'>JE - 
        {loading?<div className="loader repeat"></div>:<motion.span
        initial={{opacity:0}}
        transition={{duration:1}}
        whileInView={{opacity:1}}
        >{locationinfo?.location?.region}</motion.span>}
        </a>
        <div className="header__links">
          {links.map(item=>(
            <a href={`#${item.href1}`}
            style={{
              color:selected==item.href1?'rgba(169,154,112,255)':'white',
              fontWeight:selected==item.href1?'800':'400'
            }}
            onClick={e=>{
              dispatch({type:'SELECTED',payload:item.href1})
              // setselected(item.href1)
              setBackshow(true)
            }}
            key={item.content}
            className='link'
            >{item.content}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header