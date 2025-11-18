import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css'
import logo from '../assets/logo.svg'
import { LuShoppingCart } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { HiMenuAlt3, HiX } from "react-icons/hi";
// import Card from '../pages/Card';
// import { Route, Routes } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 const navigate=useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Comfy Slout Store" />
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-menu desktop-menu">
          <NavLink 
            caseSensitive
            className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`} 
            to='/'
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            caseSensitive
            className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`} 
            to='/about'
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            caseSensitive
            className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`} 
            to='/product'
            onClick={closeMenu}
          >
            Product
          </NavLink>
        </div>

        {/* Desktop Action Buttons */}
        <div className="navbar-actions desktop-actions">
          <button onClick={()=>{navigate('/card')}} className="action-btn cart-btn">
            <span>Cart</span>
            <LuShoppingCart />
          </button>
          <button className="action-btn login-btn">
            <span>Login</span>
            <GoPerson />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-content">
          <NavLink 
            caseSensitive
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active-link' : ''}`} 
            to='/'
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            caseSensitive
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active-link' : ''}`} 
            to='/about'
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink 
            caseSensitive
            className={({ isActive }) => `mobile-nav-link ${isActive ? 'active-link' : ''}`} 
            to='/product'
            onClick={closeMenu}
          >
            Product
          </NavLink>
          <div>
            {/* color addd in web */}
          </div>
          {/* Mobile Action Buttons */}
          <div className="mobile-actions">
            <button className="mobile-action-btn cart-btn">
              <LuShoppingCart />
              <span>Cart</span>
            </button>
            <button className="mobile-action-btn login-btn">
              <GoPerson />
              <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
