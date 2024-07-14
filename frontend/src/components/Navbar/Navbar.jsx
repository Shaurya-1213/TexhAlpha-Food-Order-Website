import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

     const [menu, setMenu] = useState("menu")

  return (
    <div className='navbar'>
      <Link to='/'> <h1 className='main-title'>Foodies</h1></Link>
      <ul className="navbar-menu">
      <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
      <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
      <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search_icon">
          <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
          <div className="dot"></div>
        </div>
          <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar