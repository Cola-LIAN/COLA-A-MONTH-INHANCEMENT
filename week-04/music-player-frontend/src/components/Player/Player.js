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


//Component Definition
class Player extends Component {

  constructor(){
    super();
    this.state = {
      currentTime: 0,
      totalTime: 0,
      isPaused: true
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

  handleClick = (id) => {
    if(id === 'playIcon'){
      this.audio.current.play();
      this.setState({
        isPaused: this.audio.current.paused
      });
    }else if( id === 'pauseIcon'){
      this.audio.current.pause();
      this.setState({
        isPaused: this.audio.current.paused
      });
    }else if( id === 'nextIcon'){
      let newId;
      if(this.props.currentMusic.id !== 3){
        newId = this.props.currentMusic.id + 1
      }else{
        newId = 1;
      }
      
      this.audio.current.pause();
      this.props.switchMusic(newId);
      this.audio.current.addEventListener('loadedmetadata', () => {
        this.audio.current.play();
        this.setState({
          isPaused: this.audio.current.paused
        }); 
      }, false);

    }else if( id === 'previousIcon'){
      let newId;
      if(this.props.currentMusic.id !== 1){
        newId = this.props.currentMusic.id - 1
      }else{
        newId = 3;
      }

      this.audio.current.pause();
      this.props.switchMusic(newId);

      this.audio.current.addEventListener('loadedmetadata', () => {
        this.audio.current.play();
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

  handleChange = () => {
    setInterval(() => {
      this.setState(() => {
          return {currentTime: this.audio.current.currentTime}
    })}, 200)
  }

  handleMouseUp = () => {
    console.log(888)
  }

  handleMouseDown = () => {
    console.log(666)
  }


render(){
  this.audio = createRef();
  this.handleChange();
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
            <Slider id='linearProgressBar' max={this.state.totalTime} value={this.state.currentTime} onChange={this.handleChange} onMouseDown={this.handleMouseDown}/>
            <span id='timeProgress'>{this.regulateTime(this.state.currentTime)}/{this.props.currentMusic.time}</span> 
          </div>       
        </div>
      </div>
      <div className='playIcon' onClick={(e) => this.handleClick(e.target.id)}>
        <FavoriteBorderIcon id='favoriteIcon' className='icon'/>
        <SkipPreviousIcon id='previousIcon' className='icon'/>
        {
        this.state.isPaused?
        <PlayCircleFilledWhiteIcon id='playIcon' className='icon'/>
        :<PauseCircleFilledIcon id='pauseIcon' className='icon'/>
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
    switchMusic: (newId) => {dispatch(switchMusicAction(newId))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)