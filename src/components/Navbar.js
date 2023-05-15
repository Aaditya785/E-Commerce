import { Link } from 'react-router-dom'
import React from 'react'
import '../assets/Navbar.css'
import { useSelector } from 'react-redux';

const Navbar = () => {

  const total = useSelector((state) => state);
  const total1 = total.ecomm.totalProduct;

  return (
    <div className='navbar'>
      <div className='left'>
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className='logo'>Ghadi Wala.com</span>
        </Link>

        
      </div>

      <div className='right'>

        <div style={styles.cartIconContainer}>
          <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png" alt="cart-icon" />
          <span style={styles.cartCount}> {total1} </span>
        </div>

        <span>John Doe</span>
        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='profile-img' />
      </div>
    </div>
  )
}

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20
  },
  nav: {
    height: 70,
    background: '#4267b2',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cartIconContainer: {
    position: 'relative',
    cursor: 'pointer'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '2px 8px',
    position: 'absolute',
    right: 5,
    top: -5
  }
};

export default Navbar