import React, { Fragment, useEffect, useState } from "react";
import Card from "./Base/Card";

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
                <button className="infobox_items ">Add to Cart</button>
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
