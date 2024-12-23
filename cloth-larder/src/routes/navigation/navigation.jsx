import React from "react";
import { Outlet, Link } from "react-router";
import crownLogo from "../../assets/crown.svg";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={crownLogo} alt="" className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <Link className="nav-link" to="/sign-in">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
