import React from "react";

// core components
import IndexNavbar from "home/Navbars/IndexNavbar.jsx";
import PageHeader from "home/PageHeader/PageHeader.jsx";
import Footer from "home/Footer/Footer.jsx";

// sections for this page/view
import CodeBlock from "views/IndexSections/CodeBlock.jsx";
import Team4dev from "views/IndexSections/Team4dev.jsx";
import Signup from "views/IndexSections/Signup.jsx";

class Index extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <IndexNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            <CodeBlock />
            <Team4dev />
            <Signup />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default Index;
