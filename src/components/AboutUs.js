import React from "react";
import img1 from "../assets/img/photos/ab1.jpg"
import img2 from "../assets/img/photos/ab2.jpg"
import img3 from "../assets/img/photos/ab3.jpg"
const AboutUs = () => {
  return (
    <>
      <section className="wrapper bg-light">
        <div className="container py-4 pt-md-16">
          <div className="row gx-lg-8 gx-xl-12 gy-12 align-items-center">
            <div className="col-lg-6 position-relative">
              <div
                className="btn btn-circle btn-primary pe-none position-absolute counter-wrapper flex-column d-none d-md-flex"
                style={{top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "170px", height: "170px"}}
              >
                <h3 className="text-white mb-1 mt-n2">
                  <span className="counter counter-lg">25+</span>
                </h3>
                <p>Year Experience</p>
              </div>
              <div className="row gx-md-5 gy-5 align-items-center">
                <div className="col-md-6">
                  <div className="row gx-md-5 gy-5">
                    <div className="col-md-10 offset-md-2">
                      <figure className="rounded">
                        <img
                          src={img1}
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="col-md-12">
                      <figure className="rounded">
                        <img
                          src={img2}
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <figure className="rounded">
                    <img
                      src={img3}
                      alt=""
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="../assets/img/icons/lineal/handshake.svg"
                className="svg-inject icon-svg icon-svg-md mb-4"
                alt=""
              />
              <h3 className="display-1 mb-5">
              About Us
              </h3>
              <p className="mb-7 fs-25" style={{textAlign:"justify"}}>
              Sapling was established in Year 1996 to provide reliable and value-added education to students and SIPS is helping individuals who wish to pursue further education in foreign universities with the help of our foreign study specialists.
              </p>
              <div className="row counter-wrapper gy-6">
                <div className="col-md-4">
                  <h3 className="counter text-primary">35</h3>
                  <p>Affiliated Universities</p>
                </div>
                <div className="col-md-4">
                  <h3 className="counter text-primary">2500+</h3>
                  <p>Satisfied Students</p>
                </div>
                <div className="col-md-4">
                  <h3 className="counter text-primary">26</h3>
                  <p>Available Scholarships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
