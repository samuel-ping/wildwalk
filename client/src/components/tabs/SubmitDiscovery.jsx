import React, { Component } from "react";
import TopMenu from "../TopMenu";
import { AiFillCamera as CameraIcon } from "react-icons/ai";

class CameraTab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <TopMenu />
        <div className="submit-button">Submit Photo</div>
      </div>
    );
  }
}

export default CameraTab;
