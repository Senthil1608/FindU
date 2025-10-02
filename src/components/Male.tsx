import vijay from '../assets/actors/vijay.png'
import surya from '../assets/actors/surya.png'
import dhanush from '../assets/actors/dhanush.png'
import ajith from '../assets/actors/ajith.png'
import sk from '../assets/actors/sk.png'
import rajini from '../assets/actors/rajini.png'
import kamal from '../assets/actors/kamal.png'
import vishal from '../assets/actors/vishal.png'
import jayamravi from '../assets/actors/jayam ravi.png'
import kavin from '../assets/actors/kavin.png'
import './Male.css'
import { useNavigate } from 'react-router-dom'

function Male() {
  const navigate = useNavigate()

  const actors = [
    { name: "Vijay", img: vijay },
    { name: "Surya", img: surya },
    { name: "Dhanush", img: dhanush },
    { name: "Ajith", img: ajith },
    { name: "Sivakarthikeyan", img: sk },
    { name: "Rajinikanth", img: rajini },
    { name: "Kamal Haasan", img: kamal },
    { name: "Vishal", img: vishal },
    { name: "Jayam Ravi", img: jayamravi },
    { name: "Kavin", img: kavin },
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
        onClick={() => navigate("/MaleGroup1")}
      >
        Go to Male Group 1
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

export default Male
