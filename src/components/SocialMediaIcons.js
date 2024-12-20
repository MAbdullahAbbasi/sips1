import React from "react";

const SocialMediaIcons = (props) => {
  return (
    <>
      <nav className="nav d-flex w-25 justify-content-between align-items-center">
        <a href="https://www.instagram.com/sips_edu/">
          <i
            className="fa-brands fa-instagram fa-xl"
            style={{ color: "purple", width: "30px !important" }}
          ></i>
        </a>

        <a href="https://www.facebook.com/people/SIPS/100088780026689/">
          <i
            className="fa-brands fa-facebook fa-xl"
            style={{ color: "#1876f3", width: "30px !important" }}
          ></i>
        </a>
        <a href="https://www.tiktok.com/en/">
          <i
            className="fa-brands fa-tiktok fa-xl"
            style={{ color: props.tiktokColor, width: "30px !important" }}
          ></i>
        </a>
        <a href="#">
          <i
            className="fa-brands fa-linkedin fa-xl"
            style={{ color: "#0177b4", width: "30px !important" }}
          ></i>
        </a>
        <a href="https://wa.me/+905310141190" target={"_blank"}>
          <i
            className="fa-brands fa-whatsapp fa-xl"
            style={{ color: "#4ac95a", width: "30px !important" }}
          ></i>
        </a>
        <a href="weixin://dl/chat?+8615506659381" target={"_blank"}>
          <i
            className="fa-brands fa-weixin fa-xl"
            style={{ color: "#2cc000", width: "30px !important" }}
          ></i>
        </a>
        <a href="https://t.me/+fDMUFFF_9y85NjM0">
          <i
            className="fa-brands fa-telegram fa-xl"
            style={{ color: "#28a8e9", width: "30px !important" }}
          ></i>
        </a>
        <a href="https://www.youtube.com/channel/UCCZTUZ_KJV2wqH1e60p6gRw" target={"_blank"}>
          <i
            className="fa-brands fa-youtube fa-xl"
            style={{ color: "red", width: "30px !important" }}
          ></i>
        </a>
      </nav>
    </>
  );
};

export default SocialMediaIcons;
