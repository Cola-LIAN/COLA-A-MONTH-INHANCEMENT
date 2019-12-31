//External Dependencies
import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Internal Dependencies
import './App.css';
import { defaultTheme, supermanTheme, batmanTheme} from './style.js';
import Screen from './components/Screen/Screen.js';

const App = () => {

  const[ theme, setTheme ] = useState(defaultTheme)

  return (
      <Screen theme={theme} setTheme={setTheme} todo/>
  );
}

export default App;
