import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes, Route, Switch, Link } from 'react-router-dom';


const UnderConstruction = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-3xl opacity-50"></div>
      <div className="text-center p-6">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">We Are</h1>
        <h2 className="text-2xl font-thin text-orange-400">Currently Building This Page</h2>
      </div>
    </div>
  );
};

export default UnderConstruction;
