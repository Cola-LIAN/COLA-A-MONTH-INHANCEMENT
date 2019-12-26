//External Dependencies
import React from 'react';

//Internal Dependencies
import './ThemeButton.css';
import { supermanTheme, batmanTheme, defaultTheme } from '../../style';

//Local Variables
const themes = {
    Default : defaultTheme,
    Superman: supermanTheme,
    Batman: batmanTheme
}
const ThemeButton = (props) => {
    const { footerButtonStyle,
            themeName,
            setTheme } = props;

    const handleChangeTheme = () => {
        setTheme(themes[themeName]);
    }

    return (
        <div>
            <button 
                style={footerButtonStyle} 
                class='themeButton' 
                onClick={handleChangeTheme}>
                <strong>{themeName}</strong>
            </button>
        </div>
    );
}

export default ThemeButton;