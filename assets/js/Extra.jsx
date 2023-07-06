import React from "react";
import { Link } from "react-router-dom";
import Transitions from "./Transitions";
import Circles from "./Circles";


export default function Extra() {
  return (
    <Transitions>
      <div class="top-section">
        <img src='/assets/img/avatar.png' id="home-image"></img>
        <p id="home-title">Extra</p>
      </div>
      <div class="home-button-section">
        <Link class="link-button" onClick={() => window.location.href = "https://koombia.notaroomba.xyz"} >Koombia</Link>
        <Link class="link-button" onClick={() => window.location.href = "https://grindhub.notaroomba.xyz"}>Grindhub</Link>
        <Link class="link-button" to="/" >Home</Link>
        <Link class="link-button" onClick={() => window.location.href = "https://devoided.notaroomba.xyz"}>Devoided</Link>
        <Link class="link-button" onClick={() => window.location.href = "https://status.notaroomba.xyz"}>Status</Link>
      </div>
      <div id="secret-text">
          <p class="wrap">This page was made in memorial to the dozens of poor souls murdered by Nathan's confusing and mind boggling code. He frequently create codes that makes literally no sense and give to his teacher and fry his brain. The wonderful projects are posted here for you to die. <br/> -Henry</p>
      </div>
      <Circles/>
    </Transitions>)
}