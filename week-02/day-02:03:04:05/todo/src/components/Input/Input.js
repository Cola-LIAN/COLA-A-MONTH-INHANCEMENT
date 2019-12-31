//External Dependencies
import React,{ useState } from 'react';

//Internal Dependencies
import './Input.css'
import SelectInput from '@material-ui/core/Select/SelectInput';
import TodoList from '../TodoList/TodoList';

const Input = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [inputPlaceholder, setInputPlaceholder] = useState('');

    const { inputStyle, setTodoList, todoList } = props;
    const { inputFrameStyle, 
            inputButtonStyle }=inputStyle;

    const isTodoExist = (inputValue) => {
        let exist = false;
        todoList.forEach(todo => {
            if(todo.todoText === inputValue){
                exist = true
            }
        })
        return exist
    }


    const handleAdd = () => {
        if((inputValue.length > 0) && (!isTodoExist(inputValue))){
            setTodoList([...todoList, {todoText:inputValue, done: false}]);
            setInputValue('');
            setInputPlaceholder('');
        }else if(inputValue.length <= 0){
            setInputPlaceholder('Please input your todo item.');
        }else if(isTodoExist(inputValue)){
            setInputValue('');
            setInputPlaceholder('Todo item has existed.');
        }
    }   

    return (
        <div style={inputFrameStyle} className='inputFrame'>
            <input className='inputBox' value={inputValue} placeholder={inputPlaceholder} onChange={(e) => {setInputValue(e.target.value)}}></input>
            <button style={inputButtonStyle} className='inputButton' onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Input