import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/shop';
// import ShopCategory from './Pages/shopcategory'; // Update the import statement
import Product from './Pages/product';
import Cart from './Pages/cart';
// import Login from './Pages/login';
import Footer from './Components/footer/footer';  

import Men from './Pages/Men';
import Women from './Pages/Women'; // Import the Women component
import Kids from './Pages/Kids'; // Import the Kids component

// import ec14 from '../Assets/ec14.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
         <Routes>
          <Route path="/"  element={<Shop/>}  />
          <Route path="/men" element={<Men/>} />
          <Route path="/women" element={<Women/>} />
          <Route path="/kids" element={<Kids/>} />
          <Route path="/cart" element={<Cart />} />
         </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;