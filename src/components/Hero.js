import React, { useState, useEffect } from "react";

import heroImage1 from "./cardImages/hero-image1.jpg";
const Hero = () => {
  return (
    <>
      <div
        className="rounded-4-lg-start col-lg-6 order-lg-2 position-lg-absolute top-0 end-0 image-wrapper bg-image bg-cover h-100 min-vh-50"
        data-image-src={heroImage1}

        style={{
          backgroundImage: `url(${heroImage1})`
        }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="mt-10 mt-md-11 mt-lg-n10 px-10 px-md-11 ps-lg-0 pe-lg-13 text-center text-lg-start">
              <h1 className="display-3 mb-5">
                We Make Sure You Reach, What You Dream for!
              </h1>
              <p className="lead fs-25 lh-sm mb-7 pe-md-10">
                Our study abroad consultants provide career counseling and
                placement of international students in credible universities
                around the globe
              </p>
              <div
                className="d-flex justify-content-center justify-content-lg-start"
                data-cues="slideInDown"
                data-group="page-title-buttons"
                data-delay="900"
              >
                <span>
                  <a
                    href="#"
                    className="btn btn-lg btn-primary rounded-pill me-2"
                  >
                    Explore Now
                  </a>
                </span>
                <span>
                  <a
                    href="#"
                    className="btn btn-lg btn-outline-primary rounded-pill"
                  >
                    Contact Us
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
