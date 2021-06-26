import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import about1 from "../Assets/images/about1.png";
import about2 from "../Assets/images/about2.png";
import about3 from "../Assets/images/about3.png";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section>
      <div className="about" id="About">
        <div className="container">
          <div className="row m-5">
            <div data-aos="fade-down" className="container mx-3 my-2">
              <div className="row Feature">
                <div className="col-md-5 my-2 col-10">
                  <h2 className="FeatureTitle">Streamlined Trading View</h2>
                  <p className="FeatureDescription">
                    Access all the tools you need to understand the crypto
                    market and start investing – all through one clear,
                    attractive interface
                  </p>
                </div>
                <div className="col-md-6 col-10 text-center FeatureImg">
                  <img className="img-fluid " src={about1} alt="img" />
                </div>
              </div>
            </div>
            <hr />
            <div className="container mx-2 my-1">
              <div className="row Feature">
                <div data-aos="fade-up" className="col-md-6 col-10 text-center">
                  <img className="img-fluid " src={about2} alt="img" />
                </div>
                <div data-aos="fade-left" className="col-md-5 col-10">
                  <h2 className="FeatureTitle">
                    Buying and Selling, Made Simple
                  </h2>
                  <p className="FeatureDescription">
                    Trade assets, manage your holdings, and set recurring buys
                    on the crypto industry’s most secure, trusted platform.
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="container mx-2 my-1">
              <div className="row Feature">
                <div data-aos="fade-down" className="col-md-5 col-10">
                  <h2 className="FeatureTitle">My Portfolio</h2>
                  <p className="FeatureDescription">
                    Manage your account at-a-glance. View your account balance,
                    24-hour change, and percent change.
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  className="col-md-6 col-10 text-center "
                >
                  <img
                    className="img-fluid FeatureImg"
                    src={about3}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
