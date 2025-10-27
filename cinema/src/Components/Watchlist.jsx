import React, { useEffect, useState } from 'react';
import genreid from '../assets/Utility/Genre';

function Watchlist({ watchlist, setWatchlist, removeFromWatchlist }) {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState(['All Genres']);
  const [currGenre, setCurrGenre] = useState('All Genres');

  const sortIncreasing = () => {
    const increase = [...watchlist].sort((a, b) => a.vote_average - b.vote_average);
    setWatchlist(increase);
  };

  const sortDecreasing = () => {
    const decrease = [...watchlist].sort((a, b) => b.vote_average - a.vote_average);
    setWatchlist(decrease);
  };

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  useEffect(() => {
    let temp = watchlist.map((movie) => genreid[movie.genre_ids[0]]);
    temp = new Set(temp);
    setGenre(['All Genres', ...temp]);
  }, [watchlist]);

  return (
    <>
      {/* ✅ Genre Buttons (Horizontal Scroll on Mobile) */}
      <div className="flex justify-center flex-wrap gap-4 p-4 overflow-x-auto">
        {genre.map((movie) => (
          <div
            key={movie}
            onClick={() => handleFilter(movie)}
            className={`flex justify-center h-[3rem] w-[9rem] rounded-xl font-bold items-center cursor-pointer transition-all
              ${
                currGenre === movie
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
          >
            {movie}
          </div>
        ))}
      </div>

      {/* ✅ Search Bar */}
      <div className="flex justify-center my-4 px-4">
        <input
          className="h-[3rem] w-full max-w-[22rem] border rounded-lg bg-gray-200 outline-none px-4"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter Film Name..."
        />
      </div>

      {/* ✅ Responsive Table Container */}
      <div className="border border-gray-200 m-4 h-[500px] overflow-y-auto overflow-x-auto rounded-lg">
        <table className="min-w-full text-gray-600 text-center">
          <thead className="sticky top-0 bg-gray-100 text-sm md:text-base">
            <tr>
              <th className="py-2 px-2">Name</th>
              <th className="py-2 px-2">
                <div className="flex items-center justify-center gap-2">
                  <i className="fa-solid fa-arrow-up cursor-pointer" onClick={sortIncreasing}></i>
                  Ratings
                  <i className="fa-solid fa-arrow-down cursor-pointer" onClick={sortDecreasing}></i>
                </div>
              </th>
              <th className="py-2 px-2">Popularity</th>
              <th className="py-2 px-2">Genre</th>
              <th className="py-2 px-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((category) => {
                if (currGenre === 'All Genres') return true;
                return genreid[category.genre_ids[0]] === currGenre;
              })
              .filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movie) => (
                <tr className="border-b" key={movie.id}>
                  <td className="flex items-center px-4 py-2">
                    <img
                      className="h-[6rem] w-[8rem] rounded-lg object-cover"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <div className="ml-3 font-semibold text-gray-800 text-sm md:text-base">
                      {movie.original_title || movie.title}
                    </div>
                  </td>
                  <td className="px-2 py-2 text-sm md:text-base">{movie.vote_average}</td>
                  <td className="px-2 py-2 text-sm md:text-base">{movie.popularity.toFixed(0)}</td>
                  <td className="px-2 py-2 text-sm md:text-base">
                    {movie.genre_ids?.map((id) => genreid[id]).join(', ')}
                  </td>
                  <td
                    onClick={() => removeFromWatchlist(movie)}
                    className="text-red-600 font-bold cursor-pointer px-2 py-2"
                  >
                    DELETE
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
