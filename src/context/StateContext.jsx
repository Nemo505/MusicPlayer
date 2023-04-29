import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [musics, setMusics] = useState([
        {
            "id": 1,
            "title": "Cupid",
            "artist": "Fifty Fifty",
            "album": " Cupido",
            "track": "Cupid",
            "year": "2023",
            "img_src": "../../src/assets/image/trackOne.jpg",
            "src": "../../src/assets/music/pastLives.mp3"
        },
        {
            "id": 2,
            "title": "Cupid",
            "artist": "Fifty Fifty",
            "album": " Cupido",
            "track": "Cupid",
            "year": "2023",
            "img_src": "../../src/assets/image/trackTwo.jpg",
            "src": "../../src/assets/music/cupidTwin.mp3"
        }
    ])
    const data = {musics, setMusics, isPlaying, setIsPlaying}
    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}
export const StateContextCustom = () => useContext(StateContext)