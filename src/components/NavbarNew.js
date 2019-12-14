import React from "react";
import { Link } from "gatsby";

const NavbarNew = () => {
  return (
    <nav>
      <div className="nav-menu-wrapper">
        <div className="ui five item text menu">
          <Link to="/">Home</Link>
          <Link to="/bio">Bio</Link>
          <Link to="/dealers">Dealers</Link>
          <Link to="/press">Press</Link>
          <Link to="/artists">Artists</Link>
          <Link to="/faqs">F.A.Qs</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNew;
