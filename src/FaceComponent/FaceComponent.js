import react, { useState } from "react";
import "./FaceComponent.css";
import "../Static/images/ShivaMain.jpg";
import SchoolComponent from "../SecondaryComponents/SchoolComponent/SchoolComponent";
import DegreeComponent from "../SecondaryComponents/DegreeComponent/DegreeComponent";
import ExperienceComponent from "../SecondaryComponents/ExperienceComponent/ExperienceComponent";

const FaceComponent = (props) => {
  const [showPins, setShowPins] = useState(false);
  const mainShiva = require("../Static/images/ShivaMain.jpg");

  return (
    <>
      {!showPins && (
        <>
          <div className="name">
            <h1>SHIVA PRASAD PAPPALA</h1>
          </div>
          <div className="clickMe">
            <h1>Click Me.....</h1>
          </div>
        </>
      )}
      <div className="face" onClick={() => setShowPins(!showPins)}>
        <div style={{ height: "210px", width: "210px" }}>
          <img
            className="centreImage"
            alt="Shiva Prasaad Pappala"
            src={mainShiva}
          ></img>
        </div>
      </div>
      {showPins && (
        <>
          <SchoolComponent />
          <DegreeComponent />
          <ExperienceComponent />
        </>
      )}
    </>
  );
};

export default FaceComponent;
