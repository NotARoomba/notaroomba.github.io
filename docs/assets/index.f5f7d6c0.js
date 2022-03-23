import{R as e,a as h,b as r,L as i,O as d,c as g,H as u}from"./vendor.e5ca6171.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}};p();function b(){return e.createElement("div",null,e.createElement(h,null,e.createElement(r,{path:"/",element:e.createElement(f,null)},e.createElement(r,{index:!0,element:e.createElement(E,null)}),e.createElement(r,{path:"/about",element:e.createElement(y,null)}),e.createElement(r,{path:"/projects",element:e.createElement(w,null)}),e.createElement(r,{path:"/noclick",element:e.createElement(v,null)}))))}function f(){return n(),e.createElement("div",null,e.createElement("div",{class:"top-nav"},e.createElement(i,{to:"/",id:"nav-start",onClick:()=>n(1)},"Home"),e.createElement(i,{to:"/about",onClick:()=>n(2)},"About Me"),e.createElement(i,{to:"/projects",onClick:()=>n(3)},"Projects"),e.createElement(i,{id:"nav-end",to:"/noclick",onClick:()=>n(4)},"Don't Click")),e.createElement(d,null))}function E(){return e.createElement("div",null,e.createElement("div",{class:"top-text"},e.createElement("p",{id:"home-title"},"Home")),e.createElement("div",{class:"info-text"},e.createElement("p",null,"01101001 01100110 00100000 01110101 01110010 00100000 01110010 01100101 01100001 01100100 01101001 01101110 01100111 00100000 01110100 01101000 01101001 01110011 00100000 01110100 01101000 01100101 01101110 00100000 01110101 01110010 00100000 01100001 00100000 01101110 01100101 01110010 01100100",e.createElement("br",null)," -Unknown")),e.createElement("div",{class:"info-text",id:"secret-text"},e.createElement("p",null,"This page was made in memorial to the dozens of poor souls murdered by Nathan's confusing and mind boggling code. He frequently create codes that makes literally no sense and give to his teacher and fry his brain. The wonderful projects are posted here for you to die. ",e.createElement("br",null)," -Henry")),e.createElement("div",null,e.createElement("button",{type:"button",id:"secret-btn",onClick:()=>k()},"...")))}function y(){return e.createElement("div",null,e.createElement("div",{class:"top-text"},e.createElement("p",{id:"about-title"},"About Me")),e.createElement("img",{src:"/assets/img/profile.png",id:"profile-pic"}),e.createElement("div",{class:"info-links"},e.createElement("a",{href:"https://github.com/NotARoomba",target:"_blank"},e.createElement("img",{src:"https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"}))),e.createElement("div",{class:"info-links"},e.createElement("img",{src:"https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"}),e.createElement("img",{src:"https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"}),e.createElement("img",{src:"https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"}),e.createElement("img",{src:"https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=c-sharp&logoColor=white"}),e.createElement("img",{src:"https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"}),e.createElement("img",{src:"https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"}),e.createElement("img",{src:"https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"}),e.createElement("img",{src:"https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"}),e.createElement("img",{src:"https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"})),e.createElement("div",{class:"info-text"},e.createElement("p",null,"Hello, I am a high school student that likes to break things for fun. My main languages are Javascript, C++, and Java but I'm trying to learn more! Check out this website to maybe find an easter egg...")))}function w(){return e.createElement("div",null,e.createElement("div",{class:"top-text"},e.createElement("p",{id:"project-title"},"this is so bad why am i even writing this for a sentence that no-one will probably ever have the time to fully view and understand whats going on inside the website in the bottom right corner of the page there is totally not some nifty button that does something and btw the button is ... totally not on the home page...")),e.createElement("div",null,e.createElement("div",{class:"left-show"},e.createElement("img",{src:"/assets/img/tubb.png",class:"left-show-pic"}),e.createElement("p",{class:"left-show-title"},"TubbBot"),e.createElement("p",{class:"left-show-desc"},"Tubb is a utility bot with a multitude of useful commands as well as a music system for your enjoyment. Commands are straight forward unlike the complications you have to deal with in other bots. Tubb is still being constantly worked on, so please send any bugs to the GitHub repository ",e.createElement("a",{href:"https://github.com/NotARoomba/TubbBot",target:"_blank"},"here"),". Feature suggestions are welcome. You can also invite Tubb ",e.createElement("a",{href:"https://top.gg/bot/750123677739122819",target:"_blank"},"here"),".")),e.createElement("div",{class:"right-show"},e.createElement("img",{src:"/assets/img/cmd.png",class:"right-show-pic"}),e.createElement("p",{class:"right-show-title"},"Simple Music Player"),e.createElement("p",{class:"right-show-desc"},"Just a music player mini-project to get more familliar with C#. Complile it or look at the ",e.createElement("a",{href:"https://github.com/NotARoomba/Simple-Music-Player/releases",target:"_blank"},"releases")," to run.")),e.createElement("div",{class:"left-show"},e.createElement("img",{src:"/assets/img/music.png",class:"left-show-pic"}),e.createElement("p",{class:"left-show-title"},"Simple Music Player 2"),e.createElement("p",{class:"left-show-desc"},"Its back, the application no-one asked for... Simple Music Player 2! Filled with nothing but learning attempts even I'm surprised it could build. Check out the ",e.createElement("a",{href:"https://github.com/NotARoomba/Simple-Music-Player-2/releases",target:"_blank"},"releases")," for this unit of an attempt.")),e.createElement("div",{class:"right-show"},e.createElement("img",{src:"/assets/img/bounce.png",class:"right-show-pic"}),e.createElement("p",{class:"right-show-title"},"Bounce"),e.createElement("p",{class:"right-show-desc"}," A 2 player pong game made with C++ and SDL2. Player 1 conrols are Up and Left arrow Player 2 Controls are Right and Down arrow. Complile it or look at the ",e.createElement("a",{href:"https://github.com/NotARoomba/Bounce/releases",target:"_blank"},"releases")," to run."))))}function v(){return e.createElement("div",null,e.createElement("div",{class:"top-text"},e.createElement("p",{id:"noclick-title"},"Don't Look...")),e.createElement("div",{class:"left-show"},e.createElement("img",{src:"/assets/img/cmd.png",class:"left-show-pic"}),e.createElement("p",{class:"left-show-title"},"Hello World"),e.createElement("p",{class:"left-show-desc"},"Hello World is a very simple program that every coder should make when learning a new language. Here is an example of a byproduct of boredom and too much time. This program uses 12 (13 including bash) languages to print Hello World. You can see this horror ",e.createElement("a",{href:"https://github.com/NotARoomba/HelloWorld",target:"_blank"},"here")," along with the link to the ",e.createElement("a",{href:"https://replit.com/@NotARoomba/HelloWorld",target:"_blank"},"repl"),".")))}function n(m){const o=["your mother","[Insert Name Here]","Not Minecraft","runs on a potato","aeoiu","apple pineapple","eugena","teacup"];document.title=o[Math.floor(Math.random()*o.length)],setTimeout(()=>{if(document.readyState==="complete")switch(m){case 1:const s=["Home","Welcome","NotAWebsite","aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"];document.getElementById("home-title").innerHTML=s[Math.floor(Math.random()*s.length)];break;case 2:const l=["imagine","idk","why bother","credits","About Me"];document.getElementById("about-title").innerHTML=l[Math.floor(Math.random()*l.length)];break;case 3:const t=["my stuff","runs on several potatos","cool programs","NotAVirus","My Projects"];document.getElementById("project-title").innerHTML=t[Math.floor(Math.random()*t.length)];break;case 4:const a=["totally works","runs on several (million) potatos","borken","(Totally)NotAVirus","my computer cried","Don't Look..."];document.getElementById("noclick-title").innerHTML=a[Math.floor(Math.random()*a.length)];break}})}function k(){document.getElementById("secret-text").style.display="block"}g.render(e.createElement(u,null,e.createElement(b,null)),document.getElementById("root"));
