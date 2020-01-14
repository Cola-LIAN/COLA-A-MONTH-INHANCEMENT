//External Dependencies
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { LinearProgress, Slider } from '@material-ui/core';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


//Internal Dependencies
import './Player.css';
// import music from '../music/蝴蝶与蓝.mp3';
// import music from '../music/你瞒我瞒.mp3';
import { showMusicListAction, playAndPlauseAction, switchMusicAction, switchMusic } from '../../redux/actions';


//Component Definition
class Player extends Component {

  constructor(){
    super();
    this.state={
      totalTime: 0,
      currentTime: 0,
      timeLoop: null,
    }
  }

  componentDidMount(){
    this.audio.current.addEventListener('loadedmetadata', () => {
      // this.setState({totalTime: this.audio.current.duration});
      console.log(this.audio.current.duration);
  }, false);
    // this.audio = createRef();
    this.props.showMusicList();
    
  }

  handleClick = (id) => {
    console.log(id);
    if(id === 'playIcon'){
      console.log(this.audio.current);

      (async () => {
        try {
          console.log(this.audio.src)
        await this.audio.current.play();
        } catch(e) {
          console.log(this.audio.src);
        }
      })()
      this.props.playAndPauseMusic();
    }else if( id === 'pauseIcon'){
      this.audio.current.pause();
      this.props.playAndPauseMusic();
    }

    else if( id === 'nextIcon'){
      // console.log(this.props.currentMusic.id);
      let newId = (this.props.currentMusic.id===1)? 2:1;
      this.audio.current.pause();
      this.props.switchMusic(newId);
    }
    else if( id === 'previousIcon'){
      // console.log(this.props.currentMusic.id);
      // let newId = this.props.currentMusic.id - 1;
      let newId = (this.props.currentMusic.id === 1)? 2:1;
      this.audio.current.pause();
      this.props.switchMusic(newId);
    }
  }


render(){
  this.audio = createRef();
  
  return(
    <div className='playerFrame'>
      <audio src={this.props.currentMusic.source} ref={this.audio} />
      <div className='songInfo'>
        <div className='songCoverContainer'>
          <div className='songCover'></div>
        </div>
        <div className='TextInfoContainer'>
          <span id='songTitle'>{this.props.currentMusic.name} -{this.props.currentMusic.artist}</span>
          <div>
            <Slider value={60} id='linearProgressBar'/>
            {/* <LinearProgress variant="determinate" id='linearProgressBar' value={60}/> */}
            <span id='timeProgress'>0:00/{this.props.currentMusic.time}</span> 
          </div>       
        </div>
      </div>
      <div className='playIcon' onClick={(e) => this.handleClick(e.target.id)}>
        <FavoriteBorderIcon id='favoriteIcon' className='icon'/>
        <SkipPreviousIcon id='previousIcon' className='icon'/>
        {
        // this.audio.paused?
        this.props.isPlay?
        <PauseCircleFilledIcon id='pauseIcon' className='icon'/>
        :<PlayCircleFilledWhiteIcon id='playIcon' className='icon'/>
        } 
        <SkipNextIcon id='nextIcon' className='icon'/>
      </div>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    isPlay: state.isPlay,
    currentMusic: state.currentMusic
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showMusicList: () => {dispatch(showMusicListAction())},
    playAndPauseMusic: () => {dispatch(playAndPlauseAction())},
    switchMusic: (newId) => {dispatch(switchMusicAction(newId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)