import React, { useState, useEffect } from "react";
import { CiPizza } from "react-icons/ci";
import {
  GiNoodles,
  GiFruitBowl,
  GiCheckMark,
  GiIceCreamCone,
} from "react-icons/gi";
import { MdOutlineIcecream } from "react-icons/md";
// import { fetchTabData } from "../service";

const Tabs = (props) => {
  const [active, setActive] = useState("Pizza");
  const [tabLabel, setTabLabel] = useState([
    {
      name: "Pizza",
      icon: <CiPizza />,
      id: "e0f06a8d4769e6a9344ff766d04a206f",
    },
    {
      name: "Noodles",
      icon: <GiNoodles />,
      id: "e0f06a8d4769e6a9344ff766d04a206f",
    },
    {
      name: "Desert",
      icon: <GiFruitBowl />,
      id: "e0f06a8d4769e6a9344ff766d04a206f",
    },
    {
      name: "Ice-Cream",
      icon: <GiIceCreamCone />,
      id: "e0f06a8d4769e6a9344ff766d04a206f",
    },
  ]);

  const handleClick = (itemName, id) => {
    setActive(itemName);
  };
  return (
    <div className="container">
      <h1 className="recipeHeading">What would you like to have!</h1>
      <div className="tabs">
        {tabLabel.map((item, index) => (
          <div
            onClick={() => handleClick(item.name, item.id)}
            key={index}
            className={`tablist ${active == item.name ? "active" : ""}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </div>
      <div className="recipe_banner">
        <div className="left-col">
          <span className="badge">Italian</span>
          <h1>White Pizza</h1>
          <p>
            <strong>Recipe by:</strong>
            <small>Food52</small>
          </p>
          <h3>Ingredients</h3>
          <div className="ingredients">
            <ul>
              <li>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
              <li>
                <GiCheckMark size="18px" color="#6fcb9f" />
                &nbsp;<span>Fresh ground pepper</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-col">
          <div className="image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
