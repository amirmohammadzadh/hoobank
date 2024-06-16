import React from "react";
import FooterItem from "./FooterItem";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer container">
      <div className="footer__top">
        <div className="footer__top_logo">
          <img src="./img/logo.svg" alt="logo" />
          <p className="footer__paragraph">
            A new way to make payments <br /> easy, reliable and secure.
          </p>
        </div>
        <div className="footer__top_logo-menu">
          <FooterItem
            title={"Useful Links"}
            paragraphs={[
              "Content",
              "How it Works",
              "Create",
              "Explore",
              "Terms & Services",
            ]}
          />
          <FooterItem
            title={"Community"}
            paragraphs={[
              "Help Center",
              "Partners",
              "Suggestions",
              "Blog",
              "Newsletters",
            ]}
          />
          <FooterItem
            title={"Partner"}
            paragraphs={["Our Partner", "Become a Partner"]}
          />
        </div>
      </div>
      <div className="footer__bottom">
        <span>2022 HooBank. All Rights Reserved.</span>
        <div className="footer__bottom-logo">
          <img src="./img/instagram.svg" alt="instagram" />
          <img src="./img/facebook.svg" alt="facebook" />
          <img src="./img/twitter.svg" alt="twitter" />
          <img src="./img/linkedin.svg" alt="linkedin" />
        </div>
      </div>
    </div>
  );
}
