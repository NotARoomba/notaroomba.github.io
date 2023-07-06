import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Transitions from "./Transitions";
import ProjectBox from "./ProjectBox";
import Hyperlink from "./Hyperlink";


export default function Projects() {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
    return () => {
      document.body.style.overflowY = "hidden";
    };   }, []);
  return (
    <Transitions id="projects">
      <div id="projects-top-section" class="page-top-section">
        <img src='/assets/img/avatar.png' id="page-image"></img>
        <div class="page-title-buttons">
          <p id="page-title">Projects</p>
          <div class="page-buttons">
          <Link class="page-link-button" to="/" >Home</Link>
          <Link class="page-link-button" to="/about">About Me</Link>
          <Link class="page-link-button" to="/extra">Extra</Link>
          </div>
        </div>
      </div>
        <h1>Scroll</h1>
        <ProjectBox imgPath="/assets/img/tubb.png" title="Tubb" text={<>Tubb is a utility bot with a multitude of useful commands as well as a music system for your enjoyment. Commands are straight forward unlike the complications you have to deal with in other bots. Tubb is still being constantly worked on, so please send any bugs to the GitHub repository {<Hyperlink text="here" link="https://github.com/NotARoomba/TubbBot"/>}. Feature suggestions are welcome. You can also invite Tubb {<Hyperlink text={"here"} link={"https://top.gg/bot/750123677739122819"}/>}.</>}/>
        <ProjectBox imgPath="/assets/img/cmd.png" title="Simple Music Player" text={<>Just a music player mini-project to get more familliar with C#. Its features are: play a file, play files from a directory (recursive), and play files from a directory shuffled. Complile it or look at the {<Hyperlink text={"releases"} link={"https://github.com/NotARoomba/Simple-Music-Player/releases"}/>} to run.</>}/>
        <ProjectBox imgPath="/assets/img/music.png" title="Simple Music Player 2" text={<>Its back, the application no-one asked for... Simple Music Player 2! Filled with nothing but learning attempts even I'm surprised it could build. Check out the {<Hyperlink text={"releases"} link={"https://github.com/NotARoomba/Simple-Music-Player-2/releases"}/>} for this unit of an attempt.</>}/>
        <ProjectBox imgPath="/assets/img/bounce.png" title="Bounce" text={<>A 2 player pong game made with C++ and SDL2. Player 1 conrols are Up and Left arrow Player 2 Controls are Right and Down arrow. Complile it or look at the {<Hyperlink text={"releases"} link={"https://github.com/NotARoomba/Bounce/releases"}/>} to run.</>}/>
        <ProjectBox imgPath="/assets/img/asteroids.png" title="Asteroids" text={<>Another asteroids clone out of millions by aspiring developers to join their favorite game company by learning SDL, OpenGL, or any myriad of graphics libraries. Check out the {<Hyperlink text={"releases"} link={"https://github.com/NotARoomba/Asteroids/releases"}/>} to dodge asteroids with (somewhat) broken colision.</>}/>
        <ProjectBox imgPath="/assets/img/wordle.png" title="Wordle CLI" text={<>A special product of desperation, boredom, and the desire to fit in comes this Cli version of the (decently) popular Wordle game. Complile it or look at the {<Hyperlink text={"releases"} link={"https://github.com/NotARoomba/WordleCli/releases"}/>} to run.</>}/>
        <ProjectBox imgPath="/assets/img/koombia.png" title="Koombia" text={<>Koombia lets you turn text from your science, spanish, history or ethics lessons into songs for you to memorize the contents of your quiz faster and easier. Using Koombia is as easy as copy, pasting, and clicking. Paste your lesson into the text area and select a genre for your song. It will generate a random beat with chord progressions based on the genre and a text to speech will sing the song. Next to it, theres a karaoke where you can test your singing skills and see if you learned correctly the song. You can try it out on my {<Hyperlink text={"website"} link={"https://koombia.notaroomba.xyz"}/>} and look at the {<Hyperlink text={"GitHub"} link={"https://github.com/NotARoomba/Koombia"}/>}.</>}/>
        <ProjectBox imgPath="/assets/img/grindhub.png" title="GrindHub" text={<>GrindHub will help you turn your procrastination into your habits! We built an intuitive platform where you can challenge yourself and do different daily missions and receive rewards, that will help you increase your level! Using GrindHub will be fun and rewarding at the end of the year. You can try out this Ai mess {<Hyperlink text={"here"} link={"https://grindhub.notaroomba.xyz"}/>} or look at the spaghetti code {<Hyperlink text={"here"} link={"https://github.com/NotARoomba/GrindHub"}/>}.</>}/>
        <ProjectBox imgPath="/assets/img/devoided.png" title="Devoided" text={<>Devoided is an RPG game that was developed in a hackathon and got 2nd place. The game is about a quantum engineer explores space-time in search of traces of a deck of ancient Earth, but in his search he becomes trapped in the past and future so he does everything possible to repair his time clock to return to the present and reunite. the letters to discover the mystery of the origin of the universe. You can try it out on my {<Hyperlink text={"website"} link={"https://devoided.notaroomba.xyz"}/>} and look at the {<Hyperlink text={"GitHub"} link={"https://github.com/NotARoomba/Devoided"}/>}.</>}/>
        <ProjectBox imgPath="/assets/img/chess.png" title="Chess" text={<>Chess! A game that has been played for centuries now arrives to your terminal! WIth the power of C++ and 3.5 braincells comes this facinating take on the popular game. You can compile it or look at the {<Hyperlink text={"releases"} link={"https://github.com/NotARoomba/Chess/releases"}/>} to run.</>}/>   
    </Transitions>)
}