import React from "react";
import blade from "../../Images/circularSawBlade.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./Process.module.css";

function Process() {
  return (
    <>
      <div className={Style.beerProcessHeader}></div>
      <div className={Style.millingWrapper}>
        <Container className={Style.millingContainer}>
          <Row className={Style.millingRow}>
            <Col className={Style.millingCol}>
              <div className={Style.millingFunnelOval} />
              <div className={Style.millingFunnelTrapezoid} />
              <div className={Style.millingFunnelTrapezoidOutline} />
              <div className={Style.millingSiloContainer} />
              <img className={Style.blade1} src={blade} alt="First Blade" />
              <img className={Style.blade2} src={blade} alt="Second Blade" />
              <img className={Style.blade3} src={blade} alt="Third Blade" />
              <div className={Style.milledGrainFunnelTrapezoid} />
              <div className={Style.milledGrainFunnelTrapezoidOutline} />
            </Col>
            <Col className={Style.millingColContent}>
              <h5>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum
              </h5>
            </Col>
          </Row>
          <Row>
            <Col>Lorem Ipsum</Col>
            <Col>Lorem Ipsum</Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Process;
