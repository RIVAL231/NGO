import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <img id='navbar-logo' src='img2.png' />
        <ul id='navbar-menu'>
            <li ><a className='link'>Welcome</a></li>
            <li ><a className='link'>About Us</a></li>
            <li ><a className='link'>Our Projects</a></li>
           
            <li ><a className='link'>Contact</a></li>
            <li ><a className='link'>Donate Now</a></li>
           
       </ul>
       </div>
  )
}
export default Navbar;