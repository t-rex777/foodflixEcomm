import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../components/Auth/helper";
import Base from "./../components/Base/Base";
import {
  showCategories,
  getCategoryByCategoryId,
} from "./../components/category/helper";
import { updateTheProduct, getProductByProductId } from "./helper";
import SuccessMessage from "./../components/message/SuccessMessage";
import ErrorMessage from "./../components/message/ErrorMessage";
import { Redirect } from "react-router-dom";

function UpdateProduct({ match }) {
  const { token, user } = isAuthenticated();
  const productId = match.params.productId;
  const [product, setProduct] = useState({
    product_name: "",
    description: "",
    category: "",
    categories: [],
    price: "",
    stock: "",
    sold: "",
    photo: "",
    formData: "",
    success: "",
    error: "",
  });

  const { formData } = product;

  const preLoad = () => {
    getProductByProductId(productId).then((data) => {
      showCategories().then((data) => {
        setProduct({ categories: data, formData: new FormData() });
      });

      setProduct({
        ...product,
        product_name: data.product_name,
        description: data.description,
        category: data.category._id,
        price: data.price,
        stock: data.stock,
        sold: data.sold,
        formData: new FormData(),
      });
    });
  };

  useEffect(() => {
    preLoad();
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    // console.log(product);
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateTheProduct(user._id, formData, productId, token)
      .then(() => {
        setProduct({ ...product, success: "true", error: "false" });
      })
      .catch((err) => console.log(err));
  };

  const setMessage = () => {
    if (product.success === "true") {
      return (
        <div>
          <SuccessMessage message="Product added succcessfully" />
          <Redirect to="/products" />
        </div>
      );
    } else if (product.error !== "" && product.error) {
      return <ErrorMessage message="Failed to add the product" />;
    }
  };
  return (
    <Base header="Update the product">
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
          >
            <option>Select</option>
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
          Product Stock :
          <input
            type="text"
            name="stock"
            value={product.stock}
            onChange={handleChange("stock")}
          />
        </label>
        <label>
          Product Sold :
          <input
            type="text"
            name="sold"
            value={product.sold}
            onChange={handleChange("sold")}
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
        <button type="submit" onClick={onSubmit}>
          Update Product
        </button>
      </form>
    </Base>
  );
}

export default UpdateProduct;
