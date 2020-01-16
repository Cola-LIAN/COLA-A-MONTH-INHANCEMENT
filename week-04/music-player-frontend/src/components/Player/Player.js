//External Dependencies
import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { Slider } from '@material-ui/core';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


//Internal Dependencies
import './Player.css';
import { showMusicListAction, switchMusicAction} from '../../redux/actions';
import Hamburger from '../Hamburger/Hamburger.js';

//Component Definition
class Player extends Component {

  constructor(){
    super();
    this.state = {
      currentTime: 0,
      totalTime: 0,
      isPaused: true,
      sliderUpdateLoopId: 0,
      favoriteIconColor: '#000'
    };
    this.audio = null;
  }

  componentDidMount(){
    this.audio = this.audioDom.current;
    this.audio.addEventListener('loadedmetadata', () => {
      this.setState({
        totalTime: Math.ceil(this.audio.duration),
        isPaused: this.audio.paused
      }); 
    }, false);

    this.props.showMusicList();
    this.audio.addEventListener('ended', () => {
      this.handleClick('nextIcon');
    });
  }

//helper function 
  regulateTime = (seconds) => {
    const date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(14, 5);
  }

  produceNewSongId = (evtId) => {
    let newSongId;
    if(evtId === 'nextIcon'){
      this.props.currentMusic.id !== this.props.musicListLength ? 
      newSongId = this.props.currentMusic.id + 1 : newSongId = 1;
    }else if (evtId === 'previousIcon'){
      this.props.currentMusic.id !== 1 ?
      newSongId = this.props.currentMusic.id - 1 : newSongId = this.props.musicListLength;
    }
    return newSongId
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
    clearInterval(this.state.timeLoop); //stop loop by id
  }

  resetSliderStatus = () => {
    this.setState({currentTime: 0});
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

  //switch song
    else if( id === 'previousIcon' || id === 'nextIcon'){
      let newSongId = this.produceNewSongId(id);
      this.props.switchMusic(newSongId);//switch a new song by id
      this.stopSliderUpdateLoop();
      this.resetSliderStatus();

      //keep the play or pause status
      console.log(this.audio.paused)
      if(!this.audio.paused){
        this.audio.addEventListener('loadedmetadata', () => {
          this.startSliderUpdateLoop();
          this.audio.play();
          this.setState({
            isPaused: this.audio.paused
          }); 
        }, false);
      }
    } 

  //Favorite songs
    else if ( id === 'favoriteIcon'){
      this.setState({
        favoriteIconColor: this.state.favoriteIconColor ==='red'?'#000':'red'
      })
    }
  }

  handleChange = (evt, time) => {
    this.setState({currentTime: time});
  }

  handleMouseDown = () => {
    this.stopSliderUpdateLoop();
    this.audio.pause();
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
        <FavoriteBorderIcon id='favoriteIcon' style={{color: this.state.favoriteIconColor}}/>

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
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    currentMusic: state.currentMusic,
    musicListLength: state.musicList.length
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showMusicList: () => {dispatch(showMusicListAction())},
    switchMusic: (newId) => {dispatch(switchMusicAction(newId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)