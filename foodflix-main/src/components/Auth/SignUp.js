import React from "react";
import { useState } from "react";
import "./signin.css";
import { signup } from "./helper";
import SuccessMessage from "../message/SuccessMessage";
import ErrorMessage from "./../message/ErrorMessage";
import { Redirect } from "react-router-dom";
import Nav from './../Nav';

function Signup() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userinfo: "",
    error: "",
    success: "",
  });

  const { firstName, lastName, email, password, userinfo } = data;

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
    if(data.password !== data.confirmPassword){
     return window.alert("Both passwords do not match!");
    }

    signup({ firstName, lastName, email, password, userinfo })
      .then((response) => {
        if (response._id) {
          setData({ ...data, error: false, success: true });
        } else {
          setData({ ...data, error: response.error, success: false });
        }
        console.log("user created!", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="">
      <Nav/>
      <form>
        {data.success && <SuccessMessage message="User Created Successfully" />}
        {data.error && (
          <ErrorMessage message="Please fill the form carefully" />
        )}
        <h1 className="header">Sign Up</h1>
        <label>First Name </label>
        <input
          type="text"
          value={data.firstName}
          name="firstName"
          onChange={handleChange}
        />
        <label>Last Name </label>
        <input
          type="text"
          value={data.lastName}
          name="lastName"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
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
        <label>Confirm Password</label>
        <input
          type="password"
          value={data.confirmPassword}
          name="confirmPassword"
          onChange={handleChange}
        />
        <label>User Information</label>
        <textarea
          rows="5"
          cols="33"
          value={data.userinfo}
          name="userinfo"
          onChange={handleChange}
        />
        <button className="button_auth" type="submit" onClick={handleClick}>
          Sign Up
        </button>
      </form>
      {data.success && <Redirect to="/signin" />}
    </div>
  );
}

export default Signup;
