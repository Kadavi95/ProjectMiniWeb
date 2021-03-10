import React, { Component } from "react";
import firstPhoto from "../images/146056944_138097601473150_5983105150059591154_n (1).jpg";
import secondPhoto from "../images/159324348_122258026456601_3731502239306874094_n.jpg";
import thirdPhoto from "../images/20210207_150936.jpg";


// const imagesTable = [firstPhoto, secondPhoto, thirdPhoto ];
// console.log(imagesTable);
// const indexMaxValue = imagesTable.length - 1;
// const index = Math.floor(Math.random() * (indexMaxValue - 0 + 1 ) + 0);
// console.log(index);
// const singleImage = imagesTable[index]

// let singleImage
// setInterval( changeIndex, 5000)
// function changeIndex() {
//   const imagesTable = [firstPhoto, secondPhoto, thirdPhoto];
//   const indexMaxValue = imagesTable.length - 1;
//   const index = Math.floor(Math.random() * (indexMaxValue - 0 + 1) + 0);
//   singleImage = imagesTable[index];

// }

class homePage extends Component {
  state = {
    image: '',
  };

  componentDidMount() {
    setInterval(this.changePhoto, 10000);
   
  }

  changePhoto = () => {
    function changeIndex() {
      const imagesTable = [firstPhoto, secondPhoto, thirdPhoto];
      const indexMaxValue = imagesTable.length - 1;
      const index = Math.floor(Math.random() * (indexMaxValue - 0 + 1) + 0);
      const singleImage = imagesTable[index];
      const image = {
        value: singleImage
      }
      return (
        image
      )

    }
    changeIndex()
      console.log(image);
    this.setState({
       
    })
  };

  render() {
    console.log(this.state.image);
    return (
      <>
        <img src={this.state.image} alt="obraz" />
      </>
    );
  }
}

export default homePage;
