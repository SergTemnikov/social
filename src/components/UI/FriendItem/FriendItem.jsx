import React from 'react'
import { ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material'

const FriendItem = ({ avatar, name, info }) => {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={info}
          secondaryTypographyProps={{ color: info === 'online' ? 'green' : 'inherit' }} />
      </ListItem>
      <Divider />
    </>
  )
}

export default FriendItem