//External Dependencies
import React, { useState }  from 'react';

//Internal Dependencies
import ThemeButton from '../ThemeButton/ThemeButton.js';
import './Footer.css';


const Footer = (props) => {
    const [themeSwitcherValue, setThemeSwitcherValue] = useState(0);

    const { footerStyle, 
            setTheme } = props;

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
                    <ThemeButton themeName='Default' setTheme={setTheme} footerButtonStyle={footerButtonStyle}/>
                    {/* <ThemeButton themeName='Epam' setTheme={setTheme} footerButtonStyle={footerButtonStyle}/> */}
                    <ThemeButton themeName='Superman' setTheme={setTheme}  footerButtonStyle={footerButtonStyle}/>
                    <ThemeButton themeName='Batman' setTheme={setTheme} footerButtonStyle={footerButtonStyle}/>     
                </div> 
                :null 
            }  
        </div>
    );
}

export default Footer;