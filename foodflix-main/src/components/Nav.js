import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import logo from "../foodflix-logo.png";
import { isAuthenticated, signout } from "./Auth/helper";

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
      return <Redirect to="/signup" />;
    }
  };

  const directSignin = () => {
    return <Redirect to="/signin" />
  }
  const directSignup = () => {
    return <Redirect to="/signup" />
  }

  const userInfo = () => (
    <span
      className="navUserInfo"
    >
      <p>{isAuthenticated().user.firstName}</p>
      <p>{isAuthenticated().user.email}</p>
      <button onClick={signOut}>Log Out</button>
    </span>
  );   

  const authBox = () => (
    <span
      className="navUserInfo"
    >
      <button
        className="infobox_items" onClick={directSignup}>
        SignUp
      </button>
      <button
        className="infobox_items" onClick={directSignin}>
        SignIn
      </button>
    </span>
  );

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <img className="nav_logo" src={logo} alt="Foodflix logo" />
      <span onMouseOver={() => {
          setInfo(true);
        }}
        onMouseLeave={()=>{
          setInfo(false);
        }}>
      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="avatar" 
      />
      {info && (isAuthenticated() ? userInfo() : authBox())}
      {doRedirect()}
      </span>
     
    </div>
  );
}

export default N