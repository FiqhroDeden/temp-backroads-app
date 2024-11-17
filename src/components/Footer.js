import React from "react";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <PageLink type="footer-link" />
      </ul>
      <ul className="footer-icons">
        <SocialLink type="footer-icon" />
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
