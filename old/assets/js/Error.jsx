import React from "react";
import Transitions from "./Transitions";
import Circles from "./Circles";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Transitions>
      <div className="top-section">
        <img
          src="/assets/img/alert.svg"
          id="home-image"
          style={{
            filter:
              "invert(15%) sepia(87%) saturate(7313%) hue-rotate(340deg) brightness(84%) contrast(105%)",
          }}
        ></img>
        <p id="home-title">404</p>
      </div>
      <div className="home-button-section">
        <Link className="link-button" to="/">
          Home
        </Link>
      </div>
      <Circles />
    </Transitions>
  );
}
