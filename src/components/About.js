import React from "react";
import photo from "../images/Photo.svg";
import Group1 from "../images/Group 1.svg";
import Group2 from "../images/Group 2.svg";
import Arrowright from "../images/arrowright.svg";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div id="about">
      <div className="about-container">
        <div className="img">
          <img src={photo} alt="" />
        </div>
        <div className="text-area">
          <h4 className="stylish">About Us</h4>
          <h1>We Believe in Working Accredited Farmers</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>

          <div className="organic-food">
            <div className="box">
              <img src={Group1} alt="" />
            </div>
            <div className="foods">
              <h2>Organic Foods Only</h2>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className="organic-food">
            <div className="box">
              <img src={Group2} alt="" />
            </div>
            <div className="foods">
              <h2>Quality Standards</h2>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <Link to={'/shop'}>
          <button className="shop-now">
            Shop Now <img src={Arrowright} alt="" />
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
