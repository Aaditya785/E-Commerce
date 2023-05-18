import { useDispatch } from "react-redux";
import { decrementProduct, incrementProduct, removeProducts } from "../redux/reducer";

export const CartItem = (props) => {
  const { title, price, img, id, qty } = props.data;
  const dispatch = useDispatch();

  function decrease(){
    if(qty!==1){
      // dispatch(decrementProduct(props.data))
      dispatch(decrementProduct(props.data))

    }else{
      dispatch(removeProducts(props.data));

    }
  }

  function increase(){
    dispatch(incrementProduct(props.data))
  }

  return (
    <div className="cartItem" key={id}>
      <div className="description">
        <img src={img} alt={id} />
        <p>
          <b>{title}</b>
        </p>
        <p> Price: ₹ {price}</p>
        <div className="countHandler">

          {/* <div className="delete" onClick={()=>dispatch(removeProducts(props.data))} >❌</div> */}


          <div>
            <button onClick={decrease} > - </button>
            <input  value={qty} onChange={()=>{ console.log(qty)}}/>
            <button onClick={increase} > + </button>
          </div>
        </div>
      </div>
    </div>
  );
};