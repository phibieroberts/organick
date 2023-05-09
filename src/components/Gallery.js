import React from "react";
import "./Gallery.css";
import juice from "../images/juice.svg";
import fruit from "../images/food.png";
import nuts from "../images/cookies.svg";

function Gallery() {
  return (
    <section id="gallery">
      <div className="gallery-container">
        <div className="img-container">
          <img src={juice} alt="" />
          <div className="top">Organic Juice</div>
        </div>
        <div className="img-container">
          <img src={fruit} alt="" />
          <div className="top">Organic Fruits</div>
        </div>
        <div className="img-container">
          <img src={nuts} alt="" />
          <div className="top">Organic Nuts</div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
