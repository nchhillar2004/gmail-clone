import React from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

function Menu() {
  return (
    <div className='menu'>
        <Tooltip title="Menu Options">
            <IconButton>
                <MenuRoundedIcon />
            </IconButton>
        </Tooltip>
    </div>
  )
}

export default Menu