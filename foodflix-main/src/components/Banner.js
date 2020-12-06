import React from "react";
// import { foodList } from "./foodUrl/URL";

function Banner() {
  // const [state, setstate] = useState();
  // const pickRandom = Math.floor(Math.random() * 10);

  // useEffect(() => {
  //   setstate(foodList.fastfoods[pickRandom]);
  // }, []);

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
          <button className="banner_button">Order Now!</button>
          <button className="banner_button btn_white">Contact Us</button>
        </div>
      </div>
      <div className="lower-banner"></div>
    </header>
  );
}

export default Banner;
