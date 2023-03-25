import React from "react";
import "./Blog.css";
import arrowright from "../images/arrowright.svg";
import blog1 from "../images/blog1.svg";
import blog2 from "../images/blog2.svg";
import author from "../images/author.svg";
function Blog() {
  return (
    <section id="blog-section">
      <div className="blog">
        <div className="blog-heading">
          <div className="header-left">
            <h3 className="stylish">News</h3>
            <h2>Discover weekly content about organic food, & more</h2>
          </div>
          <button>
            More News <img src={arrowright} alt="" />
          </button>
        </div>
        <div className="blog-container">
          <div className="blogs">
            <img src={blog1} alt="" className="blog-img" />
            <div className="blog-date">
              <h1>
                25 <br /> <span className="month">NOV</span>
              </h1>
            </div>
            <div className="blog-content-area">
              <div className="blog-content">
                <div className="blog-author">
                  <img src={author} alt="" /> By Rachi Card
                </div>
                <h3>The Benefits of Vitamin D & How to Get It</h3>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
                <button className="read-more">
                  Read More <img src={arrowright} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="blogs">
            <img src={blog2} alt="" className="blog-img" />
            <div className="blog-date">
              <h1>
                25 <br />
                <span className="month">NOV</span>
              </h1>
            </div>
            <div className="blog-content-area">
              <div className="blog-content">
                <div className="blog-author">
                  <img src={author} alt="" /> By Rachi Card
                </div>
                <h3>The Benefits of Vitamin D & How to Get It</h3>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
                <button className="read-more">
                  Read More <img src={arrowright} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
}

export default Blog;
