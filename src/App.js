import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Cart from './component/Cart';
import ViewPage from './component/ViewPage';
import { useState } from 'react';



function App() {

  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/'/>
        <Route element={<Cart cart={cart}  />} path='/cart'/>
        <Route element={<ViewPage cart={cart} setCart={setCart} />} path='/view/:id'/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
