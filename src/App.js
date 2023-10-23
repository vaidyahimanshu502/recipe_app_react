
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Details from "./components/Details";
import Home from "./Home";
import Fav from "./components/Fav";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:k" element={<Details />} />
        <Route path="/fav" element={<Fav />} />
      </Routes>
    </Router>
  );
}

export default App;
