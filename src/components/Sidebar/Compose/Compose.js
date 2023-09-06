import React from 'react'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { Button } from '@mui/material';
import './Compose.css'

function Compose() {
  return (
    <div className='compose'>
        <Button startIcon={<CreateRoundedIcon fontSize='large'/>} className='compose_button'>Compose</Button>
    </div>
  )
}

export default Compose