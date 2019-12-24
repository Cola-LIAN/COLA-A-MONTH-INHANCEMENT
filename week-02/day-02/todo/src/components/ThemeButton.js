//External Dependencies
import React from 'react';


const ThemeButton = (props) => {
  const { themeButtonStyle } = props;

  return (
      <div>
            <button style={themeButtonStyle}>Default</button>
      </div>
  );
}

export default ThemeButton;