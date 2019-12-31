//External Dependencies
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

//Internal Dependencies
import './TodoList.css';

const TodoList = (props) => {
    const { todoListStyle, todoList, setTodoList } = props;
    const { todoListFrameStyle, itemStyle, iconStyle } = todoListStyle;

    const [iconColor, setIconColor] = useState('#B8B8B8');

    const handleDelete = (item) => {
        setTodoList(todoList.filter(element => element.todoText !== item.todoText))
    }

    const handleCheck = (item) => {
        let tempTodoList = [...todoList];
        tempTodoList.forEach(todo => {
            if(todo.todoText === item.todoText){
                todo.done = !todo.done
            }
        });
        setTodoList(tempTodoList);
        console.log(itemStyle)
    }

    return (
        <div style={todoListFrameStyle} className='todoListFrame'>
            {todoList.map(todo => {
                return (
                    <div style={itemStyle} className='item'>
                        <label className='itemlabel' 
                                style={{color: todo.done? itemStyle.textCheckedColor:itemStyle.color}}
                        >
                            {todo.todoText}
                        </label>
                        <div className='icon'>
                            <DeleteIcon 
                                id='deleteIcon' 
                                // onFocus={() => setIconColor('#DF69E8')}
                                onClick={() => handleDelete(todo)} 
                                style={iconStyle}
                            />
                            <CheckCircleOutlineIcon 
                                id='checkIcon'
                                style={{color: todo.done? itemStyle.iconCheckedColor:itemStyle.color}}
                                onClick={() => handleCheck(todo)} 
                            />
                        </div>
                    </div>          
                )
            })}
        </div>
    )
}

export default TodoList