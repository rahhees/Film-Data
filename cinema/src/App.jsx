import { lazy, Suspense, useState } from 'react'
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
      if (prev.some((m) => m.name === movie.name)) {
        toast.error(`${movie.name} is already in your watchlist!`);
        return prev;
      } else {
        toast.success(`${movie.name} added to watchlist!`);
        return [...prev, movie];
      }
    });
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist((prev) => {
      if (prev.some((m) => m.name === movie.name)) {
        toast.error(`${movie.name} removed from watchlist!`);
        return prev.filter((m) => m.name !== movie.name);
      } else {
        toast.error(`${movie.name} is not in your watchlist!`);
        return prev;
    }
});
};
console.log(watchlist)

  // const isInWatchlist = watchlist.some((m) => m.name === name);

 
  return ( 
    <>
    <Toaster position='top-right'/>
  
      <Navbar />

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
                <Movies  />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </Suspense>
 
    </>
  )
}

export default App
