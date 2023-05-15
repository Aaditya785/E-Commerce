import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchEcomm } from '../redux/reducer';
// import AddProduct from './AddProduct';
import CartItems from './CartItems';
// import EditProduct from './EditProduct';
import Navbar from './Navbar';
// import { ProductDetails } from './ProductDetails';


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
            {/* <Route path='/addProduct' element={<AddProduct />} /> */}
            {/* <Route path='/editProduct/:editId' element={<EditProduct />} /> */}
            {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
