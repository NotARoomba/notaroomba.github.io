import React from "react";
import Transitions from "./Transitions";
import Circles from "./Circles";
import { Link } from "react-router-dom";


export default function Home() {
    return (
      <Transitions>
        <div className="top-section">
          <img src='/assets/img/avatar.png' id="home-image"></img>
          <p id="home-title">NotARoomba</p>
        </div>
        <div className="home-button-section">
          <Link className="link-button" to="/about" >About Me</Link>
          <Link className="link-button" to="/projects">Projects</Link>
          <Link className="link-button" to="/extra">Extra</Link>
        </div>
        <Circles/>
      </Transitions>)
  }