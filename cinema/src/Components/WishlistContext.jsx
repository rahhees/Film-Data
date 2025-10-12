import React, { createContext, useState } from 'react';

export const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = (movie) => {
    setWatchlist((prev) => {
      if (prev.some((m) => m.name === movie.name)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist((prev) => prev.filter((m) => m.name !== movie.name));
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
}
