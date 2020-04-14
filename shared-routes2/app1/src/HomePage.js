import React from "react";

const style = {
  height: 400,
  backgroundColor: "#673ab7",
  color: "white",
  textShadow: "0 0 3px #000, 0 0 6px #000",
  padding: 12
};

const HomePage = () => (
  <div style={style}>
    <h1>Home Page</h1>
    <h2>Welcome to the future!</h2>
    <p>
      <em>a page being provided by App 1</em>
    </p>
  </div>
);

export default HomePage;
