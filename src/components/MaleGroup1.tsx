import React from "react";
import { useNavigate } from "react-router-dom";
import vijay from "../assets/actors/vijay.png";
import sk from "../assets/actors/sk.png";
import vishal from "../assets/actors/vishal.png";
import kavin from "../assets/actors/kavin.png";

import kamal from "../assets/actors/kamal.png";
import { useCount } from "./CountContext";

const MaleGroup1: React.FC = () => {
 const navigate = useNavigate()
  const { increment } = useCount();

const actors = [
    { name: "Vijay", img: vijay }, //1
    // { name: "Surya", img: surya }, //2
    //{ name: "Dhanush", img: dhanush }, //3 , 2+1
    //{ name: "Ajith", img: ajith }, //4 , 3+1
    { name: "Sivakarthikeyan", img: sk }, // 4 + 1, 3+2
    //{ name: "Rajinikanth", img: rajini }, // 4  +2 , 3+1+2
    { name: "Kamal Haasan", img: kamal }, // 4+ 3  , 4+2+1
    { name: "Vishal", img: vishal }, // 4 + 3 + 1 , 
    //{ name: "Jayam Ravi", img: jayamravi }, // 4 + 3 + 2  
    { name: "Kavin", img: kavin }, // 4 + 3 + 2 + 1
];

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
            navigate("/MaleGroup2")}}
        >
          Yes
        </button>

        
        <button 
          className="navigate-btn"
          onClick={() => navigate("/MaleGroup2")}
        >
          No
        </button>
      </div>
    </div>
  )
};

export default MaleGroup1;