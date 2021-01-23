import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../components/Auth/helper";
import Base from "./../components/Base/Base";
import { showCategories } from "./../components/category/helper";
import { createProduct } from "./helper";
import SuccessMessage from "./../components/message/SuccessMessage";
import ErrorMessage from "./../components/message/ErrorMessage";
import { Redirect } from "react-router-dom";

function AddProduct() {
  const { token, user } = isAuthenticated();

  const [product, setProduct] = useState({
    product_name: "",
    description: "",
    category: "",
    categories: [],
    price: "",
    photo: "",
    formData: "",
    success: "",
    error: "",
  });

  const { formData } = product;

  const preLoad = () => {
    showCategories().then((data) =>
      setProduct({ ...product, categories: data, formData: new FormData() })
    );
  };

  useEffect(() => {
    preLoad();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProduct(formData, token, user._id)
      .then((data) =>
        setProduct({ ...product, success: "true", error: "false" })
      )
      .catch((err) => setProduct({ ...product, success: "false", error: err }));
  };

  const setMessage = () => {
    if (product.success === "true") {
      return (
        <div>
          <SuccessMessage message="Product added succcessfully" />
          <Redirect to="/products" />
        </div>
      );
    } else if (product.error !== "") {
      return <ErrorMessage message="Failed to add the product" />;
    }
  };
  return (
    <Base header="Add a product">
      {setMessage()}
      <form>
        <label>
          Product Name :
          <input
            type="text"
            name="product_name"
            value={product.product_name}
            onChange={handleChange("product_name")}
          />
        </label>
        <label>
          Product Description :
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange("description")}
          />
        </label>
        <label>
          Product Category :
          <select
            name="category"
            onChange={handleChange("category")}
            placeholder="category"
            style={{width : "100%", height: "30px", border: "solid 2px white"}}
            
          >
            <option >Select</option>
            {product.categories.map((cate, index) => (
              <option key={index} value={cate._id}>
                {cate.category_name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Product Price :
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange("price")}
          />
        </label>
        
        <label>
          Product Photo :
          <input
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a photo"
            onChange={handleChange("photo")}
          />
        </label>
        <button 
        className="add"
        type="submit" onClick={onSubmit}>
          Add Product
        </button>
      </form>
    </Base>
  );
}

export default AddProduct;
