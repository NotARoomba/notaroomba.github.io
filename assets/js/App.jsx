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
    </div>
  );
}
function Home() {
  return (
    <div>
      <div class="top-text">
         <p id="home-title">Home</p>
  </div>
      <div class="info-text">
          <p>01101001 01100110 00100000 01110101 01110010 00100000 01110010 01100101 01100001 01100100 01101001 01101110 01100111 00100000 01110100 01101000 01101001 01110011 00100000 01110100 01101000 01100101 01101110 00100000 01110101 01110010 00100000 01100001 00100000 01101110 01100101 01110010 01100100<br/> -Unknown</p>
      </div>
      <div class="info-text" id="secret-text">
          <p>This page was made in memorial to the dozens of poor souls murdered by Nathan's confusing and mind boggling code. He frequently create codes that makes literally no sense and give to his teacher and fry his brain. The wonderful projects are posted here for you to die. <br/> -Henry</p>
      </div>
      <div>
      <div class="bottom-nav">
            <p>Special Projects</p>
            <Link to="/" onClick={() => window.location.href = "https://grindhub.notaroomba.xyz"}>GrindHub</Link>
            <Link to="/" onClick={() => window.location.href = "https://koombia.notaroomba.xyz"}>Koombia</Link>
        <button type="button" id="secret-btn" onClick={() => 
  secret()}>...</button>
  </div>
      </div>
    </div>)
}

function About() {
  return (<div>
           <div class="top-text">
            <p id="about-title">About Me</p>
           </div>
    <img src="/assets/img/profile.png" id="profile-pic"/>
    <div class="info-links">
             <a href="https://github.com/NotARoomba" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>
    </div>
    <div class="info-links">
      <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
      <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" />
      <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" />
      <img src="https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white" />
      <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" />
      <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" />
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
    </div>
    <div class="info-text">
      <p>Hello, I am a high school student that likes to break things for fun. My main languages are Javascript, C++, and Java but I'm trying to learn more! Check out this website to maybe find an easter egg...</p>
    </div>
  </div>)
}

function Projects() {
  return (<div>
    <div class="top-text">
    <p id="project-title">this is so bad why am i even writing this for a sentence that no-one will probably ever have the time to fully view and understand whats going on inside the website in the bottom right corner of the page there is totally not some nifty button that does something and btw the button is ... totally not on the home page...</p>
  </div>
    <div>
      <div class="left-show">
        <img src="/assets/img/tubb.png" class="left-show-pic"/>
          <p class="left-show-title">TubbBot</p>
        <p class="left-show-desc">Tubb is a utility bot with a multitude of useful commands as well as a music system for your enjoyment. Commands are straight forward unlike the complications you have to deal with in other bots. Tubb is still being constantly worked on, so please send any bugs to the GitHub repository <a href="https://github.com/NotARoomba/TubbBot" target="_blank">here</a>. Feature suggestions are welcome. You can also invite Tubb <a href="https://top.gg/bot/750123677739122819" target="_blank">here</a>.</p>
    </div>
      <div class="right-show">
        <img src="/assets/img/cmd.png" class="right-show-pic"/>
          <p class="right-show-title">Simple Music Player</p>
        <p class="right-show-desc">Just a music player mini-project to get more familliar with C#. Complile it or look at the <a href="https://github.com/NotARoomba/Simple-Music-Player/releases" target="_blank">releases</a> to run.</p>
    </div>
      <div class="left-show">
        <img src="/assets/img/music.png" class="left-show-pic"/>
          <p class="left-show-title">Simple Music Player 2</p>
        <p class="left-show-desc">Its back, the application no-one asked for... Simple Music Player 2!
Filled with nothing but learning attempts even I'm surprised it could build. Check out the <a href="https://github.com/NotARoomba/Simple-Music-Player-2/releases" target="_blank">releases</a> for this unit of an attempt.</p>
    </div>
      <div class="right-show">
        <img src="/assets/img/bounce.png" class="right-show-pic"/>
          <p class="right-show-title">Bounce</p>
        <p class="right-show-desc">A 2 player pong game made with C++ and SDL2. Player 1 conrols are Up and Left arrow Player 2 Controls are Right and Down arrow. Complile it or look at the <a href="https://github.com/NotARoomba/Bounce/releases" target="_blank">releases</a> to run.</p>
    </div>
    <div class="left-show">
        <img src="/assets/img/asteroids.png" class="left-show-pic"/>
          <p class="left-show-title">Asteroids</p>
        <p class="left-show-desc">Another asteroids clone out of millions by aspiring developers to join their favorite game company by learning SDL, OpenGL, or any myriad of graphics libraries. Check out the <a href="https://github.com/NotARoomba/Asteroids/releases" target="_blank">releases</a> to dodge asteroids with (somewhat) broken colision.</p>
    </div>
      <div class="right-show">
        <img src="/assets/img/wordle.png" class="right-show-pic"/>
          <p class="right-show-title">Wordle Cli</p>
        <p class="right-show-desc">A special product of desperation, boredom, and the desire to fit in comes this Cli version of the (decently) popular Wordle game. Complile it or look at the <a href="https://github.com/NotARoomba/WordleCli/releases" target="_blank">releases</a> to run.</p>
      </div>
      <div class="left-show">
        <img src="/assets/img/koombia.png" class="left-show-pic"/>
          <p class="left-show-title">Koombia</p>
        <p class="left-show-desc">Koombia lets you turn text from your science, spanish, history or ethics lessons into songs for you to memorize the contents of your quiz faster and easier. Using Koombia is as easy as copy, pasting, and clicking. Paste your lesson into the text area and select a genre for your song. It will generate a random beat with chord progressions based on the genre and a text to speech will sing the song. Next to it, theres a karaoke where you can test your singing skills and see if you learned correctly the song. You can try it out <a href="https://koombia.notaroomba.xyz" target="_blank">on my website</a> and look at the <a href="https://github.com/NotARoomba/Koombia" target="_blank">GitHub</a>.</p>
    </div>
      <div class="right-show">
        <img src="/assets/img/grindhub.png" class="right-show-pic"/>
          <p class="right-show-title">Grind Hub</p>
        <p class="right-show-desc">GrindHub will help you turn your procrastination into your habits! We built an intuitive platform where you can challenge yourself and do different daily missions and receive rewards, that will help you increase your level! Using GrindHub will be fun and rewarding at the end of the year. You can try out this Ai mess <a href="https://grindhub.notaroomba.xyz" target="_blank">here</a> or look at the spaghetti code <a href="https://github.com/NotARoomba/GrindHub" target="_blank">here</a>.</p>
      </div>
    </div>
  </div>)
}
function NoClick() {
  return ( <div>
         <div class="top-text">
           <p id="noclick-title">Don't Look...</p>
</div>
     <div class="left-show">
        <img src="/assets/img/cmd.png" class="left-show-pic"/>
          <p class="left-show-title">Hello World</p>
        <p class="left-show-desc">Hello World is a very simple program that every coder should make when learning a new language. Here is an example of a byproduct of boredom and too much time. This program uses 12 (13 including bash) languages to print Hello World. You can see this horror <a href="https://github.com/NotARoomba/HelloWorld" target="_blank">here</a> along with the link to the <a href="https://replit.com/@NotARoomba/HelloWorld" target="_blank">repl</a>.</p>
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
function secret() {
    document.getElementById("secret-text").style.display="block";
}