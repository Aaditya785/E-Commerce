// import { useDispatch, useSelector } from 'react-redux'
import '../assets/CartItems.css'
import { Product } from './Product'

// import { addToTotal, removeProducts } from '../redux/reducer';
// import { AiFillDelete,AiFillEdit } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import toast, { Toaster } from 'react-hot-toast';

const CartItems = ({ items }) => {

  // const total = useSelector((state) => state);
  // const editable = total.ecomm.data;
  // const dispatch = useDispatch();

  // const handleRemove = (item) => {
  //   console.log("Your Deleted Id :", item)
  //   dispatch(removeProducts(item))
  //   toast.success("Deleted")
  // }

  let arr = []

  return (
    <>
      <div className='cartList'>
        {/* <h1>Welcome! Ghadi Wala.com Aaditya </h1> */}

        {
          arr = items.map((item) => (
            <Product data={item} key={item.id}/>
            // <div onLoad={() => dispatch(addToTotal())} className='cartItem' key={item.id} >
              
            // </div>

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