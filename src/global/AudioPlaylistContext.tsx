import React, { createContext, useState, useContext } from 'react';

const PlaylistContext = createContext(null);

export function usePlaylist() {
  return useContext(PlaylistContext);
}

export function PlaylistProvider({ children }) {
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (musicData) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, musicData]);
  };

  const removeFromPlaylist = (musicData) => {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter((music) => music.id !== musicData.id)
    );
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        addToPlaylist,
        removeFromPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}