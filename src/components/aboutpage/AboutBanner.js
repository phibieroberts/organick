import "./AboutBanner.css";
import React from "react";
import aboutus from "../../images/aboutimg.png";
import arrowright from "../../images/arrowright.svg";
import point1 from "../../images/pointcar.svg";
import point2 from "../../images/point.svg";
import ring from "../../images/ring.svg";
import contentimg from "../../images/food.png";
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";
import icon4 from "../../images/icon4.svg";
import giovani from "../../images/giovani.png";
import marianne from "../../images/marianne.png";
import rigs from "../../images/rigs.png";
import facebook from "../../images/Fb.svg";
import instagram from "../../images/Insta.svg";
import twitter from "../../images/Twiter.svg";
import spicy from "../../images/spicy.svg";
import fruit from "../../images/fruit.png";
import feed from "../../images/feed.png";

function AboutBanner() {
  return (
    <>
      <section id="about-banner">
        <div className="about">
          <h1>About Us</h1>
        </div>
      </section>

      <section id="about-us">
        <div className="about-img">
          <img src={aboutus} alt="about us" />
        </div>
        <div className="content">
          <div className="subcontent">
            <div className="heading">
              <h4 className="stylish">About Us</h4>
              <h2>We do Creative Things for Success</h2>
            </div>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.{" "}
            </p>
            <br></br>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>

            <div className="points">
              <div className="point">
                <img src={point1} alt="" />
                <h3>Mordern Agricultural Equipments</h3>
              </div>
              <div className="point">
                <img src={point2} alt="" />
                <h3>No growth Hormones are used</h3>
              </div>
            </div>
            <button className="aboutp">
              {" "}
              Explore More <img src={arrowright} alt="" />
            </button>
          </div>
        </div>
      </section>
      <section id="why-choose-us">
        <div className="why-content">
          <div className="first-part">
            <h4 className="stylish">Why choose Us</h4>
            <h2>We do not buy from the open market & traders.</h2>
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className="ring-div">
              <img src={ring} alt="ring" />
              100% Natural Products
            </div>
            <p className="ring-text">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
            <div className="ring-div">
              <img src={ring} alt="ring" />
              Increases resistance
            </div>
            <p className="ring-text">
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </p>
          </div>
          <div>
            {" "}
            <img src={contentimg} alt="" className="contentimg" />
          </div>
        </div>

        <div className="reasons">
          <div className="card">
            <div className="reason-icon">
              <img src={icon1} alt="" />
            </div>
            <h4>Return Policy</h4>
            <p>Simply dummy text of the printintypesetting industry.</p>
          </div>
          <div className="card">
            <div className="reason-icon">
              <img src={icon2} alt="" />
            </div>
            <h4>100% Fresh</h4>
            <p>Simply dummy text of the printintypesetting industry.</p>
          </div>
          <div className="card">
            <div className="reason-icon">
              <img src={icon3} alt="" />
            </div>
            <h4>Support 24/7</h4>
            <p>Simply dummy text of the printintypesetting industry.</p>
          </div>
          <div className="card">
            <div className="reason-icon">
              <img src={icon4} alt="" />
            </div>
            <h4>Secured Payment</h4>
            <p>Simply dummy text of the printintypesetting industry.</p>
          </div>
        </div>
      </section>
      {/* the team section */}
      <section id="team">
        <h4 className="stylish">Team</h4>
        <h2>Our Organic Experts</h2>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <div className="team-container">
          <div className="teamcard">
            <img src={giovani} alt="" className="team-img" />
            <div className="team-text">
              <h5>Giovani Bacardo</h5>
              <div className="role-icon">
                <h4 className="stylish">Farmer</h4>
                <div className="team-icons">
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={instagram} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="teamcard">
            <img src={marianne} alt="" className="team-img" />
            <div className="team-text">
              <h5>Marianne</h5>
              <div className="role-icon">
                <h4 className="stylish">Designer</h4>
                <div className="team-icons">
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={instagram} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="teamcard">
            <img src={rigs} alt="" className="team-img" />
            <div className="team-text">
              <h5>Rigs</h5>
              <div className="role-icon">
                <h4 className="stylish">Farmer</h4>
                <div className="team-icons">
                  <img src={facebook} alt="" />
                  <img src={twitter} alt="" />
                  <img src={instagram} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About us section */}
      <section id="aboutUs">
        <h4 className="stylish">About Us</h4>
        <h2>What We Offer</h2>
        <div className="aboutUs-container">
          <div className="aboutUs-card">
            <img src={spicy} alt="" />
            <h6>Spicy</h6>
          </div>
          <div className="aboutUs-card">
            <img src={feed} alt="" />
            <h6>Nuts and Feeds</h6>
          </div>
          <div className="aboutUs-card">
            <img src={fruit} alt="" className="fruit"/>
            <h6>Fruits</h6>
          </div>
          <div className="aboutUs-card">
            <img src={fruit} alt="" className="fruit"/>
            <h6>Vegetables</h6>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutBanner;
