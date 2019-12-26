//External Dependencies
import React from 'react';
import './App.css';


//Internal Dependencies
import { defaultStyle, supermanStyle} from './style.js';
import Screen from './components/Screen/Screen.js';

const App = () => {
  return (
    <div>
      <Screen theme={ supermanStyle }/>
    </div>
  );
}

export default App;
