import { API } from "./../components/API";

export const getProductByProductId = (productId) => {
  return fetch (`${API}/product/${productId}`)
  .then(res=>res.json())
  .catch(err=>console.log(err))
}

export const getProducts = () => {
  return fetch(`${API}/products`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const imageHelper = (productId) => {
  return `${API}/products/${productId}/photo`;
};

export const createProduct = (product, token, userId) => {
  return fetch(`${API}/create/product/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: product,
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => console.log(err));
};

export const updateTheProduct = (userId,product,productId,token) => {
  return fetch (`${API}/update/product/${userId}/${productId}`,{
    method : "PUT",
    headers: {
      Accept : "application/json",
      Authorization : `Bearer ${token}`,
    },
    body : product
  }).then((res) => {
    return res.json();
  })
  .catch(err=>console.log(err));
}


export const removeProduct = (productId, userId, token) => {
  return fetch(`${API}/delete/product/${userId}/${productId}`, {
    method: "DELETE",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
