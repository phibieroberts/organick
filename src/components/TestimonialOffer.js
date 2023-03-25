import React from "react";
import "./TestimonialOffer.css";
import profilepic from "../images/testimonial.svg";
import star from "../images/star.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function TestimonialOffer() {
  return (
    <div className="testimonial_offer">
      <div id="testimonial">
        <h3 className="stylish">Testimonial</h3>
        <h1>What our customers saying</h1>

        <Splide
          options={{
            pagination: true,
            arrows: false,
          }}
        >
          <SplideSlide>
            <div className="testimonial-items">
              <img src={profilepic} alt="slide" className="dp" />
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <h2 className="name">Sarah Jones</h2>
              <p className="title">customer</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="testimonial-items">
              <img src={profilepic} alt="slide"  className="dp"/>
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>

              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <h2 className="name">Sarah Jones</h2>
              <p className="title">customer</p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="testimonial-items">
              <img src={profilepic} alt="slide" className="dp" />
              <div className="stars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>

              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been.
              </p>
              <h2 className="name">Sarah Jones</h2>
              <p className="title">customer</p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}

export default TestimonialOffer;
