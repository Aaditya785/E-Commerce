import { Link } from 'react-router-dom'
import React from 'react'
import '../assets/Navbar.css'

const Navbar = () => {


  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" style={{textDecoration:"none"}}>
          <span className='logo'>E-Commerce</span>
        </Link>

        <Link to="/addProduct" >
          <button>Add a product ➕</button>
        </Link>
      </div>

      <div className='right'>
        <span>John Doe</span>
        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='profile-img' />
      </div>
    </div>
  )
}

export default Navbar