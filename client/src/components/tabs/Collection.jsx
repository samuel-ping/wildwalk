import React, { Component } from "react";
import axios from "axios";
import TopMenu from "../TopMenu";

class PlantCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <TopMenu />
        </div>
      </div>
    );
  }
}

export default PlantCollection;
