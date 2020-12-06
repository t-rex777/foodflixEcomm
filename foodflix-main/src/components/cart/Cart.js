import React from "react";
import "./cart.css"

function Cart() {
  return (
    <div className="container">
      <div className="left">
        <div className="red">name</div>
        <div className="yellow">email</div>
        <div className="green">password</div>
      </div>
      <div className="right">summary</div>
    </div>
  );
}

export default Cart;
