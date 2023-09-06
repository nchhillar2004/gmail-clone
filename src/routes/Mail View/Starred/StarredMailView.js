import React from 'react';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import LabelImportantRoundedIcon from '@mui/icons-material/LabelImportantRounded';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import './StarredMailView.css';

function StarredMailView() {
  const navigate = useNavigate();
  return (
    <div className='mail'>
      <div className="mail_tools">
        <div className="mail_toolsLeft">
            <Tooltip title="Go Back">
              <IconButton onClick={() => navigate('/starred')}>
                <ArrowBackIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Archieve">
            <IconButton>
              <InboxRoundedIcon fontSize="small" />
            </IconButton></Tooltip>
            <Tooltip title="Mark as spam">
            <IconButton>
              <ErrorOutlineRoundedIcon fontSize="small" />
            </IconButton></Tooltip>
            <Tooltip title="Delete">
            <IconButton>
              <DeleteOutlineRoundedIcon fontSize="small" />
            </IconButton></Tooltip>
            <Tooltip title="Remove Star">
            <IconButton>
              <StarRoundedIcon fontSize="small" />
            </IconButton></Tooltip>
            <Tooltip title="Snooze">
            <IconButton>
              <AccessTimeRoundedIcon fontSize="small" />
            </IconButton></Tooltip>
            <Tooltip title="Mark as Important">
            <IconButton>
              <LabelImportantRoundedIcon fontSize="small" />
            </IconButton></Tooltip>
        </div>
        <div className="mail_toolsRight">

        </div>
      </div>

        <div className="mailContent_tools">
          <div className="mailContent_toolsLeft"></div>
          <div className="mailContent_toolsRight">
          <Tooltip title="Print">
              <IconButton>
                <LocalPrintshopRoundedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="More Options">
            <IconButton>
              <MoreVertIcon fontSize="small" />
            </IconButton></Tooltip>
          </div>
        </div>
    </div>
  )
}

export default StarredMailView;