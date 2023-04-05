import { useDispatch } from 'react-redux'
import '../assets/CartItems.css'
import { removeProducts } from '../redux/reducer';


const CartItems = ({items}) => {

  const dispatch = useDispatch();

  const handleRemove = (e,item)=>{
    e.stopPropagation();
    console.log("Your Deleted Id :",item)
    dispatch(removeProducts(item))
  }

  return (
    <>
      <button className='btn-right'>Sort By Price</button>

      <div className='cartList'>

        {
          items.map((item)=>(
            <div className='cartItem' key={item.id} >
            <div className='left'>
                <img alt='watch' src={item.img} />
                <div className='item-brief'>
                    <div className='item-name'>
                        <p style={{ fontWeight: "bold" }}>{item.title}</p>
                        <p>Rs {item.price}</p>
                    </div>
                    <div className='item-rating'>
                        {item.rating} ⭐
                    </div>
                </div>
            </div>
            <div className='right'>
                <p>{item.description}</p>
                <div className='btn-edit'>
                    <button>Edit</button>
                    <button onClick= { (e)=> handleRemove(e,item)} >Delete</button>
                </div>
            </div>
        </div>
          ))
        }

      </div>

    </>
  )
}

export default CartItems