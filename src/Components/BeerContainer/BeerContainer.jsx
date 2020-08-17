import React from "react";
import Gears2 from "../../Images/gears2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Style from "./BeerContainer.module.css";

function BeerContainer(props) {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.secondWrapper}>
          <Container>
            <div className={Style.funnelWrapper}>
              {/* top of funnel */}
              <div className={Style.topFunnelToCatchGrain}>
                <div className={Style.topFunnelToCatchGrainOutline} />
              </div>
              <div className={Style.ovalShapeOnTopOfTopFunnel} />
            </div>
            {/* Milling the grain */}
            <Row className={Style.firstRectangleRow}>
              {/* gears to grind up the grain */}
              <div className={Style.gearBox1}>
                {/* gear box */}
                <Row className={Style.firstGearRow}>
                  {/* first set of gears */}
                  <img
                    className={Style.firstGearTop}
                    src={Gears2}
                    alt="Gears2"
                  />
                  <img
                    className={Style.secondGearTop}
                    src={Gears2}
                    alt="Gears2"
                  />
                  <img
                    className={Style.thirdGearTop}
                    src={Gears2}
                    alt="Gears2"
                  />
                </Row>
                <Row className={Style.secondGearRow}>
                  {/* second set of gears */}
                  <img
                    className={Style.firstGearMiddle}
                    src={Gears2}
                    alt="Gears2"
                  />
                  <img
                    className={Style.secondGearMiddle}
                    src={Gears2}
                    alt="Gears2"
                  />
                </Row>
                <Row className={Style.thirdGearRow}>
                  {/* third set of gears */}
                  <img
                    className={Style.firstGearBottom}
                    src={Gears2}
                    alt="Gears2"
                  />
                  <img
                    className={Style.secondGearBottom}
                    src={Gears2}
                    alt="Gears2"
                  />
                  <img
                    className={Style.thirdGearBottom}
                    src={Gears2}
                    alt="Gears2"
                  />
                </Row>
              </div>
            </Row>
            <Row>
              <div className={Style.bottomFunnelToCatchMilledGrain}>
                <div className={Style.bottomFunnelToCatchMilledGrainOutline} />
              </div>
            </Row>
            <Row>
              <div className={Style.innerPipetoMashingArea}>
                <div className={Style.outerPipeToMashingArea} />
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default BeerContainer;
