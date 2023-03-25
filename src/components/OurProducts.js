import React from "react";
import { products } from "../products";
import "./Ourproduct.css";
import arrowright from "../images/arrowright.svg";
function OurProducts() {
  return (
    <div id="products">
      <h3 className="stylish">Categories</h3>
      <h1>Our Products</h1>
      <div className="products-container">
        {products.map((item) => {
          return (
            <div className="product">
              <img src={item.imgUrl} alt={item.name} />
              <div className="category">
                <div>{item.category}</div>
              </div>
              <div className="other-details">
                <h4 className="name">{item.name}</h4>
                <div className="pricestar">
                  <div className="price">
                    <p className="slash">${item.slashPrice}.00</p>
                    <b>${item.price}.00</b>
                  </div>
                  <div className="stars">
                    <img src={item.star} alt="" />
                    <img src={item.star} alt="" />
                    <img src={item.star} alt="" />
                    <img src={item.star} alt="" />
                    <img src={item.star} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
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
