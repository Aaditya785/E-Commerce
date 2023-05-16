
export const CartItem = (props) => {
  const { title, price, img, id, qty } = props.data;

  return (
    <div className="cartItem" key={id}>
      <div className="description">
        <img src={img} alt={id} />
        <p>
          <b>{title}</b>
        </p>
        <p> Price: Rs.{price}</p>
        <div className="countHandler">
          <button> - </button>
          <input value={qty} />
          <button > + </button>
        </div>
      </div>
    </div>
  );
};