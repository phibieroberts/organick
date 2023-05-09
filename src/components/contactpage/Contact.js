import React from "react";
import "./Contact.css";
import instagram from "../../images/Insta.svg";
import facebook from "../../images/Fb.svg";
import twitter from "../../images/Twiter.svg";
import pintrest from "../../images/Pintrest.svg";
import workTogether from "../../images/contact-img.png";
import message from "../../images/messageicon.png";
import call from "../../images/call.png"

function Contact() {
  return (
    <section id="contact">
      <div className="contact-banner">
        <h1>Contact</h1>
      </div>

      <div className="work-together">
        <div className="work-togetherImg">
          <img src={workTogether} alt="let u work together" />
        </div>
        <div className="work-togetherText">
          <h2>We'd love to talk about how we can work together.</h2>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="message-area">
            <img src={message} alt="" />
            <div>
              <h4>Message</h4>
              <p>support@saasflow.com</p>
            </div>
          </div>
          <div className="call">
            <img src={call} alt="" />
            <div>
              <h4>Contact Us</h4>
              <p>+01 123 456 789</p>
            </div>
          </div>
          <div className="icons">
            <div>
              <img src={instagram} alt="" />
            </div>
            <div>
              <img src={facebook} alt="" />
            </div>
            <div>
              {" "}
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={pintrest} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us">
<div className="contact-form">
  <h1>Contact Us</h1>
  <form action="">
    <div>
    <label htmlFor="Full Name">Full Name*</label><br/>
    <input type="text" placeholder=" Enter Your Full Name" />
    </div>
    <div>
      <label htmlFor="email">Your Email*</label><br/>
      <input type="text" placeholder="example@youmail.com" />
    </div>
    <div>
      <label htmlFor="company">Company*</label><br/>
      <input type="text" placeholder="your company name here" />
    </div>
    <div>
      <label htmlFor="subject">Subject*</label><br/>
      <input type="text" placeholder="how can we help"/>
    </div>
    <div className="message">
      <label htmlFor="message">Message</label><br/>
      <textarea name="messge" id="" cols="100" rows="10"></textarea>
    </div>
    <button>Send Message</button>
  </form>
</div>
         
      </div>
    </section>
  );
}

export default Contact;
