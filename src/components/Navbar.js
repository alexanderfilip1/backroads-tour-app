import React, { useState } from "react";
import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
import MobileNav from "./MobileNav";

export default function Navbar() {
  let [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} className="nav-logo" alt="backroads" />
          </a>
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={() => {
              setBurgerMenu(!burgerMenu);
            }}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          <PageLinks className={"nav-link"} />
        </ul>

        <ul className="nav-icons">
          <SocialLinks className={"nav-link"} />
        </ul>
      </div>
      {burgerMenu && <MobileNav />}
    </nav>
  );
}
