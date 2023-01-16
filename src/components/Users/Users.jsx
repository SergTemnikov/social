import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage, setTotalUsersCount } from '../../redux/allUsersSlice'
import axios from 'axios'
import { List, Pagination, Stack } from '@mui/material'
import { follow, unfollow, setAllUsers } from '../../redux/allUsersSlice'
import UserItem from '../UI/UserItem/UserItem'

const Users = () => {
  let pageSize = useSelector(state => state.allUsers.pageSize)
  let totalUsersCount = useSelector(state => state.allUsers.totalUsersCount)
  let currentPage = useSelector(state => state.allUsers.currentPage)
  let users = useSelector(state => state.allUsers.allUsers)
  const dispatch = useDispatch()

  const followUser = (userId) => {
    dispatch(follow(userId))
  }

  const unfollowUser = (userId) => {
    dispatch(unfollow(userId))
  }

  const onPageChanged = (e, value) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${value}&count=${pageSize}`)
      .then(res => {
        dispatch(setAllUsers(res.data.items))
      })
    dispatch(setCurrentPage(value))
  }

  useEffect(
    () => {
      if (users.length === 0) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
          .then(res => {
            dispatch(setAllUsers(res.data.items))
            dispatch(setTotalUsersCount(res.data.totalCount))
          })
      }
    }, [currentPage])

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {users.map(user => {
          return <UserItem
            key={user.id}
            user={user}
            followUser={followUser}
            unfollowUser={unfollowUser} />
        })}
      </List>
      <Stack>
        <Pagination
          count={totalUsersCount}
          variant="outlined"
          shape="rounded"
          defaultPage={1}
          page={currentPage}
          onChange={onPageChanged}
          sx={{ marginY: 2, marginX: 'auto' }} />
      </Stack>
    </>
  )
}

export default Users