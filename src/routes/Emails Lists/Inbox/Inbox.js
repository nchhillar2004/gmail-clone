import React from 'react'
import Section from '../../../components/Mail Row/Section'
import EmailRow from '../../../components/Mail Row/Inbox/InboxRow'
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded'; 
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import '../EmailList.css'
function Inbox() {
  return (
    <div className='inbox'>
        <div className="emailList_sections">
                <Section Icon={InboxRoundedIcon} title="Primary" color="#0b57d0" selected/>
                <Section Icon={PeopleOutlineOutlinedIcon} title="Social" color="#0b57d0"/>
                <Section Icon={LocalOfferRoundedIcon} title="Promotions" color="#0b57d0"/>
            </div>

            <div className="emailList_list">
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <EmailRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
            </div>
    </div>
  )
}

export default Inbox