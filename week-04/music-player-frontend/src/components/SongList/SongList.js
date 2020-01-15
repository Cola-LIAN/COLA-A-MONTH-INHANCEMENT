//External Dependencies
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

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
    <>
      <div className='songListTitle'>
        <strong>Song List</strong>
      </div>
      <ListItem title='Title' time='Time' artist='Artist' album='Album' fontSize='17px' />
      {
        wholeState.musicList.map((song) => {
        return(
         <ListItem onClick={() => handlePickMusic(song)} className={song} title={song.name} time={song.time} artist={song.artist} album={song.album} fontSize='5px'/>
        )})
      }
    </>
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