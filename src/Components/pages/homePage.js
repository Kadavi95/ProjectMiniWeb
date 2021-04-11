import React, { Component } from "react";
import firstPhoto from "../images/146056944_138097601473150_5983105150059591154_n (1).jpg";
import secondPhoto from "../images/159324348_122258026456601_3731502239306874094_n.jpg";
import thirdPhoto from "../images/20210207_150936.jpg";
import "../../sass/homePage.scss";

import { Link } from "react-router-dom";

const imagesTable = [firstPhoto, secondPhoto, thirdPhoto];
const indexMaxValue = imagesTable.length - 1;
const index = Math.floor(Math.random() * (indexMaxValue - 0 + 1) + 0);
let fakeIndex = 0;
const singleImage = imagesTable[fakeIndex];

let globalIndex = 0

class homePage extends Component {
  state = {
    image: singleImage,
  };
  componentDidMount() {
    setInterval(this.changePhoto, 1000);
  }
  changePhoto = () => {
    const imagesTable = [firstPhoto, secondPhoto, thirdPhoto];
    const indexMaxValue = imagesTable.length - 1;

    let index = Math.floor(Math.random() * (indexMaxValue - 0 + 1) + 0);
    console.log(fakeIndex);



    if (globalIndex === 0){
      globalIndex++
    } else if (globalIndex === 2) {
      globalIndex--
    }
    console.log(globalIndex);
    // let newIndex = 0
    // if(fakeIndex === 0) {
      
    // }
    // console.log(newIndex);



    // let number = 0;
    // if (number <= 3) {
    //   setInterval(function () {
    //     let falseflag = false;
    //     if (number < 3) {
    //       number++;
    //       if (number === 2) {
    //         falseflag = true
    //       }
    //     }
    //     else if (falseflag === true) {

    //     }
    //     console.log(falseflag);
    //     // else if (number === 2) {
    //     //     number--
    //     // }
    //     console.log(number);
    //   }, 1000);
    // }

    

    const singleImage = imagesTable[index];
    this.setState({
      image: singleImage,
    });
  };

  render() {
    return (
      <>
        <div className="homeMainContainer">
          <div className="homePageContainer">
            <img
              id="photo"
              className="singlePhoto"
              src={this.state.image}
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
  }
}

export default homePage;

