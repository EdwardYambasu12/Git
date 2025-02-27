import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="circle left"></div> {/* Left Circle */}
      <div className="footer-content">
        <p>© Copyright 2025 SportsUp</p>
        <div className="links">
          <a href="/terms">Terms of Use</a> • 
          <a href="/cookie-policy">Cookie Policy</a> • 
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <p>The use of automatic services (robots, crawlers, etc.) is not permitted.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-tiktok"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-x-twitter"></i></a>
        </div>
      </div>
      <div className="circle right"></div> {/* Right Circle */}
    </footer>
  );
};

export default Footer;
