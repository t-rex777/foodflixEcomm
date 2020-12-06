import React from 'react';
import './App.css';
import Row from './components/Row';
import { foodList } from './components/foodUrl/URL';
import Banner from './components/Banner';
import Nav from './components/Nav';


function App() {

  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="FOODFLIX ORIGINALS" recipe={foodList.fastfoods}  />
      <Row title="Trending Now" recipe={foodList.chicken}/>
      <Row title="Top Rated" recipe={foodList.paneer}/>
      <Row title="Desserts" recipe={foodList.dessert}/>
      <Row title="Pizza" recipe={foodList.pizza}/>
      <Row title="Noodles" recipe={foodList.noodles}/>
    </div>
  );
}

export default App;
