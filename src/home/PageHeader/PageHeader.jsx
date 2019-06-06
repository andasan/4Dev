import React from "react";

// reactstrap home
import { Container } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div id="onTop" />
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">4•Dev</h1>
            <h3 className="d-none d-sm-block">
              Sorting Algorithms. <br/>
              It's Free and Open Source.
            </h3>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
