import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./Process.module.css";

function Process(props) {
  return (
    <>
      <div className={Style.wrapper}>
        <Container className={Style.millingContainer}>
          <Row className={Style.millingRow}>
            <Col className={Style.millingCol}>
              <div className={Style.processFunnelOval} />
              <div className={Style.processFunnelTrapezoid} />
              <div className={Style.processFunnelTrapezoidOutline} />
            </Col>
            <Col className={Style.millingColContent}>
              <h5>
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum
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
