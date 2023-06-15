import { useContext, createContext, useState } from "react";

const KalabarsContext = createContext(null);

const KalabarsProvider = ({children}) =>{
  const [openMenu, setOpenMenu] = useState(false)
  const [totalScore, setTotalScore] = useState(0)
  const [ nowPlaying, setNowPlaying ] = useState({

  })

  return(
    <KalabarsContext.Provider value={{openMenu, setOpenMenu, setNowPlaying}}>
      {children}
    </KalabarsContext.Provider>
  )
}

export {KalabarsProvider, KalabarsContext}