import React from "react";
import { products } from "../products";
import "./Ourproduct.css";
import arrowright from "../images/arrowright.svg";
import Product from "./Product";
import { Link } from "react-router-dom";


function OurProducts() {
  return (
    <div id="products">
      <h3 className="stylish">Categories</h3>
      <h1>Our Products</h1>
      <div className="products-container">
        {products.map((item) => {
          if(item.id>=1 && item.id<=8){
return(
  <Link to={`/shop/${item.id}`}>
  <Product item={item} />
  </Link>
)
          }
        })}
      </div>
      <button className="learn-more">
        Learn More{" "}
        <span>
          <img src={arrowright} alt="" />
        </span>
      </button>
    </div>
  );
}

export default OurProducts;
