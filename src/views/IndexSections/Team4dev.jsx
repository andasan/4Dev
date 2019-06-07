import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Team4dev extends React.Component {
  render() {
    return (
      <div className="section section-typo" id="onTeam">
        <img alt="..." className="path" src={require("assets/img/cloud.svg")} />
        <img
          alt="..."
          className="path path1"
          src={require("assets/img/cloud.svg")}
        />
        <Container>
          <div className="space-50" />
          <div id="images">
            <h1 className="mb-12" style={{textAlign: "center"}}>4•Dev Team</h1>
            <div className="space-100" />
            <Row>
              <Col sm="3" xs="6" style={{textAlign: "center", color:"white"}}>
                <span className="d-block text-uppercase font-weight-bold mb-4">
                  Gustavo Stamm
                </span>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow"
                  src={require("assets/img/gustavo.jpg")}
                  style={{ width: "150px" }}
                />
                <span>gustavo.stamm@gmail.com<br/><br/>"Production Engineer and Web Developer"</span>
              </Col>
              <Col sm="3" xs="6" style={{textAlign: "center", color:"white"}}>
                <span className="d-block text-uppercase font-weight-bold mb-4">
                  Kitajima Shihomi
                </span>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow"
                  src={require("assets/img/shihomi.jpg")}
                  style={{ width: "150px" }}
                />
                <span>shihomi0104@icloud.com<br/><br/>"Hi! I’m a international student from Japan"</span>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="3" xs="6" style={{textAlign: "center", color:"white"}}>
                <span className="d-block text-uppercase font-weight-bold mb-4">
                  Tono Nobuyaki
                </span>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/nobuyaki.jpg")}
                  style={{ width: "150px" }}
                />
                <span>rockmusic2090@gmail.com<br/><br/>" I love Rock Music !! "</span>
              </Col>
              <Col className="mt-5 mt-sm-0" sm="3" xs="6" style={{textAlign: "center", color:"white"}}>
                <span className="d-block text-uppercase font-weight-bold mb-4">
                  Francois Polo
                </span>
                <img
                  alt="..."
                  className="img-fluid rounded-circle shadow-lg"
                  src={require("assets/img/francois.jpg")}
                  style={{ width: "150px" }}
                />
                <span>andasan@gmail.com<br/><br/>"Remove child from parent with fork"</span>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Team4dev;
