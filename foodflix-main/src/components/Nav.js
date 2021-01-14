import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../foodflix-logo.png";
import { isAuthenticated, signout } from "./Auth/helper";

function Nav({ history }) {
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
      <p className="infobox_p">{isAuthenticated().user.firstName}</p>
      <p className="infobox_p">{isAuthenticated().user.email}</p>
      <p className="infobox_p">
        {isAuthenticated().user.role === 1 ? "Admin" : "User"}
      </p>
      <Link to="/admin/dashboard">
        <button className="infobox_items">Dashboard</button>
      </Link>

      <button className="infobox_items" onClick={signOut}>
        Log Out
      </button>
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

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <Link to="/">
        <img className="nav_logo" src={logo} alt="Foodflix logo" />
      </Link>

      <span
        onMouseOver={() => {
          setInfo(true);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setInfo(false);
          }, 1000);
        }}
      >
        <Link
          to={
            isAuthenticated()
              ? (isAuthenticated().user.role === 1
                ? "/admin/dashboard"
                : "/user/dashboard")
              : ("/signin")
          }
        >
          <img
            className="nav_avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="avatar"
          />
        </Link>

        {info && (isAuthenticated() ? userInfo() : authBox())}
        {doRedirect()}
      </span>
    </div>
  );
}

export default Nav;
