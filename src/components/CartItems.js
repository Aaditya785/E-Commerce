import { useDispatch, useSelector } from 'react-redux'
import '../assets/CartItems.css'
import { addToTotal, removeProducts } from '../redux/reducer';
import { AiFillDelete,AiFillEdit } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const CartItems = ({ items }) => {

  const total = useSelector((state) => state);
  const editable = total.ecomm.data;
  const dispatch = useDispatch();

  const handleRemove = (e, item) => {
    // e.stopPropagation();
    console.log("Your Deleted Id :", item)
    dispatch(removeProducts(item))
    toast.success("Deleted")
    
  }

  // const handleEdit = (item) => {
  //   // e.stopPropagation();
  //   alert(`You Clicked The id no. : ${item.id} `)
  //   // dispatch(editProduct({item, isEditable: true}))
  // }


  let arr = []

  return (
    <>
      {/* {total1 ? (<center> {total1} Product Found</center>) : (<p></p>)} */}

      <div className='cartList'>

        {
          arr = items.map((item) => (

            <div onLoad={() => dispatch(addToTotal())} className='cartItem' key={item.id} >
              <div className='left'>
                <img alt='watch' src={item.img} />
                <div className='item-brief'>
                  <div className='item-name' >
                    <p style={{ fontWeight: "bold" }}>{item.title}</p>
                    <p>Rs {item.price}</p>
                  </div>
                  <div className='item-rating'>
                    {item.rating} ⭐
                  </div>
                </div>
              </div>
              <div className='right'>
                <p contentEditable={editable.isEditable} >{item.description}</p>
                <div className='btn-edit'>


                  <Link to={`editProduct/${item.id}`} > 
                  <button> {<AiFillEdit data-id={item.id} />}</button> 
                  </Link>
                  <button> {<AiFillDelete onClick={(e) => handleRemove(e, item)} data-id={item.id} />}</button>


                </div>
              </div>
              <Toaster/>
            </div>

          )
          )
        }
        {
          arr.length === 0 ? (<center><strong>No Data Available</strong></center>) : (<center></center>)
        }

      </div>

    </>
  )
}

export default CartItems