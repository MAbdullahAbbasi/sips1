import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

const Hero = () => {
  return (
    <>
      <section className="wrapper bg-dark angled lower-start">
        <div className="container pt-7 pt-md-6 pb-8">
          <div className="row gx-0 gy-8 align-items-center">
            <div
              className="col-lg-6"
              data-cues="slideInDown"
              data-group="page-title"
              data-delay="600"
            >
              <div className="position-relative">
                <a
                  href="./assets/media/movie.mp4"
                  className="btn btn-circle btn-primary btn-play ripple mx-auto mb-6 position-absolute"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    zIndex: "3",
                  }}
                  data-glightbox
                >
                  <i className="icn-caret-right"></i>
                </a>
                <figure className="rounded shadow-lg">
                  <img
                    src="./assets/img/photos/about13.jpg"
                    srcSet="./assets/img/photos/about13@2x.jpg 2x"
                    alt=""
                  />
                </figure>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1 " data-cues="slideInDown">
              <h1 className="display-1 text-white mb-4">
                Why Us <br />
                <span
                  className="typer text-primary text-nowrap"
                  data-delay="100"
                  data-words="customer satisfaction,business needs,creative ideas"
                ></span>
                <span className="cursor text-primary" data-owner="typer"></span>
              </h1>
              <p
                className="lead fs-20 lh-sm text-white mb-7 pe-md-18 pe-lg-0 pe-xxl-15"
                style={{ textAlign: "justify" }}
              >
                At SIPS Study Abroad Consultants, we have foreign study
                specialists and a team of local qualified education advisors and
                counselors who provide professional guidance to the students and
                their parents/ sponsors. Our strong 'student-centered' approach
                to counseling means; we provide students with complete
                information on all available options to assist them to make the
                right decisions at the right time to have a long-term positive
                impact on their career goals.
              </p>
              <div>
                <div className="mb-10">
                  <h1 className="text-white">Follow Us</h1>
                  <nav className="nav social justify-content-center">
                  <SocialMediaIcons tiktokColor="white"/>
                  </nav>
                </div>
                <a className="btn btn-lg btn-primary rounded" href="#">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
