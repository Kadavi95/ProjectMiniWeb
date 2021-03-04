import React, { Component } from "react";
import { Navlink, Link } from "react-router-dom";
import links from '../Date/routeLinks.json';
class Navigation extends Component {
  state = {
    nightMode: false,
    links: []
  };

  fetchDate = () => {
    fetch("../Date/routeLinks.json")
    .then((response) => response.json())
    .then((links) => {
      this.setState({
        links: links
      })
    })
  }
  componentDidMount() {
    setTimeout(this.fetchDate, 1000)
  }

  render() {
    console.log(this.state.links);
    return (
      <>
        <nav>
          <div className="darkmode"></div>
          <div className="logo"></div>
          <ul>
           
          </ul>
        </nav>
      </>
    );
  }
}

export default Navigation;
<></>;
