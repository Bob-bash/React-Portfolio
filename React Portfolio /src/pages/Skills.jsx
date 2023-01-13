import React from 'react'
import './skills.css'
import {Skillscard} from '../components'
import contactimg from '../data/contact-image.jpeg'
import { useSelector,useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
function Skills() {
  const selected=useSelector(state=>state.selected)
  const dispatch=useDispatch()
  const skillsdata=[
    {title1:'01',title2:'Experience',backcolor:'rgba(42,189,233,255)',
    des:'A aucotr pharetra mattis amet etiam interdum platea.Est morbi porttitor ssceierisque fermentum,sagittis non eggestas.Amet odio sit sagittis.'},
    {title1:'02',title2:'Innovative',backcolor:'rgba(221,70,146,255)',
    des:'A aucotr pharetra mattis amet etiam interdum platea.Est morbi porttitor ssceierisque fermentum,sagittis non eggestas.Amet odio sit sagittis.'},
    {title1:'03',title2:'Imaginative',backcolor:'rgba(251,206,72,255)',
    des:'A aucotr pharetra mattis amet etiam interdum platea.Est morbi porttitor ssceierisque fermentum,sagittis non eggestas.Amet odio sit sagittis.'},
  ]
  return (
    <motion.div className='skills' id='skills'
    whileInView={e=>{
      dispatch({type:'SELECTED',payload:'skills'})
    }}
    >
      <div className="skills__top">
        <div className="skills__topl">
          <div className="skills__tw">
            <div className="skills__titles">
              <h1>MY</h1>
              <h1 className='skills__h1'>SKILLS</h1>
            </div>
            <div className="skills__line"></div>
          </div>
          <p className="home__p skills__p">
            Aliquam,amet dui feugiat faciisi dui.Aliquam aliquet 
            integer fames odio in at.
          </p>
        </div>
        <div className="skills__topr">
          <div className="skills__frame"></div>
          <img src={contactimg} alt="" className='skills__img1'/>
        </div>
      </div>
      <div className="skills__bottom">
        {skillsdata.map(item=>(
              <Skillscard 
              t1={item.title1} 
              t2={item.title2} 
              des={item.des} 
              backcolor={item.backcolor}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Skills