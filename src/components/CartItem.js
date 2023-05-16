import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeProducts } from "../redux/reducer";

export const CartItem = (props) => {
  const { title, price, img, id, qty } = props.data;
  const [Qty, setQty] = useState(qty);
  const dispatch = useDispatch();

  function decrease(){
    setQty(Qty-1)
    if(Qty<=1){
      dispatch(removeProducts(props.data));
    }
  }

  function increase(){
    setQty(Qty+1)
  }

  return (
    <div className="cartItem" key={id}>
      <div className="description">
        <img src={img} alt={id} />
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ₹{price}</p>
        <div className="countHandler">

          <div className="delete" onClick={()=>dispatch(removeProducts(props.data))} >❌</div>


          <div>
            <button onClick={decrease} > - </button>
            <input value={Qty} />
            <button onClick={increase} > + </button>
          </div>
        </div>
      </div>
    </div>
  );
};