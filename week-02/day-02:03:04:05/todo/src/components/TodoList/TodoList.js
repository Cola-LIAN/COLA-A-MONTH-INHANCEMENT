//External Dependencies
import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

//Internal Dependencies
import './TodoList.css';

const TodoList = (props) => {
    const { todoListStyle, todoList, setTodoList } = props;
    const { todoListFrameStyle, itemStyle, iconStyle } = todoListStyle;
    // const [iconColor, setIconColor] = useState('#B8B8B8');

    const handleDelete = (item) => {
        // setIconColor('#DF69E8');
        // console.log(iconStyle);
        setTodoList(todoList.filter(element => element !== item))
    }

    return (
        <div style={todoListFrameStyle} className='todoListFrame'>
            {todoList.map(item => {
                return (
                    <div style={itemStyle} className='item'>
                        <label className='itemlabel'>{item}</label>
                        <div className='icon'>
                            <DeleteIcon id='deleteIcon' 
                                // onFocus={() => setIconColor('#DF69E8')}
                                onClick={() => handleDelete(item)} 
                                style={iconStyle}
                            />
                            <CheckCircleOutlineIcon id='checkIcon'/>
                        </div>
                    </div>          
                )
            })}
        </div>
    )
}

export default TodoList