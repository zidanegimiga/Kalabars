import React, { createContext, useState, useContext } from "react";
import { toast } from 'react-toastify';

const PlaylistContext = createContext(null);

export function usePlaylist() {
  return useContext(PlaylistContext);
}

export function PlaylistProvider({ children }) {
  const [playlist, setPlaylist] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

  const playAudio = (audio) => {
    setCurrentAudio(audio);
    setIsPlaying(true);
  };

  const stopAudio = () => {
    setIsPlaying(false);
  };

  const addToPlaylist = (musicData) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, musicData]);
    toast(`${musicData?.title} added to queue`, {
      theme: "dark",
      style: {
        backgroundColor: "#282828",
      },
      progressStyle: {
        backgroundColor: "#FF3354",
      },
    });
    console.log(playlist);
  };

  const removeFromPlaylist = (musicData) => {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter((music) => music.id !== musicData.id)
    );
    toast(`${musicData?.title} removed from queue`, {
      theme: "dark",
      style: {
        backgroundColor: "#282828",
      },
      progressStyle: {
        backgroundColor: "#FF3354",
      },
    });
  };

  return (
    <PlaylistContext.Provider
      value={{
        playlist,
        addToPlaylist,
        removeFromPlaylist,
        playAudio,
        stopAudio,
        isPlaying,
        currentAudio,
        setIsPlaying
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}
