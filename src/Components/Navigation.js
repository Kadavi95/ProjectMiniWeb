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
        <nav>
          <div onClick={this.changeNightMode}>
            <DarkMode  className={this.state.nightMode ? "darkModeOn" : 'darkModeOff' }/>
          </div>
          <div className="logo">
            <Link to="/" exact='true' onClick={this.closeMobileMenu}>Przychodnia Vet
            </Link>
          </div>
          <div className="hamburgerMenu" onClick={this.closeMobileMenu}>
            <i
              className={this.state.mobile ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul>{links}</ul>
        </nav>
      </>
    );
  }
}

export default Navigation;

