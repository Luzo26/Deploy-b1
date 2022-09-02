import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages";
import ApuntatePage from "./pages/apuntate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/apuntate" element={<ApuntatePage />} exact />
      </Routes>
    </Router>    
  );
}

export default App;
