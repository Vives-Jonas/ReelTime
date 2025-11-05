const key = process.env.EXPO_PUBLIC_API_KEY;
const url = process.env.EXPO_PUBLIC_API_URL;

let genreMap = null;

const request = async (endpoint) => {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Request failed:', endpoint, error);
    throw error; 
  }
};




export const getGenres = async () => {
  if (genreMap) return genreMap;

  const data = await request(`${url}/genre/movie/list?api_key=${key}&language=en-US`);

  genreMap = data.genres.reduce((acc, genre) => {
    acc[genre.id] = genre.name;
    return acc;
  }, {});

  return genreMap;
};

const fetchMovies = async (endpoint) => {
  const data = await request(endpoint);
  return data.results ? data.results : [];
};

const attachGenres = (movies) =>
  movies.map((movie) => ({
    ...movie,
    genres: (movie.genre_ids || []).map((id) => genreMap[id]).filter(Boolean),
  }));

export const getPopularMovies = async () => {
  if (!genreMap) await getGenres();
  const results = await fetchMovies(`${url}/movie/popular?api_key=${key}`);
  return attachGenres(results);
};

export const getTopRatedMovies = async () => {
  if (!genreMap) await getGenres();
  const results = await fetchMovies(`${url}/movie/top_rated?api_key=${key}`);
  return attachGenres(results);
};


export const getMovie = async (id) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return await request(`${url}/movie/${id}?api_key=${key}&language=en-US`);
  } catch (error) {
    console.error('Failed to fetch movie details:', error);
    throw new Error('Failed to fetch movie details');
  }
};