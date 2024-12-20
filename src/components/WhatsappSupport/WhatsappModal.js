import React from "react";


import img1 from "./img/person_2.jpg";
import img2 from "./img/person_6.jpg";
import img3 from "./img/person_4.jpg";
const WhatsappModal = (props) => {
  return (
    <>
      <div className="whatsapp_chat_support wcs_fixed_right" id="example_3">
        <div className="wcs_button_label">Questions? Let's Chat</div>
        <div className="wcs_button wcs_button_circle">
          <span className="fa fa-whatsapp"></span>
        </div>

        <div className="wcs_popup">
          <div className="wcs_popup_close">
            <span className="fa fa-close"></span>
          </div>
          <div className="wcs_popup_header">
            <strong>Need Help? Chat with us</strong>
            <br />
            <div className="wcs_popup_header_description">
              Click one of our representatives below
            </div>
          </div>
          <div className="wcs_popup_person_container">
            <div className="wcs_popup_person" data-number="905310141190">
              <div className="wcs_popup_person_img">
                <img src={img2} alt="" />
              </div>
              <div className="wcs_popup_person_content">
                <div className="wcs_popup_person_name">Omer</div>
                <div className="wcs_popup_person_description">
                   Support
                </div>
                <div className="wcs_popup_person_status">I'm Online</div>
              </div>
            </div>

            <div className="wcs_popup_person" data-number="8615506659381">
              <div className="wcs_popup_person_img">
                <img src={img1} alt="" />
              </div>
              <div className="wcs_popup_person_content">
                <div className="wcs_popup_person_name">Kate</div>
                <div className="wcs_popup_person_description">
                  Support
                </div>
                <div className="wcs_popup_person_status">I'm Online</div>
              </div>
            </div>

            <div
              className="wcs_popup_person"
              data-number="923005276725"
              data-availability="{}"
            >
              <div className="wcs_popup_person_img">
                <img src={img3} alt="" />
              </div>
              <div className="wcs_popup_person_content">
                <div className="wcs_popup_person_name">Help</div>
                <div className="wcs_popup_person_description">
                  Techincal Support
                </div>
                <div className="wcs_popup_person_status">I'm Online</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsappModal;
