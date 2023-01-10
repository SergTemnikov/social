import React, { useEffect } from 'react'
import { List } from '@mui/material'
import FriendItem from '../UI/FriendItem/FriendItem'
import { useSelector } from 'react-redux'
import MockAvatar from './../../img/MockAvatar.jpg'


const Friends = () => {
  let users = useSelector(state => state.allUsers.allUsers)
  let friends = users.filter(u => u.followed === true)

  useEffect(() => {}, [friends])

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {friends.map(friend => {
        return <FriendItem
          key={friend.id}
          avatar={friend.photos.small ? friend.photos.small : MockAvatar}
          name={friend.name}
          info={friend.status ? friend.status : 'Online'}
        />
      })}
    </List>
  )
}

export default Friends