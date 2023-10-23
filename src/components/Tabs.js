import React, { useState, useEffect } from "react";
import { CiPizza } from "react-icons/ci";
import {
  GiNoodles,
  GiFruitBowl,
  GiCheckMark,
  GiIceCreamCone,
} from "react-icons/gi";
import { fetchTabData } from "../service";

const Tabs = (props) => {
  const [active, setActive] = useState("Pizza");
  const [tabData, setTabData] = useState("");
  const [tabLabel] = useState([
    {
      name: "Pizza",
      icon: <CiPizza />,
      id: "e0f06a8d4769e6a9344ff766d04a206f",
    },
    {
      name: "Noodles",
      icon: <GiNoodles />,
      id: "832c96927bee97e3bb0aa7ef67d3f053",
    },
    {
      name: "Desert",
      icon: <GiFruitBowl />,
      id: "bc865476ffe2b8a03fbe9aee2f739740",
    },
    {
      name: "Ice-Cream",
      icon: <GiIceCreamCone />,
      id: "7ec8f5551e74e6050e5ca3290e4654ef",
    },
  ]);

  const handleClick = (itemName, id) => {
    setActive(itemName);
    fetchTabData(id).then((response) => {
      setTabData(response);
      props.setLoader(false);
      console.log(response)
    });
  };

  useEffect(() => {
    fetchTabData(tabLabel[0].id).then((response) => {
      setTabData(response);
      props.setLoader(false);
    });
  }, []);
  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>
      <div className="tabs">
        {tabLabel.map((item, index) => (
          <div
            onClick={() => (
              handleClick(item.name, item.id), props.setLoader(true)
            )}
            key={index}
            className={`tablist ${active === item.name ? "active" : ""}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="recipe_banner">
        {tabData !== "" && tabData.hits[0].recipe && (
          <>
            <div className="left-col">
              <span className="badge">
                {tabData.hits[0].recipe?.cuisineType[0].toUpperCase()}
              </span>
              <h1>{tabData.hits[0].recipe?.label}</h1>
              <p>
                <strong>Recipe by:</strong>
                <small>{tabData.hits[0].recipe?.source}</small>
              </p>
              <h3>Ingredients</h3>
              <div className="ingredients">
                <ul>
                  {tabData.hits[0].recipe?.ingredientLines.map((ing, index) => (
                    <li key={index}>
                      <GiCheckMark size="18px" color="#6fcb9f" />
                      &nbsp;<span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="right-col">
              <div className="image-wrapper">
                <img
                  src={tabData.hits[0].recipe?.image}
                  alt={tabData.hits[0].recipe?.label}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;

