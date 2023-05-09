import React, { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForwardStep,
        faBackwardStep, 
        faPlay, 
        faRepeat, 
        faShuffle,
        faPause
      } from '@fortawesome/free-solid-svg-icons'


const MusicCard = ({ musics, isPlaying, 
                    setIsPlaying, currentSong, 
                    setCurrentSong, setNextSong, 
                    setPrevSong}) => {
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

  const skipBack = () => {
    const musicsIndex = musics.findIndex(x => x.id == currentSong.id);
    if (musicsIndex == 0) {
      setCurrentSong(musics[musics.length - 1]);
      setPrevSong(musics[musics.length - 2]);
      setNextSong(musics[0]);
      
    } else {
  
      setCurrentSong(musics[musicsIndex - 1]);
      if (currentSong.id == 2) {
        setPrevSong(musics[currentSong.id]);
        if (currentSong.id == 1) {
          setNextSong(musics[musicsIndex - 2])
        }else{
          setNextSong(musics[musicsIndex])
        }
      }else{
        setPrevSong(musics[musicsIndex - 2]);
        setNextSong(musics[musicsIndex])
      }
    }
  };

  const skipForward = () => {
    const musicsIndex = musics.findIndex(x => x.id == currentSong.id);
    if (musicsIndex == musics.length - 1) {
      setCurrentSong(musics[0]); 
      setPrevSong(musics[musics.length - 1]); 
      setNextSong(musics[1]) 
      console.log("he");    
    } else {
      setCurrentSong(musics[musicsIndex + 1]);
      setPrevSong(musics[musicsIndex]);
      if (musicsIndex == musics.length - 2) {
        setNextSong(musics[0]);
      }else{
        setNextSong(musics[musicsIndex + 2]) 
      }
    }
  };
  

  return (
    <>
          <div className="card " key={currentSong.id} 
          style={{width: "18rem", 
           backgroundColor: "pink", 
           borderRadius:"18%", 
           boxShadow:"-1px -1px 9px lightblue, 0px 30px 40px -25px rgba(0, 0, 0, 1)", 
           border:"none"}}>

            <div className='px-14 pt-14 pb-4'>
              <img src={currentSong.img_src} className="card-img-top " 
              style={{boxShadow:"2px 4px 3px 4px rgba(0, 0, 0, 0.2)", borderRadius:"12%",border:"10px solid lightpink", height: "10rem"}} alt="..."/>
            </div> 

            <div className='text-center'>
              <h5 className=' font-bold'>{currentSong.title}</h5>
              <p className='text-sm font-semibold text-zinc-500'>{currentSong.artist}</p>
            </div>
            <div >
              <audio ref={audioElement} preload="none" src={currentSong.src} />
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
                  type="button" onClick={() => skipBack()}>
                    <FontAwesomeIcon icon={faBackwardStep} />
                </button>

                <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block border-4 border-double border-orange-800" 
                  style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
                  type="button" onClick={playPause}> 
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </button>

                <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block border-4 border-double border-orange-800" 
                  style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
                  type="button" onClick={() => skipForward()}>
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
     
    </>
   
  )
}

export default MusicCard