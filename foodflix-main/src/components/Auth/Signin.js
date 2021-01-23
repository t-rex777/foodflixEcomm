import React from "react";
import { useState } from "react";
import { authenticate, signin, isAuthenticated } from "./helper";
import "./signin.css";
import SuccessMessage from "../message/SuccessMessage";
import ErrorMessage from "./../message/ErrorMessage";
import { Redirect } from "react-router-dom";
import Nav from './../Nav';

function Signin() {
  const [data, setData] = useState({
    email: "manish@admin.com",
    password: "iamadmin",
    success: "",
    error: "",
    didRedirect: "",
  });
  const { email, password } = data;
  const { user } = isAuthenticated();

  // const handleChange = name => (e) => {
  //   setData({
  //      ...data , [name] : e.target.value
  //   })
  // };

  //*********************OR****************************//

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    signin({ email, password })
      .then((res) => {
        if (res.token) {
          authenticate(res, () => {
            setData({
              ...data,
              success: true,
              error: false,
              didRedirect: true,
            });
          });
          console.log(res);
        } else {
          setData({
            ...data,
            error: res.error,
            success: false,
            didRedirect: false,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const DoRedirect = () => {
    if (data.didRedirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    } 
    // if (isAuthenticated()) {
    //   return <Redirect to="/" />;
    // }
  };

  const SignInForm = () => (
    <form>
      {data.success && <SuccessMessage message="User Logged In Successfully" />}
      {data.error && <ErrorMessage message={data.error} />}

      <h1 className="header">Sign In</h1>
      <label>Email </label>
      <input
        type="text"
        value={data.email}
        name="email"
        onChange={handleChange}
      />
      <label>Password </label>
      <input
        type="password"
        value={data.password}
        name="password"
        onChange={handleChange}
      />
      <br />
      <button className="button_auth" type="submit" onClick={handleClick}>
        Sign In
      </button>
      {/* <p>email :{data.email}</p>
        <p>password :{data.password}</p> */}
    </form>
  );

  return (
    <div>
      <Nav/>
      {SignInForm()}
      {DoRedirect()}
    </div>
  );
}

export default Signin;
