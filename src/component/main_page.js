import React, { Component } from "react";
import logo from "./images/Acmlogo.jpeg";

class Main extends Component {
  render() {
    return (
      <div>
        <img className="h-full" src={logo} alt="mainImage" />
      </div>
    );
  }
}
export default Main;
