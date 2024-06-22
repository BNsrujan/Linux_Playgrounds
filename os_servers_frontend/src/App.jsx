import React from 'react'
import {Nav,Profile} from './components'
import {BrowserRouter}from "react-router-dom"
import {styles}from './style'


const  App = () => {
  return (
    <BrowserRouter>
    <div className='relative  bg-white '>
      <Nav className=" fixed z-10  "/>
      <Profile className=" bg-primary"/>
    
      </div>
  
  </BrowserRouter>
  )
}

export default App