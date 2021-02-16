import { API } from "./../API";

export const getAllProductsFromCart = (userId, token) => {
  return fetch(`${API}/cart/showproducts/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const addProductToCart = (product, userId, token) => {
  return fetch(`${API}/cart/addproduct/${product._id}/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const updateProductFromCart = (product, userId, token) => {
  return fetch(`${API}/cart/updateproduct/${product._id}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const deleteProductFromCart = (product, userId, token) => {
  return fetch(`${API}/cart/deleteproduct/${product._id}/${userId}`, {
    method: "DELETE",
    Authorization: `Bearer ${token}`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const stripePayment = (token,products) => {
  return fetch(`${API}/stripePayment`,{
    method : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
      products
    })
  }).then(res=>console.log(res))
  .catch(err=>console.log(err))
}