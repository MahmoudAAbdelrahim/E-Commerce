
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link,  NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Home from './Home'
import Navebar from './Navebar';
import Cart from './Cart';
import RagistrPadg from './RagistrPadg'
import LoginPadg from './LoginPadg'
import ChackOut from './ChackOut'
import Footer from './Footer'



function App() {
  return (
    <BrowserRouter>
    <Navebar/>
      <Routes>
                <Route path="/" element={<Home />} />
      <Route path="/Navebar" element={<Navebar />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/RagistrPadg" element={<RagistrPadg />} />
      <Route path="/LoginPadg" element={<LoginPadg />} />
      <Route path="/ChackOut" element={<ChackOut />} />
      <Route path="/Footer" element={<Footer />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
