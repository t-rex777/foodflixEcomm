import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../Auth/helper";
import "./cart.css";
import Base from "./../Base/Base";

function Cart() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    address: "",
    orders: "",
  });
  useEffect(() => {
    console.log(isAuthenticated().user);
    const { firstName, lastName, email } = isAuthenticated().user;
    setUser({
      fullName: firstName + lastName,
      email: email,
    });
  }, []);
  return (
    <Base header="Cart">
      <div className="cart">
        <div className="left">
          <div className="prod">
          <div className="product">Product</div>
          <div className="price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="subtotal">Subtotal</div>
          </div>
          
          <div>
            <label>Coupon Code</label>
            <input type="text" name="coupon" />
            <button>Apply</button>
            <button>Update</button>
          </div>
        </div>
        <div className="right">
          <h3>Summary</h3>
          <p>1 Product</p>
          <p>Product Total</p>
          <p>Delivery Charges</p>
          <p>Total</p>
          <button>PAY</button>
        </div>
      </div>
    </Base>
  );
}

export default Cart;
