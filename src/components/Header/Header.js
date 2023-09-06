import React from 'react';
import "./Header.css";
import { IconButton } from '@mui/material';
import logo from "../../assets/logo.png";
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountMenu from './Account Menu/AccountMenu';
import Menu from './Menu/Menu';
import Search from './Search/Search';

function Header() {
  return (
    <div className='header'>
        <div className="header_left">
            <Menu/>            
            <a href='/'>
                <img src={logo} alt='Nmail Logo'/>
            </a>
        </div>
        <div className="header_center">
            <Search/>
        </div>
        <div className="header_right">
            <IconButton>
                <AppsRoundedIcon className='right_icon' id='apps_button'/>
            </IconButton>
            <IconButton>
                <NotificationsRoundedIcon className='right_icon' id='notification_button'/>
            </IconButton>

            <AccountMenu/>
            

        </div>
    </div>
  )
}

export default Header