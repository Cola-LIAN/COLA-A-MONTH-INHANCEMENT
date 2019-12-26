//External Dependencies
import React from 'react';
import './Screen.css';

//Internal Dependencies
import Header from '../Header/Header.js';
import Input from '../Input/Input.js';
import TodoList from '../TodoList/TodoList.js';
import Footer from '../Footer/Footer.js'

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
    <div style={background} class='background'>
      <div style={framework} class='framework'>
          <Header headerStyle={headerStyle}/>
          <Input inputStyle={inputStyle}/>
          <TodoList todoListStyle={todoListStyle}/>
          <Footer footerStyle={footerStyle} />
      </div>
    </div>
  );
}

export default Screen;