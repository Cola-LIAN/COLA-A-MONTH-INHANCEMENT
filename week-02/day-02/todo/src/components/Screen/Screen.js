//External Dependencies
import React, { useState } from 'react';
import './Screen.css';

//Internal Dependencies
import Header from '../Header/Header.js';
import Input from '../Input/Input.js';
import TodoList from '../TodoList/TodoList.js';
import Footer from '../Footer/Footer.js'

const initialList = ['wake up', 'do some work', 'prepare for demo','Stand-up meeting'];

const Screen = (props) => {

    const [ todoList, setTodoList ] = useState(initialList);
    
    const { theme, setTheme } = props;
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
          <Input inputStyle={inputStyle} setTodoList={setTodoList} todoList={todoList}/>
          <TodoList todoListStyle={todoListStyle} todoList={todoList} setTodoList={setTodoList} />
          <Footer footerStyle={footerStyle} theme={theme} setTheme={setTheme}/>
      </div>
    </div>
  );
}

export default Screen;