   
    const key = 'dc8156ce55167d01eef861adf0e52076';
    const url = 'https://api.themoviedb.org/3';

    let genreMap = null;
    
    export const getGenres = async () => {
      if (genreMap) return genreMap;
      const response = await fetch(`${url}/genre/movie/list?api_key=${key}&language=en-US`);
      const data = await response.json();
      genreMap = data.genres.reduce((acc, genre) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});
      return genreMap;
    };

    

    const fetchMovies = async (endpoint) => {

        const response = await fetch(endpoint);
        const data = await response.json();
        return data.results || [];
    };

    export const getPopularMovies = async () => {        
        if (!genreMap) await getGenres();
        const results = await fetchMovies(`${url}/movie/popular?api_key=${key}`);
        return results.map(movie => ({
                    ...movie,
                genres: (movie.genre_ids || []).map(id => genreMap[id]).filter(Boolean)
            }));
    };

    export const getTopRatedMovies = async () => {
        if (!genreMap) await getGenres();
        const results = await fetchMovies(`${url}/movie/top_rated?api_key=${key}`);
        return results.map(movie => ({
                    ...movie,
                genres: (movie.genre_ids || []).map(id => genreMap[id]).filter(Boolean)
            }));
    };

    export const getMovie = async (id) => {
        const result = await fetch(`${url}/movie/${id}?api_key=${key}`);
        return await result.json();
    };