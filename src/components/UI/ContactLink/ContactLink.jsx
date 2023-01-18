import { ListItem, ListItemIcon, Typography } from '@mui/material'
import React from 'react'

const ContactLink = ({ title, icon }) => {
  return (
    <ListItem sx={{ paddingLeft: '0px' }}>
      <ListItemIcon sx={{ minWidth: '30px', paddingLeft: '0px' }}>
        {icon}
      </ListItemIcon>
      <Typography>{title}</Typography>
    </ListItem>
  )
}

export default ContactLink