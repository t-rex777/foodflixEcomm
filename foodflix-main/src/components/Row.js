import React, { Fragment } from "react";

function Row({ recipe, title }) {
  return (
    <Fragment>
      <h1 className="row_title">{title}</h1>
      <div className="row">
        {recipe.map((item, index) => {
          return <img className="image" key={index} src={item} alt="foods" />;
        })}
      </div>
    </Fragment>
  );
}

export default Row;
