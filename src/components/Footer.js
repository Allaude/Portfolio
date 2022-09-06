import "./FooterStyles.css";
import React from 'react';

import { FaFacebook,FaHome, FaInstagram,
    FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight:"2rem" }}/>
                    <div>
                        <p>Marilao, Bulacan</p>
                        <p>Philippines</p>
                    </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone size={20} style={{ color:"#fff", marginRight:"2rem" }} />
                        +63 939-3526-936
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem" }} />
                        jmnieto73@gmail.com | jayem0554@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>About the portfolio</h4>
                <p>
                    Hello! This is my portfolio, I made it for myself and for anyone who wants to take a look at my works.
                    This portfolio will serve as a presentation of what I can do using React!
                </p>
                <div className="social">
                    <FaFacebook size={30} style={{ color:"#fff", marginRight:"1rem" }}/>
                    <FaInstagram size={30} style={{ color:"#fff", marginRight:"1rem" }}/>
                    <FaLinkedin size={30} style={{ color:"#fff", marginRight:"1rem" }}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer