import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Products, About, Contact, Cart } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
