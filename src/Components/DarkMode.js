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
        className={`circle ${props.isDarkMode ? "moveToLeft" : "moveToRight"}`}
      ></div>
    </div>
  );
};

export default DarkMode;
