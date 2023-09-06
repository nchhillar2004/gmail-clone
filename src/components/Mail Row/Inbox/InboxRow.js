import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import './InboxRow.css';
import {useNavigate} from 'react-router-dom';

function EmailRow({Sender, Subject, Content, Time}) {
    const navigate = useNavigate();
  return (
    <div className='emailRow'>
        <div className="emailRow_options">
            <Tooltip title="Select">
                <Checkbox size="small" />
            </Tooltip>
            <Tooltip title="Not Starred">
            <IconButton>
                <StarBorderRoundedIcon fontSize="small" />
            </IconButton></Tooltip>
        </div>
        <div onClick={() => navigate("/mail/in")} className="emailRow_sender">
            <h3>{Sender}</h3>
        </div>
        <div onClick={() => navigate("/mail/in")} className="emailRow_subject">
            <h4>{'"'}{Subject}{'"'}</h4>
        </div>
        <div onClick={() => navigate("/mail/in")} className="emailRow_content">
            <p>{Content}</p>
        </div>
        <div onClick={() => navigate("/mail/in")} className="emailRow_time">
            <h4>{Time}</h4>
        </div>
        <div className="emailRow_hover_options">
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

export default EmailRow;