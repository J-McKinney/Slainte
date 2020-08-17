import React from "react";
import Gears2 from "../../Images/gears2.png";
import Row from "react-bootstrap/Row";
import Style from "./BeerContainer.module.css";

function BeerContainer(props) {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.secondWrapper}>
          <div className={Style.trapezoid} />
          <div className={Style.rectangle}>
            <Row className={Style.firstGearRow}>
              <img className={Style.firstGear} src={Gears2} alt="Gears2" />
              <img className={Style.secondGear} src={Gears2} alt="Gears2" />
              <img className={Style.thirdGear} src={Gears2} alt="Gears2" />
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeerContainer;
