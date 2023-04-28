import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {

    const [musics,setMusics] = useState([
        {
            "title": "Cupid",
            "artist": "Fifty Fifty",
            "album": " Cupido",
            "track": "Cupid",
            "year": "2023",
            "img_src": "./.jpg",
            "src": "./.mp3"
        },
        {
            "title": "Cupid",
            "artist": "Fifty Fifty",
            "album": " Cupido",
            "track": "Cupid",
            "year": "2023",
            "img_src": "./.jpg",
            "src": "./.mp3"
        }
    ])
    const data = {musics, setMusics}
    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}