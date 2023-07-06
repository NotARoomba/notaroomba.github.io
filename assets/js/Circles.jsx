import React, {useEffect} from "react";

export default function Circles() {
  useEffect(() => {
    $('ul li').each(function(i) {
        //console.log($(this)[0].style)
        $(this)[0].style.left = `${Math.floor(Math.random() * 111)-10}%`
        let wh = Math.floor(Math.random() * 131) + 60
        $(this)[0].style.width = `${wh}px`
        $(this)[0].style.height = `${wh}px`
        $(this)[0].style.animationDelay = `${Math.floor(Math.random() * 8)}s`
        $(this)[0].style.animationDuration = `${Math.floor(Math.random() * 51) + 10}s`
      });
 });
 const secret = (e) => {
    e.preventDefault();
    try {
        $("#secret-text")[0].style.display = "flex"
    } catch {}
}
return (
    <ul class="circles">
    <li onClick={secret}></li>
    <li></li>
    <li></li>
    <li onClick={secret}></li>
    <li></li>
    <li></li>
    <li onClick={secret}></li>
    <li></li>
    <li></li>
    <li onClick={secret}></li>
    <li></li>
    <li></li>
    <li onClick={secret}></li>
    <li></li>
    <li></li>
  </ul>)
}