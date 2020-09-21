import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Style from "./Landing.module.css";

class Landing extends Component {
  render() {
    return (
      <>
        <div className={Style.wrapper}>
          <Container></Container>
        </div>
      </>
    );
  }
}

export default Landing;
