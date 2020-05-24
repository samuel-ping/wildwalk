import React, { Component } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";
// import InfiniteScroll from "react-infinite-scroll-component";
import TopMenu from "../TopMenu";

class PlantList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const parameters = { location: "NJ" };
    axios
      .post("/plants", parameters)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <TopMenu />

        {/* <Container fluid>
              <Row>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>Strawberry</Card.Title>
                      <Card.Text>yummy strawberry yum yum</Card.Text>
                      <Card.Text>MORE YUMYHYREIHN</Card.Text>
                      <Button>Details</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>card2</Col>
              </Row>
          </Container> */}
      </div>
    );
  }
}

export default PlantList;
