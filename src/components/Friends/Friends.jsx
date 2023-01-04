import React from 'react'
import { List } from '@mui/material'
import FriendItem from '../UI/FriendItem/FriendItem'

const Friends = ({friends}) => {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {friends.map(friend => {
        return <FriendItem name={friend.name} avatar={friend.avatar} info={friend.info}/>
      })}
    </List>
  )
}

export default Friends