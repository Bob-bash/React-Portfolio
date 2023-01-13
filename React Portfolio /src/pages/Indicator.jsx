import React,{useState,useEffect}from 'react'
import './indicator.css'
function Indicator() {
    const [scrolly, setscrolly] = useState(0);
    const [ratio, setRatio] = useState(0);
    const [swidth, setSwidth] = useState(0);
    const handlescroll=e=>{
        setSwidth(window.innerWidth)
        setscrolly(window.scrollY)
        if(scrolly==0){
            setRatio(0)
        }
        setRatio(scrolly/(window.innerHeight*4.1))
    }
    const handleresize=e=>{
        handlescroll()
    }
    useEffect(() => {
        window.addEventListener('scroll',handlescroll)
        window.addEventListener("resize",handleresize)
        return () => {
            window.removeEventListener('scroll',handlescroll)
            window.removeEventListener("resize",handleresize)
        };
    }, [scrolly]);
  return (
    <div className='indicator'
    style={{width:`${ratio*swidth}px`}}
    ></div>
  )
}

export default Indicator