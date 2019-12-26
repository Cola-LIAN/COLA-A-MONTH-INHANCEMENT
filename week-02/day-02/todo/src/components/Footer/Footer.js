//External Dependencies
import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Internal Dependencies
import ThemeButton from '../ThemeButton/ThemeButton.js';
import './Footer.css';


const Footer = (props) => {
    const [themeSwitcherValue, setThemeSwitcherValue] = useState(0);

    const { footerStyle } = props;

    const { 
            footerTextStyle,
            footerButtonStyle } = footerStyle;


    return (
        <div class='footerFrame'>
            <div style={footerTextStyle} class='footerText' onClick={() => setThemeSwitcherValue(!themeSwitcherValue)}>
                THEME SWITCHER
            </div> 
            { themeSwitcherValue? 
                <div class='footerTheme'>
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