import React from "react";
import { useNavigate } from "react-router-dom";
import saipallavi from "../assets/actress/sai pallavi.png";

import simran from "../assets/actress/simran.png";
import trisha from "../assets/actress/trisha.png";
import samantha from "../assets/actress/samantha.png";

import hansika from "../assets/actress/hansika.png";
import { useCount } from "./CountContext";

const FemaleGroup1: React.FC = () => {
 const navigate = useNavigate()
  const { increment } = useCount();

  const actors = [
    { name: "Sai Pallavi", img: saipallavi },
    //{ name: "Keerthy Suresh", img: keerthy },
    //{ name: "Nayanthara", img: nayanthara },
    //{ name: "Pooja Hedge", img: pooja },
    { name: "Simran", img: simran },
    //{ name: "Jyothika", img: jyothika },
    { name: "Trisha", img: trisha },
    { name: "Samantha", img: samantha },
    //{ name: "Priya Bhavani Shankar", img: priya },
    { name: "Haniska", img: hansika },
  ]

  return (
    <div className="male-container">
      <h1>Group 1 :</h1>
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
          onClick={() => {increment(1); 
            navigate("/FemaleGroup2")}}
        >
          Yes
        </button>

        
        <button 
          className="navigate-btn"
          onClick={() => navigate("/FemaleGroup2")}
        >
          No
        </button>
      </div>
    </div>
  )
};

export default FemaleGroup1;