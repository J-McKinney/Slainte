import React from "react";
import Style from "./BeerContainer.module.css";

function BeerContainer(props) {
  return (
    <>
      <div className={Style.wrapper}>
        <div className={Style.container}>
          <div className={Style.header}>
            <h1 className={Style.h1Font}>{props.header}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeerContainer;
