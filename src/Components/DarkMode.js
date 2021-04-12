import React from "react";
import "../sass/DarkMode.scss";
const DarkMode = (props) => {
  return (
    <div
      className={`container ${
        props.isDarkMode ? "darkContainer" : "brightContainer"
      }`}
    >
      <div
        className={`circle ${props.isDarkMode ? "moveToRight" : "moveToLeft"}`}
      ></div>
    </div>
  );
};

export default DarkMode;
