import React from 'react'
import { List } from '@mui/material'
import FriendItem from '../UI/FriendItem/FriendItem'
import { useSelector } from 'react-redux'


const Friends = () => {
  let friends = useSelector(state => state.friends.friendsPage.friends)

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {friends.map(friend => {
        return <FriendItem key={friend.id} name={friend.name} avatar={friend.avatar} info={friend.info}/>
      })}
    </List>
  )
}

export default Friends