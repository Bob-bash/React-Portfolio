import React from 'react'
import './home.css'
import brush from '../data/brush.png'
import { motion } from 'framer-motion'
import {AiOutlineInstagram} from 'react-icons/ai'
import {TbBrandTwitter} from 'react-icons/tb'
import {BsFacebook} from 'react-icons/bs'
import { useSelector,useDispatch } from 'react-redux'
import {RiBasketballLine} from 'react-icons/ri'
import profile from '../data/profile-image.png'
function Home() {
  const selected=useSelector(state=>state.selected)
  const dispatch=useDispatch()
  return (
    <motion.div className='home' id='home'
    whileInView={e=>{
      dispatch({type:'SELECTED',payload:'home'})
    }}
    >
      <div className="home__left">
        <div className="home__titles">
          <h1>Jane</h1>
          <div className='home__h1w'>
            <h1 className='home__h1'>Esper</h1>
            <img src={brush} alt="" className='home__img1'/>
          </div>
        </div>
        <p className='home__p'>Adipiscing arcu,in aliquanm fringilla cursus.elit arc elementum viverra malesuada sem ac
        faucibus dolor.Sagittis scelerisque.
        </p>
        <div className="home__btns">
          <button type='submit' className='home__btn1 home__btn__com'>Contact Me</button>
          <div className="home__btnw">
            <button type='submit' className='home__btn2 home__btn__com'>Let's talk.</button>
          </div>
        </div>
        <div className="home__icons">
          <div className="home__iconw">
            <AiOutlineInstagram className='home__icon'/>
          </div>
          <div className="home__iconw ">
            <TbBrandTwitter className='home__icon'/>
          </div>
          <div className="home__iconw">
            <BsFacebook className='home__icon'/>
          </div>
          <div className="home__iconw">
            <RiBasketballLine className='home__icon'/>
          </div>
        </div>
      </div>
      <div className="home__right">
        <div className="home__frame"></div>
        <img src={profile} alt="" className='home__img2'/>
      </div>
    </motion.div>
  )
}

export default Home