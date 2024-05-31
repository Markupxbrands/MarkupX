// src/App.js
import React from 'react';
import GradientBackground from '../GradientBackground';
import Navbar from '../navbar/Navbar';
import Lower from '../lower_Section';

function Main() {
  return (
    <div className="App relative">
      <GradientBackground />
      <Navbar className="absolute top-0 left-0 z-50 w-full" />
      <Lower/>
    </div>
  );
}

export default Main;
