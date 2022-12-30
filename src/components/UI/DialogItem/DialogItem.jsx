import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'

const DialogItem = ({ icon, name }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          {icon}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
      />
    </ListItem>
  )
}

export default DialogItem