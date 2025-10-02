
import saipallavi from "../assets/actress/sai pallavi.png";
import keerthy from "../assets/actress/keerthysuresh.png";
import nayanthara from "../assets/actress/nayanthara.png";
import pooja from "../assets/actress/poojahedge.png";
import simran from "../assets/actress/simran.png";
import jyothika from "../assets/actress/jyothika.png";
import trisha from "../assets/actress/trisha.png";
import samantha from "../assets/actress/samantha.png";
import priya from "../assets/actress/pbs.png";
import hansika from "../assets/actress/hansika.png";
import './Male.css'
import { useNavigate } from 'react-router-dom'

function Female() {
  const navigate = useNavigate()

  const actors = [
    { name: "Sai Pallavi", img: saipallavi },
    { name: "Keerthy Suresh", img: keerthy },
    { name: "Nayanthara", img: nayanthara },
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
      <h1>Choose an actor below :</h1>
      <div className="actor-grid">
        {actors.map((actor, index) => (
          <div key={index} className="actor-card">
            <img src={actor.img} alt={actor.name} />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>

      {/* Navigate Button */}
      <button 
        className="navigate-btn"
        onClick={() => navigate("/FemaleGroup1")}
      >
        Go to Female Group 1
      </button>
    <br/><br/>
      <button 
        className="main-btn"
        onClick={() => navigate("/")}
      >
        Main Page
      </button>
    </div>
  )
}

export default Female
