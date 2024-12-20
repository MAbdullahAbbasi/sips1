import React from 'react'

const Background = () => {
  return (
    <>
      <div className="tab-pane fade show active" id="tab2-1">
              <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
                <div className="col-lg-6">
                  <div className="row gx-md-5 gy-5 align-items-center">
                    <div className="col-6">
                      <img
                        className="img-fluid rounded shadow-lg d-flex ms-auto"
                        src="./assets/img/photos/sa13.jpg"
                        srcSet="./assets/img/photos/sa13@2x.jpg 2x"
                        alt=""
                      />
                    </div>
                    <div className="col-6">
                      <img
                        className="img-fluid rounded shadow-lg mb-5"
                        src="./assets/img/photos/sa14.jpg"
                        srcSet="./assets/img/photos/sa14@2x.jpg 2x"
                        alt=""
                      />
                      <img
                        className="img-fluid rounded shadow-lg d-flex col-10"
                        src="./assets/img/photos/sa15.jpg"
                        srcSet="./assets/img/photos/sa15@2x.jpg 2x"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <h2 className="mb-3 display-1">Background</h2>
                  <p style={{ textAlign: "justify" }}>
                    SIPS study abroad consultants are in the field of career
                    counseling and student placement catering to the needs of
                    our international students from our offices located; China,
                    Türkiye, Pakistan, Russia and UK. Our expertise in the field of
                    foreign study education has made us a time-tested resource
                    for students in securing admission that commensurate well
                    with their aspirations and credentials in an array of
                    esteemed universities ranging from the United Kingdom,
                    China, Australia, USA, Canada, Türkiye, Russia, TRNC and Qatar.
                  </p>
                  {/* <ul className="icon-list bullet-bg bullet-soft-yellow">
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
  )
}

export default Background
