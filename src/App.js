import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import UnderConstruction from './components/loading_page/Loading.jsx';
import Main from './components/landing_page/main.jsx'

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<Main />} />
          <Route path="/under_construction" element={<UnderConstruction />} />
        </Routes>
    </Router>
  );
}

export default App;
