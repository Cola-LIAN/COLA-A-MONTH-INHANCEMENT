//External Dependencies
import React from 'react';

//Internal Dependencies
import './Frame.css';
import Player from '../Player/Player.js';
import SongList from '../SongList/SongList.js';
import AccountInfo from '../AccountInfo/AccountInfo.js';

//Component Definition
const Frame = () => {
  return (
    <div className="frame">
      <div className='header'></div>
      <div className='body'>
        <div className="accountInfo">
          <AccountInfo />
        </div>
        <div className="songList">
          <SongList />
        </div>
      </div>
      <Player />
    </div>
  );
}

export default Frame;