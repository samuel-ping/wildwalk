import React, { Component } from "react";
import axios from "axios";
import { Card, Button, Pagination, Spinner } from "react-bootstrap";
import TopMenu from "../TopMenu";
import "./Dashboard.css";

const cardStyle = {
  marginTop: "20px",
};

class PlantList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "NJ",
      isPosting: true,
      pageIndex: 0,
      resultsPage: null,
      results: null,
      resultsSummary: null,
    };
  }

  componentDidMount() {
    const parameters = { location: this.state.location };
    this.fetchNewData(this.state.pageIndex, parameters);
  }

  fetchNewData(pageIndex, parameters) {
    axios
      .post("/api/plants", parameters)
      .then((res) => {
        // console.log(res);
        this.setState({
          isPosting: false,
          pageIndex: this.state.pageIndex + 1,
          resultsPage: res.data.summary.page + 1,
          results: res.data.results,
          resultsSummary: res.data.summary.totalPages,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.isPosting) {
      return (
        <div>
          <TopMenu />
          <Spinner animation="border" variant="success" />
        </div>
      );
    } else {
      return (
        <div>
          <TopMenu />
          <div className="species-card-wrapper">
            {this.state.results.map((species) => (
              <div key={species.elcode}>
                <Card style={cardStyle}>
                  <Card.Body>
                    <Card.Title>{species.primaryCommonName}</Card.Title>
                    <Card.Subtitle>{species.scientificName}</Card.Subtitle>
                    <Button
                      style={{
                        backgroundColor: "#387759",
                      }}
                    >
                      Found it!
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <div className="pagination-wrapper">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item active>{this.state.resultsPage}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{4}</Pagination.Item>
              <Pagination.Ellipsis />
              <Pagination.Item>{this.state.resultsSummary}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
          <div className="natureserve-citation">
            NatureServe. 2020. NatureServe Explorer WildWalk. NatureServe,
            Arlington, Virginia. Available
            <br />
            https://explorer.natureserve.org/. (Accessed: May 24, 2020).
          </div>
        </div>
      );
    }
  }
}

export default PlantList;
