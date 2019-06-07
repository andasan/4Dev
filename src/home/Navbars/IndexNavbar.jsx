import React from "react";
import { Link } from "react-router-dom";
// reactstrap home
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class HomeNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: "bg-info"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOut: ""
    });
  };
  scrollToTop = () => {
    document
      .getElementById("onTop")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToTeam = () => {
    document
      .getElementById("onTeam")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToContact = () => {
    document
      .getElementById("onContact")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToBubble = () => {
    document
      .getElementById("bubble-code")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToInsertion = () => {
    document
      .getElementById("insertion-code")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToMerge = () => {
    document
      .getElementById("merge-code")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToSelection = () => {
    document
      .getElementById("selection-code")
      .scrollIntoView({ behavior: "smooth" });
  };
  scrollToQuick = () => {
    document
      .getElementById("quick-code")
      .scrollIntoView({ behavior: "smooth" });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title="Designed and Coded by 4Dev"
              tag={Link}
            >
              <span>4•Dev</span>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="/">
                    4•Dev
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav navbar>
              <NavItem className="p-0">
                <NavLink
                  data-placement="bottom"
                  rel="noopener noreferrer"
                  href="#"
                  target="_self"
                  title="Home"
                  onClick={this.scrollToTop}
                >
                  <i className="fas fa-home" />
                  Home
                </NavLink>
              </NavItem>
              
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="tim-icons icon-chart-bar-32" />
                  Sorting
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem onClick={this.scrollToBubble}>
                    <i className="tim-icons icon-zoom-split" />
                    Bubble Sort
                  </DropdownItem>
                  <DropdownItem onClick={this.scrollToInsertion}>
                    <i className="tim-icons icon-tie-bow" />
                    Insertion Sort
                  </DropdownItem>
                  <DropdownItem  onClick={this.scrollToMerge}>
                    <i className="tim-icons icon-settings" />
                    Merge Sort
                  </DropdownItem>
                  <DropdownItem onClick={this.scrollToSelection}>
                    <i className="tim-icons icon-tap-02" />
                    Selection Sort
                  </DropdownItem>
                  <DropdownItem  onClick={this.scrollToQuick}>
                    <i className="tim-icons icon-delivery-fast" />
                    Quick Sort
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="#"
                  rel="noopener noreferrer"
                  title="Contact"
                  onClick={this.scrollToTeam}
                >
                  <i className="tim-icons icon-molecule-40" />
                  4•Dev Team
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-placement="bottom"
                  href="#"
                  rel="noopener noreferrer"
                  title="Contact"
                  onClick={this.scrollToContact}
                >
                  <i className="tim-icons icon-molecule-40" />
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default HomeNavbar;
