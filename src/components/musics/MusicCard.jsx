import React, { useRef, useEffect } from 'react'
import { StateContextCustom } from '../../context/StateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForwardStep,
        faBackwardStep, 
        faPlay, 
        faRepeat, 
        faShuffle,
        faPause
      } from '@fortawesome/free-solid-svg-icons'

const MusicCard = () => {
  const{musics, isPlaying, setIsPlaying} = StateContextCustom(state => state)
  const audioElement = useRef(null);

  useEffect(() => {
    playPause();

  }, []);

  const playPause = () => { 
    if (isPlaying == false) {
      setIsPlaying(true);
      audioElement.current.play();
    } else {
      audioElement.current.pause();
      setIsPlaying(false);
      console.log(audioElement.current);
    }
  }

  const skipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };
  

  return (
    <>
    {musics.map(music => {
      return (

        <div className="card " key={music.id} style={{width: "18rem",  backgroundColor: "pink", borderRadius:"18%", boxShadow:"8px 13px 7px gray, -1px -1px 9px white", border:"none"}}>

          <div className='px-14 pt-14 pb-4'>
            <img src={music.img_src} className="card-img-top " 
            style={{boxShadow:"2px 4px 3px 4px rgba(0, 0, 0, 0.2)", borderRadius:"12%",border:"10px solid lightpink", height: "10rem"}} alt="..."/>
          </div> 

          <div className='text-center'>
            <h5 className=' font-bold'>{music.title}</h5>
            <p className='text-sm font-semibold text-zinc-500'>{music.artist}</p>
          </div>
          <div >
          <audio ref={audioElement} preload="none" src={music.src} />
          </div>

          {/* MusicControl */}
          <div className="card-body flex justify-evenly">
            <div className="mt-2 lg:mb-0 mb-6 flex items-center justify-center">
              
              <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block border-4 border-double border-orange-800" 
                style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
                type="button">
                <FontAwesomeIcon icon={faRepeat} />
              </button>
              
              <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block border-4 border-double border-orange-800" 
                style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
                type="button" onClick={() => skipSong(false)}>
                  <FontAwesomeIcon icon={faBackwardStep} />
              </button>

              <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block border-4 border-double border-orange-800" 
                style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
                type="button" onClick={playPause}> 
                  <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
              </button>

              <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block border-4 border-double border-orange-800" 
                style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
                type="button" onClick={() => skipSong()}>
                  <FontAwesomeIcon icon={faForwardStep} />
              </button>

              <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block border-4 border-double border-orange-800" 
                style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
                type="button">
                  <FontAwesomeIcon icon={faShuffle} />
              </button>

            </div>
          </div>
        </div>
      )
      })
    }
    </>
   
  )
}

export default MusicCard