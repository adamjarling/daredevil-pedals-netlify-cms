import React from "react";
import logo from "../img/StickerA2020.jpg";
import { Link } from "gatsby";
import NavbarNew from "../components/NavbarNew";

const Header = () => {
  return (
    <section>
      <header>
        <div className="logo-wrapper">
          <Link to="/">
            <img src={logo} alt="Daredevil Pedals logo" />
          </Link>
        </div>
        <NavbarNew />
      </header>
    </section>
  );
};

export default Header;
