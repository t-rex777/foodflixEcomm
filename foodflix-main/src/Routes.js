import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Cart from "./components/cart/Cart";
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/SignUp';
import AdminDashboard from './components/dashboard/AdminDashboard';
import UserDashboard from './components/dashboard/UserDashboard';
import AdminRoute from './components/AuthenticatedRoutes/AdminRoute';
import PrivateRoute from './components/AuthenticatedRoutes/PrivateRoute';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
