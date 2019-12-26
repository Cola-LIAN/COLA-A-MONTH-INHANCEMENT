//External Dependencies
import React from 'react';
import './Header.css';

const Header = (props) => {
  const { headerStyle } = props;

  return (
      <div style={headerStyle} class='header'>
        TODOS
      </div>
  );
}

export default Header;