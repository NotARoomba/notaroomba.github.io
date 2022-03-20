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
    </div>)
}

function About() {
  return (<div>
           <div class="top-text">
            <p>About Me</p>
           </div>
  </div>)
}

function Projects() {
  return (<div>
    <div class="top-text">
    <p>My Projects</p>
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