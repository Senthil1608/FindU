import React from "react";
import { useNavigate } from "react-router-dom";

import dhanush from "../assets/actors/dhanush.png";

import vishal from "../assets/actors/vishal.png";
import jayamravi from "../assets/actors/jayam ravi.png";
import kavin from "../assets/actors/kavin.png";
import { useCount } from "./CountContext";

const MaleGroup3: React.FC = () => {
 const navigate = useNavigate()
  const { increment } = useCount();
const actors = [
    //{ name: "Vijay", img: vijay }, //1
    //{ name: "Surya", img: surya }, //2
    { name: "Dhanush", img: dhanush }, //3
    //{ name: "Ajith", img: ajith }, //4
    //{ name: "Sivakarthikeyan", img: sk }, // 4 + 1
    //{ name: "Rajinikanth", img: rajini }, // 4  +2
    //{ name: "Kamal Haasan", img: kamal }, // 3 + 2 + 1 
    { name: "Vishal", img: vishal }, // 4 + 3 + 1
    { name: "Jayam Ravi", img: jayamravi }, // 4 + 3 + 2 
    { name: "Kavin", img: kavin }, // 4 + 3 + 2 + 1
];

  return (
    <div className="male-container">
      <h1>Group 3 :</h1>
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
          onClick={() =>{increment (3); navigate("/MaleGroup4")}}
        >
          Yes
        </button>


        <button 
          className="navigate-btn"
          onClick={() => navigate("/MaleGroup4")}
        >
          No
        </button>
      </div>
    </div>
  )
};

export default MaleGroup3;