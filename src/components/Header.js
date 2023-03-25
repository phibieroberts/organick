import React, {useState} from "react";
import "./Header.css";
import logo from "../images/Logo.svg";
import cart from "../images/Cart Icon.svg";
import search from "../images/Search Icon.svg";
import {FaBars, FaTimes} from "react-icons/fa";
function Header() {
  const[clicked, setClicked]=useState(false)

  const handleClick=()=>{
    setClicked(!clicked)
  }
  return (
    <div className="header">
      <div className="header-items">
        <div className="logo-area">
          <img src={logo} alt="" />
          <div className={clicked ? "nav open" : "nav"}>
            <a href="#about" onClick={handleClick}>Home</a>
            <a href="#home">About</a>
            <a href="#">Pages <span><img src="" alt="" /></span></a>
            <a href="#">Shop</a>
            <a href="#">Projects</a>
            <a href="#">News</a>
          </div>
          <div className="menu" onClick={handleClick}>
        {clicked ? <FaTimes /> : <FaBars />  } 
          </div>
        </div>

        <div className="search-cart">
          <div className="search">
            <input type="text" />
              <img src={search} alt="" />
          </div>
          <div className="cart">
              <img src={cart} alt="" />
               <span>cart (0)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
