import React from "react";
import { offerProduct } from "../products";
import "./OfferProduct.css";
import arrowright from "../images/arrowright.svg";
function OfferProduct() {
  return (
    <div>
      <section id="offer">
        <div className="offer-text">
          <div>
            <h3 className="stylish">Offer</h3>
            <h1>We offer Organic for you</h1>
          </div>
          <button>
            View All Product <img src={arrowright} alt="" />
          </button>
        </div>
        <div className="products-container">
          {offerProduct.map((item) => {
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
      </section>
    </div>
  );
}

export default OfferProduct;
