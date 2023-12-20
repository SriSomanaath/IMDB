const IMDBsearchlist = async (moviename): Promise<string> => {
    const url = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${moviename}`;
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5811369c61msh422c3eb262c22c4p1943b9jsne7dc9874dd46',
        'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
      }
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
  
  export default IMDBsearchlist;
  