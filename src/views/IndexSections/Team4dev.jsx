import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Team4dev extends React.Component {
  render() {
    return (
      <div className="section section-typo" id="onBottom">
        <img alt="..." className="path" src={require("assets/img/path1.png")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/path3.png")}
        />
        <Container>
          <div className="space-50" />
          <div id="images">
            <h3 className="mb-5">Who we are</h3>
            <Row>
              <Col sm="3" xs="6">
                <small className="d-block text-uppercase font-weight-bold mb-4">
                  Gustavo Stamm
                </small>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow"
                  src={require("assets/img/gustavo.jpg")}
                  style={{ width: "150px" }}
                />
              </Col>
              <Col sm="3" xs="6">
                <small className="d-block text-uppercase font-weight-bold mb-4">
                  Kitajima Shihomi
                </small>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow"
                  src={require("assets/img/shihomi.jpg")}
                  style={{ width: "150px" }}
                />
              </Col>
              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <small className="d-block text-uppercase font-weight-bold mb-4">
                  Tono Nobuyaki
                </small>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/nobuyaki.jpg")}
                  style={{ width: "150px" }}
                />
                <small>rockmusic2090@gmail.com<br/>" I love Rock Music !! "</small>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="3" xs="6">
                <small className="d-block text-uppercase font-weight-bold mb-4">
                  Francois Polo
                </small>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/logo.png")}
                  style={{ width: "150px" }}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Team4dev;
