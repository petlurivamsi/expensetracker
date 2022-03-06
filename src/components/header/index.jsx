import React from "react";
import "./header.css";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Expenser
          <i className="creditCardIcon">
            <CreditCardIcon />
          </i>
        </div>
        <div className="header-button">
          <a
            href="https://github.com/petlurivamsi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-original"></i>
            Star
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
