import React from "react";
import { useFav } from "./Context";
import { useParams } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Fav = () => {
  const [fav] = useFav();
  const params = useParams();
  const navigate = useNavigate();

  console.log("Fav Data:", fav);

  return (
    <div className="container">
      <Header />
      <button className="btn btn-warning m-5" onClick={() => navigate("/")}>
        Go-Home
      </button>
      <div className="row">
        <div className="col-md-8 m-0 p-0">
          <div className="row">
            {fav &&
              fav.length > 0 &&
              fav.length > 2 &&
              fav.map((item) => (
                <div className="row mb-2 p-2 card flex-row">
                  <div className="col-md-4">
                    <img
                      src={item.recipe.image}
                      className="card-img-top"
                      alt={item.recipe.label}
                      height="200px"
                    />
                  </div>
                  <div className="col-md-8">
                    <h4>Name: {item.recipe.label}</h4>
                  </div>
                  <div className="col-md-8">
                    <h4>Cal: {item.recipe.calories}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fav;
