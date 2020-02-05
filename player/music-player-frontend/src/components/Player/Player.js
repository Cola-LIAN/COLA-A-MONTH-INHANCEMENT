//External Dependencies
import React, { Component, createRef,Fragment } from 'react';
import { connect } from 'react-redux';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { Slider } from '@material-ui/core';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LoopIcon from '@material-ui/icons/Loop';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';

//Internal Dependencies
import './Player.css';
import { showMusicListAction, switchMusicAction, favoriteMusicAction} from '../../redux/actions';
import Hamburger from '../Hamburger/Hamburger.js';

//Local Variables
const playModeArray = ['loop', 'shuffle', 'singleLoop']

//Component Definition
class Player extends Component {

  constructor(){
    super();
    this.state = {
      currentTime: 0,
      totalTime: 0,
      isPaused: true,
      sliderUpdateLoopId: 0,
      favorite: false,
      playMode: playModeArray[0]
    };
    this.audio = null;
  }


  componentDidMount(){
  
    this.audio = this.audioDom.current;
    this.audio.addEventListener('loadedmetadata', () => {
      this.setState({
        totalTime: Math.ceil(this.audio.duration),
        isPaused: this.audio.paused,
        favorite: this.props.currentMusic.favorite
      }); 
    }, false);

    this.props.showMusicList();

    this.audio.addEventListener('ended', () => {
      if(this.state.playMode === 'singleLoop'){
        this.audio.play();
      }else{
        this.handleClick('nextIcon');
      }
    });


  }

//helper function 
  regulateTime = (seconds) => {
    const date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(14, 5);
  }

  produceNewSongIndex = (evtId) => {
    let newSongIndex;
    let musicListLength = this.props.musicList.length;
    let currentIndex = this.props.musicList.indexOf(this.props.currentMusic);

    if(this.state.playMode === 'loop' || this.state.playMode === 'singleLoop'){
      if(evtId === 'nextIcon'){
        currentIndex !== (musicListLength-1) ? 
        newSongIndex = currentIndex + 1 : newSongIndex = 0;
      }else if (evtId === 'previousIcon'){
        currentIndex !== 0 ?
        newSongIndex = currentIndex - 1 : newSongIndex = (musicListLength - 1);
      }
    }
    
    else if(this.state.playMode === 'shuffle'){
      newSongIndex = currentIndex;
      while(newSongIndex === currentIndex){ //Exclude current song
        newSongIndex = Math.floor(Math.random()*this.props.musicList.length);
      }
    }
    
    return newSongIndex
  }


//Slider status
  startSliderUpdateLoop = () => {
    const id = setInterval(() => {
        this.setState({currentTime: this.audio.currentTime})
    }, 1000)
    this.setState({
      sliderUpdateLoopId: id
    });
  }

  stopSliderUpdateLoop = () => {
    clearInterval(this.state.sliderUpdateLoopId); //stop loop by id
  }

  resetSliderStatus = () => {
    this.setState({currentTime: 0});
  }

  isFavoriteSong = () => {
    this.setState({favorite: this.props.currentMusic.favorite});
  }

//Player operation
  handleClick = (id) => {

  //play and pause
    if(id === 'playIcon'){
      this.switchPlayButton();
      this.audio.play();
      this.startSliderUpdateLoop();
    }else if( id === 'pauseIcon'){
      this.switchPlayButton();
      this.audio.pause();
      this.stopSliderUpdateLoop();
    }

  //Favorite songs
    else if (id === 'favoriteIcon'){
      this.props.favoriteMusic();
      this.isFavoriteSong();
    }

  //switch song
    else if( id === 'previousIcon' || id === 'nextIcon'){
      let newSongIndex = this.produceNewSongIndex(id);
      this.props.switchMusic(newSongIndex);//switch a new song by index
      this.stopSliderUpdateLoop();
      this.resetSliderStatus();
      
      //keep the play or pause status
      // if(!this.audio.paused){
        this.audio.addEventListener('loadedmetadata', () => {
          this.startSliderUpdateLoop();
          this.audio.play();
          this.isFavoriteSong();
          this.setState({
            isPaused: this.audio.paused,
          }); 
        }, false);
      // }
    } 

  //Switch play mode
    else if( id === 'loopIcon' || id === 'shuffleIcon' || id==='singleLoopIcon' ){
      let currentPlayModeIndex = playModeArray.indexOf(this.state.playMode);
      let newPlayModeIndex;
      newPlayModeIndex = currentPlayModeIndex === (playModeArray.length - 1) ? 
      0 : currentPlayModeIndex + 1

      this.setState({
        playMode: playModeArray[newPlayModeIndex]
      })
    }
  }

  handleChange = (evt, time) => {
    this.setState({currentTime: time});
  }

  handleMouseDown = () => {
    this.audio.pause();
    this.stopSliderUpdateLoop();
  }

  handleMouseUp = () => {
    this.audio.currentTime = this.state.currentTime;
    if(!this.state.isPaused){
      this.audio.play();
      this.startSliderUpdateLoop();
    }
  }

  switchPlayButton = () => {
    this.setState({
      isPaused: !this.state.isPaused   
    })
  }

  switchPlayModeComponent = () => {
    if(this.state.playMode==='shuffle'){
      return(
        <Fragment>
          <Hamburger cid='shuffleIcon'>
            <ShuffleIcon id='shuffle'/>
          </Hamburger>
        </Fragment>
      )
    }else if(this.state.playMode==='loop'){
      return(
        <Fragment>
          <Hamburger cid='shuffleIcon'>
            <LoopIcon id='Loop'/>
          </Hamburger>
        </Fragment>
      )
    }else if(this.state.playMode === 'singleLoop'){
      return(
        <Fragment>
          <Hamburger cid='singleLoopIcon'>
            <RepeatOneIcon id='singleLoop'/>
          </Hamburger>
        </Fragment>
      )
    }
  }



render(){
  this.audioDom = createRef();

  return(
    <div className='playerFrame'>
      <audio src={this.props.currentMusic.source} ref={this.audioDom} />
      <div className='songInfo'>
        <div className='songCoverContainer'>
          <div className='songCover'></div>
        </div>
        <div className='TextInfoContainer'>
          <span id='songTitle'>{this.props.currentMusic.name} -{this.props.currentMusic.artist}</span>
          <div>
            <Slider 
              id='linearProgressBar' 
              max={this.state.totalTime} 
              value={this.state.currentTime} 
              onChange={this.handleChange} 
              onMouseDown={this.handleMouseDown}
              onMouseUp={this.handleMouseUp}/>
            <span id='timeProgress'>{this.regulateTime(this.state.currentTime)}/{this.props.currentMusic.time}</span> 
          </div>       
        </div>
      </div>
      <div className='playIcon' onClick={(e) => this.handleClick(e.target.id)}>

      <div className='sideIcon'>
        <Hamburger cid='favoriteIcon'>
          <FavoriteBorderIcon id='favorite' style={{color: this.state.favorite?'red':'#000'}}/>
        </Hamburger>
      </div>

      <div className='centerIcon'>    
        <Hamburger cid='previousIcon'>
          <SkipPreviousIcon id='previous'/>
        </Hamburger>
        
        {this.state.isPaused?
          <Hamburger cid='playIcon'>
            <PlayCircleFilledWhiteIcon id='play'/>
          </Hamburger>
          :
          <Hamburger cid='pauseIcon' >
            <PauseCircleFilledIcon id='pause'/>
          </Hamburger>
        } 
       
        <Hamburger cid='nextIcon'>
          <SkipNextIcon id='next'/>
        </Hamburger>
      </div>

        <div className='sideIcon'>
          {
            this.switchPlayModeComponent()
          }
        </div>

      </div>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    currentMusic: state.currentMusic,
    musicList: state.musicList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showMusicList: () => {dispatch(showMusicListAction())},
    switchMusic: (newId) => {dispatch(switchMusicAction(newId))},
    favoriteMusic: () => {dispatch(favoriteMusicAction())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)