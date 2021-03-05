import React from "react";
import '../sass/DarkMode.scss'
const DarkMode = (props) => {
  return (
    <div className={`container ${props.className === "darkModeOff" ? 'darkContainer' : 'brightContainer'}`}>
      <div className={`circle ${props.className === "darkModeOff" ? 'moveToLeft' : 'moveToRight' }`}></div>
    </div>
  );
};

export default DarkMode;
