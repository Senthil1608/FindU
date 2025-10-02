import './App.css'
import Gender from './components/Gender'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Male from './components/Male'
import Female from './components/Female'
import MaleGroup1 from './components/MaleGroup1'
import MaleGroup2 from './components/MaleGroup2'
import MaleGroup3 from './components/MaleGroup3'
import MaleGroup4 from './components/MaleGroup4'
import { CountProvider } from './components/CountContext'
import Result from './components/Result'
import FemaleGroup1 from './components/FemaleGroup1'
import FemaleGroup2 from './components/FemaleGroup2'
import FemaleGroup3 from './components/FemaleGroup3'
import FemaleGroup4 from './components/FemaleGroup4'

function Home() {
  const location = useLocation()
  const [gender1, setGender1] = useState("male")
  const [gender2, setGender2] = useState("female")

  // Update gender if coming back from EditGender
  useEffect(() => {
    if (location.state?.gender && location.state?.id) {
      if (location.state.id === 1) setGender1(location.state.gender)
      if (location.state.id === 2) setGender2(location.state.gender)
    }
  }, [location.state])

  return (
  <div className="container">
      {/* Rules Section */}
      <div className="rules-card">
        <h2>📜 Game Rules</h2>
        <ul>
          <li>👉 Choose your gender to start the game.</li>
          <li>👉 You’ll be displayed a set of actor or actress in the list.</li>
          <li>👉Choose an actor in your mind.</li>
          <li>👉 A group of actors will be displayed next </li>
          <li>👉 If your actor is available inthe group choose yes , else no</li>
          <li>👉 At the end, the winner will be displayed with their theme song.</li>
        </ul>
      </div>

      {/* Game Selection */}
      <div className="gender-container">
        <Gender gender={gender1} id={1} />
        <Gender gender={gender2} id={2} />
      </div>
    </div>
  )
}

function App() {
  return (
    <CountProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Male" element={<Male />} />
          <Route path="/Female" element={<Female />} />
          <Route path="/MaleGroup1" element={<MaleGroup1 />} />
          <Route path="/MaleGroup2" element={<MaleGroup2 />} />
          <Route path="/MaleGroup3" element={<MaleGroup3 />} />
          <Route path="/MaleGroup4" element={<MaleGroup4 />} />
          <Route path="/FemaleGroup1" element={<FemaleGroup1 />} />
          <Route path="/FemaleGroup2" element={<FemaleGroup2 />} />
          <Route path="/FemaleGroup3" element={<FemaleGroup3 />} />
          <Route path="/FemaleGroup4" element={<FemaleGroup4 />} />
          <Route path="/Result" element={<Result /> } />
        </Routes>
      </Router>
    </CountProvider>
  )
}

export default App
