// IMDBsearchlist.ts
const searchIMDB = async (moviename: string): Promise<string> => {
  const url = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${moviename}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8477b08720msh5b6ea6c6a4e0bc6p176943jsn96c42a4c8591',
      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data from IMDB API');
  }
};

export { searchIMDB };


// IMDBsearchFav.ts
const getFanFavorites = async (): Promise<string> => {
  const url = 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=IND';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8477b08720msh5b6ea6c6a4e0bc6p176943jsn96c42a4c8591',
      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log("jhjdfgajgbb",result);
    return result
  } catch (error) {
    console.error(error);
  }
};

export { getFanFavorites };


// getWeekTop10.ts
const getWeekTop10 = async (): Promise<string> => {
  const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '8477b08720msh5b6ea6c6a4e0bc6p176943jsn96c42a4c8591',
      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log("gvjhlygvl",result);
    return result
  } catch (error) {
    console.error(error);
  }
};

export { getWeekTop10 };