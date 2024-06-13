import React, { useRef } from 'react';


const VideoPlayer = ({playState, setPlayState}) => {
 
     const player = useRef(null);
     const closePlayer = (e)=>{
        if(e.target===player.current){
              setPlayState(false);
        }
     }
    return (
    <div className=' w-3/5 rounded-md' ref={player}
    onClick={closePlayer}>
      <video src={'/icons/video.mp4'} autoPlay muted controls alt='' className='rounded-md'></video>
    </div>
  );
}

export default VideoPlayer;