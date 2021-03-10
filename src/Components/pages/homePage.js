import React, { Component } from "react";
import firstPhoto from "../images/146056944_138097601473150_5983105150059591154_n (1).jpg";
import secondPhoto from "../images/159324348_122258026456601_3731502239306874094_n.jpg";
import thirdPhoto from "../images/20210207_150936.jpg";
import '../../sass/homePage.scss';


const imagesTable = [firstPhoto, secondPhoto, thirdPhoto ];
console.log(imagesTable);
const indexMaxValue = imagesTable.length - 1;
const index = Math.floor(Math.random() * (indexMaxValue - 0 + 1 ) + 0);
console.log(index);
const singleImage = imagesTable[index]
console.log(singleImage);


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
      const index = Math.floor(Math.random() * (indexMaxValue - 0 + 1) + 0);
      const singleImage = imagesTable[index];
      this.setState({
        image: singleImage
      })
  };

  render() {
    console.log(this.state.image);
    return (
      <>
      <div className='homePageContainer'>
        <img id='photo' className='singlePhoto' src={this.state.image} alt="obraz" />
        <button className='buttonLink'></button>
        </div>
      </>
    );
  }
}

export default homePage;
