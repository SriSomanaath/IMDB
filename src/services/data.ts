// IMDBsearchlist.ts
const searchIMDB = async (moviename: string): Promise<string> => {
  const url = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${moviename}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5189f7637emsh1c21f09730c9945p113d9ejsn4da5a03c0b69',
      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
    },
  };
// params.data[0]['image']
try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log("jsjsbdjb", result);
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
      'X-RapidAPI-Key': '5189f7637emsh1c21f09730c9945p113d9ejsn4da5a03c0b69',
      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log("jhjdfgajgbb", result);
    console.log("ssssssssss", result.data); // This line might cause an issue, see note below
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
      'X-RapidAPI-Key': '5189f7637emsh1c21f09730c9945p113d9ejsn4da5a03c0b69',
      'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log("gvjhlygvl", result);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch week top 10 from IMDB API');
  }
};

export { getWeekTop10 };