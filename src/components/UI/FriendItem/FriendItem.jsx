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
          secondaryTypographyProps={{ color: 'green' }} />
      </ListItem>
      <Divider />
    </>
  )
}

export default FriendItem