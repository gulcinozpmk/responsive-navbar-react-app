import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { MdAutoGraph } from "react-icons/md";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
        
        <Link to="/" className="title">
            <MdAutoGraph className='icon'/>
            Brand Name
        </Link>

        <div className="menu" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        
        <ul className={isOpen ? "open" : ""}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="contact">Contact Us</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar