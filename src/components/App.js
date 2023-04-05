import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchEcomm } from '../redux/reducer';
import AddProduct from './AddProduct';
import CartItems from './CartItems';
import Navbar from './Navbar';


function App() {

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log("Selector State", state)

  useEffect(() => { 
    dispatch(fetchEcomm()) 
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<CartItems items={state.ecomm.data} />} />
          <Route path='/addProduct' element={<AddProduct/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
