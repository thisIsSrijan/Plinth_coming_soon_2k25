import React from "react";
import "./Footer.css";
import logop from "../assets/PlinthLogo.svg";
import gdglogo from "../assets/gdglogo.png";
import facebook from "../assets/facebook.png";
import email from "../assets/email.png";
import linkdn from "../assets/linkedin.png";
import insta from "../assets/instagram.png";
const Footer = () => {
  return (
    <div className="Footer_slide">
      <div className="line"></div>

      <div className="Footer">
        {/* Logo and Plinth'25 */}
        <div className="fest-plinth">
          <img className="plinthlogo" src={logop} alt="" />
          <h1>PLINTH' 2025</h1>
        </div>

        {/* Contact Information */}
        <div className="heads">
          <h2>Contact Us</h2>
          <ul className="festheads">
            <div>
              Yug Aggarwal <br /> 8299099721
            </div>
            <div>
              Rajat Sharma <br /> 8972192855
            </div>
          </ul>
        </div>

        {/* Follow us and Developed by */}
        <div className="social-dev-container">
          <div className="container1">
            <h2>Follow us on:</h2>
            <div className="card">
              <a
                className="socialContainer containerOne"
                href="https://www.instagram.com/plinth.lnmiit/?hl=en"
              >
                <img src={insta} alt="" />
              </a>
              <a
                className="socialContainer containerTwo"
                href="https://www.facebook.com/Plinth.LNMIIT/"
              >
                <img src={facebook} alt="" />
              </a>
              <a
                className="socialContainer containerThree"
                href="https://www.linkedin.com/company/plinthlnmiit/?originalSubdomain=in"
              >
                <img src={linkdn} alt="" />
              </a>
              <a
                className="socialContainer containerFour"
                href="mailto:plinth@lnmiit.ac.in"
              >
                <img src={email} alt="Email Icon" />
              </a>
            </div>
          </div>

          
        </div>

        {/* Address */}
        <div className="address">
        <div className="gdg">
            <h2>Developed & designed by:</h2>
            
          </div>
          &nbsp;&nbsp;&nbsp;
          The LNM Institute of Information Technology,
          <br />
          Rupa ki Nangal, Post-Sumel, Via, Jamdoli, Jaipur, Rajasthan 302031
        </div>
      </div>
    </div>
  );
};

export default Footer;
