import React, { Component } from "react";
import BaseGrain from "../../BeerMachine/baseGrainContainer.svg";
import UpwardFunnel from "../../BeerMachine/upwardFunnel.svg";
import LeftPipe from "../../BeerMachine/leftToRightPipe.svg";
import RightPipe from "../../BeerMachine/rightToLeftPipe.svg";
import DownwardFunnel from "../../BeerMachine/downwardFunnel.svg";
import MillContainer from "../../BeerMachine/millingContainer.svg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Style from "./Landing.module.css";

class Landing extends Component {
  render() {
    return (
      <>
        <div className={Style.wrapper}>
          <div className={Style.header}>
            <h1>Slainte</h1>
          </div>
          <Container>
            <Row>
              <div className="col-lg-4">
                <img
                  className={Style.baseGrainContainer}
                  src={BaseGrain}
                  alt="Base Grain"
                />
              </div>
              <div className="col-lg-8">
                <h4 className={Style.h4}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset
                  sheets containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of Lorem Ipsum.
                </h4>
              </div>
            </Row>
            <Row>
              <div className="col-lg-4">
                <img
                  className={Style.upwardFunnel}
                  src={UpwardFunnel}
                  alt="Funnel"
                />
              </div>
              <div className="col-lg-8">
                <h4 className={Style.h4}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum. Lorem
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </h4>
              </div>
            </Row>
            <Row>
              <div className="col-lg-12">
                <img
                  className={Style.leftPipe}
                  src={LeftPipe}
                  alt="leftToRight"
                />
              </div>
            </Row>
            <Row>
              <div className="col-lg-6">
                <h4 className={Style.h4}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </h4>
              </div>
              <div className="col-lg-6">
                <img
                  className={Style.downwardFunnel}
                  src={DownwardFunnel}
                  alt="leftToRight"
                />
              </div>
            </Row>
            <Row>
              <div className="col-lg-6">
                <h4 className={Style.h4}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </h4>
              </div>
              <div className="col-lg-6">
                <img
                  className={Style.millContainer}
                  src={MillContainer}
                  alt="leftToRight"
                />
              </div>
            </Row>
            <Row>
              <div className="col-lg-12">
                <img
                  className={Style.rightPipe}
                  src={RightPipe}
                  alt="rightToLeft"
                />
              </div>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default Landing;
