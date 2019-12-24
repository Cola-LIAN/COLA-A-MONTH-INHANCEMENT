//External Dependencies
import React from 'react';
import Button from '@material-ui/core/Button';

const itemList = [
    'wake up',
    'do some work',
    'prepare for demo'
]

const TodoList = (props) => {
    const { todoListStyle } = props;
    const { todoListFrameStyle, itemStyle } = todoListStyle;

    
    return (
        <div style={todoListFrameStyle}>
            {itemList.map(item => {
                return (
                    <div style={itemStyle}>
                        {item}
                        
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList