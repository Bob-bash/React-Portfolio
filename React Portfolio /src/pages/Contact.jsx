import React from 'react'
import './contact.css'
import img from '../data/contact-image.jpeg'
import { useSelector,useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
function Contact() {
  const selected=useSelector(state=>state.selected)
  const dispatch=useDispatch()
  return (
    <motion.div className='contact' id='contact'
    whileInView={e=>{
      dispatch({type:'SELECTED',payload:'contact'})
    }}
    >
      <img src={img} alt=""  className='contact__img'/>
      <div action="" className="contact__right">
        <div className="contact__text">
          <div className="contact__titles">
            <h2 className='contact__h1'>CONTACT ME</h2>
            <h2>TO GET STARTED</h2>
          </div>
          <div className="skills__line contact__line"></div>
        </div>
        <form action="" className="contact__form">
          <input type="text" placeholder='NAME' className='in'/>
          <input type="text" placeholder='EMAIL' className='in'/>
          <textarea name="" id="" cols="30" rows="5" className='area in' placeholder='MESSAGE'></textarea>
          <button type='submit' className='contact__btn'>SEND ME A MESSAGE</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact