//External Dependencies
import React from 'react';

//Internal Dependencies
import './Input.css'

const Input = (props) => {

    const { inputStyle } = props;
    const { inputFrameStyle, 
            inputButtonStyle }=inputStyle;

    return (
        <div style={inputFrameStyle} class='inputFrame'>
            <input class='inputBox' ></input>
            <button style={inputButtonStyle} class='inputButton'>Add</button>
        </div>
    )
}

export default Input