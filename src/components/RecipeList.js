import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { fetchData } from "../service";

const RecipeList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("pizza");
  const [data, setData] = useState("");

  const handleSearch = async (searchTerm) => {
    fetchData(searchTerm).then((response) => {
      setData(response);
      props.setLoader(false);
    });
  };

  useEffect(() => {
    fetchData(query).then((response) => {
      setData(response);
      props.setLoader(false);
    });
  }, []);

  return (
    <div className="container">
      <div className="heading-line">
        <strong>Search Recipes</strong>
        <div className="input-wrapper">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search recipe..."
          />
          <button
            onClick={() => (handleSearch(searchTerm), props.setLoader(true))}
          >
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flexbox">
        {data &&
          data.hits.map((item, k) => (
            <div key={k} className="flexItem">
              <div className="img-wrapper">
                <img src={item.recipe.image} alt={item.recipe.label} />
              </div>
              <p>{item.recipe.label}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecipeList;
