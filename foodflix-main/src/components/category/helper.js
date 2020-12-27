import { API } from './../API';

export const showCategories = () => {
    return fetch(`${API}/categories`,{
        method : "GET"
    })
    .then(response=>response.json())
    .catch(err=>console.log(err));
}