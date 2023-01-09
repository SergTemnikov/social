import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { List } from '@mui/material'
import { follow, unfollow, setAllUsers } from '../../redux/allUsersSlice'
import UserItem from '../UI/UserItem/UserItem'

const Users = () => {

  let users = useSelector(state => state.allUsers.allUsers)
  const dispatch = useDispatch()

  const followUser = (userId) => {
    dispatch(follow(userId))
  }

  const unfollowUser = (userId) => {
    dispatch(unfollow(userId))
  }

  const setUsers = (allUsers) => {
    dispatch(setAllUsers(allUsers))
  }

  if (users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => {
        setUsers(res.data.items)
      })
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {users.map(user => {
        return <UserItem
          keyId={user.id}
          user={user}
          followUser={followUser}
          unfollowUser={unfollowUser} />
      })}
    </List>

    // <>
    // {users.map(u => {
    //   return <div key={u.id}>
    //     <img src={u.photos.small} alt="" />
    //     <p>{u.name}</p>
    //     <p>u.name</p>
    //     <p>u.name</p>
    //   </div>
    // })}
    // </>
  )
}

export default Users