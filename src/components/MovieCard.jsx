import { Link } from 'react-router-dom';

const MovieCard = ({ movie, isFavorite, onToggleFavorite }) => {
  const imageUrl = movie.image?.medium || 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=300';

  const rating = movie.rating?.average || 'N/A';
  const genres = movie.genres?.slice(0, 2).join(', ') || 'Unknown';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <Link to={`/movie/${movie.id}`}>
        <div className="relative h-96 overflow-hidden">
          <img
            src={imageUrl}
            alt={movie.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md font-bold text-sm">
            {rating}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/movie/${movie.id}`}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2 truncate hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {movie.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {genres}
        </p>

        <div className="flex justify-between items-center">
          <Link
            to={`/movie/${movie.id}`}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
          >
            View Details
          </Link>

          <button
            onClick={() => onToggleFavorite(movie)}
            className={`p-2 rounded-full transition-all ${
              isFavorite
                ? 'text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20'
                : 'text-gray-400 hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <svg
              className="w-6 h-6"
              fill={isFavorite ? 'currentColor' : 'none'}
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
      </div>
    </div>
  );
};

export default MovieCard;
