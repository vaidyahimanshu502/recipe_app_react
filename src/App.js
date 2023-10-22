import React, { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import RecipeList from "./components/RecipeList";
import "./App.scss";

function App() {
  return (
    <div className="main">
      <Header />
      <Tabs />
      <RecipeList />
    </div>
  );
}

export default App;
