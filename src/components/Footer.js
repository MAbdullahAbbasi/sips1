import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";
import imgFooter from "../assets/img/photos/bg3.jpg";
const Footer = () => {
  return (
    <>
      <footer className="bg-soft-primary">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 col-xxl-10 mx-auto">
              <div
                className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-400 mt-n50p mb-n5"
                data-image-src={imgFooter}
              >
                <div className="card-body p-6 p-md-11 d-lg-flex flex-row align-items-lg-center justify-content-md-between text-center text-lg-start">
                  <h3 className="display-6 mb-6 mb-lg-0 pe-lg-15 pe-xxl-18 text-white">
                    We are trusted by over 5000+ families. Join them by using our
                    services and grow along with us.
                  </h3>
                  <a
                    href="#"
                    className="btn btn-white rounded-pill mb-0 text-nowrap"
                  >
                    Join Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pb-12 text-center">
          <div className="row mt-n10 mt-lg-0">
            <div className="col-xl-10 mx-auto">
              <div className="row mb-3">
                <div className="col-md-4">
                  <div className="widget">
                    <h4 className="widget-title">Address</h4>
                    <address>
                    Bahçeyaka 625 Döşemealtı 

                      <br className="d-none d-md-block" /> ANTALYA, Türkiye
                    </address>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="widget">
                    {/* <h4 className="widget-title">Phone</h4> */}
                    <p>
                      <b>Help : </b> 
                      +92 300 5276 725
                      <br />
                      <b>Omer : </b>
                      +90 531 0141 190
                      <br />
                      <b>Kate : </b>
                      +86 155 0665 9381
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="widget">
                    <h4 className="widget-title">E-mail</h4>
                    <p>
                      <a
                        href="mailto:sipsworldwide.edu@gmail.com"
                        className="link-body"
                      >
                        sipsworldwide.edu@gmail.com
                      </a>{" "}
                      <br className="d-none d-md-block" />
                    </p>
                  </div>
                </div>
              </div>
              <p>© 2022 SIPS. All rights reserved.</p>
              <nav className="nav social justify-content-center">
                <SocialMediaIcons tiktokColor="black" />
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
