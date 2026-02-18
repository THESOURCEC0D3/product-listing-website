import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      {/* <Header />
      <Hero />
      <h1 className="m-5  border-gray-400 bg-linear-to-r from-blue-600 via-white to-purple-400 shadow-2xl  rounded-2xl p-5 text-black">
        Cosmetic Store
      </h1>
      <ProductList products={products} />
      <ProductCard />
      <Footer /> */}
    </>
  );
}

export default App
