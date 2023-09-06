import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import './EmailList.css';
import Inbox from './Inbox/Inbox';
import Starred from './Starred/Starred';
import Snoozed from './Snoozed/Snoozed';

function EmailList({filter}) {
  return (
    <div className='emailList'>
        <div className="emailList_settings">
            <div className="emailList_settingLeft">
              <Tooltip title="Select All">
                <Checkbox size="small" /></Tooltip>
              <Tooltip title="Refresh">
                <IconButton>
                    <ReplayRoundedIcon fontSize="small" />
                </IconButton></Tooltip>
                <Tooltip title="More Options">
                <IconButton>
                    <MoreVertIcon fontSize="small" />
                </IconButton></Tooltip>
            </div>

            <div className="emailList_settingRight">
                <IconButton>
                    <KeyboardArrowLeftRoundedIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardArrowRightRoundedIcon/>
                </IconButton>
            </div>
        </div>
        <div className="emailList_mails">
            {filter === "inbox" && <Inbox />}
            {filter === "starred" && <Starred />}
            {filter === "snoozed" && (<Snoozed/>)}
        </div>
    </div>
  )
}

export default EmailList