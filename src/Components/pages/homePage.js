import React, { Component, useState, useEffect } from "react";
import firstPhoto from "../images/146056944_138097601473150_5983105150059591154_n (1).jpg";
import secondPhoto from "../images/159324348_122258026456601_3731502239306874094_n.jpg";
import thirdPhoto from "../images/20210207_150936.jpg";
import "../../sass/homePage.scss";

import { Link } from "react-router-dom";

const imagesTable = [firstPhoto, secondPhoto, thirdPhoto];
const indexMaxValue = imagesTable.length - 1;
// const index = Math.floor(Math.random() * (indexMaxValue - 0 + 1) + 0);
let fakeIndex = 0;
const singleImage = imagesTable[fakeIndex];

let globalIndex = 0;

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const changePhoto = (index) => {
    if (index < indexMaxValue) {
      const nextIndex = index + 1;
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    setTimeout(() => changePhoto(currentIndex), 1000);
  }, [currentIndex]);

  return (
    <>
      <div className="homeMainContainer">
        <div className="homePageContainer">
          <img
            id="photo"
            className="singlePhoto"
            src={imagesTable[currentIndex]}
            alt="obraz"
          />
        </div>
        <div className="contactUsContainer">
          <button className="contactButtonLink">
            <Link className="buttonLink" to="appointment">
              Umów wizytę
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
