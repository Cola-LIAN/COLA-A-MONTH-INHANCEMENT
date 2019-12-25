//External Dependencies
import React from 'react';


const ThemeButton = (props) => {
    const { footerButtonStyle,
            theme } = props;

    const handleClick =() => {
        console.log('footerButtonStyle');
    }

    return (
        <div>
            <button onClick={handleClick} style={footerButtonStyle}><strong>{theme}</strong></button>
        </div>
    );
}

export default ThemeButton;