import React from "react";
import { useNavigate } from "react-router-dom";
import keerthy from "../assets/actress/keerthysuresh.png";
import jyothika from "../assets/actress/jyothika.png";
import trisha from "../assets/actress/trisha.png";
import priya from "../assets/actress/pbs.png";
import hansika from "../assets/actress/hansika.png";
import { useCount } from "./CountContext";

const FemaleGroup2: React.FC = () => {
 const navigate = useNavigate()
  const { increment } = useCount();

  const actors = [
    //{ name: "Sai Pallavi", img: saipallavi },
    { name: "Keerthy Suresh", img: keerthy },
    // { name: "Nayanthara", img: nayanthara },
    // { name: "Pooja Hedge", img: pooja },
    // { name: "Simran", img: simran },
    { name: "Jyothika", img: jyothika },
    { name: "Trisha", img: trisha },
    //{ name: "Samantha", img: samantha },
    { name: "Priya Bhavani Shankar", img: priya },
    { name: "Haniska", img: hansika },
  ]
  return (
    <div className="male-container">
      <h1>Group 2 :</h1>
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
          onClick={() => {increment(2);
            navigate("/FemaleGroup3")}}
        >
          Yes
        </button>


        <button 
          className="navigate-btn"
          onClick={() => navigate("/FemaleGroup3")}
        >
          No
        </button>
      </div>
    </div>
  )
};

export default FemaleGroup2;