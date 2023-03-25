import React from 'react'
import "./Subscribe.css"
import sub from "./subackground.svg"

function Subscribe() {
  return (
    <section id='subscribe'>
             <div className="sub-container">
                <img src={sub} alt="" />
                <div className="sub-text">
            <h2>Subscribe to Our newsletter</h2>
          <div className="subscription-form">
            <input type="text" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </div>
          </div>
      </div> 

    </section>
  )
}

export default Subscribe