//External Dependencies
import React from 'react';

//Internal Dependencies
import './ListItem.css';


//Component Definition
const ListItem = (props) => {
  const { song, onClick, fontSize } = props;
  const { name, artist, album, time} = song;

  return (
    <div className='listItem' style={{fontSize: fontSize}} onClick={onClick}>
      <div className='container titleContainer' >
        {name}
      </div>
      <div className='container artistContainer' >
        {artist}
      </div>
      <div className='container albumContainer'>
        {album}
      </div>
      <div className='container timeContainer'>
        {time}
      </div>
    </div>
  )
}

export default ListItem