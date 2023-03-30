import React from 'react'
import '../assets/Navbar.css'

const Navbar = () => {


  return (
    <div className='navbar'>
        <div className='left'>
            <span className='logo'>E-Commerce</span>
            <span>Products</span>
            <span>Add a product |+|</span>
        </div>

        <div className='right'>
            <span>John Doe</span>
            <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='profile-img'/>
        </div>
    </div>
  )
}

export default Navbar