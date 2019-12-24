//External Dependencies
import React from 'react';


const Input = (props) => {

    const { inputStyle } = props;
    const { inputFrameStyle, 
            inputBoxStyle,
            inputButtonStyle }=inputStyle;

    return (
        <div style={inputFrameStyle}>
            <input style={inputBoxStyle} ></input>
            <button style={inputButtonStyle}>Add</button>
        </div>
    )
}

export default Input