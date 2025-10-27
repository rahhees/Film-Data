import React from 'react';

function MovieCard({ poster_path, name, addWatchlist, removeFromWatchlist, watchlist, movie }) {
  function containItem(movie) {
    return watchlist.some((m) => m.id === movie.id);
  }

  return (
    <div className="flex flex-col items-center space-y-2 w-full max-w-[180px]">
      <div
        className="relative w-full aspect-[2/3] bg-center bg-cover rounded-xl"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}
      >
        <div className="absolute top-2 right-2">
          {containItem(movie) ? (
            <button
              onClick={() => removeFromWatchlist(movie)}
              className="text-red-500 text-xl hover:text-red-700 bg-white/70 rounded-full p-1"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          ) : (
            <button
              onClick={() => addWatchlist(movie)}
              className="text-blue-500 text-xl bg-white/70 rounded-full p-1"
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          )}
        </div>
      </div>

      <div className="text-blue-900 text-sm sm:text-base font-semibold text-center px-1">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
