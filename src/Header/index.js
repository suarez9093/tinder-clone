import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';
import './Header.css';
function Header() {
  return (
    <header className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>

      <img
        src='https://www.shareicon.net/data/2016/07/10/119951_tinder_512x512.png'
        alt='tinder icon'
        className='header__logo'
      />
      <IconButton>
        <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
    </header>
  );
}

export default Header;
