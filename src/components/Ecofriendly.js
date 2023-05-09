import React from "react";
import "./Ecofriendly.css";
import ecofriendly from "../images/ecofriendly.png";

function Ecofriendly() {
  return (
    <section id="ecofriendly">
      <div className="ecofriendly-container">
        <div className="image-area">
          <img src={ecofriendly} alt="" />
        </div>
        <div className="text-area">
          <div className="text-box">
            <h3 className="stylish">Eco Friendly</h3>
            <h1>Econis is a Friendly Organic Store.</h1>
            <div>
              <h4>Start With Our Company First</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div>
              <h4>Learn How to Grow Yourself</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div>
              <h4>Farming Strategy of Today</h4>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecofriendly;
