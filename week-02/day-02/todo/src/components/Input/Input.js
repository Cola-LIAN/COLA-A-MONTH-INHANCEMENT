//External Dependencies
import React,{ useState } from 'react';

//Internal Dependencies
import './Input.css'
import SelectInput from '@material-ui/core/Select/SelectInput';

const Input = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [inputPlaceholder, setInputPlaceholder] = useState('');

    const { inputStyle, setTodoList, todoList } = props;
    const { inputFrameStyle, 
            inputButtonStyle }=inputStyle;

    const handleAdd = () => {
        if(inputValue.length > 0){
            setTodoList([...todoList, inputValue]);
            setInputValue('');
            setInputPlaceholder('');
        }else{
            setInputPlaceholder('Please input your todo item.')
        }
    }   

    return (
        <div style={inputFrameStyle} class='inputFrame'>
            <input class='inputBox' value={inputValue} placeholder={inputPlaceholder} onChange={(e) => setInputValue(e.target.value)}></input>
            <button style={inputButtonStyle} class='inputButton' onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Input