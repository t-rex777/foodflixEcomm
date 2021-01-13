import React from "react";
import "./styles.css";
import Nav from "./../Nav";
import hamIcon from "../../images/list.svg";

function Base({ header, children }) {
  const hiddenNav = () => {
    return (
      <div className="flex">
        <div className="side_nav">
          <img src={hamIcon} alt="" className="hamIcon" />

          <a href="/categories" className="btn">
            Show categories
          </a>

          <a href="/products" className="btn">
            Show products
          </a>

          <a href="/orders" className="btn">
            Show Orders
          </a>
        </div>
      </div>
    );
  };
  return (
    <div className="container">
      <Nav />
      <h1 className="header">{header}</h1>
      <div className="flex">
        <div className="side_nav">
          <a href="/categories" className="btn">
            Show categories
          </a>

          <a href="/products" className="btn">
            Show products
          </a>

          <a href="/orders" className="btn">
            Show Orders
          </a>
        </div>
        <div className="right-box">{children}</div>
      </div>
    </div>
  );
}

export default Base;
