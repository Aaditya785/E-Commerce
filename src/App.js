import './App.css';
import CartItems from './components/CartItems';
import Navbar from './components/Navbar';


function App() {



  return (
    <div className="App">
      <Navbar/>
      <CartItems/>
      <button>Fetch Products</button>
    </div>
  );
}

export default App;
