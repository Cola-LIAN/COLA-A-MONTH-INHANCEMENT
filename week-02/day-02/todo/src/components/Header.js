//External Dependencies
import React from 'react';

const Header = (props) => {
  const { headerStyle } = props;

  return (
      <div style={headerStyle}>
        TODOS
      </div>
  );
}

export default Header;