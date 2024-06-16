import React from 'react'
import { Link } from 'react-router-dom'
import log from '../Logo/logo.svg'
import log2 from '../Logo/cart-outlined.svg'
import log3 from '../Logo/heart.svg'
import log4 from '../Logo/search.svg'
import log5 from '../Logo/Vector.svg'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='section'>
        <img src={log} alt="" />
        <nav className='sectionnav'>
             <li><Link className='figure' to="/">Home</Link></li> 
             <li><Link className='figure' to="/shop">Shop</Link></li>   
             <li><Link className='figure' to="/about">About</Link></li>   
             <li><Link className='figure' to="/contact">Contact</Link></li>   
              
        </nav>
        <div className='sectionicon'>
          <img src={log5} alt="" />
          <img src={log4} alt="" />
          <img src={log3} alt="" />
          <img src={log2} alt="" />
        </div>

    </div>
  )
}

export default Navbar