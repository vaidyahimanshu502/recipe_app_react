const envVar = {
  api_id: process.env.REACT_APP_APPLICATION_ID,
  api_key: process.env.REACT_APP_APPLICATION_KEY,
};

//API:::::::::-- https://api.edamam.com/api/recipes/v2?type=public&q=Pizza&app_id=67206d0a&app_key=0c1904ec80e40f3937b4237f7dab9050

export const fetchData = async (defalutQuery) => {
  const { api_id, api_key } = envVar;
  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defalutQuery}&app_id=${api_id}&app_key=${api_key}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log("Error in fetching data!");
    return error;
  }
};

export const fetchTabData = async (defaultId) => {
  const { api_id, api_key } = envVar;
  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultId}&app_id=${api_id}&app_key=${api_key}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log("Error in getting the single data!");
    return error;
  }
};
