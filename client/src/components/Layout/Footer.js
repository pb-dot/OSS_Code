import React from "react";
import { Link } from "react-router-dom";
//for icons
import {
  FaGithubSquare,
  FaLinkedin,
  FaViber,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-links_div">
        <h1 className="gradient__text mt-3">
          Grab the best deals before others
        </h1>
      </div>
      <div className="gpt3__footer-links_div mb-5 ">
        <h1 className="gradient__text"> Only here at One Stop Shop</h1>
      </div>

      {/*<div className="gpt3__footer-btn">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          ClicK here Now
        </Link>
  </div>*/}

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <p style={{ marginRight: "30rem", fontSize: "2em" }}>OSS</p>
        </div>
        <div className="gpt3__footer-links_logo">
          <p>
            Kolkata,WB-INDIA <br /> All Rights Reserved
          </p>
        </div>
        <div className="gpt3__footer-links_div " id="contact">
          <h4>Contact-LInks</h4>

          <a
            href="https://www.linkedin.com/in/prithijit-banerjee/"
            target={"_blank"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>
              <FaLinkedin size="1.5em" style={{ marginRight: "9px" }} />
              LinkedIN
            </p>
          </a>

          <a
            href="https://github.com/pb-dot"
            target={"_blank"}
            style={{ textDecoration: "none", color: "white" }}
          >
            <p>
              <FaGithubSquare size="1.5em" style={{ marginRight: "9px" }} />
              GitHub
            </p>
          </a>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>OSS : the ultimate shopping site</p>
          <p>
            <FaViber size="1.5em" style={{ marginRight: "9px" }} /> 9900339944
          </p>
          <p>
            <FaEnvelope size="1.5em" style={{ marginRight: "9px" }} />
            oss.cs@gmail.com
          </p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>OSS _ scince @2023. MADE BY P.BANERJEE.</p>
      </div>
    </div>
  );
};

export default Footer;
