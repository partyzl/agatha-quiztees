import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <h3>Agatha Quiztees</h3>

      <div>
        <h4>Useful Links</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        &copy; Copyright{" "}
        <strong>
          <span>Agatha Quiztees</span>
        </strong>
        . All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
