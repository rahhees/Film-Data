import React, { useEffect, useState } from 'react'
import genreid from '../assets/Utility/Genre'

function Watchlist({ watchlist, setWatchlist, removeFromWatchlist }) {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState(['All Genres'])
  const [currGenre, setCurrGenre] = useState('All Genres')


  const sortIncreasing = () => {
    const increase = [...watchlist].sort((a, b) => a.vote_average - b.vote_average)
    setWatchlist(increase)
  }

  const sortDecreasing = () => {
    const decrease = [...watchlist].sort((a, b) => b.vote_average - a.vote_average)
    setWatchlist(decrease)
  }

  const handleFilter = (genre) => {
    setCurrGenre(genre)
  }

  

  useEffect(() => {
    let temp = watchlist.map((movie) => {
      return genreid[movie.genre_ids[0]]
    })
    temp = new Set(temp)
    setGenre(['All Genres', ...temp])
  }, [watchlist])


  return (
    <>
      <div className='flex justify-center flex-wrap m-4 gap-20 cursor-pointer '>
        {
          genre.map((movie) => {
            return <div onClick={() => handleFilter(movie)} className={currGenre == movie ? 'flex  justify-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold items-center mx-4 ' : "flex justify-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold items-center mx-4"}>{movie}</div>
          })
        }


      </div>
      <div className='flex justify-center my-4m overflow-x-hidden'>
        <input className='h-[3rem] w-[18rem] border rounded-lg bg-gray-200 outline-none px-4' type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Enter Film Name...' />
      </div>
      <div className='border border-gray-200 m-8 h-[500px] overflow-y-auto'>
        <table className='rounded-lg w-full text-gray-500 text-center'>
          <thead className='border-b-1'>
            <tr >
              <th>Name</th>
              <th className='flex justify-center'>
                <div className='p-2' onClick={sortIncreasing}><i class='fa-solid fa-arrow-up'></i></div>
                <div className='p-2'>Ratings</div>
                <div className='p-2' onClick={sortDecreasing}><i class='fa-solid fa-arrow-down'></i></div>
              </th>
              <th>Poplarity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {
              watchlist.filter((category) => {
                if (currGenre === "All Genres") {
                  return true
                } else {
                  return genreid[category.genre_ids[0]] == currGenre;
                }
              }).filter((movie) => {
                return movie.title.toLowerCase().includes(search.toLocaleLowerCase())

              }).map((movie) => (
                <tr className='border-b-2' key={movie.id}>
                  <td className='flex items-center px-6 py-4'>
                    <img
                      className='h-[8rem] w-[10rem] rounded-lg object-cover'
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <div className='ml-4 font-semibold text-gray-800'>
                      {movie.original_title || movie.title}
                    </div>
                  </td>
                  <td>{movie.vote_average}</td>
                  <td>{movie.popularity.toFixed(0)}</td>
                  <td>

                    {movie.genre_ids?.map(id => genreid[id]).join(", ")}</td>
                  <td
                    onClick={() => removeFromWatchlist(movie)}
                    className='text-red-700 font-bold hover:cursor-pointer'
                  >
                    DELETE
                  </td>
                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
    </>
  )
}

export default Watchlist