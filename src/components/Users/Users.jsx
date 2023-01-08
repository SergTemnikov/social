import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { List } from '@mui/material'
import { follow, unfollow, setAllUsers } from '../../redux/allUsersSlice'
import UserItem from '../UI/UserItem/UserItem'

const Users = () => {

  const users = useSelector(state => state.allUsers.allUsers)
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
  //   axios.get('https://social-network.samuraijs.com/api/1.0/users')
  //  .then(res => {
  //     // console.log(users)
  //   })

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <UserItem
        users={users}
        followUser={followUser}
        unfollowUser={unfollowUser} />
    </List>
  )
}

export default Users