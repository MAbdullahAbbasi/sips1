import React, { useEffect } from "react";
import "./assets/css/plugins.css";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet";
import TrustedCustomers from "./components/TrustedCustomers";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";

import WhatsappModal from "./components/WhatsappSupport/WhatsappModal"


const App = () => {
  return (
    <>
      <div className="content-wrapper">
  
        <header className="wrapper bg-soft-primary">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        




        <hr className="container" />
        <TrustedCustomers />
        <Footer />

        <WhatsappModal img1="./assets/whatsapp_modal_data/img/person_6.jpg"/>


        {/* <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div> */}
      </div>

      <Helmet>
        <script src="./assets/js/plugins.js"></script>
        <script src="./assets/js/theme.js"></script>

        <script src="./assets/whatsapp_modal_data/jQuery/jquery-1.11.3.min.js"></script>

<script src="./assets/whatsapp_modal_data/js/whatsapp-chat-support.js"></script>
        
      </Helmet>
    </>
  );
};

export default App;
