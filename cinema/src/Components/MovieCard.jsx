import React, { useState } from 'react';
import toast from 'react-hot-toast';

function MovieCard({ poster_path, name,addWatchlist,removeFromWatchlist}) {


  return (
    <div className="flex flex-col items-center space-y-2">
      <div
        className="relative h-[40vh] w-[200px] bg-center bg-cover rounded-xl"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}
      >
        <div className="absolute top-2 right-2">
          {isInWatchlist ? (
            <button
              onClick={() => removeFromWatchlist({ poster_path, name })}
            
              className="text-red-500 text-xl hover:text-red-700 bg-white/70 rounded-full p-1"
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          ) : (
            <button
              onClick={() => addWatchlist({ poster_path, name })}
              className="text-blue-500 text-xl bg-white/70 rounded-full p-1"
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          )}
        </div>
      </div>

      <div className="text-blue-900 text-lg font-semibold text-center w-[200px]">{name}</div>
    </div>
  );
}

export default MovieCard;
