import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { details } from "../service";

import Header from "../components/Header";

const Details = () => {
  const params = useParams();
  const [item, setItem] = useState("");

  const getItem = async () => {
    try {
      details(params.k).then((response) => {
        setItem(response);
        console.log(response);
      });
    } catch (error) {
      console.log("Error in details page!");
    }
  };

  useEffect(() => {
    if (params.k) getItem();
  }, [params.k]);
  return (
    <>
      <Header />
      {item &&
        item.hits &&
        item.hits[params.k] && ( 
          <div className="row container product-details">
            <div className="col-md-6">
              <img
                style={{ height: "50vh", width: "35vw", marginLeft: "2vw" }}
                src={item.hits[params.k].recipe.image}
                className="card-img-top"
                alt={item.hits[params.k].recipe.label}
              />
            </div>
            <div className="col-md-6 product-details-info">
              <h1 className="text-center">Recipe-Details</h1>
              <h2 className="text-center">
                Name: {item.hits[params.k].recipe.label}
              </h2>
              <h4 className="text-center">
                Cal: {item.hits[params.k].recipe.calories}
              </h4>
              <h4 className="text-center">
                Source: {item.hits[params.k].recipe.cuisineType}
              </h4>
              <p className="text-center">
                <strong>Ingredients:</strong>

                {item.hits[params.k].recipe.ingredientLines.map((diet, ind) => (
                  <p key={ind}>{diet}</p>
                ))}
              </p>
            </div>
          </div>
        )}
    </>
  );
};

export default Details;
