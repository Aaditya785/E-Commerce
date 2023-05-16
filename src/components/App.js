import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchEcomm } from '../redux/reducer';
import { Cart } from './Cart';
// import AddProduct from './AddProduct';
import CartItems from './CartItems';
import { Checkout } from './Checkout';
// import EditProduct from './EditProduct';
import Navbar from './Navbar';
import { ProductDetails } from './ProductDetails';


function App() {

  // const [visible, setVisible] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log("Selector State", state)

  useEffect(() => {
    dispatch(fetchEcomm())
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<CartItems items={state.ecomm.data} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
