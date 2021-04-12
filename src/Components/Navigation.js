import React, { Component } from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

import "../sass/Navigation.scss";
// import Info from './Info';
class Navigation extends Component {
  state = {
    mobile: false,
    // nightMode: false,
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
  turnOffMobileMenu = () => {
    this.setState({
      mobile: false,
    });
  };

  closeMobileMenu = () => {
    const mobile = this.state.mobile;
    this.setState({
      mobile: !mobile,
    });
  };

  // changeNightMode = () => {
  //   const nightMode = this.state.nightMode;
  //   this.setState({
  //     nightMode: !nightMode,
  //   });
  // };
  render() {
    const links = this.state.links.map((item) => (
      <li
        key={item.id}
        className={item.firstClassName}
      >
        <Link
          to={`/${item.link}`}
          onClick={this.closeMobileMenu}
          className={item.itemClassName}
        >
          {item.title}
        </Link>
      </li>
    ));

    return (
      <>
        <nav className={"navigationWidthContainer"}>
          <div
            onClick={() => this.props.handleDarkMode()}
            className="darkModeContainer"
          >
            <DarkMode isDarkMode={this.props.isDarkMode} />
            {/* <Info
                className={this.state.nightMode === false? "dzien" : "noc"}
              /> */}
          </div>
          <div className={"logeContainerDay"}>
            <Link
              to="/"
              exact="true"
              onClick={this.turnOffMobileMenu}
              className={"logoLinkDay"}
            >
              VET
            </Link>
          </div>
          <div className={"hamburgerMenuDay"} onClick={this.closeMobileMenu}>
            <i
              className={this.state.mobile ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul
            className={`${
              this.state.mobile ? "menuActive" : "menuUnactive"
            } ${"menuDayMode"}`}
          >
            {links}
          </ul>
        </nav>
      </>
    );
  }
}

export default Navigation;
