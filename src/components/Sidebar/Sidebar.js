import React, { useState } from "react";
import Compose from "./Compose/Compose";
import SidebarOption from "./Sidebar Options/SidebarOption";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LabelImportantRoundedIcon from "@mui/icons-material/LabelImportantRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./Sidebar.css";
import {useNavigate} from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState("inbox"); // Initialize with 'inbox' as the selected option

    const toggleMoreOptions = () => {
        setShowMoreOptions(!showMoreOptions);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        navigate(option);
    };
    return (
        <div className={`sidebar`}>
            <Compose />
            <SidebarOption
                Icon={InboxRoundedIcon}
                title="Inbox"
                number={0}
                selected={selectedOption === "inbox"}
                onClick={() => handleOptionClick("inbox")}

            />
            <SidebarOption
                Icon={StarBorderRoundedIcon}
                title="Starred"
                number={0}
                selected={selectedOption === "starred"}
                onClick={() => handleOptionClick("starred")}
            />
            <SidebarOption
                Icon={AccessTimeRoundedIcon}
                title="Snoozed"
                number={0}
                selected={selectedOption === "snoozed"}
                onClick={() => handleOptionClick("snoozed")}
            />
            <SidebarOption
                Icon={SendRoundedIcon}
                title="Sent"
                number={0}
                selected={selectedOption === "sent"}
                onClick={() => handleOptionClick("sent")}
            />
            <SidebarOption
                Icon={showMoreOptions ? ExpandLessIcon : ExpandMoreIcon} // Toggle the icon based on showMoreOptions
                title={showMoreOptions ? "Less" : "More"} // Toggle the title based on showMoreOptions
                onClick={toggleMoreOptions}
            />
            {showMoreOptions && (
                <>
                    <SidebarOption
                        Icon={LabelImportantRoundedIcon}
                        title="Important"
                        number={0}
                        selected={selectedOption === "important"}
                        onClick={() => handleOptionClick("important")}
                    />
                    <SidebarOption
                        Icon={ChatRoundedIcon}
                        title="Chats"
                        number={0}
                        selected={selectedOption === "chats"}
                        onClick={() => handleOptionClick("chats")}
                    />
                    <SidebarOption
                        Icon={ErrorOutlineRoundedIcon}
                        title="Spam"
                        number={0}
                        selected={selectedOption === "spam"}
                        onClick={() => handleOptionClick("spam")}
                    />
                    <SidebarOption
                        Icon={DeleteOutlineRoundedIcon}
                        title="Bin"
                        number={0}
                        selected={selectedOption === "bin"}
                        onClick={() => handleOptionClick("bin")}
                    />
                </>
            )}
        </div>
    );
}

export default Sidebar;
