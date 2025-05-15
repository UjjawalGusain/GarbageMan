import React from 'react'
import "./Navbar.css"
import { CiCirclePlus } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <header>
        <div className='top-header'>
            <div className='icon add'><CiCirclePlus size="1.5em"/></div>
            <div className='title'><h3>Explore</h3></div>
            <div className='icon settings'><IoSettingsOutline size="1.5em"/></div>
        </div>
        
        <div className='thought'>
            <p>A doctor a day, keeps an apple away!</p>
        </div>
    </header>
  )
}

export default Navbar