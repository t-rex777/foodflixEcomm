import React from "react";
import { isAuthenticated } from "../Auth/helper";
import Base from "../Base/Base";

function UserDashboard() {
  const { email, firstName, lastName, userinfo } = isAuthenticated().user;

  return (
    <Base header="User Dashboard">
        <h3>
            Name : {firstName} {lastName}
          </h3>
          <h3>Email : {email}</h3>
          <h3>Role : User</h3>
          <h3>User Info : {userinfo}</h3>
        
    </Base>
  );
}

export default UserDashboard;
