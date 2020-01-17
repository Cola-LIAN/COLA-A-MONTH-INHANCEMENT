//External Dependencies
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

//Local Variables
const initMusicList = [
  {
    name: '蝴蝶与蓝',
    artist: '吴莉',
    source: './蝴蝶与蓝.mp3',
    time: '4:42'
  },
  {
    name: '你瞒我瞒',
    artist: '陈柏宇',
    source: './你瞒我瞒.mp3',
    time: '3:59'
  }
]

//Component Definition
const MusicPlayer = () =>{
  return(
    <div>
      <ReactAudioPlayer />
    </div>
  )
}


export default MusicPlayer