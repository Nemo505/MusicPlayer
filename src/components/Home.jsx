import { useState } from 'react'
import { StateContextCustom } from './../context/StateContext'
import MusicCard from './musics/MusicCard'
import NextMusicCard from './musics/NextMusicCard'
import "../index.css"

const Home = () => {

 

  const{musics, isPlaying, setIsPlaying, 
    currentSong,setCurrentSong, nextSong, setNextSong, setPrevSong, prevSong
  } = StateContextCustom(state => state)

  return (

      <div className='flex items-center justify-evenly bg-red-100 h-screen'>
        <div className=' opacity-50 reflect' style={{display:'block'}} >
          <NextMusicCard currentSong={prevSong}/>
        </div>

        <div className=''>
              <MusicCard musics={musics} isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} currentSong={currentSong}
                setCurrentSong={setCurrentSong } setNextSong={setNextSong} setPrevSong={setPrevSong}
              />
        </div>

          <div className='opacity-50 reflect' style={{display:'block'}}>
            <NextMusicCard currentSong={nextSong}/>
          </div>
      </div>
  )
}

export default Home