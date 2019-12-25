//External Dependencies
import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Internal Dependencies
import ThemeButton from './ThemeButton'

const Footer = (props) => {
    const [themeSwitcherValue, setThemeSwitcherValue] = useState(0);

    const { footerStyle } = props;

    const { footerFrameStyle,
            footerTextStyle,
            footerThemeStyle,
            footerButtonStyle } = footerStyle;


    return (
        <div style={footerFrameStyle}>
            <div style={footerTextStyle} onClick={() => setThemeSwitcherValue(!themeSwitcherValue)}>
                THEME SWITCHER
            </div> 
            { themeSwitcherValue? 
                <div style={footerThemeStyle}>
                    <ThemeButton theme='Default' footerButtonStyle={footerButtonStyle}/>
                    <ThemeButton theme='Superman' footerButtonStyle={footerButtonStyle}/>
                    <ThemeButton theme='Batman' footerButtonStyle={footerButtonStyle}/>     
                </div> 
                :null 
            }  
        </div>
    );
}

export default Footer;