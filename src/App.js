import React from 'react';
import Home from './Home';
import Cart from './Cart';
import Checkout from './Checkout';
import FinishOrder from './FinishOrder';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="finishorder" element={<FinishOrder />} />
      </Routes>
    </>
  );
}

export default App;
