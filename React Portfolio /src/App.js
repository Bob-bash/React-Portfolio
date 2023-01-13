import './App.css'
import React ,{useEffect,useState}from 'react'
import {Header,Home,Skills,Projects,Test,Contact,Dotbar,Indicator} from './pages'
import { useSelector,useDispatch } from 'react-redux'
function App() {
  return (
    <div className='appw'>
        <Header/>
        <Indicator/>
        <Home/>
        <Skills/>
        <Projects/>
        <Test/>
        <Contact/>
        <Dotbar />
    </div>
    )
}
export default App