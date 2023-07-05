import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import '../css/App.css'

export default function App() {
  return (
  <div>
    <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<AboutMe />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/extra' element={<Extra />} />

    </Routes>
  </div>
  );
}


function Home() {
  useEffect(() => {
    boxes();
 });
  return (
    <div>
      <div class="top-section">
        <img src='/assets/img/avatar.png' id="home-image"></img>
        <p id="home-title">NotARoomba</p>
      </div>
      <div class="home-button-section">
        <Link class="link-button" to="/about" >About Me</Link>
        <Link class="link-button" to="/projects">Projects</Link>
        <Link class="link-button" to="/extra">Extra</Link>
      </div>
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>)
}
function AboutMe() {
  useEffect(() => {
    $('body').css('display', 'none');

    $('body').fadeIn(1000);
    boxes();
 });
  return (
    <div>
      <div class="page-top-section">
        <img src='/assets/img/avatar.png' id="page-image"></img>
        <div class="page-title-buttons">
          <p id="page-title">NotARoomba</p>
          <div class="page-buttons">
          <Link class="page-link-button" to="/" >Home</Link>
          <Link class="page-link-button" to="/projects">Projects</Link>
          <Link class="page-link-button" to="/extra">Extra</Link>
          </div>
        </div>
      </div>
      <div class="text-box-outer">
        <div class="text-box-inner">
            <p>I am a high school student that likes to break things for fun. My main languages are JavaScript, C++, and Java.</p>
        </div>
        <div class="text-box-text">
          Frameworks
        </div>
        <div class="text-box-inner">
            <p>Check out my website for more information such as my projects, status of my websites, and API’s. There may be a secret somewhere...</p>
        </div>
      </div>
      <div id="image-box" class="text-box-outer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
          
        <img src="/assets/img/archlinux.svg"/>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg" />
          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            <img class="dark-icons" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" />
          
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
        <img class="dark-icons"src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" />
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
          
      </div>
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>)
}
function Projects() {
  return (
    <div>
      <p>Projects</p>
    </div>)
}
function Extra() {
  return (
    <div>
      <p>Extra</p>
    </div>)
}

function reloadUI(a) {
    const titles = ["your mother", "[Insert Name Here]", "Not Minecraft", "runs on a potato", "aeoiu", "apple pineapple", "eugena", "teacup"]
  document.title = titles[Math.floor(Math.random() * titles.length)];
   setTimeout(() => {
     if (document.readyState === "complete") {
  switch (a) {
    case 1:
      const homeTitles = ["Home", "Welcome", "NotAWebsite", "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"]
    document.getElementById("home-title").innerHTML = homeTitles[Math.floor(Math.random() * homeTitles.length)];
    break;
    case 2:
      const profileTitles = ["imagine", "idk", "why bother", "credits", "About Me"]
    document.getElementById("about-title").innerHTML = profileTitles[Math.floor(Math.random() * profileTitles.length)];
    break;
      case 3:
      const projectTitles = ["my stuff", "runs on several potatos", "cool programs", "NotAVirus", "My Projects"]
    document.getElementById("project-title").innerHTML = projectTitles[Math.floor(Math.random() * projectTitles.length)];
    break;
      case 4:
      const noclickTitles = ["totally works", "runs on several (million) potatos", "borken", "(Totally)NotAVirus", "my computer cried", "Don't Look..."]
    document.getElementById("noclick-title").innerHTML = noclickTitles[Math.floor(Math.random() * noclickTitles.length)];
    break;
  }
     }
        })
}
function boxes() {
  $('ul li').each(function(i) {
    //console.log($(this)[0].style)
    $(this)[0].style.left = `${Math.floor(Math.random() * 111)-10}%`
    let wh = Math.floor(Math.random() * 131) + 60
    $(this)[0].style.width = `${wh}px`
    $(this)[0].style.height = `${wh}px`
    $(this)[0].style.animationDelay = `${Math.floor(Math.random() * 8)}s`
    $(this)[0].style.animationDuration = `${Math.floor(Math.random() * 51) + 10}s`


  });
}
function secret() {
    document.getElementById("secret-text").style.display="flex";
} 