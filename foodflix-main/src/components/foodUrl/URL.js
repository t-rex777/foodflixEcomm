import { getProducts, imageHelper } from "./../../product/helper";

export const foodList = {
  fastfoods: getProducts().then((data) =>
  data.map((pro) => {
    return pro.category.category_name === "Fast Food" ? pro : "";
  })
), 
  chicken: getProducts().then((data) =>
  data.map((pro) => {
    return pro.category.category_name === "Chicken" ? pro : "";
  })
),

  paneer: getProducts().then((data) =>
  data.map((pro) => {
    return pro.category.category_name === "Paneer" ? pro : "";
  })
),

  dessert: getProducts().then((data) =>
  data.map((pro) => {
    return pro.category.category_name === "Dessert" ? pro : "";
  })
),

  noodles: getProducts().then((data) =>
    data.map((pro) => {
      return pro.category.category_name === "Noodles" ? pro : "";
    })
  ),

  pizza: getProducts().then((data) =>
    data.map((pro) => {
      return pro.category.category_name === "Pizza" ? pro : "";
    })
  ),
};
