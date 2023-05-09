import { createContext, useContext, useState, useEffect } from "react";
import trackOne from "../assets/image/trackOne.jpg";
import trackTwo from "../assets/image/trackTwo.jpg";
import trackThree from "../assets/image/trackThree.jpg";


const StateContext = createContext();

export const StateContextProvider = ({children}) => {

    const [isPlaying, setIsPlaying] = useState(true);
    const [musics, setMusics] = useState([
        {
            "id": 1,
            "title": "Cupid",
            "artist": "Fifty Fifty",
            "album": " Cupido",
            "track": "Cupid",
            "year": "2023",
            "img_src": {trackOne},
            "src": "/assets/music/pastLives.mp3"
        },
        {
            "id": 2,
            "title": "Past Lives",
            "artist": "desf",
            "album": " Promise",
            "track": "Past Lives",
            "year": "2023",
            "img_src": {trackTwo},
            "src": "/assets/music/cupidTwin.mp3"
        },
        {
            "id": 3,
            "title": "Sour Grapes",
            "artist": "le sserafim",
            "album": " Promise",
            "track": "Sour Grapes",
            "year": "2023",
            "img_src": {trackThree},
            "src": "/assets/music/sourGrapes.mp3"
        }
    ])
    const [currentSong, setCurrentSong] = useState(musics[0]);
    const [nextSong,setNextSong] = useState(currentSong.id == musics.length - 1 ? musics[1] :musics[currentSong.id]);
    const [prevSong,setPrevSong] = useState(currentSong.id == 1 ? musics[musics.length - 1] : musics[currentSong.id - 2]);

    console.log(prevSong, currentSong, nextSong);
    const data = {musics, setMusics, isPlaying, setIsPlaying, currentSong, setCurrentSong, nextSong, setNextSong, prevSong, setPrevSong};

    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}
export const StateContextCustom = () => useContext(StateContext)