import React from "react";
import { products } from "../products";
import "./OfferProduct.css";
import arrowright from "../images/arrowright.svg";
import { Link } from "react-router-dom";
import Product from "./Product";
function OfferProduct() {
  return (
    <div>
      <section id="offer">
        <div className="offer-text">
          <div>
            <h3 className="stylish">Offer</h3>
            <h1>We offer Organic for you</h1>
          </div>
          <Link to={'/shop'}>
          <button>
            View All Product <img src={arrowright} alt="" />
          </button>
          </Link>
        </div>
        <div className="products-container">
          {products.map((item) => {
            if(item.id >=9 && item.id<=12){
              return (
              
                <div className="product">
                  <Link to={`/shop/${item.id}`}>
                  <Product item={item} />
                  </Link>
                </div>
              );
  
            }
          })}
        </div>
      </section>
    </div>
  );
}

export default OfferProduct;
