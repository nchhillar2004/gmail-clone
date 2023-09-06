import React from 'react'
import './Section.css'

function Section({Icon, title, color, selected}) {
  return (
    <div className={`section ${selected && 'section--selected'}`} style={{borderBottom: `2px solid ${selected && color}`,
    color: `${selected && color}`,}} onClick={Section.selected} >
        <Icon className='logo' fontSize="small" />
        <h4>{title}</h4>
    </div>
  )
}

export default Section