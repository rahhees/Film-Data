import { lazy, Suspense, useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Loading from './assets/Trailloading.gif'
import toast, { Toaster } from 'react-hot-toast'


// Lazy load heavy components
const Banner = lazy(() => import('./Components/Banner'))
const Movies = lazy(() => import('./Components/Movies'))
const Watchlist = lazy(() => import('./Components/Watchlist'))

function App() {
  const [watchlist, setWatchlist] = useState([]);






  const addWatchlist = (movie) => {
    setWatchlist((prev) => {
      if (!prev.some((item) => item.id === movie.id)) {
        const updated = [...prev, movie];
        localStorage.setItem('moviedata', JSON.stringify(updated));
         toast.success(`${movie.title} added to watchlist 🎬`)
        return updated;
      }
      toast.error(`${movie.title} is already in watchlist ⚠️`)
      return prev;
    });
  };


  useEffect(() => {
    const result = localStorage.getItem('moviedata')
    if (!result) {
      return
    }
    setWatchlist(JSON.parse(result))
  }, [])

  const removeFromWatchlist = (movie) => {
    setWatchlist((prev) => prev.filter((item) => item.id !== movie.id));
      toast.success(`${movie.title} removed from watchlist ❌`);
  };
  console.log(watchlist)

  // const isInWatchlist = watchlist.some((m) => m.name === name);


  return (
    <>
      <Toaster position='top-right' />

      <Navbar watchlistCount={watchlist.length} />

      {/* Suspense will show a fallback while lazy components load */}
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen bg-white">
            <img src={Loading} alt="Loading..." className="w-[120px]" />
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies watchlist={watchlist} addWatchlist={addWatchlist} removeFromWatchlist={removeFromWatchlist} />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                removeFromWatchlist={removeFromWatchlist} setWatchlist={setWatchlist}
              />
            }
          />        </Routes>
      </Suspense>

    </>
  )
}

export default App
