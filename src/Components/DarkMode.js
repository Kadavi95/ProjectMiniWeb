import React from "react";
import './DarkMode.css';
const DarkMode = (props) => {
  return (
    <div className={`container ${props.className === "darkModeOff" ? 'a' : 'b'}`}>
      <div className={`circle ${props.className === "darkModeOff" ? 'moveToLeft' : 'moveToRight' }`}></div>
    </div>
  );
};

export default DarkMode;
