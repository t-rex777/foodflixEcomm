import React, { useEffect } from "react";
import "./App.css";
import Row from "./components/Row";
import { foodList } from "./components/foodUrl/URL";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import { getProducts } from "./product/helper";
import { useState } from "react";

function App() {
  const [food, setFood] = useState([]);
  useEffect(() => {
    load();
  });
  const load = () => {
    getProducts().then((data) =>
      data.map((pro) => {
        if (pro.category.category_name === "Pizza") {
          console.log(pro);
        }
      })
    );
  };

  return (
    <div className="App">
      <Nav />
      <Banner />
      {/* <Row title="FOODFLIX ORIGINALS" recipe={foodList.fastfoods}  /> */}
      <Row title="Trending Now" recipe={foodList.chicken}/>
      <Row title="Top Rated" recipe={foodList.paneer}/>
      <Row title="Pizza" recipe={foodList.pizza} />
      <Row title="Noodles" recipe={foodList.noodles}/>
      <Row title="Desserts" recipe={foodList.dessert}/>
      {/* {food.map((item, i) => {
        return <li key={i}>{item}</li>;
      })} */}
    </div>
  );
}

export default App;
