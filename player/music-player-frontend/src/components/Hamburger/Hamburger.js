//External Dependencies
import React from 'react';

//Internal Dependencies
import './Hamburger.css';

//Component Definition
const Hamburger = (props) => {

  const { cid } = props;
  
  return(
    <div className='hamburgerBottom'>
      {props.children}
      <div className='hamburgerTop' id={cid}></div>
    </div>
  )
}

export default Hamburger