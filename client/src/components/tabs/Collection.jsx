import React, { Component } from "react";
import axios from "axios";
import { Card, Spinner } from "react-bootstrap";
import TopMenu from "../TopMenu";

class PlantCollection extends Component {
  constructor(props) {
    super(props);
    this.state = { speciesEntries: null, isFetching: true };
  }

  componentDidMount() {
    axios
      .get("/speciesEntry")
      .then((res) => {
        this.setState({ speciesEntries: res.data, isFetching: false });
      })
      .catch((err) => console.log(err));
  }

  render() {
    if (this.state.isFetching) {
      return (
        <div>
          <TopMenu />
          <Spinner animation="border" variant="success" />
        </div>
      );
    } else if (this.state.speciesEntries.length === 0) {
      return (
        <div>
          <TopMenu />
          Hey! Be the first to add something to this collection!
        </div>
      );
    } else {
      return (
        <div>
          <TopMenu />
          <div className="collection-cards-wrapper">
            {this.state.speciesEntries.map((speciesEntry) => (
              <div key={speciesEntry._id}>
                <Card>
                  <Card.Img variant="top" src={speciesEntry.photo} />
                  <Card.Body>
                    <Card.Title>{speciesEntry.speciesName}</Card.Title>
                    <Card.Text>Found on: {speciesEntry.createdAt}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default PlantCollection;
