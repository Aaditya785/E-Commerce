import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import "../assets/Cart.css";
import { removeCartdata } from '../redux/reducer';
import { CartItem } from "./CartItem";
export const Cart = () => {
  const total = useSelector((state) => state);
  const dispatch = useDispatch();
  const totalAmount = total.ecomm.totalAmount;
  let cartdata = total.ecomm.cartData;

  const navigate = useNavigate();

  function handleCheckout() {
    navigate("/checkout")
    cartdata = [];
    dispatch(removeCartdata())
  }

  return (
    <div className="cartmain">
      <div className="cart">
        <center>
          <h1>Your Cart Items</h1>
        </center>
        {cartdata.map((product) => {
          return <CartItem data={product} key={product.id} />;
        })}
      </div>

      {cartdata.length > 0 ?
        (<div className="checkout">
          <div className="subtotal">
            <h2>Subtotal: {totalAmount}</h2>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button onClick={handleCheckout} >
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