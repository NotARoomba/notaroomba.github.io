import React, { useEffect } from 'react';
import Transitions from './Transitions';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import '../css/App.css'
import ProjectBox from './ProjectBox';
import Hyperlink from './Hyperlink';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Extra from './Extra';

export default function App() {
  return (
    <ParallaxProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/extra' element={<Extra />} />
      </Routes>
    </ParallaxProvider>
  );
}
function secret() {
} 