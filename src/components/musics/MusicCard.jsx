import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons'
import { faBackwardStep, faPlay, faRepeat, faShuffle } from '@fortawesome/free-solid-svg-icons'

const MusicCard = () => {
  return (
    
    <div className="card " style={{width: "18rem", backgroundColor: "pink", borderRadius:"18%", boxShadow:"8px 13px 7px gray, -1px -1px 9px white", border:"none"}}>
      <div className='p-14'>
        <img src="../../src/assets/music/cdDesign.jpg" className="card-img-top " 
        style={{boxShadow:"2px 4px 3px 4px rgba(0, 0, 0, 0.2)", borderRadius:"12%",border:"10px solid lightpink"}} alt="..."/>
        
      </div> 
      <div className="card-body flex justify-evenly">
        <div className="mt-2 lg:mb-0 mb-6 flex items-center justify-center">
          <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block border-4 border-double border-orange-800" 
            style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
            type="button">
            <FontAwesomeIcon icon={faRepeat} />
          </button>
          <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block border-4 border-double border-orange-800" 
            style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
            type="button">
               <FontAwesomeIcon icon={faBackwardStep} />
          </button>

          <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block border-4 border-double border-orange-800" 
            style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
            type="button">
              <FontAwesomeIcon icon={faPlay} />
          </button>

          <button className="bg-white font-normal h-8 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block border-4 border-double border-orange-800" 
            style={{boxShadow:"1px 1px 5px blue, 1px 1px 8px red"}}
            type="button">
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
}

export default MusicCard