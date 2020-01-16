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
      timeLoop: 0,
    }
  }

  componentDidMount(){
    this.audio.current.addEventListener('loadedmetadata', () => {
      this.setState({
        totalTime: Math.ceil(this.audio.current.duration),
        isPaused: this.audio.current.paused
      }); 
    }, false);
    
    // this.audio = createRef();
    this.props.showMusicList();
  }

  handleClick = (e) => {
    let id = e.target.id;

    if(id === 'playIcon'){
      this.startLoop();
      this.setState({
        isPaused: this.audio.current.paused
      });
    }else if( id === 'pauseIcon'){
      this.stopLoop();
      this.setState({
        isPaused: this.audio.current.paused
      });
    }
    
    
    else if( id === 'nextIcon'){
      let newId;
      if(this.props.currentMusic.id !== 3){
        newId = this.props.currentMusic.id + 1
      }else{
        newId = 1;
      }
      this.stopLoop();
      this.props.switchMusic(newId);
      this.audio.current.addEventListener('loadedmetadata', () => {
        this.startLoop();
        this.setState({
          isPaused: this.audio.current.paused,  
        }); 
      }, false);
    }else if( id === 'previousIcon'){
      let newId;
      if(this.props.currentMusic.id !== 1){
        newId = this.props.currentMusic.id - 1
      }else{
        newId = 3;
      }

      this.stopLoop();
      this.props.switchMusic(newId);

      this.audio.current.addEventListener('loadedmetadata', () => {
        this.startLoop();
        this.setState({
          isPaused: this.audio.current.paused
        }); 
      }, false);
    }
  }

  regulateTime(seconds) {
    const date = new Date(null);
    date.setSeconds(seconds);
    return date.toISOString().substr(14, 5);
  }

  handleChange = (evt, time) => {
    // setInterval(() => {
    //   this.setState({currentTime: this.audio.current.currentTime})
    // }, 200)
    // console.log(evt.target);
    this.setState({currentTime: time});
  }

  handleMouseDown = () => {
    this.stopLoop();
  }

  handleMouseUp = () => {
    this.audio.current.currentTime = this.state.currentTime;
    if(!this.state.isPaused){
      this.startLoop();
    }
  }

  startLoop = () => {
    this.setState({
      timeLoop: setInterval(() => {
        this.setState({currentTime: this.audio.current.currentTime})
      }, 1000),
    });
    this.audio.current.play();
  }

  stopLoop = () => {
    clearInterval(this.state.timeLoop);
    this.audio.current.pause();
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
      <div className='playIcon' onClick={this.handleClick}>
        <FavoriteBorderIcon id='favoriteIcon' />

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
    // isPlay: state.isPlay,
    currentMusic: state.currentMusic
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showMusicList: () => {dispatch(showMusicListAction())},
    switchMusic: (newId) => {dispatch(switchMusicAction(newId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)