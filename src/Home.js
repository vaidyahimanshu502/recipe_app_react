import React, { useState } from "react";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import RecipeList from "./components/RecipeList";
import "./App.scss";

function Home() {
  const [loader, setLoader] = useState(true);

  return (
    <div className="main">
      <Header />
      <Tabs setLoader={setLoader} />
      <RecipeList setLoader={setLoader} />
      {loader && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default Home;
