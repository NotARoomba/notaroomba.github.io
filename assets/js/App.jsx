import React from 'react';
import ReactDOM from 'react-dom'
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import '../css/NavBar.css'
import '../css/App.css'

export default function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path="/noclick" element={<NoClick />} />
      </Route>
    </Routes>
  </div>
  );
}
function NavBar() {
  reloadUI()
  return (
    <div>
    <div class="top-nav">
            <Link to="/" id="nav-start" onClick={() => reloadUI(1)}>Home</Link>
            <Link to="/about" onClick={() => reloadUI(2)}>About Me</Link>
            <Link to="/projects" onClick={() => reloadUI(3)}>Projects</Link>
            <Link id="nav-end" to="/noclick" onClick={() => reloadUI(4)}>Don't Click</Link>
</div>
      <Outlet/>
    </div>);
}
function Home() {
  return (
    <div>
      <div class="top-text">
         <p id="home-title">Home</p>
  </div>
      <div class="info-text">
          <p>This page was made in memorial to the dozens of poor souls murdered by Nathan's confusing and mind boggling code. He frequently create codes that makes literally no sense and give to his teacher and fry his brain. The wonderful projects are posted here for you to die. <br/> -Henry</p>
      </div>
    </div>)
}

function About() {
  return (<div>
           <div class="top-text">
            <p>About Me</p>
           </div>
    <img src="/assets/img/profile.png" id="profile-pic"/>
    <div class="info-text">
      <p>Hello, I am a high school student that likes to break things for fun. My main languages are Javascript, C++, and Java but I'm trying to learn more! Check out this website to maybe find an easter egg...</p>
    </div>
  </div>)
}

function Projects() {
  return (<div>
    <div class="top-text">
    <p>My Projects</p>
  </div>
    <div>
      <div class="left-show">
        <img src="/assets/img/tubb.png" class="left-show-pic"/>
          <p class="left-show-title">TubbBot</p>
        <p class="left-show-desc">Tubb is a utility bot with a multitude of useful commands as well as a music system for your enjoyment. Commands are straight forward unlike the complications you have to deal with in other bots. Tubb is still being constantly worked on, so please send any bugs to the GitHub repository <a href="https://github.com/NotARoomba/TubbBot">here</a>. Feature suggestions are welcome. You can also invite Tubb <a href="https://top.gg/bot/750123677739122819">here</a>.</p>
    </div>
      <div class="right-show">
        <img src="/assets/img/cmd.png" class="right-show-pic"/>
          <p class="right-show-title">Simple Music Player</p>
        <p class="right-show-desc">Just a music player mini-project to get more familliar with C#. Complile it or look at the <a href="https://github.com/NotARoomba/Simple-Music-Player/releases">releases</a> to run.</p>
    </div>
      <div class="left-show">
        <img src="/assets/img/music.png" class="left-show-pic"/>
          <p class="left-show-title">Simple Music Player 2</p>
        <p class="left-show-desc">Its back, the application no-one asked for... Simple Music Player 2!
Filled with nothing but learning attempts even I'm surprised it could build. Check out the <a href="https://github.com/NotARoomba/Simple-Music-Player-2/releases">releases</a> for this unit of an attempt.</p>
    </div>
      <div class="right-show">
        <img src="/assets/img/bounce.png" class="right-show-pic"/>
          <p class="right-show-title">Bounce</p>
        <p class="right-show-desc"> A 2 player pong game made with C++ and SDL2. Player 1 conrols are Up and Left arrow Player 2 Controls are Right and Down arrow. Complile it or look at the <a href="https://github.com/NotARoomba/Bounce/releases">releases</a> to run.</p>
    </div>
    </div>
  </div>)
}
function NoClick() {
  return ( <div>
         <div class="top-text">
           <p>Don't scroll...</p>
</div>
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
    document.getElementById("home-title").innerHTML = homeTitles[Math.floor(Math.random() * homeTitles.length)];;
    break;
  }
     }
        })
}