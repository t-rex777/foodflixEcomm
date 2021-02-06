import { API } from "./../API";

export const getAllProducts = (userId) => {
  return fetch(`${API}/cart/showproducts/${userId}`, {
    method: "GET",
    Authorization: `Bearer ${token}`,
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
