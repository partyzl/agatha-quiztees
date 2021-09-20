import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Agatha Quiztees</h3>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i className="bx bx-chevron-right"></i> <a href="/">Home</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i> <a href="#">About us</a>
            </li>
          </ul>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Agatha Quiztees</span>
              </strong>
              . All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
