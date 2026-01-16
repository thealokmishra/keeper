import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-container">
      <p>Copyright ⓒ {year} Alok Mishra</p>
    </footer>
  );
}

export default Footer;
