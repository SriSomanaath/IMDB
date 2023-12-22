// IMDBsearchlist.ts
const searchIMDB = async (moviename: string): Promise<string> => {
  const url = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${moviename}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '06dc09c8a2msh41995ece2c2c3dep16114fjsnb0d714cbc4fb',
      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
    },
  };
// params.data[0]['image']
try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log("DG:searchIMDB data", result);
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
      'X-RapidAPI-Key': '06dc09c8a2msh41995ece2c2c3dep16114fjsnb0d714cbc4fb',
      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log("DG:getFanFavorites data", result);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch fan favorites from IMDB API');
  }
};

export { getFanFavorites };


// getWeekTop10.ts
const getWeekTop10 = async (): Promise<string> => {
  const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '06dc09c8a2msh41995ece2c2c3dep16114fjsnb0d714cbc4fb',
      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log("DG:getWeekTop10 data", result);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch week top 10 from IMDB API');
  }
};

export { getWeekTop10 };