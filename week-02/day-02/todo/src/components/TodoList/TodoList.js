//External Dependencies
import React from 'react';
import Button from '@material-ui/core/Button';

//Internal Dependencies
import './TodoList.css';

const itemList = [
    'wake up',
    'do some work',
    'prepare for demo'
]

const TodoList = (props) => {
    const { todoListStyle } = props;
    const { todoListFrameStyle, itemStyle } = todoListStyle;

    
    return (
        <div style={todoListFrameStyle} class='todoListFrame'>
            {itemList.map(item => {
                return (
                    <div style={itemStyle} class='item'>
                        {item}
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList