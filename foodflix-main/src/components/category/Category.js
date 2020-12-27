import React from "react";
import { showCategories } from "./helper";
import { useState } from "react";
import { useEffect } from "react";
import Nav from "./../Nav";
import "./category.css"

function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    showCategories().then((item) => setCategory(item));
  }, []);
  return (
    <div className="container">
      <Nav />
      <h1 className="header">Categories</h1>
      <div className="content-box">
        {category.map((cate) => (
          <div className="category">
            <h2 key={cate._id}>{cate.category_name}</h2>
            <button className="category_btn">Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
