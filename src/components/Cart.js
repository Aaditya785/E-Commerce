import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import "../assets/Cart.css";
import { CartItem } from "./CartItem";
export const Cart = () => {
  const total = useSelector((state) => state);
  const totalAmount = total.ecomm.totalAmount;

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {total.ecomm.cartData.map((product) => {
          return <CartItem data={product} />;
        })}
      </div>

      {true ?
        (<div className="checkout">
          <div className="subtotal">
            <h2>Subtotal: {totalAmount}</h2>
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