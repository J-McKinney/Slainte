import React from "react";
import Gears2 from "../../Images/gears2.png";
import Row from "react-bootstrap/Row";
import Style from "./BeerContainer.module.css";

function BeerContainer(props) {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.secondWrapper}>
          {/* top of funnel */}
          <div className={Style.trapezoid} />
          {/* Milling the grain */}
          <Row className={Style.firstRectangleRow}>
            {/* gears to grind up the grain */}
            <div className={Style.rectangle1}>
              {/* gear box */}
              <Row className={Style.firstGearRow}>
                {/* first set of gears */}
                <img className={Style.firstGearTop} src={Gears2} alt="Gears2" />
                <img className={Style.secondGearTop} src={Gears2} alt="Gears2" />
                <img className={Style.thirdGearTop} src={Gears2} alt="Gears2" />
              </Row>
              <Row className={Style.secondGearRow}>
                {/* second set of gears */}
                <img className={Style.firstGearMiddle} src={Gears2} alt="Gears2" />
                <img className={Style.secondGearMiddle} src={Gears2} alt="Gears2" />
              </Row>
              <Row className={Style.thirdGearRow}>
                {/* third set of gears */}
                <img className={Style.firstGearBottom} src={Gears2} alt="Gears2" />
                <img className={Style.secondGearBottom} src={Gears2} alt="Gears2" />
                <img className={Style.thirdGearBottom} src={Gears2} alt="Gears2" />
              </Row>
            </div>
            {/* The grain has been milled and now about to move to mashing */}
            {/* empty rectangle to have pipe-like-flow look */}
            <div className={Style.emptyRectangle1} />
          </Row>
          {/* pipe to mashing area */}
          <div className={Style.rectangle2}></div>
        </div>
      </div>
    </>
  );
}

export default BeerContainer;
