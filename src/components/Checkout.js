import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../assets/Checkout.css";

export const Checkout = () => {
  const [logged, setLogged] = useState(localStorage.getItem('loggedIn') === 'true');
  const [loginInput, setLoginInput] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginInput) {
      localStorage.setItem('loggedIn', 'true');
      setLogged(true);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setLogged(false);
    navigate("/");
  };

  return (
    <>
    <div className='checkoutmain'>
      <h1>Checkout</h1>
      {logged ? (
        <>
          <h1>You Cart Item Delivered Successfully...</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <input
            type="text"
            value={loginInput}
            onChange={(e) => setLoginInput(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
      </div>
    </>
  );
};
