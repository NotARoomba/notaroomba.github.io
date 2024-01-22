import React from "react";
import { Link } from "react-router-dom";
import Transitions from "./Transitions";
import Circles from "./Circles";

export default function About() {
  return (
    <Transitions>
      <div className="page-top-section">
        <img src="/assets/img/avatar.png" id="page-image"></img>
        <div className="page-title-buttons">
          <p id="page-title">NotARoomba</p>
          <div className="page-buttons">
            <Link className="page-link-button" to="/">
              Home
            </Link>
            <Link className="page-link-button" to="/projects">
              Projects
            </Link>
            <Link className="page-link-button" to="/extra">
              Extra
            </Link>
          </div>
        </div>
      </div>
      <div className="outer-outer-box">
        <div className="text-box-outer">
          <p>
            I am a high school student that likes to break things for fun. My
            main languages are JavaScript, C++, and Java.
          </p>
        </div>
        <div className="text-box-outer">
          <p>
            Check out my website for more information such as my projects,
            status of my websites, and API’s. There may be a secret somewhere...
          </p>
        </div>
      </div>
      <div className="about-frameworks">
        <p>Skills</p>
        <div id="image-box" className="text-box-outer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
          <img
            className="dark-icons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
          />
        </div>
      </div>
      {/* <div id="image-box" className="text-box-outer">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
        <img src="/assets/img/archlinux.svg"/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg" /> 
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
        <img className="dark-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
        <img className="dark-icons"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sdl/sdl-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" />  
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
      </div> */}
      <Circles />
    </Transitions>
  );
}
