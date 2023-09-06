import React from 'react'
import StarredRow from '../../../components/Mail Row/Starred/StarredRow'

function Starred() {
  return (
    <div className='starred'>
        <div className="emailList_list">
                <StarredRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <StarredRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <StarredRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
                <StarredRow Sender='Google' Subject='Verification Pending' Content='Dear user your google acoount verification is pending to complete it please follow th elink provided below.' Time='17:09'/>
            </div>
    </div>
  )
}

export default Starred