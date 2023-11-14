import React from "react";
import { Link } from "react-router-dom";
import Transitions from "./Transitions";
import Circles from "./Circles";


export default function Extra() {
  return (
    <Transitions>
      <div className="top-section">
        <img src='/assets/img/avatar.png' id="home-image"></img>
        <p id="home-title">Extra</p>
      </div>
      <div className="home-button-section">
        <Link className="link-button" to="/" >Home</Link>
        <Link className="link-button" to="https://nivelesdeniveles.org">Niveles De Niveles</Link>
        <Link className="link-button" to="https://koombia.notaroomba.xyz">Koombia</Link>
        <Link className="link-button" to="https://grindhub.notaroomba.xyz">Grindhub</Link>
        <Link className="link-button" to="https://devoided.notaroomba.xyz">Devoided</Link>
        <Link className="link-button" to="https://gravity.notaroomba.xyz">Gravity</Link>
        <Link className="link-button" to="https://wordle.notaroomba.xyz">Wordle</Link>
        <Link className="link-button" to="https://asteroids.notaroomba.xyz">Asteroids</Link>
        <Link className="link-button" to="https://status.notaroomba.xyz">Status</Link>
      </div>
      <div id="secret-text">
          <p className="wrap">This page was made in memorial to the dozens of poor souls murdered by Nathan's confusing and mind boggling code. He frequently create codes that makes literally no sense and give to his teacher and fry his brain. The wonderful projects are posted here for you to die. <br/> -Henry</p>
      </div>
      <Circles/>
    </Transitions>)
}