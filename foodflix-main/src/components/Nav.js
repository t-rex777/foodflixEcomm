import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../foodflix-logo.png";
import { isAuthenticated, signout } from "./Auth/helper";
import * as FaIcons from "react-icons/fa";

function Nav() {
  const [scroll, setScroll] = useState();
  const [info, setInfo] = useState(false);
  const [isSignout, setSignOut] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  const signOut = () => {
    setSignOut(true);
    signout(() => {
      console.log("signout success");
    });
  };

  const doRedirect = () => {
    if (isSignout) {
      return <Redirect to="/" />;
    }
  };

  const userInfo = () => (
    <span className="navUserInfo">
      <p className="infobox_p">Hello! {isAuthenticated().user.firstName}</p>
      <p className="infobox_p">{isAuthenticated().user.email}</p>
      <Link
        to={
          isAuthenticated().user.role === 1
            ? "/admin/dashboard"
            : "/user/dashboard"
        }
        style={{ width: "100px" }}
      >
        <button className="infobox_items">Dashboard</button>
      </Link>

      <button className="infobox_items" onClick={signOut}>
        Log Out
      </button>
      {isAuthenticated().user.role === 0 && (
        <Link style={{ fontSize: "2rem", marginLeft: "2rem" }} to="/cart">
          <FaIcons.FaCartArrowDown />
        </Link>
      )}
    </span>
  );

  const authBox = () => (
    <span className="navUserInfo">
      <Link className="infobox_items" to="/signup">
        Sign Up
      </Link>
      <Link className="infobox_items" to="/signin">
        Sign In
      </Link>
     
    </span>
  );

  const handleClick = () => {
    setInfo(!info)
  }

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <Link to="/">
        <img className="nav_logo" src={logo} alt="Foodflix logo" />
      </Link>

      <span 
        onClick={handleClick}
        
      >
        {/* <Link
          to={
            isAuthenticated()
              ? isAuthenticated().user.role === 1
                ? "/admin/dashboard"
                : "/user/dashboard"
              : "/signin"
          }
        > */}
          <img
            className="nav_avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="avatar"
          />
        {/* </Link> */}
         
        {info && (isAuthenticated() ? userInfo() : authBox())}
        {doRedirect()}
      </span>
    </div>
  );
}

export default Nav;
