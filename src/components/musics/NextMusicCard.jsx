import React, { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForwardStep,
        faBackwardStep, 
        faPlay, 
        faRepeat, 
        faShuffle,
        faPause
      } from '@fortawesome/free-solid-svg-icons'

const NextMusicCard = ({currentSong}) => {

  return (

    <div>
        <div className="card " key={currentSong.id} style={{width: "16rem",  backgroundColor: "pink", borderRadius:"18%", boxShadow:"8px 13px 7px gray, -1px -1px 9px white", border:"none"}}>

            <div className='px-10 pt-8 pb-2'>
                <img src={currentSong.img_src} className="card-img-top " 
                style={{boxShadow:"2px 4px 3px 4px rgba(0, 0, 0, 0.2)", borderRadius:"12%",border:"10px solid lightpink", height: "10rem"}} alt="..."/>
            </div> 

            <div className='text-center'>
                <h5 className=' font-bold'>{currentSong.title}</h5>
                <p className='text-sm font-semibold text-zinc-500'>{currentSong.artist}</p>
            </div>

    {/* MusicControl */}
            <div className="card-body flex justify-evenly">
                <div className="mt-2 lg:mb-0 mb-6 flex items-center justify-center">
                    
                    <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-1 inline-block border-4 border-double border-orange-800" 
                    style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
                    type="button">
                    <FontAwesomeIcon icon={faRepeat} />
                    </button>
                    
                    <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-1 inline-block border-4 border-double border-orange-800" 
                    style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
                    type="button" >
                        <FontAwesomeIcon icon={faBackwardStep} />
                    </button>

                    <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-1 inline-block border-4 border-double border-orange-800" 
                    style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
                    type="button"> 
                        <FontAwesomeIcon icon={faPlay} />
                    </button>

                    <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-1 inline-block border-4 border-double border-orange-800" 
                    style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
                    type="button" >
                        <FontAwesomeIcon icon={faForwardStep} />
                    </button>

                    <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-1 inline-block border-4 border-double border-orange-800" 
                    style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
                    type="button">
                        <FontAwesomeIcon icon={faShuffle} />
                    </button>

                </div>
            </div>

        </div>
    </div>

  )
}

export default NextMusicCard