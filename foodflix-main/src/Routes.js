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
import Category from './components/category/Category';
import Product from './product/Product';
import AddProduct from './product/AddProduct';
import UpdateProduct from './product/UpdateProduct';


function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        <AdminRoute path="/categories" exact component={Category} />
        <AdminRoute path="/products" exact component={Product} />
        <AdminRoute path="/create/product" exact component={AddProduct} />
        <AdminRoute path="/update/product/:productId" exact component={UpdateProduct} />
        <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
