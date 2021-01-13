import React from "react";
import { isAuthenticated } from "../Auth/helper";
import Base from "../Base/Base";

function AdminDashboard() {
  const { email, firstName, lastName, userinfo } = isAuthenticated().user;

  return (
    <Base header="Admin Dashboard">
      <h3>
        Name : {firstName} {lastName}
      </h3>
      <h3>Email : {email}</h3>
      <h3>Role : Admin</h3>
      <h3>User Info : {userinfo}</h3>
    </Base>
  );
}

export default AdminDashboard;
