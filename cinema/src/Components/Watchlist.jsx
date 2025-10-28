import React, { useEffect, useState } from "react";
import genreid from "../assets/Utility/Genre";

function Watchlist({ watchlist, setWatchlist, removeFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

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
    setGenre(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      {/* 🎬 Genre Filter — Now Fully Responsive */}
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-3 sm:gap-6 m-4 px-2 sm:px-6 overflow-x-auto scrollbar-hide w-full max-w-[1000px]">
          {genre.map((movie) => (
            <div
              key={movie}
              onClick={() => handleFilter(movie)}
              className={`flex-shrink-0 flex justify-center items-center min-w-[7rem] sm:min-w-[9rem] h-[2.6rem] sm:h-[3rem] rounded-xl font-semibold text-sm sm:text-base px-3 transition-all duration-300 cursor-pointer ${
                currGenre === movie
                  ? "bg-blue-500 text-white shadow-md scale-105"
                  : "bg-gray-400/70 text-white hover:bg-gray-500"
              }`}
            >
              {movie}
            </div>
          ))}
        </div>
      </div>

      {/* 🔍 Search Input */}
      <div className="flex justify-center my-4 px-4">
        <input
          className="h-[2.8rem] w-full sm:w-[20rem] border rounded-lg bg-gray-200 outline-none px-4 focus:ring-2 focus:ring-blue-400"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movie..."
        />
      </div>

      {/* 🎞️ Table or Card View */}
      <div className="border border-gray-200 m-4 sm:m-8 rounded-lg h-[500px] overflow-y-auto">
        {/* Table for larger screens */}
        <table className="hidden sm:table w-full text-gray-600 text-center">
          <thead className="border-b bg-gray-100 text-gray-800 font-semibold sticky top-0">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3 flex justify-center items-center">
                <div className="p-2 cursor-pointer" onClick={sortIncreasing}>
                  <i className="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div className="p-2 cursor-pointer" onClick={sortDecreasing}>
                  <i className="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th className="p-3">Popularity</th>
              <th className="p-3">Genre</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((category) =>
                currGenre === "All Genres"
                  ? true
                  : genreid[category.genre_ids[0]] === currGenre
              )
              .filter((movie) =>
                movie.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movie) => (
                <tr
                  className="border-b hover:bg-gray-50 transition-all"
                  key={movie.id}
                >
                  {/* 🎥 Responsive Image + Title */}
                  <td className="flex flex-col sm:flex-row items-center px-4 sm:px-6 py-4 text-left gap-3 sm:gap-4">
                    <img
                      className="h-[8rem] w-[100%] sm:w-[8rem] sm:h-[6rem] rounded-lg object-cover"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <div className="text-center sm:text-left font-semibold text-gray-800 text-sm sm:text-base">
                      {movie.original_title || movie.title}
                    </div>
                  </td>
                  <td className="text-sm sm:text-base">{movie.vote_average}</td>
                  <td className="text-sm sm:text-base">
                    {movie.popularity.toFixed(0)}
                  </td>
                  <td className="text-sm sm:text-base">
                    {movie.genre_ids?.map((id) => genreid[id]).join(", ")}
                  </td>
                  <td
                    onClick={() => removeFromWatchlist(movie)}
                    className="text-red-600 font-bold hover:underline cursor-pointer text-sm sm:text-base"
                  >
                    DELETE
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* 📱 Card layout for mobile */}
        <div className="sm:hidden p-4 space-y-4">
          {watchlist
            .filter((category) =>
              currGenre === "All Genres"
                ? true
                : genreid[category.genre_ids[0]] === currGenre
            )
            .filter((movie) =>
              movie.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((movie) => (
              <div
                key={movie.id}
                className="flex flex-col bg-white rounded-lg shadow p-3 border border-gray-200"
              >
                {/* 🖼️ Responsive image section */}
                <div className="flex flex-col xs:flex-row gap-3">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title}
                    className="h-[12rem] w-full xs:w-[10rem] object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-between mt-2 xs:mt-0">
                    <h2 className="font-semibold text-gray-800 text-lg leading-snug">
                      {movie.original_title || movie.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Genre: {movie.genre_ids?.map((id) => genreid[id]).join(", ")}
                    </p>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>⭐ {movie.vote_average}</span>
                      <span>🔥 {movie.popularity.toFixed(0)}</span>
                    </div>
                    <button
                      onClick={() => removeFromWatchlist(movie)}
                      className="w-full mt-3 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md text-sm font-semibold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Watchlist;
