import React from "react";
import logo from "../img/daredevil-pedals.jpg";
import { Link } from "gatsby";
import NavbarNew from "../components/NavbarNew";

const Header = () => {
  return (
    <section>
      <header>
        <div className="logo-wrapper">
          <a href="http://daredevilpedals.com">
            <img src={logo} alt="Daredevil Pedals logo" />
          </a>
        </div>

        <NavbarNew />
      </header>
    </section>
  );
};

export default Header;
