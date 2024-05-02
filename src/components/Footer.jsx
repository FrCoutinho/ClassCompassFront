import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="copyright">
        © {year} &nbsp; Class Compass &nbsp; by{" "}
        <a href="https://github.com/FrCoutinho" target="_blank" rel="noreferrer noopener">
          Francisco Coutinho
        </a>
      </p>
    </footer>
  );
}

export default Footer;
