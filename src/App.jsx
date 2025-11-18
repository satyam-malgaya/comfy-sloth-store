import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Card from './pages/Card'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} caseSensitive />         {/* Default route */}
        <Route path="/home" element={<Home />} caseSensitive />     {/* Optional: duplicate home path */}
        <Route path="/about" element={<About />} caseSensitive />
        <Route path="/product" element={<Product />} caseSensitive />
        <Route path="/card" element={<Card />} />
      </Routes>
    </>
  );
};

export default App;
