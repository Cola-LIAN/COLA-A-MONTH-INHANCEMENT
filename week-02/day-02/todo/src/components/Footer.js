//External Dependencies
import React from 'react';

//Internal Dependencies
import ThemeButton from './ThemeButton'

const Footer = (props) => {
  const { footerStyle,
          themeButtonStyle } = props;

  const { footerFrameStyle,
          footerTextStyle,
          footerThemeStyle } = footerStyle;

  return (
      <div style={footerFrameStyle}>
          <div style={footerTextStyle}>
            THEME SWITCHER
          </div>
        <div style={footerThemeStyle}>
            <ThemeButton themeButtonStyle={themeButtonStyle}/>
        </div>
      </div>
  );
}

export default Footer;