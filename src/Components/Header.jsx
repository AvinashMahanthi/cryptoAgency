import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import bg1 from "../Assets/images/bitcoin-bg1.jpg";
import bg2 from "../Assets/images/bitcoin-bg2.jpg";
import bg3 from "../Assets/images/bitcoin-bg3.jpg";
import bg4 from "../Assets/images/bitcoin-bg4.jpg";
import logo from "../Assets/images/crypto-logo.png";

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      data-aos="fade-down"
      //   data-aos-delay="10"
      //   data-aos-duration="1000"
      //   data-aos-easing="ease-in"
      id="header"
    >
      <div className="banner">
        <div className="slider">
          <img
            className="img-fluid"
            src={bg1}
            id="slideImg"
            alt="background-img"
          />
        </div>
        <div className="overlay">
          <div className="navbar">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="nav-items d-flex flex-row">
              <a href="# ">Home </a>
              <a href="# ">About </a>
              <button>SignUp</button>
            </div>
          </div>
          <div data-aos="fade-down" className="content px-2">
            <h1>A Smarter way to Trade and Manage your Crypto</h1>
            <h4>
              Chuck is a simple, elegant, and secure platform to build your
              crypto portfolio.
            </h4>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
