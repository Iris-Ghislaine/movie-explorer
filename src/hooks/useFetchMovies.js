import { useState, useEffect } from 'react';
import { fetchShows, searchShows } from '../utils/api';

export const useFetchMovies = (searchQuery = '', selectedGenre = '') => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        let data;
        if (searchQuery.trim()) {
          data = await searchShows(searchQuery);
        } else {
          data = await fetchShows();
        }

        if (selectedGenre) {
          data = data.filter(movie =>
            movie.genres && movie.genres.includes(selectedGenre)
          );
        }

        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [searchQuery, selectedGenre]);

  return { movies, loading, error };
};
