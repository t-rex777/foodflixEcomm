import React, { Fragment, useEffect, useState } from "react";
import { isAuthenticated } from "./Auth/helper";
import Card from "./Base/Card";
import { addProductToCart } from "./cart/helper";

function Row({ recipe, title }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    recipe.then((data) => setItem(data));
  });
  return (
    <Fragment>
      <h1 className="row_title">{title}</h1>
      <div className="row">
        {item.map((pro, i) => {
          if (pro !== "")
            return (
              <Card product={pro} className="image" key={i}>
                <button
                  className="infobox_items"
                  onClick={() => {
                    if (isAuthenticated()) {
                      const {
                        token,
                        user: { _id },
                      } = isAuthenticated();
                      addProductToCart(pro, _id, token)
                        .then(console.log(pro))
                        .catch((err) => console.log(err));
                    } else {
                      console.log("log in first");
                    }
                  }}
                >
                  Add to Cart
                </button>
                <button
                  className="infobox_items"
                  style={{ marginLeft: "10px" }}
                >
                  Buy Now
                </button>
              </Card>
            );
        })}
      </div>
    </Fragment>
  );
}

export default Row;
