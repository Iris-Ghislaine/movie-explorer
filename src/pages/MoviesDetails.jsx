import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchShowById } from '../utils/api';
import { useFavorites } from '../hooks/useFavorites';

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const loadMovie = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchShowById(id);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
          Error: {error}
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          Movie not found
        </div>
      </div>
    );
  }

  const imageUrl = movie.image?.original || 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800';
  const rating = movie.rating?.average || 'N/A';
  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={imageUrl}
              alt={movie.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-2/3 p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {movie.name}
                </h1>
                <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                  <span className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {rating}
                  </span>
                  {movie.premiered && (
                    <span>{new Date(movie.premiered).getFullYear()}</span>
                  )}
                  {movie.runtime && <span>{movie.runtime} min</span>}
                </div>
              </div>

              <button
                onClick={() => toggleFavorite(movie)}
                className={`p-3 rounded-full transition-all ${
                  isFavorite(movie.id)
                    ? 'text-red-500 hover:text-red-600 bg-red-50 dark:bg-red-900/20'
                    : 'text-gray-400 hover:text-red-500 bg-gray-100 dark:bg-gray-700'
                }`}
              >
                <svg
                  className="w-8 h-8"
                  fill={isFavorite(movie.id) ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {movie.genres && movie.genres.length > 0 && (
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {movie.summary && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Overview
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {stripHtml(movie.summary)}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-6 text-sm">
              {movie.status && (
                <div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Status:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">{movie.status}</span>
                </div>
              )}
              {movie.language && (
                <div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Language:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">{movie.language}</span>
                </div>
              )}
              {movie.network && (
                <div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Network:</span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">{movie.network.name}</span>
                </div>
              )}
              {movie.officialSite && (
                <div>
                  <span className="font-semibold text-gray-900 dark:text-gray-100">Official Site:</span>
                  <a
                    href={movie.officialSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Visit
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
