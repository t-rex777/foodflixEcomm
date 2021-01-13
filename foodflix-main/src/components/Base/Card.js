import React from "react";
import { imageHelper } from "../../product/helper";
import "./styles.css";

function Card({ product, children }) {
  const image = imageHelper(product._id);
  return (
    <div className="card">
      <img className="card_image" src={image} alt="product_pic" />
      <p>{product.product_name}</p>
      <p>price : $ {product.price}</p>
      {children}
    </div>
  );
}

export default Card;
