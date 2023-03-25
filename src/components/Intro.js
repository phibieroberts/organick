import React from "react";
import "./Intro.css";
import rightarrow from "../images/arrowright.svg";

function Intro() {
  return (
    <main>
      <section id="hero">
        <div className="intro">
          <h3 className="stylish">100% Natural Food</h3>
          <h1>Choose the best healthier way of life</h1>
          <button>
            Explore Now
            <img src={rightarrow} alt="arrowright" />
          </button>
        </div>
      </section>
    </main>
  );
}

export default Intro;
