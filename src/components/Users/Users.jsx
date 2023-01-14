import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { List } from '@mui/material'
import { follow, unfollow, setAllUsers } from '../../redux/allUsersSlice'
import UserItem from '../UI/UserItem/UserItem'

const Users = () => {
  let pageSize = useSelector(state => state.allUsers.pageSize)
  let totalUsersCount = useSelector(state => state.allUsers.totalUsersCount)
  let users = useSelector(state => state.allUsers.allUsers)
  const dispatch = useDispatch()

  let pagesCount = totalUsersCount / pageSize

  const followUser = (userId) => {
    dispatch(follow(userId))
  }

  const unfollowUser = (userId) => {
    dispatch(unfollow(userId))
  }

  const setUsers = (allUsers) => {
    dispatch(setAllUsers(allUsers))
  }

  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  useEffect(
    () => {
      if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
          .then(res => {
            setUsers(res.data.items)
          })
      }
    }
  )

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      PAGES: {pagesCount}
      {pages.map(i => <span>{i}</span>)}
      {users.map(user => {
        return <UserItem
          key={user.id}
          user={user}
          followUser={followUser}
          unfollowUser={unfollowUser} />
      })}
    </List>
  )
}

export default Users