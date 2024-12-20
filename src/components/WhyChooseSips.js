import React from "react";
import Background from "./Background";
import Vision from "./Vision";
import Faqs from "./Faqs";

const WhyChooseSips = () => {
  return (
    <>
      <section className="wrapper bg-light">
        <div className="container pt-md-4">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 mx-auto text-center">
              <h2 className="fs-15 text-uppercase  mb-3">
                <mark>Why Choose SIPS?</mark>
              </h2>
              <h3 className="display-4 mb-10 px-xl-10 px-xxl-15">
                Here Are A Few Reasons why Students Choose SIPS.
              </h3>
            </div>
          </div>
          <ul className="nav nav-tabs nav-tabs-bg nav-tabs-shadow-lg d-flex justify-content-between nav-justified flex-lg-row flex-column">
            <li className="nav-item">
              {" "}
              <a
                className="nav-link d-flex flex-row active"
                data-bs-toggle="tab"
                href="#tab2-1"
              >
                <div>
                  <img
                    src="../assets/img/icons/lineal/rocket.svg"
                    className="svg-inject icon-svg icon-svg-md text-yellow me-4"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="mb-1">Background</h4>
                  <p>SIPS study abroad consultants are...</p>
                </div>
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a
                className="nav-link d-flex flex-row"
                data-bs-toggle="tab"
                href="#tab2-2"
              >
                <div>
                  <img
                    src="./assets/img/icons/lineal/savings.svg"
                    className="svg-inject icon-svg icon-svg-md text-green me-4"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="mb-1">Our Vision</h4>
                  <p>Our foreign study specialists...</p>
                </div>
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a
                className="nav-link d-flex flex-row"
                data-bs-toggle="tab"
                href="#tab2-3"
              >
                <div>
                  <img
                    src="./assets/img/icons/lineal/shield.svg"
                    className="svg-inject icon-svg icon-svg-md text-red me-4"
                    alt=""
                  />
                </div>
                <div>
                  <h4 className="mb-1">FAQ's</h4>
                  <p>Frequently Asked Questions</p>
                </div>
              </a>{" "}
            </li>
          </ul>
          <div className="tab-content mt-6 mt-lg-8 mb-md-9">
            <Background />
            <Vision />
            <Faqs />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseSips;
