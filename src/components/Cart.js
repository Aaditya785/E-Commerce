// import React, { useContext } from "react";
// import { ShopContext } from "../../context/shop-context";
// import { PRODUCTS } from "../../products";
import {  useSelector } from 'react-redux';
// import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "../assets/Cart.css";
import { CartItem } from "./CartItem";
export const Cart = () => {
  // const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  // const totalAmount = getTotalCartAmount();
  const total = useSelector((state) => state);
  

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {total.ecomm.data.map((product) => {
          return <CartItem data={product} />;
          // if (cartItems[product.id] !== 0) {
          //   return <CartItem data={product} />;
          // }
        })}
      </div>

      { false?
        (<div className="checkout">
          <div className="subtotal">
          <h2>Subtotal: </h2>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};