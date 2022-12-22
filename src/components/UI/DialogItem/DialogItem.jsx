import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import { NavLink } from 'react-router-dom'

const DialogItem = ({ icon, name, path }) => {
  return (
    <NavLink to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
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
    </NavLink>
  )
}

export default DialogItem