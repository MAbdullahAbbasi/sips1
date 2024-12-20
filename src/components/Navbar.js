import React from "react";
import { Link } from "react-router-dom";
import "./component.css"
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg classic transparent navbar-light">
        <div className="container flex-lg-row flex-nowrap align-items-center">
          <div className="navbar-brand w-100">
            <Link to="/">
              {/* <img src="./assets/img/logo-dark.png" srcSet="./assets/img/logo-dark@2x.png 2x" alt="" /> */}
              <h1>SIPS</h1>
            </Link>
          </div>
          <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
            <div className="offcanvas-header d-lg-none">
              <h3 className="text-white fs-30 mb-0">SIPS</h3>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul className="navbar-nav">
            <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Universities
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-item" href="./pricing.html">
                        Associate Programs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./pricing.html">
                        Bachelor Programs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./onepage.html">
                        Master Programs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./onepage.html">
                        Ph.D Programs
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Programs
                  </a>
                  <ul className="dropdown-menu">
                    {/* <li className="dropdown dropdown-submenu dropend"><a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Services</a>
                      <ul className="dropdown-menu">
                        <li className="nav-item"><a className="dropdown-item" href="./services.html">Services I</a></li>
                        <li className="nav-item"><a className="dropdown-item" href="./services2.html">Services II</a></li>
                      </ul>
                    </li> */}
                    <li className="nav-item">
                      <a className="dropdown-item" href="./pricing.html">
                        Associate Programs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./pricing.html">
                        Bachelor Programs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./onepage.html">
                        Master Programs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./onepage.html">
                        Ph.D Programs
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " href="#">
                    Scholarships
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Study Tour
                  </a>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a className="dropdown-item" href="./pricing.html">
                        Associate Programs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./pricing.html">
                        Bachelor Programs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./onepage.html">
                        Master Programs
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item" href="./onepage.html">
                        Ph.D Programs
                      </a>
                    </li>
                  </ul>
                </li>
                
                <li className="nav-item ">
                  <Link className="nav-link " to="/blogs">
                    Blogs
                  </Link>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " href="#">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="offcanvas-footer d-lg-none">
                <div>
                  <a href="mailto:first.last@email.com" className="link-inverse">sipsworldwide.edu@gmail.com</a>
                  <br /> +90 531 0141 190 <br />
                  <nav className="nav social social-white mt-4">
                    <a href="#"><i className="uil uil-twitter"></i></a>
                    <a href="#"><i className="uil uil-facebook-f"></i></a>
                    <a href="#"><i className="uil uil-dribbble"></i></a>
                    <a href="#"><i className="uil uil-instagram"></i></a>
                    <a href="#"><i className="uil uil-youtube"></i></a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-other ms-lg-4">
            <ul className="navbar-nav flex-row align-items-center ms-auto">
              <li className="nav-item"><a className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-search"><i className="uil uil-search"></i></a></li>
              <li className="nav-item d-none d-md-block">
                <a href="#" className="btn btn-sm btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#modal-signin">Sign In</a>
              </li>
              <li className="nav-item d-lg-none">
                <button className="hamburger offcanvas-nav-btn"><span></span></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
