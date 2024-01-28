import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { Carousel } from './layouts/Carousel/Carousel';
import ProductList from './Components/Products';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';

function App() {

  return (
    <div className="App">       
      <Router>      
        <Navbar></Navbar> 
        <Routes>
          <Route path="/" element={<div><Carousel/><ProductList/></div>} />
          <Route path="/menu" element={<ProductList/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}
export default App;
