import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import './StarredRow.css';
import {useNavigate} from 'react-router-dom';

function StarredRow({Sender, Subject, Content, Time}) {
    const navigate = useNavigate();
  return (
    <div className='StarredRow'>
        <div className="StarredRow_options">
            <Tooltip title="Select">
                <Checkbox size="small" />
            </Tooltip>
            <Tooltip title="Starred">
            <IconButton>
                <StarRoundedIcon fontSize="small" />
            </IconButton></Tooltip>
        </div>
        <div onClick={() => navigate("/mail/st")} className="StarredRow_sender">
            <h3>{Sender}</h3>
        </div>
        <div onClick={() => navigate("/mail/st")} className="StarredRow_subject">
            <h4>{'"'}{Subject}{'"'}</h4>
        </div>
        <div onClick={() => navigate("/mail/st")} className="StarredRow_content">
            <p>{Content}</p>
        </div>
        <div onClick={() => navigate("/mail/st")} className="StarredRow_time">
            <h4>{Time}</h4>
        </div>
        <div className="StarredRow_hover_options">
          <Tooltip title="Delete">
            <IconButton>
                <DeleteOutlineRoundedIcon fontSize="small" />
            </IconButton></Tooltip>
          <Tooltip title="Snooze">
            <IconButton>
                <AccessTimeRoundedIcon fontSize="small" />
            </IconButton></Tooltip>
        </div>
        
    </div>
  )
}

export default StarredRow;