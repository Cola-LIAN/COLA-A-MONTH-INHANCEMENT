//External Dependencies
import React from 'react';
import './App.css';


//Internal Dependencies
import defaultStyle from './style.js';
import Screen from './components/Screen.js';



const App = () => {
  return (
    <div>
      <Screen theme={defaultStyle}/>
    </div>
  );
}

export default App;
