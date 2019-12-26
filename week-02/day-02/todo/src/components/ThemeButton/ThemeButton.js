//External Dependencies
import React from 'react';
import './ThemeButton.css';

const ThemeButton = (props) => {
    const { footerButtonStyle,
            theme } = props;

    return (
        <div>
            <button style={footerButtonStyle} class='themeButton'><strong>{theme}</strong></button>
        </div>
    );
}

export default ThemeButton;