import { useState, useContext, createContext, useEffect } from "react";

const FavContext = createContext();

const FavProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  // Logic for storing items into state
  useEffect(() => {
    let existingItems = localStorage.getItem("fav");
    if (existingItems) setFav(JSON.parse(existingItems));
  }, []);

  return (
    <FavContext.Provider value={[fav, setFav]}>
      {children}
    </FavContext.Provider>
  );
};

// creating custom hook
const useFav = () => useContext(FavContext);

export { useFav, FavProvider };
