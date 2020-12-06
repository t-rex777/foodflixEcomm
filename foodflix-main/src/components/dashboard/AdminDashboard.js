import React from "react";
import "./styles.css";
import Nav from './../Nav';

function AdminDashboard({
  firstName = "manish kumar",
  lastName = "sahu",
  email = "msahu300@gmail.com",
  userinfo = "I am Manish",
  role = "Admin",
}) {
  return (
    <div className="container">
      <Nav />
      <h1 className="header">Admin Dashboard</h1>
      <div className="flex">
        <div className="left-box">
          <h3 className="btn">Show categories</h3>
          <h3 className="btn">Show products</h3>
          <h3 className="btn">Show Orders</h3>
        </div>
        <div className="right-box">
          <h3>
            Name : {firstName} {lastName}
          </h3>
          <h3>Email : {email}</h3>
          <h3>Role : {role}</h3>
          <h3>User Info : {userinfo}</h3>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
