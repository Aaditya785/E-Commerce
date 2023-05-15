// import React, { useContext } from "react";
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
// import { ShopContext } from "../../context/shop-context";
import { addToTotal } from '../redux/reducer';

export const Product = (props) => {
  const { id, title, price, img } = props.data;
  //   const { addToCart, cartItems } = useContext(ShopContext);
  console.log(id + "id " + "title " + title + "....")

  const dispatch = useDispatch();
  // const cartItemCount = cartItems[id];

  return (
    <div className="product">
      {/* <Link to={`/product/${id}`} className="product-link"> */}
      <img src={img} />
      <div className="description">
        <p>
          <b>{title}</b>
        </p>
        <p> ${price}</p>
      </div>
      {/* </Link> */}
      <button className="addToCartBttn" onClick={() => dispatch(addToTotal())} >
        Add To Cart
      </button>
    </div>
  );
};
