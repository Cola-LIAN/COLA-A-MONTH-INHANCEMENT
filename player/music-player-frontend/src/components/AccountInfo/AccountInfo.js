//External Dependencies
import React from 'react';
import Avatar from '@material-ui/core/Avatar';

//Internal Dependencies
import './AccountInfo.css';

//Component Definition
const AccountInfo = () => {
  return(
    <div className='userInfo'>
      <Avatar id='avatar' alt="C Sharp" src="avatar1.jpg"/>
      <label className='userName'>Cola LIAN</label>
    </div>
  )
}

export default AccountInfo