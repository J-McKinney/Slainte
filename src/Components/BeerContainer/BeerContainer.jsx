import React from "react";
import Gears2 from "../../Images/gears2.png";
import curvedDiv from "../../curvedDiv.svg";
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
                <div className={Style.bottomFunnelToCatchMilledGrainOutline}>
                  <img src={curvedDiv} alt="curved div" />
                </div>
              </div>
            </Row>
            <Row>
              <div className={Style.outerPipeToMashingArea1}>
                <div className={Style.innerPipetoMashingArea1} />
              </div>
            </Row>
            <Row>
              <div className={Style.outerPipeToMashingArea2}>
                <div className={Style.innerPipetoMashingArea2} />
              </div>
              <div className={Style.outerCornerPipeToMashingArea2}>
                <div className={Style.innerCornerPipetoMashingArea2} />
              </div>
            </Row>
            <svg
              className={Style.grainPile}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#555"
                fillOpacity="1"
                d="M0,160L48,138.7C96,117,192,75,288,58.7C384,43,480,53,576,85.3C672,117,768,171,864,165.3C960,160,1056,96,1152,101.3C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </Container>
        </div>
      </div>
    </>
  );
}

export default BeerContainer;
