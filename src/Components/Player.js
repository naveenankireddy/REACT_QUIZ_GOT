import React, { useEffect, useState } from "react";
import soundTrack from '../soundTrack/Opening_Credits___Game_of_Thrones___Season_8__HBO_(256k).mp3'
import { Howl, Howler } from "howler";

function Player() {
  const sound = new Howl({
    src: soundTrack,
  });
  const [playing,setPlaying]=useState(true)

  
  useEffect(() => {
    console.log("In useEffect");
    if(playing){
      sound.play();
      Howler.volume(0.9);
    }else{
      sound.pause()
    }

  }, [sound]);

  
  return <div>
    <button onClick={()=>setPlaying(!playing)}>hiiii</button>
  </div>;
}

export default Player;