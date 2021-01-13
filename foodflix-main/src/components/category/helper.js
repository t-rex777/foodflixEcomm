import { API } from "./../API";

export const showCategories = () => {
  return fetch(`${API}/categories`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const getCategoryByCategoryId = (categoryId) => {
  return fetch(`${API}/category/${categoryId}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
export const addCategory = (userId, token, category) => {
  return fetch(`${API}/create/category/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const deleteCategory = (userId, categoryId, token) => {
  return fetch(`${API}/delete/category/${userId}/${categoryId}`, {
    method: "DELETE",
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const updateCategory = (userId, categoryId, token, category) => {
  return fetch(`${API}/update/category/${userId}/${categoryId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
    body: JSON.stringify(category),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
