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
              <svg
                className={Style.grainPileUnmilled}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#fecb00"
                  fill-opacity="1"
                  d="M0,192L30,170.7C60,149,120,107,180,101.3C240,96,300,128,360,117.3C420,107,480,53,540,69.3C600,85,660,171,720,186.7C780,203,840,149,900,117.3C960,85,1020,75,1080,85.3C1140,96,1200,128,1260,165.3C1320,203,1380,245,1410,266.7L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                />
              </svg>
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
                <div
                  className={Style.bottomFunnelToCatchMilledGrainOutline}
                ></div>
              </div>
              <svg
                className={Style.grainPileMilled}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
              >
                <path
                  fill="#fecb00"
                  fillOpacity="1"
                  d="M0,160L48,138.7C96,117,192,75,288,58.7C384,43,480,53,576,85.3C672,117,768,171,864,165.3C960,160,1056,96,1152,101.3C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
              </svg>
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
          </Container>
        </div>
      </div>
    </>
  );
}

export default BeerContainer;
