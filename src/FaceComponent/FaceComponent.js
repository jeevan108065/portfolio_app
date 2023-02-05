import react from "react";
import "./FaceComponent.css";
import "../Static/images/ShivaMain.jpg";

const FaceComponent = () => {
  const mainShiva = require("../Static/images/ShivaMain.jpg");
  return (
    <div className="face">
      <div style={{ height: "210px", width: "210px" }}>
        <img
          className="centreImage"
          alt="Shiva Prasaad Pappala"
          src={mainShiva}
        ></img>
      </div>
    </div>
  );
};

export default FaceComponent;
