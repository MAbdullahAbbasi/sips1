import React from "react";

const Vision = () => {
  return (
    <>
      <div className="tab-pane fade" id="tab2-2">
              <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div className="col-lg-6 order-lg-2">
                  <div className="row gx-md-5 gy-5">
                    <div className="col-5">
                      <img
                        className="img-fluid rounded shadow-lg my-5 d-flex ms-auto"
                        src="./assets/img/photos/sa9.jpg"
                        srcSet="./assets/img/photos/sa9@2x.jpg 2x"
                        alt=""
                      />
                      <img
                        className="img-fluid rounded shadow-lg d-flex col-10 ms-auto"
                        src="./assets/img/photos/sa10.jpg"
                        srcSet="./assets/img/photos/sa10@2x.jpg 2x"
                        alt=""
                      />
                    </div>
                    <div className="col-7">
                      <img
                        className="img-fluid rounded shadow-lg mb-5"
                        src="./assets/img/photos/sa11.jpg"
                        srcSet="./assets/img/photos/sa11@2x.jpg 2x"
                        alt=""
                      />
                      <img
                        className="img-fluid rounded shadow-lg d-flex col-11"
                        src="./assets/img/photos/sa12.jpg"
                        srcSet="./assets/img/photos/sa12@2x.jpg 2x"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h2 className="mb-3 display-1">Our Vision</h2>
                  <p style={{ textAlign: "justify" }}>
                    Our foreign study specialists vision is to become the
                    leading education consultancy firm by providing superior
                    quality services to our students, their parents, local and
                    foreign educational partners with honesty, integrity, and
                    mutual satisfaction.
                  </p>
                  {/* <ul className="icon-list bullet-bg bullet-soft-green">
                  <li><i className="uil uil-check"></i>Aenean eu leo quam. Pellentesque ornare.</li>
                  <li><i className="uil uil-check"></i>Nullam quis risus eget urna mollis ornare.</li>
                  <li><i className="uil uil-check"></i>Donec id elit non mi porta gravida at eget.</li>
                </ul> */}
                  <a href="#" className="btn btn-primary mt-2">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
    </>
  );
};

export default Vision;
