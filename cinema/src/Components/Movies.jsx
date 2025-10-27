// import React, { useEffect, useState } from 'react'
// import MovieCard from './MovieCard'
// import axios from 'axios'
// import Pagination from './Pagination'
// import Watchlist from './Watchlist'

// function Movies({ removeFromWatchlist, addWatchlist, watchlist }) {
//     const [movies, setMovies] = useState([])
//     const [pageno, setPageno] = useState(5)



//     useEffect(() => {
//         axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6c828830dcacf5f4dee75e734dfb16fc&language=en-US&page=${pageno}`)
//             .then(function (res) {
//                 setMovies(res.data.results)
//                 console.log(res.data.results)
//             }).catch("There Be An  Error in Fetching The Data")
//     }, [pageno])

//     const handlePrev = () => {
//         if (pageno === 1) {
//             setPageno(pageno)
//         } else {
//             setPageno(pageno - 1)
//         }
//     }

//     const handleNext = () => {
//         setPageno(pageno + 1)
//     }

//     return (
//         <div className='p-5'>
//             <div className='text-2xl text-center font-bold'>Trending Movies</div>
//             <div className='flex flex-wrap justify-around p-5 gap-8'>
//                 {
//                     movies.map((moviedata) => {
//                         return <MovieCard poster_path={moviedata.poster_path} movie={moviedata} name={moviedata.original_title} addWatchlist={addWatchlist} removeFromWatchlist={removeFromWatchlist} watchlist={watchlist} />
//                     })
//                 }



//             </div>
//             <Pagination pageno={pageno} handlePrev={handlePrev} handleNext={handleNext} />
//         </div>
//     )
// }

// export default Movies




import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Pagination from './Pagination';

function Movies({ removeFromWatchlist, addWatchlist, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [pageno, setPageno] = useState(1);

useEffect(() => {
  axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=6c828830dcacf5f4dee75e734dfb16fc&language=en-US&page=${pageno}`)
    .then((res) => {
      setMovies(res.data.results.slice(0, 18)); // show only 18 instead of 20
    })
    .catch((err) => {
      console.log("There was an error fetching the data:", err);
    });
}, [pageno]);


  const handlePrev = () => {
    if (pageno > 1) {
      setPageno(pageno - 1);
    }
  };

  const handleNext = () => {
    setPageno(pageno + 1);
  };

  return (
    <div className="p-5">
      <div className="text-2xl text-center font-bold">Trending Movies</div>

      <div
        className="grid gap-8 p-5 
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
        place-items-center"
      >
        {movies.map((moviedata) => (
          <MovieCard
            key={moviedata.id}
            poster_path={moviedata.poster_path}
            movie={moviedata}
            name={moviedata.original_title}
            addWatchlist={addWatchlist}
            removeFromWatchlist={removeFromWatchlist}
            watchlist={watchlist}
          />
        ))}
      </div>

      <Pagination
        pageno={pageno}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
}

export default Movies;
