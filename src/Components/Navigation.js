import React, { Component } from "react";
import { Navlink, Link } from "react-router-dom";
import DarkMode from './DarkMode';

class Navigation extends Component {
  state = {
    mobile: false,
    nightMode: false,
    links: [],
  };

  componentDidMount() {
    setTimeout(this.fetchLink, 10);
  }
  fetchLink = () => {
    fetch("data/words.json")
      .then((response) => response.json())
      .then((link) => {
        this.setState({
          links: link.links,
        });
      });
  };

  closeMobileMenu = () => {
    const mobile = this.state.mobile;
    this.setState({
      mobile: !mobile,
    });
  };

  changeNightMode = () => {
    const nightMode = this.state.nightMode;
    this.setState({
      nightMode: !nightMode 
    })
  };
  render() {
    const links = this.state.links.map((item) => (
      <li key={item.id} className={this.state.nightMode === false ? item.firstClassName : item.secondClassName}>
        <Link to={item.link} onClick={this.closeMobileMenu} className={item.itemClassName}>
          {item.title}
        </Link>
      </li>
    ));
      
    console.log(this.state.nightMode);
    return (
   
      <>
        <nav className={this.state.nightMode ? "navigationContainerDay" : "navigationContainerNight"}>
          <div onClick={this.changeNightMode} className="darkModeContainer">
            <DarkMode  className={this.state.nightMode ? "darkModeOn" : 'darkModeOff' }/>
          </div>
          <div className={this.state.mobile ? 'logeContainerDay' : 'logoContainerNight'}>
            <Link to="/" exact='true' onClick={this.closeMobileMenu}>Przychodnia Vet
            </Link>
          </div>
          <div className="hamburgerMenu" onClick={this.closeMobileMenu}>
            <i
              className={this.state.mobile ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.mobile ? 'menuActive' : 'menuUnactive'} >{links}</ul>
        </nav>
      </>
    );
  }
}

export default Navigation;



 

{/* <i class="fas fa-bars"></i>
<i class="fas fa-times"></i>
<i class="fab fa-facebook-f"></i>
<i class="fab fa-instagram"></i>
<i class="fab fa-twitter"></i>
<i class="fas fa-paw"></i> */}


