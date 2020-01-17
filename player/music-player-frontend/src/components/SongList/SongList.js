//External Dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import {}

//Internal Dependencies
import './SongList.css';
import ListItem from '../ListItem/ListItem.js';
import { showMusicListAction, pickMusicAction} from '../../redux/actions';

//Component Definition
const SongList = (props) => {

  const {wholeState, showMusicList, pickMusic} = props;
  useEffect(showMusicList, []);

  const handlePickMusic = (item) => {
    pickMusic(item);
  }

  return (
    <React.Fragment>
      <div className='songListTitle'>
        <strong>Song List</strong>
      </div>
      <ListItem 
        song={{
          name: 'Name',
          time: 'Time',
          artist: 'Artist',
          album: 'Album'
        }}
       fontSize='17px'/>  
      {
        wholeState.musicList.map((song, index) => {
        return(
        <ListItem
          key={index}
          className={song}
          song={song}
          fontSize='5px'
          onClick={() => handlePickMusic(song)} 
          />
         )})
      }
    </React.Fragment>
  );
}


const mapStateToProps = state => {
  return {
    wholeState: state
  }
}

const mapDispatchToProps = dispatch => {
  return{
    showMusicList: () => {dispatch(showMusicListAction())},
    pickMusic: (item) => {dispatch(pickMusicAction(item))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);