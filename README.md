# MovieExplorer - React Movie Explorer SPA

A modern, responsive single-page application built with React that allows users to explore movies and TV shows from the TVMaze API. Features include searching, filtering by genre, viewing detailed information, and managing a favorites list.

## Features

- **Browse Movies & TV Shows**: Explore a comprehensive list of entertainment content
- **Search Functionality**: Find specific movies or shows by name
- **Genre Filtering**: Filter content by categories (Drama, Comedy, Action, Thriller, etc.)
- **Detailed View**: View comprehensive information about each movie/show including ratings, genres, synopsis, and more
- **Favorites Management**: Add and remove favorites with persistent storage using localStorage
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Smooth Animations**: Enhanced user experience with hover effects and transitions

## Technologies

- **React 18**: Modern React with Hooks
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework for styling
- **TVMaze API**: External API for movie and TV show data
- **localStorage**: Browser storage for favorites persistence

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with dark mode toggle
│   ├── MovieCard.jsx       # Reusable movie card component
│   ├── SearchBar.jsx       # Search input component
│   └── CategoryFilter.jsx  # Genre filter buttons
├── pages/
│   ├── Home.jsx           # Main page with movie list
│   ├── MovieDetails.jsx   # Detailed movie information page
│   └── Favorites.jsx      # Favorites collection page
├── hooks/
│   ├── useFetchMovies.js  # Custom hook for fetching and filtering movies
│   └── useFavorites.js    # Custom hook for favorites management
├── utils/
│   └── api.js            # API utility functions
├── App.jsx               # Main app component with routing
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Iris-Ghislaine/movie-explorer
   cd project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Key Features Implemented

### React Concepts Covered

1. **JSX and Rendering**: Dynamic rendering of movie cards and content
2. **Components**: Reusable components (MovieCard, Navbar, SearchBar, CategoryFilter)
3. **React Router**: Multiple routes (/, /movie/:id, /favorites)
4. **Props**: Data and event handlers passed between components
5. **State Management**: useState for search, filters, favorites, and dark mode
6. **Event Handling**: Click handlers for favorites, search input, and filters
7. **Conditional Rendering**: "No movies found", empty favorites messages
8. **Lists and Keys**: Dynamic rendering with .map() and unique keys
9. **React Hooks**:
   - useState for state management
   - useEffect for API calls and side effects
   - Custom hooks (useFetchMovies, useFavorites)
10. **localStorage**: Persistent favorites and dark mode preference

### Bonus Features

- Smooth animations and transitions
- Responsive design with mobile-first approach
- Clean and modern UI with Tailwind CSS
- Loading states and error handling

## API Information

This application uses the [TVMaze API](https://www.tvmaze.com/api) to fetch movie and TV show data. No API key is required.

## Live Demo

https://movie-explorer-appli.netlify.app/

## Screenshots

## home

## favorite


