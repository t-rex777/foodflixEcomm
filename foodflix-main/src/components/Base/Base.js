import React, { useState, useEffect } from "react";
import "./styles.css";
import Nav from "./../Nav";
import { Link } from "react-router-dom";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";

function Base({ header, children }) {
  var [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const resize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.onresize = resize;
  });
  const menu = () => {
    return (
      <>
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/admin/dashboard" className="btn" onClick={handleClick}>
          Dashboard
        </Link>
        <Link to="/categories" className="btn">
          Categories
        </Link>

        <Link to="/products" className="btn">
          Products
        </Link>

        <Link to="/orders" className="btn">
          Orders
        </Link>
        <Link to="/help" className="btn">
          Help
        </Link>
      </>
    );
  };
  const fullNav = () => {
    return (
      <div className="flex">
        <div className="side_nav">{menu()}</div>
        <div className="right-box">{children}</div>
      </div>
    );
  };
  const sideNav = () => {
    return (
      <div className="flex">
        <div className="side_nav">
          <span className="hamIcon">
            <GiIcons.GiHamburgerMenu onClick={handleClick} />
          </span>
          <nav className={toggle ? "nav-menu active" : "nav-menu"}>
            <span className="crossIcon">
              <AiIcons.AiOutlineClose
                className="crossIcon"
                onClick={handleClick}
              />
            </span>
            {menu()}
          </nav>
        </div>
        <div className="right-box">{children}</div>
      </div>
    );
  };
  return (
    <div className="container">
      <Nav />
      <h1 className="header">{header}</h1>
      {screenWidth > 800 ? fullNav() : sideNav()}
    </div>
  );
}

export default Base;
