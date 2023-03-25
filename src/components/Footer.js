import React from "react";
import "./Footer.css";
import logo from "../images/Logo.svg";
import instagram from "../images/Insta.svg";
import facebook from "../images/Fb.svg";
import twitter from "../images/Twiter.svg";
import pintrest from "../images/Pintrest.svg";
function Footer() {
  return (
    <div className="footer">

      <div className="contact-container">
        <div className="contact">
          <h2>Contact</h2>
          <div className="email">
            <b>Email</b>
            <p>needhelp@Organai.com</p>
          </div>
          <div className="phone">
            <b>Phone</b>
            <p>666 888 888</p>
          </div>
          <div className="address">
            <b>Address</b>
            <p>Address 88 road, borklyn street, USA</p>
          </div>
        </div>
        <div className="organic">
          <img src={logo} alt="logo" />
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing{" "}
          </p>
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
        <div className="utility">
          <h2>Utility Pages</h2>
          <ul>
            <li>Style Guide </li>
            <li>404 Not Found</li>
            <li>Password Protected</li>
            <li> Licences</li>
            <li>Changelog</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copywright">
        Copywright &copy; Organick. Designed by <b>David</b> and implemented by <b>Roberts</b>
      </p>
    </div>
  );
}

export default Footer;
