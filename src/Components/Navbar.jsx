import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/" className='nav-link'>Home</NavLink>
        <NavLink to="/Contact" className='nav-link'>Contact</NavLink>
        <NavLink to="/Blogs" className='nav-link'>Blogs</NavLink>
    </nav>
  )
}

export default Navbar
