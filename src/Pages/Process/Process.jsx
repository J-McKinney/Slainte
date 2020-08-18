import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Style from "./Process.module.css";

function Process(props) {
  return (
    <>
      <div className={Style.wrapper}>
        <Container>
          <Row>
            <Col>
              <div className={Style.processFunnelOval} />
              <div className={Style.processFunnelTrapezoid} />
              <div className={Style.processFunnelTrapezoidOutline} />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Process;
