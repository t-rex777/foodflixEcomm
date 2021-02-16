import React from "react";
import { Link } from 'react-router-dom';

function Banner() {

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: "url('https://wallpaperaccess.com/full/767033.jpg')",
        backgroundPosition: "center center",
      }}
    >
      <div className="upper-banner">
        <h1 className="banner_text">
          NOTHING BRINGS PEOPLE TOGETHER LIKE GOOD FOOD
        </h1>
        <div className="banner_buttons">
         <Link style={{backgroundColor:"transparent"}} to="/signin"> <button className="banner_button">Order Now!</button></Link> 
          <Link style={{backgroundColor:"transparent"}} to="/help"><button className="banner_button btn_white">Contact Us</button></Link>
        </div>
      </div>
      <div className="lower-banner"></div>
    </header>
  );
}

export default Banner;
