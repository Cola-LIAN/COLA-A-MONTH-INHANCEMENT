//External Dependencies
import React from 'react';

//Internal Dependencies
import Header from './Header.js';
import Input from './Input.js';
import TodoList from './TodoList.js';
import Footer from './Footer.js'

const Screen = (props) => {
    const { theme } = props;
    const { background,
            framework,
            headerStyle,
            inputStyle,
            todoListStyle,
            footerStyle,
    } = theme;

  return (
    <div style={background}>
      <div style={framework}>
          <Header headerStyle={headerStyle}/>
          <Input inputStyle={inputStyle}/>
          <TodoList todoListStyle={todoListStyle}/>
          <Footer footerStyle={footerStyle} />
      </div>
    </div>
  );
}

export default Screen;