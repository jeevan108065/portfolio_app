import "./SchoolComponent.css";
import schoolIcon from "./school.svg";

const SchoolComponent = () => {
  return (
    <div className="schoolPin">
      <img src={schoolIcon} alt="School" width="110px"/>
    </div>
  );
};

export default SchoolComponent;
