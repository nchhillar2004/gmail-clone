import React from 'react'
import { IconButton } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import Tooltip from '@mui/material/Tooltip';
import './Search.css';

function Search() {
  return (
    <div className='search'>
        <IconButton>
                <SearchRoundedIcon/>
            </IconButton>
            <input placeholder='Search Mail' type='text' className='search_input' id='search_input'/>
            <Tooltip title="Show Results">
            <IconButton>
                <ArrowDropDownRoundedIcon className='header__inputCaret'/>
            </IconButton></Tooltip>
    </div>
  )
}

export default Search;