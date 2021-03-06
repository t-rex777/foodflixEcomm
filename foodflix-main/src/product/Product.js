import React from "react";
import Base from "./../components/Base/Base";
import { useState } from "react";
import { getProducts, removeProduct } from "./helper";
import { useEffect } from "react";
import Card from "./../components/Base/Card";
import "./styles.css";
import { isAuthenticated } from "../components/Auth/helper";
import { Link } from "react-router-dom";

function Product() {
  const { token, user } = isAuthenticated();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts().then((pro) => setProduct(pro));
  }, []);

  return (
    <Base header="Products">
            <Link to="/create/product" className="change_btn add">Add a Product</Link>

      <div className="products">
        {product.map((pro) => (
          <div key={pro._id}>
            <Card product={pro}>
            
              <div className="product_btn">
              <Link to={`/update/product/${pro._id}`}>
                <button className="change_btn">Update</button>
              </Link>
              <button
              className="change_btn"
                onClick={() => {
                  removeProduct(pro._id, user._id, token).then(
                    window.location.reload()
                  );
                }}
              >
                Remove
              </button>
              </div>
              
            </Card>
          </div>
        ))}
      </div>

    </Base>
  );
}

export default Product;
