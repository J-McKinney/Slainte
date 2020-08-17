import React from "react";
import Gears4 from "../../Images/gears-467261_1280.png";
import Style from "./BeerContainer.module.css";

function BeerContainer(props) {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.secondWrapper}>
          <div className={Style.trapezoid} />
          <div className={Style.rectangle}>
            <img className={Style.gears4} src={Gears4} alt="gears4" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BeerContainer;
