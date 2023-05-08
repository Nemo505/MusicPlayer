import { useState } from 'react'
import { StateContextCustom } from './../context/StateContext'
import MusicCard from './musics/MusicCard'
import NextMusicCard from './musics/NextMusicCard'

const Home = () => {
  const{musics, isPlaying, setIsPlaying, 
    currentSong,setCurrentSong, nextSong, setNextSong, setPrevSong, prevSong
  } = StateContextCustom(state => state)

  return (
    <>
      <div className='flex items-center justify-center bg-red-100 h-screen'>
        <NextMusicCard currentSong={nextSong}/>

          <MusicCard musics={musics} isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying} currentSong={currentSong}
            setCurrentSong={setCurrentSong } setNextSong={setNextSong} setPrevSong={setPrevSong}
          />
        <NextMusicCard currentSong={prevSong}/>
      </div>
    </>
  )
}

export default Home