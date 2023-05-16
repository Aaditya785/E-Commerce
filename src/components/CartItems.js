import '../assets/CartItems.css'
import { Product } from './Product'

const CartItems = ({ items }) => {

  let arr = []

  return (
    <>
      <div className='cartList'>
        {
          arr = items.map((item) => (
            <Product data={item} key={item.id} />
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

export default CartItems;