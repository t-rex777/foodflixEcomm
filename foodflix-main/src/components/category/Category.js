import React from "react";
import { addCategory, showCategories, deleteCategory } from "./helper";
import { useState } from "react";
import { useEffect } from "react";
import "./category.css";
import { isAuthenticated } from "../Auth/helper";
import Base from "./../Base/Base";

function Category() {
  const [category, setCategory] = useState([]);
  const [category_name, setNewCategory] = useState("");
  const {
    token,
    user: { _id },
  } = isAuthenticated();


  useEffect(() => {
    showCategories().then((item) => setCategory(item));
  }, []);

  const addNewCategory = (e) => {
    e.preventDefault();

    addCategory(_id, token, { category_name })
      .then((newCate) => {
        window.location.reload();
        console.log(newCate);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const newCate = e.target.value;
    setNewCategory((prevValue) => {
      return newCate;
    });
  };
  return (
    <Base header="Category">
      <div className="">
        {category.map((cate) => (
          <div key={cate._id} className="category">
            <p>{cate.category_name}</p>
            {/* <button
            type="submit"
            className="category_btn"
            onClick={updateCategory}
          >
            Update
          </button> */}
            {/* have to add update category button */}
            <button
              className="category_btn"
              onClick={() => {
                deleteCategory(_id, cate._id, token)
                  .then(() => {
                    window.location.reload();
                  })
                  .catch((err) => console.log(err));
              }}
            >
              Remove
            </button>
          </div>
        ))}

        <input
          type="text"
          name="addCategory"
          value={category_name}
          onChange={handleChange}
          
        />
        <br />

        <button type="submit" className="add" onClick={addNewCategory}>
          Add
        </button>
      </div>
    </Base>
  );
}

export default Category;
