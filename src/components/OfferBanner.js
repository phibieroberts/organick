import React from "react";
import "./OfferBanner.css";
import Natural from "../images/offer1.png";
import offer from "../images/offer2.png";

function Offer() {
  return (
    <div id="offer">
      <div className="offer-container">
        <div className="offer1">
          <img src={Natural} alt="" />
          <div className="text">
            <h4 className="stylish">Natural!!</h4>
            <h2>Get Garden Fresh Fruits</h2>
          </div>
        </div>
        <div className="offer2">
          <img src={offer} alt="" />
          <div className="text">
            <h4 className="stylish">Offer!!</h4>
            <h2>Get 10% off on Vegetables</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
