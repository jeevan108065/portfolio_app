import "./DegreeComponent.css";
import degreeIcon from "./degree.svg";

const DegreeComponent = () => {
  return (
    <div className="degreePin">
      <img src={degreeIcon} alt="degreeIcon" width="110px"/>
    </div>
  );
};

export default DegreeComponent;
