import React from "react";
import { useNavigate } from "react-router-dom";
import pooja from "../assets/actress/poojahedge.png";
import simran from "../assets/actress/simran.png";
import jyothika from "../assets/actress/jyothika.png";
import trisha from "../assets/actress/trisha.png";
import samantha from "../assets/actress/samantha.png";
import priya from "../assets/actress/pbs.png";
import hansika from "../assets/actress/hansika.png";
import { useCount } from "./CountContext";

const FemaleGroup4: React.FC = () => {
 const navigate = useNavigate()
  const { increment } = useCount();

  const actors = [
    // { name: "Sai Pallavi", img: saipallavi },
    // { name: "Keerthy Suresh", img: keerthy },
    // { name: "Nayanthara", img: nayanthara },
    { name: "Pooja Hedge", img: pooja },
    { name: "Simran", img: simran },
    { name: "Jyothika", img: jyothika },
    { name: "Trisha", img: trisha },
    { name: "Samantha", img: samantha },
    { name: "Priya Bhavani Shankar", img: priya },
    { name: "Haniska", img: hansika },
  ]

  return (
    <div className="male-container">
      <h1>Group 4 :</h1>
      <div className="actor-grid">
        {actors.map((actor, index) => (
          <div key={index} className="actor-card">
            <img src={actor.img} alt={actor.name} />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>

  {/* Two Buttons */}
      <div className="btn-group">
        <button 
          className="navigate-btn"
          onClick={() =>{ increment(4) ;navigate("/Result")} }
        >
          Yes
        </button>


        <button 
          className="navigate-btn"
          onClick={() => navigate("/Result")}
        >
          No
        </button>
      </div>
    </div>
  )
};

export default FemaleGroup4;