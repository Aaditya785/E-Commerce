// import React, { useContext } from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
// import { ShopContext } from "../../context/shop-context";
import { addTotalAmount, addToTotal } from '../redux/reducer';

export const Product = (props) => {
  const [click, setClick] = useState("true");
  const { id, title, price, img } = props.data;
  //   const { addToCart, cartItems } = useContext(ShopContext);
  // console.log(id + title + added+"....")

  const dispatch = useDispatch();
  // const cartItemCount = cartItems[id];
  function handleClick(){
    dispatch(addTotalAmount(id));
    dispatch(addToTotal());
    setClick(!click);
  }

  return (
    <div className="product">
      <Link to={`/product/${id}`} className="product-link">
      <img src={img} alt="product img" />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p> ${price}</p>
      </div>
      </Link>
      
        {click?(<button className="addToCartBttn" onClick={handleClick} >Add To Cart</button>):(<button className="addToCartBttn" title='Go To Cart'>Added</button>)}
      
    </div>
  );
};
