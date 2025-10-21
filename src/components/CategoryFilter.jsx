const genres = [
  'All',
  'Drama',
  'Comedy',
  'Action',
  'Thriller',
  'Horror',
  'Science-Fiction',
  'Romance',
  'Fantasy',
  'Crime',
  'Adventure'
];

const CategoryFilter = ({ selectedGenre, onGenreChange }) => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Filter by Genre
      </h3>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreChange(genre === 'All' ? '' : genre)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              (genre === 'All' && selectedGenre === '') || selectedGenre === genre
                ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
