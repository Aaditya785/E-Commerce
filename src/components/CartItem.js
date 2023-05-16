// import React, { useContext } from "react";
// import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { title, price, img, id } = props.data;
  // const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
  //   useContext(ShopContext);

  return ( 
    <div className="cartItem">
      <div className="description">
      <img src={img} alt={id} />
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ${price.toLocaleString()}</p>
        <div className="countHandler">
          <button> - </button>
          <input
            // value={cartItems[id]}
       
          />
          <button > + </button>
        </div>
      </div>
    </div>
  );
};