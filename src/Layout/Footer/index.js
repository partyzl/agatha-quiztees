import React from 'react';

const Footer = () => {
    return (
        <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 footer-contact">
              <h3>Agatha Quiztees</h3>
            </div>
          </div>
  
          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="/">Home</a>
              </li>
              <li>
                <i class="bx bx-chevron-right"></i> <a href="#">About us</a>
              </li>
            </ul>
          </div>
  
          <div class="container d-md-flex py-4">
            <div class="me-md-auto text-center text-md-start">
              <div class="copyright">
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
}

export default Footer;
