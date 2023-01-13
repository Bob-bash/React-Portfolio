import React ,{useState,useEffect}from 'react'
import { motion } from 'framer-motion'
import { useSelector,useDispatch } from 'react-redux'
import {TbCloudDownload} from 'react-icons/tb'
import Tooltip from '@mui/material/Tooltip';
import './projects.css'
import img1 from '../data/project-1.jpeg'
import img2 from '../data/project-2.jpeg'
import img3 from '../data/project-3.jpeg'
import img4 from '../data/project-4.jpeg'
import img5 from '../data/project-5.jpeg'
import img6 from '../data/project-6.jpeg'
import img7 from '../data/project-7.jpeg'
function Projects() {
  const projectsdata=[
    {img:img1,id:'id1'},
    {img:img2,id:'id2'},
    {img:img3,id:'id3'},
    {img:img4,id:'id4'},
    {img:img5,id:'id5'},
    {img:img6,id:'id6'},
    {img:img7,id:'id7'},
  ]
  const [show, setShow] = useState(false);
  const [imgcon, setImgcon] = useState('');
  const [scale, setscale] = useState(true);
  const [innerw, setInnerw] = useState(0);
  const selected=useSelector(state=>state.selected)
  const dispatch=useDispatch()
  const handleresize=e=>{
    setInnerw(window.innerWidth)
    if(innerw>1024){
      setscale(false)
    }else{
      setscale(true)
    }
  }
  const handlescroll=e=>{
    const timer=setTimeout(() => {
      setShow(false)
    }, 200);
  }
  useEffect(() => {
    window.addEventListener("scroll",handlescroll) 
    return () => {
      window.removeEventListener("scroll",handlescroll)
    };
  }, [show]);
  useEffect(() => {
    setInnerw(window.innerWidth)
    if(innerw>1024){
      setscale(false)
    }else{
      setscale(true)
    }
    window.addEventListener('resize',handleresize)
    return () => {
    window.removeEventListener('resize',handleresize)
    };
  }, [innerw]);
  return (
    <motion.div className='projects' id='projects'
    whileInView={e=>{
      dispatch({type:'SELECTED',payload:'projects'})
    }}
    >
     <div className="projects__top">
        <div className="projects__text">
          <div className="projects__titles">
            <h1 className='skills__h1'>PRO</h1>
            <h1>JECTS</h1>
          </div>
          <div className='skills__line projects__line'></div>
        </div>
        <p className='projects__p'>Aliquam,amet dui feugiat faciisi dui.Aliquam aliquet integer ut fames odio in at.At
        magna ornare dictum lectus.Purus massa morbi purus nec eget eleifend ut elit.
        </p>
     </div>
      <div className="projects__cards">
        <div className="projects__card1 projects__com"><h5>BEAUTIFUL USER<br/>INTERFACES</h5></div>
        {projectsdata.map(item=>(
          <div className="projects__cardw">
              <img 
            src={item.img} 
            alt="" 
            key={item.id}
            className='projects__img'
            onClick={e=>{
              setShow(true)
              setImgcon(item.img)
            }}
            />
          </div>
        ))}
        <div className="projects__card2 projects__com"><h5>SMOOTH USER<br/>EXPERIENCE</h5></div>
        
        {show&&
          <div className="show__imgw">
            <div className="imgw">
              <motion.img 
              src={imgcon} 
              onClick={e=>setShow(false)}
              alt="" 
              className='imgcon'
              initial={{scale:1}}
              transition={{delay:.4,duration:.5,ease:'easeInOut'}}
              whileInView={{scale:scale?3:1.7}}
              />
              <strong 
              style={{
                color:'yellow'
              }}
              >Scroll Or Click To Close Img.</strong>
              <a href="#" download={imgcon} className='projects__download'>
                  <TbCloudDownload/>
              </a>
            </div>
          </div>
        }
      </div>
    </motion.div>
  )
}

export default Projects