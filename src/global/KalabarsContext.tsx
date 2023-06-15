import { useContext, createContext, useState, useEffect } from "react";

const KalabarsContext = createContext(null);

const KalabarsProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentAudioPlaying, setCurrentAudioPlaying] = useState({});
  const [audioPlaylist, setAudioPlaylist] = useState([]);

  useEffect(()=>{
    window.localStorage.setItem('audio-playlist', JSON.stringify(audioPlaylist))
  }, [])

  const handleAddToAudioPlaylist = (data) => {
    const serializedPrevPlaylist = window?.localStorage.getItem("audio-playlist");
    const previousPlaylist = JSON.parse(serializedPrevPlaylist)
    setAudioPlaylist([...previousPlaylist, data])
    window.localStorage.setItem('audio-playlist', JSON.stringify(audioPlaylist))
    console.log("Playlist: ", audioPlaylist)
  }

  const handleClearAudioPlaylist = () =>{
    window.localStorage.clear()
  }

  return (
    <KalabarsContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        currentAudioPlaying,
        setCurrentAudioPlaying,
        audioPlaylist,
        handleAddToAudioPlaylist,
        handleClearAudioPlaylist
      }}
    >
      {children}
    </KalabarsContext.Provider>
  );
};

export { KalabarsProvider, KalabarsContext };
