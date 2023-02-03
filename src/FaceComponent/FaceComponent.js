import react from "react";
import "./FaceComponent.css";
import "../Static/images/ShivaMain.jpg";

const FaceComponent = () => {
  const mainShiva = require("../Static/images/ShivaMain.jpg");
  return (
    <div className="face">
      <div>Shiva Prasaad Pappala</div>
      <img className="centreImage" src={mainShiva} width="180px"></img>
    </div>
  );
};

export default FaceComponent;