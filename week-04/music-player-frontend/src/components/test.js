import React, {Component, createRef} from "react";
import {Slider, Button} from "@material-ui/core";

class Test extends Component {

    state = {
        totalTime: 0,
        currentTime: 0,
        timeLoop: null,
        isPlaying: false,
    };

    componentDidMount() {
        this.audio.current.addEventListener('loadedmetadata', () => {
            this.setState({totalTime: this.audio.current.duration});
        }, false);
    }

    handleChange = (evt, currentTime) => {
        this.setState({currentTime});
    };

    handleSetTime = () => {
        this.audio.current.currentTime = this.state.currentTime;
        if (this.state.isPlaying) {
            this.audio.current.play();
            this.startLoop();
        }
    };

    handlePlay = () => {
        if (!this.state.isPlaying) {
            this.startLoop();
            this.setState({isPlaying: true});
            this.audio.current.play();
        } else {
            clearInterval(this.state.timeLoop);
            this.setState({isPlaying: false});
            this.audio.current.pause();
        }
    };

    startLoop = () => {
        this.setState({
            timeLoop: setInterval(() => {
                this.setState((pre) => {
                    return {currentTime: this.audio.current.currentTime}
                })
            }, 200),
        });
    };

    handleMouseDown = () => {
        this.audio.current.pause();
        clearInterval(this.state.timeLoop);
    };

    secondsToTime(seconds) {
        const date = new Date(null);
        date.setSeconds(seconds);
        return date.toISOString().substr(11, 8);
    }

    render() {
        this.audio = createRef();
        return <div>
            <audio ref={this.audio} src='http://www.ik767.com/upload/dance/20171015/623C6A4487449FDF7949922ECCFDDEA2.mp3' />
            <Button color='secondary' onClick={this.handlePlay}>{this.state.isPlaying ? 'stop' : 'play'}</Button>
            <span>{this.secondsToTime(this.state.currentTime)}</span>
            <Slider value={this.state.currentTime} onChange={this.handleChange} onMouseDown={this.handleMouseDown} onMouseUp={this.handleSetTime} max={this.state.totalTime} />
            <span>{this.secondsToTime(this.state.totalTime)}</span>
        </div>
    }
}

export default Test;
