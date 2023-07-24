import React, { createContext, useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";

const PlaylistContext = createContext(null);
const LOCAL_STORAGE_KEY = "watchlist";

export function usePlaylist() {
  return useContext(PlaylistContext);
}

export function PlaylistProvider({ children }) {
  const [playlist, setPlaylist] = useState([]);
  const [videoWatchlist, setVideoWatchlist] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

  useEffect(() => {
    const storedPlaylist = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedPlaylist) {
      setVideoWatchlist(JSON.parse(storedPlaylist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(videoWatchlist));
  }, [videoWatchlist]);

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

  const addToWatchlist = (videoData) => {
    setVideoWatchlist((prevWatchlist) => [...prevWatchlist, videoData]);
    toast(`${videoData?.title} added to queue`, {
      theme: "dark",
      style: {
        backgroundColor: "#282828",
      },
      progressStyle: {
        backgroundColor: "#FF3354",
      },
    });
    console.log(videoWatchlist);
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
        videoWatchlist,
        addToPlaylist,
        addToWatchlist,
        removeFromPlaylist,
        playAudio,
        stopAudio,
        setIsPlaying,
        isPlaying,
        currentAudio,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
}
