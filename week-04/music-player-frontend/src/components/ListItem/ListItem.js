//External Dependencies
import React from 'react';

//Internal Dependencies
import './ListItem.css';
import Test from '../test';

//Component Definition
const ListItem = (props) => {
  const {title, artist, album, time, fontSize, onClick } = props;


  return (
    <div className='listItem' style={{fontSize: fontSize}} onClick={onClick}>
      <div className='container titleContainer' >
        {title}
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