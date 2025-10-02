import { useNavigate } from "react-router-dom";
import "./Gender.css";
import { useCount } from "./CountContext";

interface GenderProps {
  gender: string;
  id : number;
}

function Gender({ gender }: GenderProps) {
  const navigate = useNavigate();
  const { setMale } = useCount();
  // Assign colors based on gender
  let boxColor = "";
  if (gender?.toLowerCase() === "male") {
    boxColor = "#2323c0ff";
  } else if (gender?.toLowerCase() === "female") {
    boxColor = "#ff1493ff";
  } else {
    boxColor = "gray";
  }

  return (
    <div className="gender-container">
      <div
        className="gender-box"
        style={{ backgroundColor: boxColor, cursor: "pointer" }}
        onClick={() => { gender.toLowerCase() !== "male" ? setMale(false) : setMale(true);navigate(gender.toLowerCase() === "male" ? "/Male" : "/Female", { state: { gender } })}}>
        <span>{gender}</span>
      </div>
    </div>
  );
}

export default Gender;
