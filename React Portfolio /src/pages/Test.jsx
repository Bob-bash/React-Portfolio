import React from 'react'
import './test.css'
import {Testcard} from '../components'
import img1 from '../data/person-1.png'
import img2 from '../data/person-2.png'
import { useSelector,useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import img3 from '../data/person-3.png'
function Test() {
  const selected=useSelector(state=>state.selected)
  const dispatch=useDispatch()
  const testdata=[
    {img:img1,des:'A auctor pharetra hendrerit mattis amet etiam interdum platea.',backcolor:'rgba(42,189,233,255)'},
    {img:img2,des:'A auctor pharetra hendrerit mattis amet etiam interdum platea.',backcolor:'rgba(221,70,146,255)'},
    {img:img3,des:'A auctor pharetra hendrerit mattis amet etiam interdum platea.',backcolor:'rgba(251,206,72,255)'},
  ]
  return (
    <motion.div className='test' id='test'
    whileInView={e=>{
      dispatch({type:'SELECTED',payload:'test'})
    }}
    >
      <div className="test__top">
        <div className="test__texts">
          <h1 className='skills__h1'>TESTMONIALS</h1>
          <div className="skills__line test__line"></div>
        </div>
        <p className="test__des home__p">
          Here's What People are Saying About My Work.Aliquam aliquet integer
          ut fames odio in at.At magna ornare diclum lectus.
        </p>
      </div>
      <div className="test__cards">
        {testdata.map(item=>(
          <Testcard img={item.img} des={item.des} backcolor={item.backcolor}/>
        ))}
      </div>
    </motion.div>
  )
}

export default Test