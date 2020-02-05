//External Dependencies
import React from 'react';

//Internal Dependencies
import './Hamburger.css';

//Component Definition
const Hamburger = (props) => {

  const { cid, style } = props;

  return(
    <div className='hamburgerBottom'>
      {props.children}
      <div className='hamburgerTop' id={cid} style={style}></div>
    </div>
  )
}

export default Hamburger