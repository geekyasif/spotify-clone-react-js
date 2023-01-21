import { Icon } from '@mui/material'
import React from 'react'
import "./SidebarOption.css"

function SidebarOption({title, Icon}) {
  return (
    <div className='sidebarOptionContainer'>
        {Icon && <Icon className='sidebarOptionIcon'/>}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}

    </div>
  )
}

export default SidebarOption